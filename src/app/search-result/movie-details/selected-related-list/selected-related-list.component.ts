import { Component, Input } from '@angular/core';
import { ConnectionService } from '../../../services/connection.service';
import { SearchResultsService } from '../../search-results.service';

@Component({
  selector: 'app-selected-related-list',
  templateUrl: './selected-related-list.component.html',
  styleUrls: ['./selected-related-list.component.scss']
})
export class SelectedRelatedListComponent {
  @Input()lists;

  constructor(private connection: ConnectionService,
              private searchResultsService: SearchResultsService) { }

  getMovies(id) {
    this.searchResultsService.getListMovies(id);
   }
}
