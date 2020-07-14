import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
//import { ITassaAuto } from '../interfaces/itassaAuto.interface';
//import { TassaAuto } from '../models/tassaAuto';

export interface Config {
  idFlussoEsito: string;
  textfile: string;
}

@Injectable({
  providedIn: 'root'
})


export class FlussoEsitoService {
  configUrl = 'http://localhost:9090/api/swagger-ui.html#/esito-controller/getEsitoByIdUsingGET';
  
  constructor(private http: HttpClient) { }

    getConfig() {
      return this.http.get(this.configUrl);
    }
  }

  
  /*public get(id:number){
    return this._http.get<IUser>(`http://localhost:9090/api/swagger-ui.html#/esito-controller/getEsitoByIdUsingGET${id}`).pipe(
      map(user => new User(user.id, user.email, user.name)) 
    );
  }*/

  