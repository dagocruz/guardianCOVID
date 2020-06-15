import { AuthService } from './../../services/auth.service';
import { Residente } from './../../models/Residente';
import { Component, OnInit } from '@angular/core';

import { ResidentesService } from "../../services/residentes.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastController, PopoverController } from '@ionic/angular';
import * as moment from "moment";

@Component({
  selector: 'app-residente-valoracion',
  templateUrl: './residente-valoracion.page.html',
  styleUrls: ['./residente-valoracion.page.scss'],
})
export class ResidenteValoracionPage implements OnInit {

  datosUsuarioForm: FormGroup;
  today: string;
  usuario:any = null;
  fecha:number = Date.now();
  edad:any;


  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService, 
    private toastController: ToastController,
    private popOverController: PopoverController,
    private residenteService: ResidentesService
  ) { }

  ngOnInit() {
    this.usuario = this.residenteService.residente;
    this.fecha = Date.now();
    this.edad = moment().diff(moment(this.usuario.fecha_nacimiento),'year');

    this.datosUsuarioForm = this.formBuilder.group({
      temperatura:this.formBuilder.group({
        valor_1:[null],
        fecha:[null]
      }),
      pulso:this.formBuilder.group({
        valor_1:[null],
        fecha:[null]
      }),
      frecuencia_respiratoria:this.formBuilder.group({
        valor_1:[null],
        fecha:[null]
      }),
      saturacion_oxigeno:this.formBuilder.group({
        valor_1:[null],
        fecha:[null]
      }),
      presion_arterial:this.formBuilder.group({
        valor_1:[null],
        valor_2:[null],
        fecha:[null]
      })
    });
  }

  registrarSignosVitales(){
    var data = {};
    for(var signo in this.datosUsuarioForm.value){
      if(this.datosUsuarioForm.value.hasOwnProperty(signo)){
        
        if(this.datosUsuarioForm.value[signo].valor_1 && signo != 'presion_arterial'){
          let d=[];
          d.push(this.datosUsuarioForm.value[signo]);
          data[signo]=d;
        }
        else{
          if(signo == 'presion_arterial'){
            if(this.datosUsuarioForm.value[signo].valor_1 && this.datosUsuarioForm.value[signo].valor_2){
              let d=[];
              d.push(this.datosUsuarioForm.value[signo]);
              data[signo]=d;
            }
            else{
              if(this.datosUsuarioForm.value[signo].valor_1 && !this.datosUsuarioForm.value[signo].valor_2 || !this.datosUsuarioForm.value[signo].valor_1 && this.datosUsuarioForm.value[signo].valor_2){
                let toast = this.toastController.create({
                  message: `Se necesitan establecer los dos valores de presión arterial`,
                  color:'danger',
                  duration: 3000
                });
                toast.then(toast => toast.present());
                return;
              }
            }
          }
        }
      }
    }
    console.log(data);
    if(Object.keys(data).length){
      this.residenteService.registrarSignosVitales(this.usuario.id,{data:data}).subscribe(usuario => {
        //console.log(data[]);
        this.residenteService.residente = usuario["data"];
        this.usuario = usuario["data"];
        
        let toast = this.toastController.create({
          message: `Los signos vitales de ${this.usuario.nombre} han sido registrados.`,
          duration: 3000
        });
        
        toast.then(toast => toast.present());
        this.datosUsuarioForm.reset();
      });
    }
    else{
      let toast = this.toastController.create({
        message: `Debes de registrar al menos un signo vital.`,
        color: 'danger',
        duration: 3000
      });
      
      toast.then(toast => toast.present());
    }
  }

  checkData(medida){
    this.datosUsuarioForm.get(`${medida}.fecha`).setValue(moment().format());
  }

  getToday(){
    return moment().format();
  }

}
