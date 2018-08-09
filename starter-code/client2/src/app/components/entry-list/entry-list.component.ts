import { Component, OnInit } from '@angular/core';
import { JournalService } from '../../services/journal.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  journalEntries: Array<any>;

  constructor( private journalService : JournalService) { }

  ngOnInit() {
    this.journalService.getAll()
      .then( (data: Array<any>) => {
        this.journalEntries = data;
    });
  }

}
