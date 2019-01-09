import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Club } from '../club.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nlclubs',
  templateUrl: './nlclubs.component.html',
  styleUrls: ['./nlclubs.component.css']
})
export class NlclubsComponent implements OnInit {

  clubs: Map<string, Club>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.clubs = new Map();

    for (const club of environment.clubs) {
      this.clubs.set(club[0], new Club(club[0]));
    }

  }

}
