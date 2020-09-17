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
  isLoading = true;
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
   * On inital load reset the Query Parameters and fetch the API
   * @memberof PortalComponent
   */
  ngOnInit(): void {
    this.resetValuesForQuery();
    this.getListByFilters();
  }

  /**
   * getListByFilters - Function to fetch the APIdata
   * from the configService file
   */
  getListByFilters() {
    this.isLoading = true;
    this.configService.fetchlist(this.query).subscribe((resp) => {
      this.data = resp;
      this.isLoading = false;
    });
  }

  /**
   *
   * @param valueEmitted - Boolean Value
   * This method is used for handling the event emitter
   */
  parentEventHandlerFunction(valueEmitted) {
    // From Filters

    this.valueEmitted = valueEmitted;
    this.valueEmittedFromChildComponent = valueEmitted;
    this.requestBasedOnFilters();
  }
  /**
   *
   * @param launch - Boolean value
   * assign a boolean value and pass the params to assign
   * the parameters in requestBasedOnFilters function
   */
  setvalueForLanuch(launch) {
    this.isLaunch = launch;
    this.requestBasedOnFilters();
  }

  /**
   *
   * @param landingStatus - Boolean value
   * assign a boolean value and pass the params to assign
   * the parameters in requestBasedOnFilters function
   */
  setvalueForLanding(landingStatus) {
    this.isLand = landingStatus;
    this.requestBasedOnFilters();
  }

  /**
   * Assign the params and send the params to fetch the data
   */
  requestBasedOnFilters() {
    debugger;
    this.query = {
      limitValue: 100,
      isLaunch: this.isLaunch,
      isLand: this.isLand,
      year: this.valueEmitted,
    };
    this.getListByFilters();
  }

  /**
   * Used to reset the Query Params
   */
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
