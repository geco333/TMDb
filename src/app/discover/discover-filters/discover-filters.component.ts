import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-discover-filters',
  templateUrl: './discover-filters.component.html',
  styleUrls: ['./discover-filters.component.css']
})
export class DiscoverFiltersComponent implements OnInit {
  certifications;
  // tslint:disable-next-line: max-line-length
  sortBy = ['popularity.asc', 'popularity.desc', 'release_date.asc', 'release_date.desc', 'revenue.asc', 'revenue.desc', 'primary_release_date.asc', 'primary_release_date.desc', 'original_title.asc', 'original_title.desc', 'vote_average.asc', 'vote_average.desc', 'vote_count.asc', 'vote_count.desc'];
  filters = {};

  constructor(private connection: ConnectionService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.getCertifications();
    this.updateFilter('certification', 'PG-13');
    this.updateFilter('sort_by', 'popularity.asc');
  }

  getCertifications() {
    const urlParams = 'certification/movie/list';
    const queryParams = '';

    this.connection.queryDb(urlParams, queryParams).subscribe(result => this.certifications = result.certifications.US);
  }

  updateFilter(filter, str) {
    this.filters[filter] = str;
    let filters = '';

    for (const [k, v] of Object.entries(this.filters)) {
      filters += k + '=' + v + '&';
    }

    this.router.navigateByUrl('/discover?' + filters);
  }
}
