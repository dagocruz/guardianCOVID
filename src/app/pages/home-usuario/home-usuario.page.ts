import { ColaboradoresService } from './../../services/colaboradores.service';
import { ResidentesService } from 'src/app/services/residentes.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router,NavigationEnd, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators'

import { AuthService } from "../../services/auth.service";
import { Storage } from "@ionic/storage";
import { IonTabs } from "@ionic/angular";


@Component({
  selector: 'app-home-usuario',
  templateUrl: './home-usuario.page.html',
  styleUrls: ['./home-usuario.page.scss'],
})
export class HomeUsuarioPage implements OnInit {

  @ViewChild('tabs', {static:false}) tabs: IonTabs;
  selectedTab = 'historial';
  constructor( 
    private residentesService: ResidentesService,
    private colaboradoresService: ColaboradoresService,
    private router: Router
   ) {  }

  ngOnInit() {

  }

  setActiveTab(){
    //console.log(this.tabs.getSelected());
    this.selectedTab = this.tabs.getSelected();
  }




}
