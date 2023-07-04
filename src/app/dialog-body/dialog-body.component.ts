import { Component } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { item } from '../shared/model/item.model';
import { itemService } from '../shared/services/shoppingList.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent {
  loginForm: FormGroup;
 

  constructor(private itemserve : itemService,public dialog: MatDialogRef<DialogBodyComponent>) {
    this.loginForm = new FormGroup({
      ImgUrl: new FormControl('', [Validators.required]),
      Name: new FormControl('', [Validators.required]),
      Price: new FormControl('', [Validators.required,Validators.pattern(/^\d+(\.\d{1,2})?$/)]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Handle form submission here
      console.log(this.loginForm.value);
    }
    let newitem = new item(this.loginForm.value.ImgUrl,this.loginForm.value.Name,this.loginForm.value.Price,1)
    this.itemserve.updateList(newitem);
    this.dialog.close();
  }

}
