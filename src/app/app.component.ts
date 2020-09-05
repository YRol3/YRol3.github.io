import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { fader } from './animations/slide.js'
import { trigger, transition, query, style, group, animate, animateChild, stagger, state } from '@angular/animations';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader],
  encapsulation: ViewEncapsulation.None,

})
export class AppComponent {

  private rtlLangs = ['he'];
  private isMobile:boolean
  public onScrollSubject = new BehaviorSubject(false);
  constructor(private translate: TranslateService,
    private breakpointObserver: BreakpointObserver){
    this.loadLangFromStorage();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
        let dir = 'ltr;'
        if(this.rtlLangs.includes(event.lang))
          dir = 'rtl';
        const html = document.querySelector("html");
        html.lang = event.lang;
        html.dir = dir;


        this.breakpointObserver
          .observe(['(min-width: 750px)'])
          .subscribe((state: BreakpointState) => {
            if (state.matches) {
              this.isMobile = true;
            } else {
              this.isMobile = false;
            }
      });
        
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
  
  prepareRoute(outlet: RouterOutlet) {
    return this.isMobile? outlet.activatedRouteData['routeIdx'] : '';
  }
  
  @HostListener("window:scroll")
  onScroll(){
    this.onScrollSubject.next(true);
  }
}
