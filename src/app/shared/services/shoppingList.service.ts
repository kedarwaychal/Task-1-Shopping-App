import { BehaviorSubject, Subject } from 'rxjs'
import {item} from '../model/item.model'
import { detail } from '../model/detail.model';
export class itemService{
    private itemList : item[] = [
        new item('https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80','T-shirt',995,1),
        new item('https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80','Bottle',95,1),
    ]
    getshoppingList(){
        return this.itemList.slice()
    }
    shoppingListobs = new BehaviorSubject(this.itemList.slice());
    updateList(int : any){
        this.itemList.push(int);
        this.shoppingListobs.next(this.itemList.slice());
        console.log(this.itemList);
    }

    modifiedlist(rec : any, i : any){
        this.itemList[i] =rec;
        this.shoppingListobs.next(this.itemList.slice())

    }

    // public detailList : detail[] = [
        

    // ];
    // shoppingDetail = new BehaviorSubject(this.detailList.slice());
    getrecdetail(reco : any,i : any){
        // this.detailList.push(reco) 
        this.itemList[i] = reco;
        this.shoppingListobs.next(this.itemList.slice())
    }
    // getcancel(num:number){
    //     this.itemList.splice(num,1)
    //     // this.shoppingDetail.next(this.itemList.slice())
    // }
    calc() : any{
    let total: number = 0;
        this.itemList.forEach((param : any)=>{
            total += (param.InputNumber * param.Price)
        })
        return total;
    }
}