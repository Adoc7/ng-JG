import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

declare var $:any;
@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.css']
})
export class PortfoliosComponent implements OnInit {

  constructor() { }

  ngOnInit(): any { 
    AOS.init();
    $(".suite").hover(function() {
      $("." + $(this).data('target')).show();
      $(this).hide();
    });
  }
}
