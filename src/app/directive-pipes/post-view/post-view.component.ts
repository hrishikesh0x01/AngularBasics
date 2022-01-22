import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
  @Input() index?:number;
  @Input() pid?:number;
  @Input() userId?:number;
  @Input() ptitle?:string;
  @Input() pbody?:string;

  visible:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
