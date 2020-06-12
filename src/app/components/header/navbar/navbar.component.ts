import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  about = false;
  portfolios = false;
  technologies = false;
  parcours = false;
  contacts = false;
  nothing = true;
  constructor(
   private route: Router
  ) { }
  
  ngOnInit(): void {   
  }

  // VOIR UNE AUTRE SOLUTION PAS DE COMPATIBILITE APPLE NI IE
    toHome(){
      this.route.navigate([''], { fragment: 'home' });
      this.about = false;
      this.portfolios = false;
      this.technologies = false;
      this.contacts = false;
      this.nothing = true;
  /*     document.getElementById("home").scrollIntoView({behavior:"smooth"});
   */  }

  toAbout(){
    this.route.navigate(['apropos'], { fragment: 'about' });
    this.about = true;
    this.portfolios = false;
    this.technologies = false;
    this.contacts = false;
    this.nothing = false;
  }
  /*  toAbout(){
    document.getElementById("about").scrollIntoView({behavior:"smooth"});
  } */
  toDev(){
    this.route.navigate(['portfolios'], { fragment: 'dev' });
    this.about = false;
    this.portfolios = true;
    this.technologies = false;
    this.parcours = false;
    this.contacts = false;
    this.nothing = false;
  }
  toInfographic(){
    this.route.navigate(['portfolios'], { fragment: 'info' });
    this.about = false;
    this.portfolios = true;
    this.technologies = false;
    this.parcours = false;
    this.contacts = false;
    this.nothing = false;
  }
  toDraw(){
    this.route.navigate(['portfolios'], { fragment: 'draw'});
    this.about = false;
    this.portfolios = true;
    this.technologies = false;
    this.parcours = false;
    this.contacts = false;
    this.nothing = false;
  }
  toGraphic(){
    this.route.navigate(['technologies'], { fragment: 'graph'});
    this.about = false;
    this.portfolios = false;
    this.technologies = true;
    this.parcours = false;
    this.contacts = false;
    this.nothing = false;
  }
  toDevF(){
    this.route.navigate(['technologies'], { fragment: 'devF'});
    this.about = false;
    this.portfolios = false;
    this.technologies = true;
    this.parcours = false;
    this.contacts = false;
    this.nothing = false;
  }
  toDevB(){
    this.route.navigate(['technologies'], { fragment: 'devB'});
    this.about = false;
    this.portfolios = false;
    this.technologies = true;
    this.parcours = false;
    this.contacts = false;
    this.nothing = false;
  }
  toCourse(){
    this.route.navigate(['parcours'], { fragment: 'course'});
    this.about = false;
    this.portfolios = false;
    this.technologies = false;
    this.parcours = true;
    this.contacts = false;
    this.nothing = false;
  }
  toContacts(){
    /* this.route.navigate(['parcours'], { fragment: 'course'}); */
    this.about = false;
    this.portfolios = false;
    this.technologies = false;
    this.parcours = false;
    this.contacts = true;
    this.nothing = false;
  }
}