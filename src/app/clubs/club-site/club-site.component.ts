import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Club } from '../club.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-club-site',
  templateUrl: './club-site.component.html',
  styleUrls: ['./club-site.component.css']
})
export class ClubSiteComponent implements OnInit {

  public club: Club;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    let id: string;
    id = this.route.snapshot.params['id'];
    this.club = new Club(id);
  }

}