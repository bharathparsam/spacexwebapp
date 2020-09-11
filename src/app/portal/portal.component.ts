import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {
  visibleSidebar1 = true;
  query: any;
  valueEmittedFromChildComponent: string;
  // tslint:disable-next-line: jsdoc-format
  /**Get the output variable here */

  constructor() { }

  /**
   * Smart Component (stateFull component)
   * Must emit and control the data from parent to child
   * @memberof PortalComponent
   */
  ngOnInit(): void {
   // this.query = '100';
    // limitValue: any,isLaunch: any,isLand: any, year: any
    this.query = {
        "limitValue": 100,
        "isLaunch": "",
        "isLand": "",
        "year": ""
    };
  }
parentEventHandlerFunction(valueEmitted){
  this.query = {
    "limitValue": 100,
    "isLaunch": "",
    "isLand": "",
    "year": valueEmitted
    
};
this.valueEmittedFromChildComponent = valueEmitted;

}

}
