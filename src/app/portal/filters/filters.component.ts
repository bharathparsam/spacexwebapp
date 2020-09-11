import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';

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


  constructor() {

  }

  ngOnInit(): void {
    this.years = [2014, 2015, 2016, 2017, 2018, 2019, 2020];
  }
  filterWithYear(selectedYear){
    this.buttonClicked.emit(selectedYear);
  }
}
