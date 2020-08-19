function init(){
    this.translator = new Translator();
    this.translator.setPage(document.getElementById("main"))
}

function changeTo(lang){
    this.translator.load(lang);
}