import { Platform, AlertController } from "@ionic/angular";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map, tap, catchError } from "rxjs/operators";
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  url = environment.url;
  //private url_REST = 'https://inger.cicese.mx/api/v1';
  private url_REST = 'https://guardiancovid.cicese.mx/api/v1';

  public colaborador:any;
  infoQR = {};

  constructor(
    private http: HttpClient,
    private alertController: AlertController) { }
  
  getColaboradores(residencia) {
    return this.http.get(`${this.url_REST}/usuarios?id_residencia=${residencia}&pp=100000`).pipe(
      //tap(_ => console.log('Residentes consultados')),
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  getColaborador(id){
    return this.http.get(`${this.url_REST}/usuarios/${id}`).pipe(
      //tap(_ => console.log(`Residente obtenido id = ${id}`)),
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  registrarQR(dataQR,id){
    //console.log(dataQR);
    //console.log(id);
    return this.http.post(`${this.url_REST}/usuarios/${id}/qr`,dataQR).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  getQR(id){
    return this.http.get(`${this.url_REST}/qr?id_usuario=${id}`).pipe(
      catchError(e => {
        console.log(e);
        let status = e.status;
        if(status === 401){
          this.showAlert('¡No tienes autorización para acceder!');
          //this.logout();
        }
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
