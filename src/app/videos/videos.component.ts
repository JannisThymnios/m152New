import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos: {
    videoName,
    vidUrl
  }[];

  constructor() {
    this.videos = [
      {
        videoName: "atm.mp4",
        vidUrl: "../../assets/video/atm.mp4"
      },
      {
        videoName: "sintel.mp4",
        vidUrl: "../../assets/video/sintel.mp4"
      }]
   }

  ngOnInit() {
  }

}
