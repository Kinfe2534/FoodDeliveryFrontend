import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantThumbnailComponent } from './restaurant-thumbnail.component';

describe('SingleRestaurantComponent', () => {
  let component: RestaurantThumbnailComponent;
  let fixture: ComponentFixture<RestaurantThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
