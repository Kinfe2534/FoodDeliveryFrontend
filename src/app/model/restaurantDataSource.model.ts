import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Menu } from './menu.model';


@Injectable()
export class RestaurantDataSource {
    private data: Restaurant[];

    constructor(){
        this.data=[
            new Restaurant(1, 'Neba', 'Goro','Fast Food',new Date,new Menu(),"assets/feather/activity.svg"),
            new Restaurant(2, 'Pizeria', 'Bole Medhanialem','Piza Bet',new Date,new Menu(),"assets/feather/airplay.svg"),
            new Restaurant(3, 'Totot', 'Gerji','Fast Food',new Date,new Menu(),"assets/feather/anchor.svg"),
            new Restaurant(4, 'Jacaranda', 'Paster','Cafe',new Date,new Menu(),"assets/feather/aperture.svg"),
            new Restaurant(5, 'Yonas Chercher', 'Kazanchis','Buchery',new Date,new Menu(),"assets/feather/briefcase.svg"),
            new Restaurant(6, 'Coffee Days', 'Kazanchis','Cafe',new Date,new Menu(),"assets/feather/align-center.svg"),
            new Restaurant(6, 'H_square Supermarket', 'Only Helina Knows','Supermarket',new Date,new Menu(),"assets/feather/align-center.svg"),
            new Restaurant(7, 'Yedi ', 'Goro','Traditional Shiro',new Date,new Menu(),"assets/feather/align-left.svg")
            
        ];}

    getRestaurant(): Restaurant[]{
        return this.data;
    }

}
