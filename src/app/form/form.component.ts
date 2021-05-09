import { Component, OnInit } from '@angular/core';
import { Inject } from "@angular/core";
import { RestaurantRepository} from '../model/restaurantRepository.model';
import { Restaurant } from '../model/restaurant.model';
import { SharedState } from '../model/sharedState.model';
import { MODES ,SHARED_STATE} from '../model/sharedState.model';
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  bufferRestaurant: Restaurant=new Restaurant(); 
  editing: boolean = false;

  constructor(public model: RestaurantRepository,
    @Inject(SHARED_STATE) public stateEvents: Observable<SharedState> ){
    stateEvents.subscribe((update) => {
      this.bufferRestaurant = new Restaurant();
      if (update.id != undefined) {
        Object.assign(this.bufferRestaurant, this.model.getRestaurant(update.id));
      }
      this.editing = update.mode == MODES.EDIT;
    });
  }
  //get editing(): boolean {
  //  return this.state.mode == MODES.EDIT;
//}
submitForm(form: NgForm) {
    if (form.valid) {
        this.model.addRestaurant(this.bufferRestaurant);
        this.bufferRestaurant = new Restaurant();
        form.reset();
    }
}
resetForm() {
    this.bufferRestaurant = new Restaurant();
}

  

  ngOnInit(): void {
  }

}
