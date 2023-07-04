import { Component, Input, ViewChild } from '@angular/core';
import { detail } from 'src/app/shared/model/detail.model';
import { item } from 'src/app/shared/model/item.model';
import { itemService } from 'src/app/shared/services/shoppingList.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent {

  constructor(private shopserve : itemService){}

  @Input() items : any;
  @Input() itemind : any;

  inputNumber: number = 1;

  rec: any;

  increament() {
    this.inputNumber++;
    
  }

  decreament() {
    if (this.inputNumber > 0) {
      this.inputNumber--;
    }
  }

  onClick(){
    this.rec = new item(this.items.ImgUrl,this.items.Name,this.items.Price,this.inputNumber);
      this.shopserve.modifiedlist(this.rec,this.itemind);
  }

}
