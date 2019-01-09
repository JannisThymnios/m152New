import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Mountain } from '../mountain.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mountain-list',
  templateUrl: './mountain-list.component.html',
  styleUrls: ['./mountain-list.component.css']
})
export class MountainListComponent implements OnInit {
  mountains: Map<string, Mountain> = new Map();
  constructor(private route: ActivatedRoute) {}
  //constructor() {}

  ngOnInit() {
    this.mountains = new Map();
    const config = environment.mountains;
    const mntParam: string = this.route.snapshot.params['id'];
    
    for(let mountain of config.features){
      this.mountains.set(mountain.properties.id, new Mountain(
        mountain.properties.id, 
        mountain.properties.name, 
        mountain.properties.el, 
        mountain.geometry.coordinates[0], 
        mountain.geometry.coordinates[1], 
        mountain.properties.img, 
        mountain.properties.url));
      
    }
    if(mntParam){
      const singleMountain: Mountain = this.mountains.get(mntParam);


      if (singleMountain) {
        this.mountains = new Map();
        this.mountains.set(mntParam, singleMountain)
      }
    }
  }
  


}
