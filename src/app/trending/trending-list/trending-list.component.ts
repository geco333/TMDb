import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ConnectionService } from '../../services/connection.service';

@Component({
  selector: 'app-trending-list',
  templateUrl: './trending-list.component.html',
  styleUrls: ['./trending-list.component.scss']
})
export class TrendingListComponent implements OnInit {
  @Input() selected;
  results;

  constructor(private connection: ConnectionService) { }

  ngOnInit() {
    const urlParams = 'trending/all/day';
    const queryParams = 'language=en-US';

    this.connection.queryDb(urlParams, queryParams).subscribe(result => this.results = result.results);
  }

  getPoster(result) {
    const baseUrl = this.connection.conf.images.base_url;
    const posterSize = this.connection.conf.images.poster_sizes[1];

    return baseUrl + posterSize + result.poster_path;
  }
}
