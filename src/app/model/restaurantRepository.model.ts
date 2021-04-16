import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { RestaurantDataSource } from './restaurantDataSource.model'

@Injectable()
export class RestaurantRepository {

    private restaurants: Restaurant[];
    private locator= (r:Restaurant, id:number)=> r.id==id;

    constructor(private restaurantDataSource: RestaurantDataSource){
        this.restaurantDataSource= new RestaurantDataSource();
        this.restaurants= new Array<Restaurant>();
        this.restaurantDataSource.getRestaurant().forEach(r=>this.restaurants.push(r));
    }
    getRestaurants():Restaurant[]{
        return this.restaurants;
    }
    getRestaurant(id:number):Restaurant{
        return this.restaurants.find(r=>this.locator(r,id));
    }
    addRestaurant(res:Restaurant){
        if(res.id==0||res.id==null){
            res.id=this.generateID();
            this.restaurants.push(res)
        }
        else {
            let index=this.restaurants.findIndex(r=>this.locator(r,res.id));
            this.restaurants.splice(index, 1, res);
        }
    }
    removeRestaurant(id:number){
        let index=this.restaurants.findIndex(r=>this.locator(r,id));
        if(id>-1){ this.restaurants.splice(index,1); }
    }
    private generateID():number{
        let candidate=100;
        while(this.getRestaurant(candidate)!=null){
            candidate++;
        }
        return candidate;
    }
    
}

