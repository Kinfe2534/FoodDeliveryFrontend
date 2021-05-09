import { Component, OnInit } from '@angular/core';
import { Inject } from "@angular/core";
import { RestaurantRepository} from '../model/restaurantRepository.model';

import { Restaurant } from '../model/restaurant.model';

import { MODES, SharedState, SHARED_STATE } from "../model/sharedState.model";
import { Observer } from "rxjs";

@Component({
  selector: 'app-restaurants-table',
  templateUrl: './restaurants-table.component.html',
  styleUrls: ['./restaurants-table.component.css']
})
export class RestaurantsTableComponent implements OnInit {


  constructor(public model: RestaurantRepository,
    @Inject(SHARED_STATE) public observer: Observer<SharedState>){}
  getRestaurant(key: number): Restaurant {
    return this.model.getRestaurant(key);
  }
  getProducts(): Restaurant[] {
      return this.model.getRestaurants();
  }
  removeRestaurant(key: number) {
      this.model.removeRestaurant(key);
  }
  editRestaurant(key: number) {
      //this.state.id = key;
      //this.state.mode = MODES.EDIT;
      this.observer.next(new SharedState(MODES.EDIT, key));
  }
  addRestaurant() {
      //this.state.id = undefined;
      //this.state.mode = MODES.CREATE;
      this.observer.next(new SharedState(MODES.CREATE));
  }

    ngOnInit(): void {
    }

}
