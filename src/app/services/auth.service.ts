import { Platform, AlertController } from "@ionic/angular";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Storage } from "@ionic/storage";
import { environment } from "../../environments/environment";
import { tap, catchError } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";

const TOKEN_KEY = 'access_token'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.url;
  private url_REST = 'https://inger.cicese.mx/api/v1';
  //private url_REST = 'http://159.65.71.190/covidApp';
  //url_REST = 'http://192.168.1.73:3000'; 
  //url_REST = 'http://localhost:3000';
  user = null;
  usuario:any = null;
  authenticationState = new BehaviorSubject(false);
  token:any;
  infoQR={};

  constructor(private http: HttpClient, private helper: JwtHelperService, private storage: Storage,
    private plt: Platform, private alertController: AlertController) {
      this.plt.ready().then(() => {
        this.checkToken();
      });
  }

  checkToken(){
    this.storage.get(TOKEN_KEY).then(token => {
      if(token){
        this.token = token;
        let decoded = this.helper.decodeToken(token);
        let isExpired = this.helper.isTokenExpired(token);
        if(!isExpired){
          //console.log('token valido');
          //console.log(token);
          this.user = decoded;
          this.authenticationState.next(true);
           
        }
        else{
          this.storage.remove(TOKEN_KEY);
        }
      }
    });
  }

  register(credentials){
    return this.http.post(`${this.url_REST}/api/signup`,credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  login(credentials){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(`${this.url_REST}/usuarios/login`, credentials,httpOptions)
      .pipe(
        tap(res => {
          this.storage.set(TOKEN_KEY,res['token']);
          console.log(res['token']);
          this.token = res['token'];
          this.user = this.helper.decodeToken(res['token']);
          //setTimeout(function(){this.authenticationState.next(true)}, 300);
          //console.log(this.authenticationState);
          this.authenticationState.next(true);
        }),
        catchError(e => {
          this.showAlert('Verifique sus datos e intente nuevamente');
          //console.log(e);
          throw new Error(e);
        })
      );
  }

  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.usuario = null;
      this.authenticationState.next(false);
    });
  }

  getSpecialData(){
    //192.168.1.73
    //return this.http.get(`${this.url}/api/special`).pipe(
    console.log('Entro a getSpecialData');
    return this.http.get(`${this.url_REST}/api/special`).pipe(
      catchError(e => {
        let status = e.status;
        if(status === 401){
          this.showAlert('¡No tienes autorización para acceder!');
          this.logout();
        }
        throw new Error(e);
      })
    );
  }

  getUsuarioData(){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };

    //console.log(httpOptions);
    //console.log(`url: ${this.url_REST}/usuarios/${this.user.id}`);
    return this.http.get(`${this.url_REST}/usuarios/${this.user.id}`,httpOptions).pipe(
      catchError(e => {
        console.log(e);
        let status = e.status;
        if(status === 401){
          this.showAlert('¡No tienes autorización para acceder!');
          this.logout();
        }
        throw new Error(e);
      })
    );
  }

  getQR(){
    /*let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };*/

    return this.http.get(`${this.url_REST}/qr`).pipe(
      catchError(e => {
        console.log(e);
        let status = e.status;
        if(status === 401){
          this.showAlert('¡No tienes autorización para acceder!');
          this.logout();
        }
        throw new Error(e);
      })
    );

  }

  registrarQR(dataQR){
    return this.http.post(`${this.url_REST}/qr`,dataQR).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  registrarSintomas(id,sintomas){
    //console.log(sintomas);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };

    return this.http.post(`${this.url_REST}/usuarios/${id}/sintomas_covid`,sintomas,httpOptions).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  registrarCAM(id,cam){
    console.log(cam);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };

    return this.http.post(`${this.url_REST}/usuarios/${id}/cam`,cam,httpOptions).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );

  }

  registrarMedida(id,medidas){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };

    return this.http.post(`${this.url_REST}/usuarios/${id}/medidas`,medidas,httpOptions).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  registrarSignosVitales(id,signos){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };
    //console.log(JSON.stringify(signos));
    return this.http.post(`${this.url_REST}/usuarios/${id}/signos_vitales`,JSON.stringify(signos),httpOptions).pipe(
      catchError(e => {
        this.showAlert(e.error.messsage);
        throw new Error(e.error.messsage);
      })
    );
  }

  actualizarAntecedentes(id,antecedentes){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };
    return this.http.post(`${this.url_REST}/usuarios/${id}`,antecedentes,httpOptions).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  isAuthenticated() {
    return this.authenticationState.value;
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
