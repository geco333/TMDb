import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  url = 'https://api.themoviedb.org/3/';
  key = 'b455d52cd521eb639914771ab4d83f2b';
  confUrl = 'https://api.themoviedb.org/3/configuration?api_key=b455d52cd521eb639914771ab4d83f2b';
  conf: any;

  constructor(private http: HttpClient) {
    // Get config json from db.
    this.http.get<any>(this.confUrl).subscribe(
      result => {
        this.conf = result;
      });
  }

  queryDb(urlParams, queryParams) {
    return this.http.get<any>(this.url + urlParams + '?api_key=' + this.key + '&' + queryParams);
  }

  getSearchResults(title) {
    const urlParams = 'search/movie';
    const queryParams = 'language=en-US&include_adult=true&query=' + title;

    return this.queryDb(urlParams, queryParams);
  }

  getMovieDetails(id) {
    const urlParams = 'movie/' + id;
    const queryParams = 'language=en-US&append_to_response=reviews,lists';

    return this.queryDb(urlParams, queryParams);
  }

  getLists(id) {
    const urlParams = 'movie/' + id + '/lists';
    const queryParams = 'language=en-US';

    return this.queryDb(urlParams, queryParams);
  }

  getListMovies(id) {
    const urlParams = 'list/' + id;
    const queryParams = 'language=en-US';

    return this.queryDb(urlParams, queryParams);
  }

  getPoster(size: number, posterPath) {
    return this.conf.images.base_url + this.conf.images.poster_sizes[size] + posterPath;
  }
}
