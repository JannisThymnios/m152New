import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galleryitem',
  templateUrl: './galleryitem.component.html',
  styleUrls: ['./galleryitem.component.css']
})
export class GalleryitemComponent implements OnInit {

  constructor() { }
  @Input() imgUrl: String;
  @Input() mountainName: String;
  @Input() mountainHeight: String;

  ngOnInit() {
  }

}
