import { Component, OnInit } from '@angular/core';
import { RestaurantRepository} from '../model/restaurantRepository.model';
import { Restaurant } from '../model/restaurant.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newRestaurant: Restaurant=new Restaurant(); 
  constructor(public model: RestaurantRepository){}

  

  ngOnInit(): void {
  }

}
