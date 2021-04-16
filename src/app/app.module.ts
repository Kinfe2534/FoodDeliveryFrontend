import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { SingleRestaurantComponent } from './single-restaurant/single-restaurant.component';
import { FooterComponent } from './footer/footer.component';
import { RestaurantDataSource} from './model/restaurantDataSource.model';
import { RestaurantRepository } from './model/restaurantRepository.model';;

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RestaurantListComponent,
    SingleRestaurantComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RestaurantDataSource,RestaurantRepository ],
  bootstrap: [AppComponent]
})
export class AppModule { }
