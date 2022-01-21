import { Component, OnInit } from '@angular/core';
import { Post } from './Post';
import { posts } from  './postsData';

@Component({
  selector: 'app-directive-pipes',
  templateUrl: './directive-pipes.component.html',
  styleUrls: ['./directive-pipes.component.css']
})
export class DirectivePipesComponent implements OnInit {
  postss: Post[] = posts;
  constructor() { }

  ngOnInit(): void {
  }
}
