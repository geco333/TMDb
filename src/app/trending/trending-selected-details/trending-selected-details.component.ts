import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ConnectionService } from '../../services/connection.service';

@Component({
  selector: 'app-trending-selected-details',
  templateUrl: './trending-selected-details.component.html',
  styleUrls: ['./trending-selected-details.component.scss']
})
export class TrendingSelectedDetailsComponent implements OnChanges {
  @Input() info;

  constructor(private connection: ConnectionService) { }

  ngOnChanges() {
    let urlParams;
    let queryParams;

    switch (this.info.type) {
      case 'movie':
        urlParams = 'movie/';
        queryParams = 'language=en-US';
        break;
      case 'tv':
        urlParams = 'tv/';
        queryParams = 'language=en-US';
        break;
      default:
        break;
    }

    this.connection.queryDb(urlParams, queryParams).subscribe(result => this.info = result);
  }
}
