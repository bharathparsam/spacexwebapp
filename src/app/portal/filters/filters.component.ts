import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
// import { stat } from 'fs';

@Component({
  selector: "app-portal-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"],
})
export class FiltersComponent implements OnInit {
  years: any[];
  @Input() queryFilter: string;
  @Output()
  buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  statusForlanuch: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  statusForlanding: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.years = [
      2006,
      2007,
      2008,
      2009,
      2010,
      2011,
      2012,
      2013,
      2014,
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
    ];
  }

  /**
   *
   * @param selectedYear - Get the year and emit to parent
   */
  filterWithYear(selectedYear) {
    this.buttonClicked.emit(selectedYear);
  }

  /**
   *
   * @param status -Boolean
   * Get the status and emit to parent
   */
  filterForStatus(status) {
    this.statusForlanuch.emit(status);
  }

  /**
   *
   * @param status -Boolean
   * Get the status and emit to parent
   */
  filterLandingStatus(status) {
    this.statusForlanding.emit(status);
  }
}
