import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";

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
      title: 'Residentes',
      url: 'home-residentes',
      icon: 'people'
    },
    {
      title: 'Guías de cuidado',
      url: '/guias-cuidado',
      icon: 'book'
    }
  ];
  public labels = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router
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

            this.selectedIndex = 0; 
            this.router.navigate(['home-usuario'],{ replaceUrl: true });   
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
}
