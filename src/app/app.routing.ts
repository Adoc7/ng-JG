import { Routes, RouterModule } from '@angular/router'
import { AccueilComponent } from './components/header/accueil/accueil.component'
import { TechnologiesComponent } from './components/body/technologies/technologies.component'
import { ParcoursComponent } from './components/body/parcours/parcours.component'
import { AProposComponent } from './components/body/a-propos/a-propos.component';
import { PortfoliosComponent } from './components/body/portfolios/portfolios.component';
import { ErrorComponent } from './components/error/error.component';


const APP_ROUTING: Routes =[
 
 {path: '', component: AccueilComponent},
 {path: 'apropos', component: AProposComponent},
 {path: 'portfolios', component: PortfoliosComponent},
 {path: 'technologies', component: TechnologiesComponent},
 {path: 'parcours', component: ParcoursComponent},
 {path: '**', component: ErrorComponent}
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING, { anchorScrolling: 'enabled'});