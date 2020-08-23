import { Component, OnInit, Input } from '@angular/core';
import {NavbarService} from './navbar.service';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private navbarService: NavbarService,
              private translate: TranslateService) {}

  public socialList;
  public navigationElements;
  public languages = [
    {name:"hebrew", flag: "./assets/images/flags/israel.jpg", value:"he"},
    {name:"english", flag: "./assets/images/flags/us.png", value:"en"}
  ]
  public menuOpen:boolean = true;

  @Input()
  onScroll:Observable<boolean>;

  currentLang;
  ngOnInit(): void {
    this.socialList = this.navbarService.socialList;
    this.navigationElements = this.navbarService.navigationElements;
    this.onScroll.subscribe(value => this.menuOpen = value? false : this.menuOpen)


    this.currentLang = this.translate.currentLang;
  }


  onSelect(value:string){
    this.translate.use(value);
    localStorage.setItem('lang', value);
  }
  

  svgStyle(size:number){
    return {'width': size +'rem', 'height': size + 'rem'};
  }

  

}
