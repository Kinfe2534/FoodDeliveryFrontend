import { Component, OnInit } from '@angular/core';
import { RestaurantRepository} from '../model/restaurantRepository.model';


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
 
 view: string="table"; 
  constructor(public model: RestaurantRepository) {}
  
  ngOnInit(): void {
  }
switchView(){
  if(this.view=="table"){this.view="thumbnail"}
  else if(this.view="thumbnail"){this.view="table"}
}
}
