export class Mountain {

    public id: string;
    public name: string;
    public elevation: number;
    public coordinate: {longitude: number; latitude: number};
    public path: string;
    public url: string;
    constructor(id: string, name: string, elevation: number, longitude: number, latitude: number, path: string, url: string){
        this.id = id;
        this.name = name;
        this.elevation = elevation;
        this.coordinate = {longitude, latitude};
        this.path = path;
        this.url = url;

    }


   }
   