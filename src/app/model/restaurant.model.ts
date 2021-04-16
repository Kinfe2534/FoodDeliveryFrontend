import { Menu } from './menu.model';
export class Restaurant {
    constructor(
        public id?:number,
        public name?:string,
        public location?:string,
        public category?:string,
        public openingHour?: Date,
       // public closingHour?: Date,
        public menu?: Menu,
        public logoPath?: string
    ){}
}
