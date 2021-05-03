import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Observable } from "rxjs";
import { RestaurantDataSource } from './restaurantDataSource.model'

@Injectable()
export class RestaurantRepository {

    private restaurants:Restaurant[]= new Array<Restaurant>();
    private locator= (r:Restaurant, id:number)=> r.id==id;

    constructor(private restaurantDataSource: RestaurantDataSource){
        this.restaurantDataSource.getRestaurant().subscribe(data => this.restaurants=data);
        //this.restaurantDataSource= new RestaurantDataSource();
        //this.restaurants= new Array<Restaurant>();
        //this.restaurantDataSource.getRestaurant().forEach(r=>this.restaurants.push(r));
    }
    getRestaurants():Restaurant[]{
        return this.restaurants;
    }
    getRestaurant(id:number):Restaurant{
        return this.restaurants.find(r=>this.locator(r,id));
    }
    addRestaurant(restaurant:Restaurant){
        if(restaurant.id==0||restaurant.id==null){
            //res.id=this.generateID();
            //this.restaurants.push(res)
            this.restaurantDataSource.saveRestaurant(restaurant)
                .subscribe(data => this.restaurants.push(data));
        }
        else {
            this.restaurantDataSource.updateRestaurant(restaurant).subscribe(data=>{
            let index=this.restaurants.findIndex(item=>this.locator(item,data.id));
            this.restaurants.splice(index, 1, data);
        });
    }
    }
    removeRestaurant(id:number){
        this.restaurantDataSource.deleteRestaurant(id).subscribe(()=>{
        let index=this.restaurants.findIndex(item=>this.locator(item,id));
        if(id>-1){ this.restaurants.splice(index,1); }});
    }
    private generateID():number{
        let candidate=100;
        while(this.getRestaurant(candidate)!=null){
            candidate++;
        }
        return candidate;
    }
    
}

