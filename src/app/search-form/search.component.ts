import { Component } from '@angular/core';
import { ConnectionService } from '../services/connection.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private connection: ConnectionService) { }
}
