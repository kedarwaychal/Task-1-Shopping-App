import { Component } from '@angular/core';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private matDialog:MatDialog){}

  openDialog(){
    this.matDialog.open(DialogBodyComponent,{
      width :'500px',
    })
  }

}
