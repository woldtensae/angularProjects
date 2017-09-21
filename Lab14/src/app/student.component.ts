import { Component, OnInit } from '@angular/core';
import { DbService } from './db/db.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  data;
  constructor(dataService: DbService) { 
    this.data = dataService.getData();
  }
      
  ngOnInit() {
  }

}
