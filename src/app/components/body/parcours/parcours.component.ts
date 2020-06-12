import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
declare var $:any;

@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.css']
})
export class ParcoursComponent implements OnInit {

  constructor() { }

  ngOnInit(): any {
    // AUTRES TOGGLES
    $(".but").hover(function() {
    $("." + $(this).data('target')).slideToggle(timer);
     });
    }        

}
