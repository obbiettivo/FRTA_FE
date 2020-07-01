import { Component, OnInit } from '@angular/core';
import { TassaAuto } from 'src/app/models/tassaAuto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent  {
  statoFlussi = ['Generato','Generazione Fallita','Inviato','Invio Fallito'];
  tipoFlussi = ['Bonifico Bancario','Pagamento diretto con rilascio quietanza'];

  model = new TassaAuto(0, '', this.statoFlussi[0], this.tipoFlussi[0],'01-01-2020', '31-12-2020');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  Pulisci() {
    this.model = new TassaAuto(0,'','','','','');
  }

  InviaRicerca() {
    alert("invio dati a BeckEnd");
   
    console.log(this.model);

  }
  /*skyDog(): TassaAuto {
    let myTassa =  new TassaAuto(42, 'SkyDog','Fetch any object at any distance','Leslie Rollover','','');
    console.log('Chiamo tassaAuto ' + TassaAuto.name); // "My hero is called SkyDog"
    return myTassa;
  }*/

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value; // Dr. IQ
  }

  /////////////////////////////

}


