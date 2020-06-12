import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
declare var $:any;
@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): any {
    // AUTRES TOGGLES
    $(".but").hover(function() {
    $("." + $(this).data('target')).slideToggle(timer);
     });
                   
/*      $(".butpdf").click(function() {
         $("." + $(this).data('target')).slideToggle(timer);                
     }); */


 /*     $(".suite").hover(function() {
       $("." + $(this).data('target')).show();
       $(this).hide();
     }); */
  }

       

}

