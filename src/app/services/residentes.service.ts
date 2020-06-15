import { Platform, AlertController } from "@ionic/angular";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map, tap, catchError } from "rxjs/operators";
import { BehaviorSubject, Observable, of } from "rxjs";

//ToDo
// Que aparezca fecha inicial por síntoma
// Agregar Fecha de nacimiento y calcular edad 
// Validar fecha inicial de síntoma
// Quitar demencia

import { Residente } from "../models/Residente";

//Falta agregar las validaciones del token

@Injectable({
  providedIn: 'root'
})
export class ResidentesService {

  url = environment.url;
  private url_REST = 'https://inger.cicese.mx/api/v1';
  //private url_REST = 'http://159.65.71.190/covidApp';
  //private url_REST = 'http://192.168.1.73:3000'; 
  //private url_REST = 'http://localhost:3000';
  //residente = null;
  public residente:Residente;
  
  constructor(private http: HttpClient,private alertController: AlertController) { }

  getResidentes(residencia) {
    return this.http.get(`${this.url_REST}/residentes?id_residencia=${residencia}&pp=100000`).pipe(
      //tap(_ => console.log('Residentes consultados')),
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  getResidente(id): Observable<Residente> {
    return this.http.get<Residente>(`${this.url_REST}/residentes/${id}`).pipe(
      //tap(_ => console.log(`Residente obtenido id = ${id}`)),
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  
  registrar(credentials){
    console.log(credentials)
    return this.http.post(`${this.url_REST}/residentes`,credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.message);
        throw new Error(e);
      })
    );
  }

  registrarSintomas(id,sintomas){
    //console.log(sintomas);
 
    return this.http.post(`${this.url_REST}/residentes/${id}/sintomas_covid`,sintomas).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  registrarCAM(id,cam){
    console.log(cam);
    return this.http.post(`${this.url_REST}/residentes/${id}/cam`,cam).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );

  }

  registrarSignosVitales(id,signos){

    //console.log(JSON.stringify(signos));
    return this.http.post(`${this.url_REST}/residentes/${id}/signos_vitales`,JSON.stringify(signos)).pipe(
      catchError(e => {
        this.showAlert(e.error.messsage);
        throw new Error(e.error.messsage);
      })
    );
  }

  registrarMedida(id,medidas){

    return this.http.post(`${this.url_REST}/residentes/${id}/medidas`,medidas).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  actualizarAntecedentes(id,antecedentes){

    return this.http.post(`${this.url_REST}/residentes/${id}`,antecedentes).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  showAlert(msg){
    let alert = this.alertController.create({
      message: msg,
      header: 'Error',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }
}
