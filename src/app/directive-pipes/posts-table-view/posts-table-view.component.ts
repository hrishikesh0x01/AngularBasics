import { Component, OnInit } from '@angular/core';
import { Post } from '../Post';
import { posts } from '../postsData';

@Component({
  selector: 'app-posts-table-view',
  templateUrl: './posts-table-view.component.html',
  styleUrls: ['./posts-table-view.component.css']
})
export class PostsTableViewComponent implements OnInit {
  allPosts: Post[] = posts;
  selectedPostTitle: string = "Title";

  constructor() { }

  ngOnInit(): void {
  }

  selectPost(i:number):void {
    this.selectedPostTitle = this.allPosts[i].title;
  }

  postById(index:number, post:Post) {
    return post.id;
  }

  addPost(userid:string, pid:string, ptitle:string, pbody:string) {
    
  }
}
