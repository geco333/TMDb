import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-related-lists',
  templateUrl: './related-lists.component.html',
  styleUrls: ['./related-lists.component.css']
})
export class RelatedListsComponent implements OnInit {
  @Input() lists;
  @Output() listMovies: EventEmitter<any> = new EventEmitter();

  constructor(private connection: ConnectionService) { }

  ngOnInit() {
  }

  getListMovies(id) {
    this.connection.getListMovies(id).subscribe(result => this.listMovies.emit(result.items));
  }
}
