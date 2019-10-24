import { Component, Input, OnInit } from '@angular/core';
import { ConnectionService } from '../../services/connection.service';
import { SearchResultsService } from '../search-results.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  result;
  reviews;
  lists;

  constructor(private searchResultsService: SearchResultsService,
              private connection: ConnectionService) { }

  ngOnInit() {
    this.searchResultsService.movieDetailsSubject.subscribe(result => {
       this.result = result;
       this.reviews = result.reviews;
       this.lists = result.lists;
    });
  }

  getPoster(posterPath) {
    return this.connection.getPoster(1, posterPath);
  }
}
