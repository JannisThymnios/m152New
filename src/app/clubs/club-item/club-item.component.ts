import { Component, Input, OnInit } from '@angular/core';
import { Club } from '../club.model'

@Component({
  selector: 'app-club-item',
  templateUrl: './club-item.component.html',
  styleUrls: ['./club-item.component.css']
})
export class ClubItemComponent implements OnInit {
  @Input () club: Club;
  constructor() { }

  ngOnInit() {
  }

}
