import { Component, OnInit, Input } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-search-result-list-item',
  templateUrl: './search-result-list-item.component.html',
  styleUrls: ['./search-result-list-item.component.scss']
})
export class SearchResultListItemComponent implements OnInit {
  @Input() result;
  poster;

  constructor(private connection: ConnectionService) { }

  ngOnInit() {
    this.poster = this.connection.getPoster(0, this.result.poster_path);
  }
}
