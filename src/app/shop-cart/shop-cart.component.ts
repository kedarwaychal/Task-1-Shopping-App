import { Component } from '@angular/core';
import { itemService } from '../shared/services/shoppingList.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent {

  ingredientList : any = [];
     constructor(private itemServe : itemService ){}

      ngOnInit(){
        //  this.itemServe.shoppingListobs.subscribe((updatedList)=>{

        //  });
        // this.ingredientList = this.itemServe.getshoppingList();
        this.itemServe.shoppingListobs.subscribe((updatelist : any)=>{
          this.ingredientList = updatelist;
        })
      }
}
