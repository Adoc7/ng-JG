import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccueilComponent } from './components/header/accueil/accueil.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { ContactsComponent } from './components/body/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { AppRootingModule } from './app-rooting.module';
import { TechnologiesComponent } from './components/body/technologies/technologies.component';
import { ParcoursComponent } from './components/body/parcours/parcours.component';
import { ROUTING } from './app.routing';
import { AProposComponent } from './components/body/a-propos/a-propos.component';
import { PortfoliosComponent } from './components/body/portfolios/portfolios.component';
import { ModalComponent } from './components/header/modal/modal.component';
import { ErrorComponent } from './components/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavbarComponent,
    ContactsComponent,
    FooterComponent,
    TechnologiesComponent,
    ParcoursComponent,
    AProposComponent,
    PortfoliosComponent,
    ModalComponent,
    ErrorComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRootingModule,
    ROUTING
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
