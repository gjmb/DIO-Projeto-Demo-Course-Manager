
export class Course{
    id: number;
    name: string;
    imageURL: string;
    price: number;
    code: string;
    duration: number;
    rating: number;
    releaseDate:string;
    
    constructor(id:number,  name: string,imageURL: string,price: number,code: string,duration: number,rating: number,releaseDate:string){
        this.id=id;
        this.name=name;
        this.imageURL=imageURL;
        this.price=price;
        this.code=code;
        this.duration=duration;
        this.rating=rating;
        this.releaseDate=releaseDate;
    }
}
