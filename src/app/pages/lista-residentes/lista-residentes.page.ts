import { Router,NavigationEnd, NavigationStart } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Residente } from "../../models/Residente";
import { ResidentesService } from "../../services/residentes.service";
import { filter } from 'rxjs/operators'
@Component({
  selector: 'app-lista-residentes',
  templateUrl: './lista-residentes.page.html',
  styleUrls: ['./lista-residentes.page.scss'],
})
export class ListaResidentesPage implements OnInit {

  residentes:any;
  residentesBD:any;
  usuario:any;
  buscarQuery:any;
  cargando = true;
  constructor(
    private residentesService: ResidentesService, 
    private authService: AuthService,
    private router:Router) { this.onViewEnter() }


  onViewEnter() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((route: NavigationEnd) => {
        //console.log('Route: '+route.url)
        if(route.url == '/home-residentes'){
          this.cargando = true;
          this.residentes = this.residentesBD = null;
          this.residentesService.getResidentes(this.usuario.residencia.id).subscribe(residentes => {
            this.cargando = false;
            this.residentes = this.residentesBD = residentes['data'];
            console.log(this.residentes);
            this.buscarQuery = '';
            }
          );
          this.usuario = this.authService.usuario;
        
        }
          //console.log('Route: '+route.url)

    })
    }

  ngOnInit() {
    //console.log('nGInit');
    //console.log(this.authService.usuario);
    this.usuario = this.authService.usuario;
    /*this.residentesService.getResidentes(this.usuario.residencia.id).subscribe(residentes => {

      }
    );*/
    //console.log('oninit')
  }


  ionViewDidEnter() {
    //console.log('ionViewDid');
    //console.log(this.authService.usuario);
    this.usuario = this.authService.usuario;
    /*this.residentesService.getResidentes(this.usuario.residencia.id).subscribe(residentes => {
      this.residentes = residentes['data'];
      console.log(this.residentes);
      }
    );*/
  }

  objectKeys(array){
    return Object.keys(array);
  }

  buscar(){
    console.log(this.buscarQuery);
    this.residentesBD = this.residentes.filter(item => item.nombre.toLowerCase().includes(this.buscarQuery.toLowerCase()));
  }

}
