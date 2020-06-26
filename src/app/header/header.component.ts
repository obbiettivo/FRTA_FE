import { Component, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit  {
  @Output() public btnClicked: EventEmitter<boolean>= new EventEmitter();

  /*public handleclick(s:string):void{
    alert("Mando Emit");
    this.btnClicked.emit('titolo cambiato dal componente figlio');
    //this.title=s;
  }*/

  public handleclick(s:boolean):void{
    //alert("Mando Emit status "+s);
    this.btnClicked.emit(s);
    //this.title=s;
  }

  ngOnInit(): void {}
}


