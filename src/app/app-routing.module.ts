import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:'about', 
    component:AboutComponent
  },
  {
    path:'portfolio',
    component:PortfolioComponent,
  },
  {
    path:'resume',
    component:ResumeComponent,
  },
  {
    path:'contact',
    component:ContactComponent,
  },
  { 
    path:'',
    redirectTo:'/about',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
