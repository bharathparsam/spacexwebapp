import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {
  visibleSidebar1: boolean = true;
  query: string;

  constructor() { }

  /**
   * Smart Component (stateFull component)
   * Must emit and control the data from parent to child
   * @memberof PortalComponent
   */
  ngOnInit(): void {
    this.query = 'limit=100';
  }

}
