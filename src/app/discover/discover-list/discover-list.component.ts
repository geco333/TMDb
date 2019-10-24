import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-discover-list',
  templateUrl: './discover-list.component.html',
  styleUrls: ['./discover-list.component.css']
})
export class DiscoverListComponent implements OnInit {
  results;
  lists;

  constructor(private connection: ConnectionService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
      this.route.queryParams.subscribe(qp =>  {
        let queryParams =  '';

        for (const [k, v] of Object.entries(qp)) {
            queryParams += k + '=' + v + '&';
          }

        this.updateResults(queryParams);
      });
  }

  updateResults(queryParams) {
    const urlParams = 'discover/movie';

    this.connection.queryDb(urlParams, queryParams).subscribe(result => this.results = result.results);
  }

  searchPirateBay(title) {
    window.open('https://proxtpb.art/s/?q=' + title, '_blank');
  }

  getImdbId(id) {
    this.connection.getMovieDetails(id).subscribe(result => {
      window.open('https://imdb.com/title/' + result.imdb_id, '_blank');
    });
  }

  getLists(id) {
    this.connection.getLists(id).subscribe(result => this.lists = result.results);
  }

  getPoster(posterPath) {
   return this.connection.getPoster(1, posterPath);
  }
}
