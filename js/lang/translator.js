
class Translator{
    lang;
    langObject = {};
    htmlElement = null;
    rtlLaugnagesList = ['he']
    defualtLang = 'en';

    constructor(){
        this.lang = localStorage.getItem("lang");
        if(this.lang == undefined)
            this.lang = this.defualtLang;
        
        readTextFile(`./js/lang/${this.lang}.json`, (data) => {
            this.langObject = JSON.parse(data);
            this.translatePage();
        })
    }
    load = function(lang){
        if(lang !== this.lang){
            localStorage.setItem("lang", lang);
            location.reload();
        }
    }

    setPage = function(htmlElement){
        this.htmlElement = htmlElement;
        this.setPageDirection();
    }

    setPageDirection = function(){
        let direction = 'ltr';
        for(let lang of this.rtlLaugnagesList){
            if(lang === this.lang){
                direction = "rtl"
                break;
            }
        }
        this.htmlElement.dir = direction;
        this.htmlElement.lang = this.lang;
    }

    translatePage = function(){
        for(let child of this.htmlElement.children){
            this.translate(child)
        }
    }

    translate = function(element){
        if(element.children.length > 0){
            for(let child of element.children){
                this.translate(child)
            }
        }else{
            const result = this.findtranslationInString(element.innerHTML);
            if(result.success)
                element.innerHTML = element.innerHTML.replace(result.original, result.translation);
        }
    }

    findtranslationInString = function(innerHtml){
        let result = null;
        if((result = match(innerHtml, /\{-.*?\-}/g)) != null){ 
            let string = result[0].replace(/[{\-}']/g,"");
            return {
                success:true,
                translation: this.get(string), 
                original: result[0]
            };
        }else{
            return {success:false}
        }
    }
    get = function(value){
        if(value in this.langObject)
            return this.langObject[value];
        return `no-translation-${value}`;
    }
}


function match(string, search){
    return string.match(search);
}
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}