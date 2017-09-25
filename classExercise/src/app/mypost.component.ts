import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit {
  private myPostsData;
  constructor(private posts: PostsService) {
    posts.getPosts().subscribe(
      (response)=>{this.myPostsData = (response.json())},
      (err)=>{console.log(err)} 
    );
   }

  ngOnInit() {
  }

}
