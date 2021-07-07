import { Component, OnInit } from '@angular/core';
import { Writers } from '../writers'; 
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-writers-list',
  templateUrl: './writers-list.component.html',
  styleUrls: ['./writers-list.component.css']
})
export class WritersListComponent implements OnInit {

  public writersList: Writers[];

  constructor(private libraryService: LibraryService) {
    this.writersList = [];
   }

  ngOnInit(): void {
    this.libraryService.getWriters()
    .subscribe(resp => {
      this.writersList = resp;
      console.log(this.writersList[0].obras[0]);
    });
  }   
}
