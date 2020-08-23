import { Component, HostListener } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private rtlLangs = ['he'];
  public isRtl:boolean = false;
  public onScrollSubject = new BehaviorSubject(false);
  constructor(private translate: TranslateService){
    this.loadLangFromStorage();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
        let dir = 'ltr;'
        this.isRtl = false;
        if(this.rtlLangs.includes(event.lang)){
          dir = 'rtl';
          this.isRtl = true;
        }
        const html = document.querySelector("html");
        html.lang = event.lang;
        html.dir = dir;

        
    });
  }

  private loadLangFromStorage(){
    const value = localStorage.getItem('lang');
    if(value != null){
      this.translate.use(value);
    }else{
      this.translate.setDefaultLang('en');
    }
  }

  @HostListener("window:scroll")
  onScroll(){
    this.onScrollSubject.next(true);
  }
}
