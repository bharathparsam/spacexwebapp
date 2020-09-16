import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../services/config.service";

@Component({
  selector: "app-portal",
  templateUrl: "./portal.component.html",
  styleUrls: ["./portal.component.scss"],
})
export class PortalComponent implements OnInit {
  visibleSidebar1 = true;
  query: any;
  data: any;
  isloading = true;
  valueEmittedFromChildComponent: string;
  isLaunch: any;
  isLand: any;
  valueEmitted: any;
  // tslint:disable-next-line: jsdoc-format
  /**Get the output variable here */

  constructor(private configService: ConfigService) {}

  /**
   * Smart Component (stateFull component)
   * Must emit and control the data from parent to child
   * @memberof PortalComponent
   */
  ngOnInit(): void {
    // this.query = '100';
    // limitValue: any,isLaunch: any,isLand: any, year: any
    this.resetValuesForQuery();

    this.getListByFilters();
  }

  getListByFilters() {
    this.isloading = true;
    this.configService.fetchlist(this.query).subscribe((resp) => {
      this.data = resp;
      this.resetValuesForQuery();
      this.isloading = false;
    });
  }

  parentEventHandlerFunction(valueEmitted) {
    // From Filters

    this.valueEmitted = valueEmitted;
    this.valueEmittedFromChildComponent = valueEmitted;
    this.requestBasedOnFilters();
  }

  setvalueForLanuch(launch) {
    this.isLaunch = launch;
    this.isLand = launch;
    this.requestBasedOnFilters();
  }

  setvalueForLanding(landingStatus) {
    this.isLand = landingStatus;
    this.isLaunch = landingStatus;
    this.requestBasedOnFilters();
  }

  requestBasedOnFilters() {
    this.query = {
      limitValue: 100,
      isLaunch: this.isLaunch,
      isLand: this.isLand,
      year: this.valueEmitted,
    };
    this.getListByFilters();
  }

  resetValuesForQuery() {
    this.query = {
      limitValue: 100,
      isLaunch: "",
      isLand: "",
      year: "",
    };
    this.isLand = "";
    this.isLaunch = "";
    this.valueEmitted = "";
  }
}
