import { environment } from 'src/environments/environment';


export class Club {

  public championshipTitle: number[] = new Array();

  public id: string;
  public clubName: string;
  public founding: number;
  public headcoach: string;
  public ceo: string;
  public manager: string;
  public stadium: string;
  public seats: number;
  public standings: number;
  public address: string;
  public zip: string;
  public city: string;
  public email: string;
  public logo: string;
  public photo: string;

  constructor (id: string) {

    for (const club of environment.clubs) {
      if (club[0] === id) {
        this.id = club[0];
        this.clubName = club[1];
        this.founding = Number(club[2]);
        this.headcoach = club[3];
        this.ceo = club[4];
        this.manager = club[5];
        this.stadium = club[6];
        this.seats = Number(club[7]);
        this.standings = Number(club[8]);
        this.address = club[9];
        this.zip = club[10];
        this.city = club[11];
        this.email = club[12];
        this.logo = club[13];
        this.photo = club[14];
      }
    }

    for (const year of environment.championship) {
      if (year[2] === id) {
        this.championshipTitle.push(Number(year[0]));
      }
    }

  }

}
