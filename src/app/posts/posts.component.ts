import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts:any;
  oszlopok:any;
  constructor(private base:BaseService,
    private config:ConfigService){
    this.oszlopok=config.oszlopok;  
    base.get().subscribe(
      (adatok)=> this.posts=adatok   
    )
  }



}
