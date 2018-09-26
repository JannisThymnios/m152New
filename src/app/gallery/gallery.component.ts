import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  mountains: {
    mountainName,
    mountainHeight,
    imgUrl
  }[];

  constructor() {
    this.mountains = [
      {
        mountainName: "Bristen",
        mountainHeight: "21000m",
        imgUrl: "../../assets/img/bristen.jpg"
      },
      {
        mountainName: "Generoso",
        mountainHeight: "25000",
        imgUrl: "../../assets/img/generoso.jpg"
      },
      {
        mountainName: "Säntis",
        mountainHeight: "24000",
        imgUrl: "../../assets/img/santis.jpg"
      },
      {
        mountainName: "Eiger",
        mountainHeight: "24000",
        imgUrl: "../../assets/img/eiger.jpg"
      },
      {
        mountainName: "Glarnisch",
        mountainHeight: "24000",
        imgUrl: "../../assets/img/glarnisch.jpg"
      },
      {
        mountainName: "Matterhorn",
        mountainHeight: "24000",
        imgUrl: "../../assets/img/matterhorn.jpg"
      },
      {
        mountainName: "Niederhorn",
        mountainHeight: "24000",
        imgUrl: "../../assets/img/niederhorn.jpg"
      },
      {
        mountainName: "Pizbernina",
        mountainHeight: "24000",
        imgUrl: "../../assets/img/pizbernina.jpg"
      }
    ];
  }

  ngOnInit() {
  }

}
