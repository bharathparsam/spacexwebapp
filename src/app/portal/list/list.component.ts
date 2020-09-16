import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-portal-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() queryFilter: string;
  @Input() data: any[];

  constructor(private config: ConfigService) {}

  /**
   * Dumb Component (stateLess component)
   *
   * @memberof PortalComponent
   */
  ngOnInit(): void {}
}
