import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path:'about', 
      component:AboutComponent,
      data: { routeIdx: 0} 
    },
    {
      path:'portfolio',
      component:PortfolioComponent,
      data: { routeIdx: 1} 
    },
    {
      path:'resume',
      component:ResumeComponent,
      data: { routeIdx: 2} 
    },
    {
      path:'services',
      component:ServicesComponent,
      data: { routeIdx: 3} 
    },
    {
      path:'contact',
      component:ContactComponent,
      data: { routeIdx: 4} 
    },
    {
      path:'',
      redirectTo: 'about',
      pathMatch: 'full'
    }]
  , {
    onSameUrlNavigation: 'reload',
    useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
