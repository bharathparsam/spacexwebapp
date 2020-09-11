import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-portal-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() queryFilter: string;
  data: any[];

  constructor(private config: ConfigService) { }

  /**
   * Dumb Component (stateLess component)
   *
   * @memberof PortalComponent
   */
  ngOnInit(): void {

    //TODO ->  Add query based on the filters
    /**
     * Implement lazy loading so that there wont be partial load.
     * Add filter query and emit to the paraent
     *
    */

    this.config.fetchlist(this.queryFilter).subscribe(res => {
      this.data = res;
      console.log(res);
    });
  }


}
