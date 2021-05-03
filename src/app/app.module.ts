import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantThumbnailComponent } from './restaurant-thumbnail/restaurant-thumbnail.component';
import { FooterComponent } from './footer/footer.component';
import { RestaurantDataSource, REST_URL} from './model/restaurantDataSource.model';
import { RestaurantRepository } from './model/restaurantRepository.model';
import { HttpClientModule } from "@angular/common/http";
import { FormComponent } from './form/form.component';
import { RestaurantsTableComponent } from './restaurants-table/restaurants-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RestaurantListComponent,
    RestaurantThumbnailComponent,
    FooterComponent,
    FormComponent,
    RestaurantsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule
  ],
  providers: [RestaurantDataSource,RestaurantRepository,  { provide: REST_URL, useValue: `http://${location.hostname}:4204/restaurants` }],
  bootstrap: [AppComponent]
})
export class AppModule { }
