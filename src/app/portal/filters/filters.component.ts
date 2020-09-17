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
  isLaunchStatus: any[];
  isLandStatus: any[];

  constructor() {}

  ngOnInit(): void {
    this.isLaunchStatus = [
      {
        launchStatus: "True",
        launchValue: true,
        active: false,
      },
      {
        launchStatus: "False",
        launchValue: false,
        active: false,
      },
    ];

    this.isLandStatus = [
      {
        launchStatus: "True",
        launchValue: true,
        active: false,
      },
      {
        launchStatus: "False",
        launchValue: false,
        active: false,
      },
    ];

    this.years = [
      {
        id: 1,
        year: "2006",
        active: false,
      },
      {
        id: 2,
        year: "2007",
        active: false,
      },
      {
        id: 3,
        year: "2008",
        active: false,
      },
      {
        id: 4,
        year: "2009",
        active: false,
      },
      {
        id: 5,
        year: "2010",
        active: false,
      },
      {
        id: 6,
        year: "2011",
        active: false,
      },
      {
        id: 7,
        year: "2012",
        active: false,
      },
      {
        id: 8,
        year: "2013",
        active: false,
      },
      {
        id: 9,
        year: "2014",
        active: false,
      },
      {
        id: 10,
        year: "2015",
        active: false,
      },
      {
        id: 11,
        year: "2016",
        active: false,
      },
      {
        id: 12,
        year: "2017",
        active: false,
      },
      {
        id: 13,
        year: "2018",
        active: false,
      },
      {
        id: 14,
        year: "2019",
        active: false,
      },
      {
        id: 15,
        year: "2020",
        active: false,
      },
    ];
  }

  /**
   *
   * @param selectedYear - Get the year and emit to parent
   */
  filterWithYear(selectedYear) {
    this.years.filter((yearList) => (yearList.active = false));
    this.buttonClicked.emit(selectedYear.year);
    selectedYear.active = !selectedYear.active;
  }

  /**
   *
   * @param status -Boolean
   * Get the status and emit to parent
   */
  filterForStatus(status) {
    this.isLaunchStatus.filter((launchStatus) => (launchStatus.active = false));
    this.statusForlanuch.emit(status.launchValue);
    status.active = !status.active;
  }

  /**
   *
   * @param status -Boolean
   * Get the status and emit to parent
   */
  filterLandingStatus(status) {
    this.isLandStatus.filter((launchStatus) => (launchStatus.active = false));
    this.statusForlanding.emit(status.launchValue);
    status.active = !status.active;
  }
}
