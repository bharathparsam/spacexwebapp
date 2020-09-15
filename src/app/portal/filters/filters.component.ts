import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
// import { stat } from 'fs';

@Component({
  selector: 'app-portal-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
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
  // @Output()
  // resetEvent: EventEmitter<string> = new EventEmitter<string>();
  

  constructor() {

  }

  ngOnInit(): void {
    this.years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  }
  filterWithYear(selectedYear){
    this.buttonClicked.emit(selectedYear);
  }

  filterForStatus(status) {
    this.setParamsStatus(status);
  }
  filterLandingStatus(status) {
    this.setParamsStatus(status);
  }

  setParamsStatus(status){
    if (status === 'true'){
      this.statusForlanuch.emit('true');
      this.statusForlanding.emit('true');
    }else{
      this.statusForlanuch.emit('false');
      this.statusForlanding.emit('false');
    }
  }

  // reset() {
  //   this.resetEvent.emit('true');

      // HAVE RESET BUTTON TO refresh the list PS
  // }
}
