import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portal-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Input() queryFilter: string;
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
