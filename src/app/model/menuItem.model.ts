export class MenuItem {
    constructor(
        public id?:number,
        public name?:string,
        public description?: string, 
        //public logo?: ImageBitmap,
        public catagory?:string,
        public content?: string,
        public price?: number
        
    ){}
}