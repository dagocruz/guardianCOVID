import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { PopoverController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

import * as moment from "moment";

@Component({
  selector: 'app-usuario-medidas',
  templateUrl: './usuario-medidas.page.html',
  styleUrls: ['./usuario-medidas.page.scss'],
})
export class UsuarioMedidasPage implements OnInit {

  datosUsuarioForm: FormGroup;
  edad:any;
  usuario:any = null;
  fecha = Date.now();
  ligaCOVIDMX = 'https://coronavirus.gob.mx/';

  constructor(
    private authService: AuthService,
    private storage: Storage,
    private toastController: ToastController,
    private popOverController: PopoverController,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit() {
    //this.authService.usuario = usuario['data'];
    this.usuario = this.authService.usuario
    this.edad = moment().diff(moment(this.usuario.fecha_nacimiento),'year');
    
    this.datosUsuarioForm = this.formBuilder.group({
      secretaria_salud:this.formBuilder.group({
        valor:[null],
        fecha:[null]
      }),
      consulta_medica:this.formBuilder.group({
        valor:[null],
        fecha:[null]
      }),
    });
  }

  registrarMedidas(){
    var data = {};
    for(let medida in this.datosUsuarioForm.value){
      if(this.datosUsuarioForm.value[medida].valor){
        let obj = [];
        obj.push({fecha:this.datosUsuarioForm.value[medida].fecha});
        data[medida]=obj;
      }
    }
    if(Object.keys(data).length){
      this.authService.registrarMedida(this.usuario.id,{data:data}).subscribe(usuario =>{
        this.authService.usuario = usuario["data"];
        this.usuario = usuario["data"];
        this.datosUsuarioForm.reset();
        let toast = this.toastController.create({
          message: `Las medidas de ${this.usuario.nombre} han sido registrados.`,
          duration: 3000
        });
        toast.then(toast => toast.present());
      });
    }
    else{
      let toast = this.toastController.create({
        message: 'Selecciona al menos una de las medidas.',
        color: 'danger',
        duration: 3000
      });
  
      toast.then(toast => toast.present());
    }
    console.log(data);
  }

  checkData(medida){
    this.datosUsuarioForm.get(`${medida}.fecha`).setValue(moment().format());
  }

  getToday(){
    return moment().format();
  }

}
