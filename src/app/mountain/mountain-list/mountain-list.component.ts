import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Mountain } from '../mountain.model'

@Component({
  selector: 'app-mountain-list',
  templateUrl: './mountain-list.component.html',
  styleUrls: ['./mountain-list.component.css']
})
export class MountainListComponent implements OnInit {
  mountains: Map<string, Mountain> = new Map();
  constructor() { }

  ngOnInit() {
    const config = environment.mountains;
    for(let mountain of config.features){
      this.mountains.set(mountain.properties.id, new Mountain(mountain.properties.id, mountain.properties.name, mountain.properties.el, mountain.geometry.coordinates[0], mountain.geometry.coordinates[1], mountain.properties.img, mountain.properties.url));
    }

  }

}
