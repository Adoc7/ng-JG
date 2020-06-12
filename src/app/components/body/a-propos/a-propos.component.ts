import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.css']
})
export class AProposComponent implements OnInit {
  constructor(
    private route: Router,
  ) { 

  }

  ngOnInit(): any {
    AOS.init();
  }

      
      goToTechno(){
          this.route.navigate(['technologies'], { fragment: 'graph'});
        }
  }