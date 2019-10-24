import { Injectable } from '@angular/core';
import { ConnectionService } from '../services/connection.service';
import { Subject } from 'rxjs';

@Injectable()
export class SearchResultsService {
  updateMoviesSubject: Subject<any> = new Subject();
  movieDetailsSubject: Subject<any> = new Subject();

  constructor(private connection: ConnectionService) { }

  getMovieDetails(id) {
    //  Send the movie id to the serverto receive the movie details
    // cast the result to the caller using movieDetailsSubject.
    this.connection.getMovieDetails(id).subscribe(result => this.movieDetailsSubject.next(result));
  }

  getSearchResults(searchString) {
    //  Send the search query to the server to receive
    // all relevent results,
    // cast the results to the caller using updateMoviesSubject.
    this.connection.getSearchResults(searchString).subscribe(result => this.updateMoviesSubject.next(result.results));
  }

  getListMovies(id) {
    //  Send th movie id to the server to receive the lists movies,
    // cast the results to the caller using updateMoviesSubject.
    this.connection.getListMovies(id).subscribe(result => {
      const results = result.items ? result.items : result.results;
      this.updateMoviesSubject.next(results);
    });
  }
}
