
export class Course{
    id: number;
    name: string;
    releaseDate:string;
    description:string;
    duration: number;
    code: string;
    rating: number;
    price: number;
    imageUrl: string;

    constructor( id: number,name: string,releaseDate:string,description:string,duration: number,code: string,rating: number,price: number,imageUrl: string){
        this.id=id;
        this.name=name;
        this.releaseDate=releaseDate;
        this.description=description;
        this.duration=duration;
        this.code=code;
        this.rating=rating;
        this.price=price;
        this.imageUrl=imageUrl;
    }
    
}
