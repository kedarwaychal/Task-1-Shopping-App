import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCartDetailsComponent } from './shop-cart-details.component';

describe('ShopCartDetailsComponent', () => {
  let component: ShopCartDetailsComponent;
  let fixture: ComponentFixture<ShopCartDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopCartDetailsComponent]
    });
    fixture = TestBed.createComponent(ShopCartDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
