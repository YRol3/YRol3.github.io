import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesComponent } from './services/services.component';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
    }
    }),
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
