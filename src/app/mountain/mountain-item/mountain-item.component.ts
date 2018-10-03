import { Component, Input, OnInit } from '@angular/core';
import { Mountain } from '../mountain.model'
@Component({
  selector: 'app-mountain-item',
  templateUrl: './mountain-item.component.html',
  styleUrls: ['./mountain-item.component.css']
})

export class MountainItemComponent implements OnInit {
  @Input () mountain: Mountain;
  constructor() { }

  ngOnInit() {
  }

}
