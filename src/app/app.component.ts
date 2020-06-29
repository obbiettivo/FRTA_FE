import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
 // public title = 'ng-base';
  public show= true;

  constructor() { }

  ngOnInit() { }

  /*public handleClick(s: string):void{
    alert("hai cliccato per cambiare il nome");
     this.title=s;
  }*/

  public toggleShow(s: boolean){
    //alert("hai cliccato per cambiare stato "+ this.show);
     this.show=!this.show;


     
  }

}
