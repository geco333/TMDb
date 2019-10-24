import { Component, OnInit } from '@angular/core';
import { SearchResultsService } from './search-results.service';
import { ActivatedRoute } from '@angular/router';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  providers: [SearchResultsService]
})
export class SearchResultComponent implements OnInit {
  constructor(private connection: ConnectionService,
              private searchResultsService: SearchResultsService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  // Subscribe to url params update.
    this.activatedRoute.params.subscribe(params => {
      const title = params.title;
      this.searchResultsService.getSearchResults(title);
  });

    // Snapshot url params and send title to server.
    this.searchResultsService.getSearchResults(this.activatedRoute.snapshot.params.title);
  }
}
