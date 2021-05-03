import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from './restaurant.model';
import { Menu } from './menu.model';

export const REST_URL = new InjectionToken("rest_url");


@Injectable()
export class RestaurantDataSource {
    constructor(private http: HttpClient, @Inject(REST_URL) private url:string){}
    //private data: Restaurant[];

    /*constructor(){
        this.data=[
            new Restaurant(1, 'Neba', 'Goro','Fast Food',new Date,new Menu(),"assets/feather/activity.svg"),
            new Restaurant(2, 'Pizeria', 'Bole Medhanialem','Piza Bet',new Date,new Menu(),"assets/feather/airplay.svg"),
            new Restaurant(3, 'Totot', 'Gerji','Fast Food',new Date,new Menu(),"assets/feather/anchor.svg"),
            new Restaurant(4, 'Jacaranda', 'Paster','Cafe',new Date,new Menu(),"assets/feather/aperture.svg"),
            new Restaurant(5, 'Yonas Chercher', 'Kazanchis','Buchery',new Date,new Menu(),"assets/feather/briefcase.svg"),
            new Restaurant(6, 'Coffee Days', 'Kazanchis','Cafe',new Date,new Menu(),"assets/feather/align-center.svg"),
            new Restaurant(6, 'H_square Supermarket', 'Only Helina Knows','Supermarket',new Date,new Menu(),"assets/feather/align-center.svg"),
            new Restaurant(7, 'Yedi ', 'Goro','Traditional Shiro',new Date,new Menu(),"assets/feather/align-left.svg")
            
        ];}*/

    getRestaurant():Observable< Restaurant[]>{
        //return this.data;
        return this.http.get<Restaurant[]>(this.url);
    }
    saveRestaurant(restaurant:Restaurant):Observable<Restaurant>{
        return this.http.post<Restaurant>(this.url,restaurant);
    }
    updateRestaurant(restaurant:Restaurant):Observable<Restaurant>{
        return this.http.put<Restaurant>(`${this.url}/${restaurant.id}`, restaurant)
    }
    deleteRestaurant(id: number): Observable<Restaurant> {
        return this.http.delete<Restaurant>(`${this.url}/${id}`);
    }

}
