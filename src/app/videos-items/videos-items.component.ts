import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos-items',
  templateUrl: './videos-items.component.html',
  styleUrls: ['./videos-items.component.css']
})
export class VideosItemsComponent implements OnInit {

  constructor() { }
  @Input() vidUrl: String;
  @Input() videoName: String;

  ngOnInit() {
  }

}
