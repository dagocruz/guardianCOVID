import { Component, OnInit } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public state = false;
  public appPages = [
    {
      title: 'Mi perfil',
      url: '/home-usuario',
      icon: 'person'
    },
    {
      title: 'Escanear QR',
      url: '/escaner-qr',
      icon: 'scan'
    },
    {
      title: 'Medidas de ingreso',
      url: '/guias-cuidado',
      icon: 'reader'
    },
    {
      title: 'Aviso de privacidad',
      url: '/aviso-privacidad',
      icon: 'lock-closed'
    },
    {
      title: 'Acerca de',
      url: '/acerca-de',
      icon: 'information-circle'
    }
  ];
  public labels = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router,
    public alertController: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authService.authenticationState.subscribe(state => {
        this.state = state;
        //console.log('authenticationState: '+state);
        if(state){
          //console.log('Entro state');
          //this.authService.checkToken();
          this.authService.getUsuarioData().subscribe(usuario => {
            //console.log(usuario['data']);
            this.authService.usuario = usuario['data'];
            /*if(this.authService.usuario.tipo=='superadmin' || this.authService.usuario.tipo=='administrador'){
              this.appPages.splice(1,0,{
                title: 'Colaboradores',
                url: 'home-colaboradores',
                icon: 'people-circle'
              });
            }*/

            this.selectedIndex = 0; 
            this.router.navigate(['home-usuario'],{ replaceUrl: true });
            this.showAlert();   
          });
        }
        else
          //Cambiar para versi'on final
          this.router.navigate(['login'],{ replaceUrl: true })
          //this.router.navigate(['home-residentes/lista']);
      });
    });
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['login'],{ replaceUrl: true });
    this.selectedIndex = null;
  }

  ngOnInit() {
    //const path = window.location.pathname.split('folder/')[1];
    //console.log(window.location.pathname);
    //if (path !== undefined) {
    //  this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    //}
    this.selectedIndex = null;
  }

  async showAlert(){
    const alert = await this.alertController.create({
      header: 'Aviso de privacidad',
      message: '¿Aceptas los términos y condiciones para compartir tus datos por el uso de <strong>guardianCOVID</strong>?',
      cssClass:'buttonCss',
      buttons: [ 
        {
          text: 'Estoy de acuerdo',
          cssClass: 'agree-button',
          handler: () => {
            console.log('Confirm Okay');
          }
        },
        {
          text: 'Ver más ...',
          cssClass: 'agree-button',
          handler: () => {
            console.log('Confirm Okay');
            this.router.navigate(['aviso-privacidad'],{ replaceUrl: true });
          }
        },
        {
        text: 'No estoy de acuerdo',
        cssClass: 'disagree-button',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }]
    });
    await alert.present();
  }
}
