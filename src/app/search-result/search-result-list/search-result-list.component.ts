import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../services/connection.service';
import { ActivatedRoute } from '@angular/router';
import { SearchResultsService } from '../search-results.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss']
})
export class SearchResultListComponent implements OnInit {
  results;

  constructor(private searchResultsService: SearchResultsService) { }

  ngOnInit() {
    this.searchResultsService.updateMoviesSubject.subscribe(results => this.results = results);
  }

  getMovieDetails(id) {
    this.searchResultsService.getMovieDetails(id);
  }
}
