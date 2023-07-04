import { Component, OnInit } from '@angular/core';
import { itemService } from '../shared/services/shoppingList.service';

@Component({
  selector: 'app-shop-cart-details',
  templateUrl: './shop-cart-details.component.html',
  styleUrls: ['./shop-cart-details.component.css']
})
export class ShopCartDetailsComponent implements OnInit{
  [x: string]: any;

  detailList : any = [];
  value : number = 0;

  constructor(private detailserve : itemService){}

  ngOnInit(){
    // this.detailList = this.detailserve.getshoppingList();

    this.detailserve.shoppingListobs.subscribe((updatedlist : any)=>{
       this.detailList = updatedlist;
       console.log(updatedlist)
    this.value = this.detailserve.calc();

    });


    console.log(this.detailserve.calc())
    

  }

  row : any;

  onClick(button : any,det: any) {
     det.InputNumber = 0;
     this.detailserve.getrecdetail(det,button)
    //  this.detailserve.shoppingDetail.subscribe((prodlist:any)=>{
    //   this.detailList = prodlist;
    //  })
    //  this.detailList.splice(det)
  }

}


