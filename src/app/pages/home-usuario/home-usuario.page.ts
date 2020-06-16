import { ColaboradoresService } from './../../services/colaboradores.service';
import { ResidentesService } from 'src/app/services/residentes.service';
import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators'

import { AuthService } from "../../services/auth.service";
import { Storage } from "@ionic/storage";


@Component({
  selector: 'app-home-usuario',
  templateUrl: './home-usuario.page.html',
  styleUrls: ['./home-usuario.page.scss'],
})
export class HomeUsuarioPage implements OnInit {

  constructor( 
    private residentesService: ResidentesService,
    private colaboradoresService: ColaboradoresService,
    private router: Router
   ) {  }

  ngOnInit() {

  }




}
