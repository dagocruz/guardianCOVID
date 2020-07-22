import { NavController } from '@ionic/angular';
import { ColaboradoresService } from './../../services/colaboradores.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Residente } from 'src/app/models/Residente';
import { ResidentesService } from "src/app/services/residentes.service";

@Component({
  selector: 'app-colaborador-info',
  templateUrl: './colaborador-info.page.html',
  styleUrls: ['./colaborador-info.page.scss'],
})
export class ColaboradorInfoPage implements OnInit {

  @Input() colaborador:any;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private colaboradoresService: ColaboradoresService, 
    private router:Router,
    private authService:AuthService,
    private navController: NavController) { }

  ngOnInit() {  
    this.getColaborador();
  }

  getColaborador(): void {
    //Cuando este tratando de hacer bind antes del ngOnInit utilizar {{object?.value}}
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.colaboradoresService.getColaborador(id).subscribe(colaborador => { 
      this.colaborador = colaborador['data']; 
      this.colaboradoresService.colaborador = colaborador['data'];
      //console.log(this.colaborador);
      //this.router.navigate([`colaboradores/${id}/historial`]);
      this.navController.navigateForward([`colaboradores/${id}/historial`]);
    });
  
  }

}
