import { Component, OnInit } from '@angular/core';
import { TassaAuto } from 'src/app/models/tassaAuto';
import { Config,FlussoEsitoService} from 'src/app/services/flusso-esito.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [ FlussoEsitoService ],
  styleUrls: ['./home.component.css']
})


export class HomeComponent  {
  [x: string]: any;
  statoFlussi = ['Generato','Generazione Fallita','Inviato','Invio Fallito'];
  tipoFlussi = ['Bonifico Bancario','Pagamento diretto con rilascio quietanza'];

  model = new TassaAuto(0, '', this.statoFlussi[0], this.tipoFlussi[0],'01-01-2020', '31-12-2020');

 constructor(
    private FlussoEsitoService: FlussoEsitoService,
    private spinner: NgxSpinnerService) {}
 
  
 
  submitted = false;
  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  Pulisci() {
    this.model = new TassaAuto(0,'','','','','');
  }

  InviaRicerca() {
    this.spinner.show();
    
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
    console.log(this.model);

    this.FlussoEsitoService.getConfig().subscribe(
      (data: Config) => this.config = { ...data }, // success path
       error => this.error = error // error path
    );
    
  }



  showFormControls(form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value; // Dr. IQ
  }


}


