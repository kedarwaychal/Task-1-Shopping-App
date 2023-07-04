import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import{ MatDialogModule} from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { ShopCartDetailsComponent } from './shop-cart-details/shop-cart-details.component';
import { ShoppinglistComponent } from './shop-cart/shoppinglist/shoppinglist.component';
import { itemService } from './shared/services/shoppingList.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DialogBodyComponent,
    ShopCartComponent,
    ShopCartDetailsComponent,
    ShoppinglistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    itemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
