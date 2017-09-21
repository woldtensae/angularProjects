import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from './db/db.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
 private id:string;
 private data;
 correctData;
  
 constructor(private route: ActivatedRoute, private service: DbService) {
      this.data = service.getData();
      route.params.subscribe(params => {this.id = params['id']});
      for(let singleData of this.data){
        if(singleData['id']==this.id)
            this.correctData = singleData;        
      }
   }

  ngOnInit() {
  }

}
