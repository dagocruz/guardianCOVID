import { AuthService } from './../../services/auth.service';
import { Residente } from './../../models/Residente';
import { Component, OnInit } from '@angular/core';
import { ResidentesService } from 'src/app/services/residentes.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastController, PopoverController } from '@ionic/angular';
import { AyudaAntecedenteComponent } from './../../components/ayuda-antecedente/ayuda-antecedente.component';

import * as moment from "moment";

@Component({
  selector: 'app-residente-sintomas',
  templateUrl: './residente-sintomas.page.html',
  styleUrls: ['./residente-sintomas.page.scss'],
})
export class ResidenteSintomasPage implements OnInit {

  datosUsuarioForm: FormGroup;
  today: string;
  usuario:any;
  fecha:number = Date.now();
  sintomas = {};
  edad:any;
  data = {};
  procesando: boolean;
  infoAyuda = [
    {
      titulo: 'Confusión',
      texto:'El síntoma confusión se marca como positivo cuando están presentes los criterios 1 y 2, y al menos uno del 3 o 4.'
    }
  ];

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService, 
    private toastController: ToastController,
    private popOverController: PopoverController,
    private residenteService: ResidentesService
  ) { }

  ngOnInit() {
    this.usuario = this.residenteService.residente;
    this.edad = moment().diff(moment(this.usuario.fecha_nacimiento),'year');

    this.fecha = Date.now();
    this.today = moment().format(); 
    this.procesando = false;
      
    this.datosUsuarioForm = this.formBuilder.group({
      tos:this.formBuilder.group({
        valor:[this.sintomas['tos']?this.sintomas['tos'].valor:null],
        fecha:[this.sintomas['tos']?this.sintomas['tos'].fecha:null]
      }),
      fatiga:this.formBuilder.group({
        valor:[this.sintomas['fatiga']?this.sintomas['fatiga'].valor:null],
        fecha:[this.sintomas['fatiga']?this.sintomas['fatiga'].fecha:null]
      }),
      fiebre:this.formBuilder.group({
        valor:[this.sintomas['fiebre']?this.sintomas['fiebre'].valor:null],
        fecha:[this.sintomas['fiebre']?this.sintomas['fiebre'].fecha:null]
      }),
      dificultad_respirar:this.formBuilder.group({
        valor:[this.sintomas['dificultad_respirar']?this.sintomas['dificultad_respirar'].valor:null],
        fecha:[this.sintomas['dificultad_respirar']?this.sintomas['dificultad_respirar'].fecha:null]
      }),
      perdida_olfato_gusto:this.formBuilder.group({
        valor:[this.sintomas['perdida_olfato_gusto']?this.sintomas['perdida_olfato_gusto'].valor:null],
        fecha:[this.sintomas['perdida_olfato_gusto']?this.sintomas['perdida_olfato_gusto'].fecha:null]
      }),
      dolor_pecho:this.formBuilder.group({
        valor:[this.sintomas['dolor_pecho']?this.sintomas['dolor_pecho'].valor:null],
        fecha:[this.sintomas['dolor_pecho']?this.sintomas['dolor_pecho'].fecha:null]
      }),
      hipoxemia:this.formBuilder.group({
        valor:[this.sintomas['hipoxemia']?this.sintomas['hipoxemia'].valor:null],
        fecha:[this.sintomas['hipoxemia']?this.sintomas['hipoxemia'].fecha:null]
      }),
      artalgias:this.formBuilder.group({
        valor:[this.sintomas['artalgias']?this.sintomas['artalgias'].valor:null],
        fecha:[this.sintomas['artalgias']?this.sintomas['artalgias'].fecha:null]
      }),
      mialgias:this.formBuilder.group({
        valor:[this.sintomas['mialgias']?this.sintomas['mialgias'].valor:null],
        fecha:[this.sintomas['mialgias']?this.sintomas['mialgias'].fecha:null]
      }),
      odinofagia:this.formBuilder.group({
        valor:[this.sintomas['odinofagia']?this.sintomas['odinofagia'].valor:null],
        fecha:[this.sintomas['odinofagia']?this.sintomas['odinofagia'].fecha:null]
      }),
      rinorrea:this.formBuilder.group({
        valor:[this.sintomas['rinorrea']?this.sintomas['rinorrea'].valor:null],
        fecha:[this.sintomas['rinorrea']?this.sintomas['rinorrea'].fecha:null]
      }),
      conjuntivitis:this.formBuilder.group({
        valor:[this.sintomas['conjuntivitis']?this.sintomas['conjuntivitis'].valor:null],
        fecha:[this.sintomas['conjuntivitis']?this.sintomas['conjuntivitis'].fecha:null]
      }),
      dolor_cabeza: this.formBuilder.group({
        valor:[this.sintomas['dolor_cabeza']?this.sintomas['dolor_cabeza'].valor:null],
        fecha:[this.sintomas['dolor_cabeza']?this.sintomas['dolor_cabeza'].fecha:null]
      }),
      diarrea: this.formBuilder.group({
        valor:[this.sintomas['diarrea']?this.sintomas['diarrea'].valor:null],
        fecha:[this.sintomas['diarrea']?this.sintomas['diarrea'].fecha:null]
      }),
      cam: this.formBuilder.group({
        criterio_1:[this.sintomas['cam']?this.sintomas['cam'].criterio_1:false],
        criterio_2:[this.sintomas['cam']?this.sintomas['cam'].criterio_2:false],
        criterio_3:[this.sintomas['cam']?this.sintomas['cam'].criterio_3:false],
        criterio_4:[this.sintomas['cam']?this.sintomas['cam'].criterio_4:false],
        fecha:[this.sintomas['cam']?this.sintomas['cam'].fecha:null],
      })
    });

    this.actualizarSintomas();

  }

  ionViewDidEnter() {
    console.log('didEnter');
    this.usuario = this.residenteService.residente;
    this.edad = moment().diff(moment(this.usuario.fecha_nacimiento),'year');
    console.log(this.usuario);
    this.fecha = Date.now();
    this.today = moment().format(); 
    this.procesando = false;
    this.actualizarSintomas();
  }

  actualizarSintomas(){
    this.datosUsuarioForm.controls['fiebre']['controls']['valor'].enable();
    this.datosUsuarioForm.controls['hipoxemia']['controls']['valor'].enable();

    for(var key in this.usuario.sintomas_covid){
      //console.log(key);
      //console.log(this.datosUsuarioForm.value);
      if(this.datosUsuarioForm.value.hasOwnProperty(key)){
        let array_key = this.usuario.sintomas_covid[key];
        console.log(key);
        console.log(array_key[array_key.length-1].valor);
        //this.datosUsuarioForm.controls[key].setValue({valor:array_key[array_key.length-1].valor, fecha:{value:array_key[array_key.length-1].fecha}});
        this.datosUsuarioForm.get(`${key}.valor`).setValue(array_key[array_key.length-1].valor);
        this.datosUsuarioForm.get(`${key}.fecha`).setValue(array_key[array_key.length-1].fecha);
        this.datosUsuarioForm.controls[`${key}`]['controls']['fecha'].disable();
        this.sintomas[key]=array_key[array_key.length-1];
        if(key == 'fiebre' || key == 'hipoxemia'){
          this.datosUsuarioForm.controls[`${key}`]['controls']['valor'].disable();
        }
      } 
     }
     this.datosUsuarioForm.controls['fiebre']['controls']['valor'].disable();
     this.datosUsuarioForm.controls['fiebre']['controls']['fecha'].disable();
     this.datosUsuarioForm.controls['hipoxemia']['controls']['valor'].disable();
     this.datosUsuarioForm.controls['hipoxemia']['controls']['fecha'].disable();
     
     //console.log(this.usuario.cam);
     if(this.usuario.cam.length){
      this.datosUsuarioForm.get(`cam.criterio_1`).setValue(this.usuario.cam[this.usuario.cam.length-1].criterio_1);
      this.datosUsuarioForm.get(`cam.criterio_2`).setValue(this.usuario.cam[this.usuario.cam.length-1].criterio_2);
      this.datosUsuarioForm.get(`cam.criterio_3`).setValue(this.usuario.cam[this.usuario.cam.length-1].criterio_3);
      this.datosUsuarioForm.get(`cam.criterio_4`).setValue(this.usuario.cam[this.usuario.cam.length-1].criterio_4);
      this.datosUsuarioForm.get(`cam.fecha`).setValue(this.usuario.cam[this.usuario.cam.length-1].fecha);
      this.datosUsuarioForm.controls[`cam`]['controls']['fecha'].disable();

      this.sintomas['cam'] = this.usuario.cam[this.usuario.cam.length-1];

     }
    //console.log(this.datosUsuarioForm.value);
  }

  registrarSintomas(){
    this.crearObjetoData();

    if(Object.keys(this.data).length){
      //console.log(this.data);
      this.procesando = true;
      this.residenteService.registrarSintomas(this.usuario.id,{data:this.data}).subscribe(usuario => {
        if(this.validarObjetoCAM()){
          this.residenteService.registrarCAM(this.usuario.id,{data:[this.datosUsuarioForm.value['cam']]}).subscribe(usuario =>{
            this.residenteService.residente = usuario["data"];
            this.usuario = usuario["data"];
            this.data = {};
            this.actualizarSintomas();
            //console.log(this.usuario);
            let toast = this.toastController.create({
              message: `Los síntomas de ${this.usuario.nombre} han sido registrados.`,
              duration: 3000
            });
            this.procesando = false;
            toast.then(toast => toast.present());
          });
        }
        else{
          this.residenteService.residente= usuario["data"];
          this.usuario = usuario["data"];
          this.data = {};
          this.actualizarSintomas();
          console.log(this.usuario);
          let toast = this.toastController.create({
            message: `Los síntomas de ${this.usuario.nombre} han sido registrados.`,
            duration: 3000
          });
          this.procesando = false;
          toast.then(toast => toast.present());
        }
      });
    }
    else{
      if(this.validarObjetoCAM()){
        this.residenteService.registrarCAM(this.usuario.id,{data:[this.datosUsuarioForm.value['cam']]}).subscribe(usuario =>{
          this.residenteService.residente = usuario["data"];
          this.usuario = usuario["data"];
          this.data = {};
          this.actualizarSintomas();
          console.log(this.usuario);
          let toast = this.toastController.create({
            message: `Los síntomas de ${this.usuario.nombre} han sido registrados.`,
            duration: 3000
          });
          this.procesando = false;
          toast.then(toast => toast.present());
        });
      }
      else{
        let toast = this.toastController.create({
          message: 'Selecciona o actualiza al menos uno de los síntomas.',
          color: 'danger',
          duration: 3000
        });
    
        toast.then(toast => toast.present());
      }
    }
  }
  
  setDate(tipo,tipoFecha){
    if(this.datosUsuarioForm.value[tipo])
      this.datosUsuarioForm.controls[tipoFecha].setValue(new Date().toString());
    else
      this.datosUsuarioForm.controls[tipoFecha].setValue(null);
    console.log(this.datosUsuarioForm.value);
    console.log(tipoFecha+" = "+this.datosUsuarioForm.value[tipoFecha]);
  }

  checkData(sintoma){

    if(this.sintomas[sintoma])
      if(this.datosUsuarioForm.value[sintoma].valor != this.sintomas[sintoma].valor){
        //this.datosUsuarioForm.controls[sintoma].setValue({valor:this.datosUsuarioForm.value[sintoma].valor,fecha:moment().format()});
        this.datosUsuarioForm.get(`${sintoma}.fecha`).setValue(moment().format());
        this.datosUsuarioForm.get(`${sintoma}.fecha`).enable();
        //this.data[sintoma] = [];
        //this.data[sintoma].push(this.datosUsuarioForm.value[sintoma])  
      }
      else{
        //this.datosUsuarioForm.controls[sintoma].setValue({valor:this.datosUsuarioForm.value[sintoma].valor,fecha:this.sintomas[sintoma].fecha});
        this.datosUsuarioForm.get(`${sintoma}.fecha`).setValue(this.sintomas[sintoma].fecha);
        this.datosUsuarioForm.get(`${sintoma}.fecha`).disable();
        //delete this.data[sintoma];
      }
    else
      if(this.datosUsuarioForm.value[sintoma].valor){
        //this.datosUsuarioForm.controls[sintoma].setValue({valor:this.datosUsuarioForm.value[sintoma].valor,fecha:moment().format()});
        this.datosUsuarioForm.get(`${sintoma}.fecha`).setValue(moment().format());
        this.datosUsuarioForm.get(`${sintoma}.fecha`).enable();
        //this.data[sintoma] = [];
        //this.data[sintoma].push(this.datosUsuarioForm.value[sintoma]) 
      }
      else{
        //this.datosUsuarioForm.controls[sintoma].setValue({valor:this.datosUsuarioForm.value[sintoma].valor,fecha:null});
        this.datosUsuarioForm.get(`${sintoma}.fecha`).setValue(null);
        this.datosUsuarioForm.get(`${sintoma}.fecha`).disable();
        //delete this.data[sintoma];
      }
    //console.log(this.data);
  }

  crearObjetoData(){
    for(var sintoma in this.datosUsuarioForm.value){
      if(this.sintomas[sintoma]){
        if(this.sintomas[sintoma].valor != this.datosUsuarioForm.value[sintoma].valor){
          this.data[sintoma]=[];
          this.data[sintoma].push(this.datosUsuarioForm.value[sintoma]);
        }
      }
      else{
        if(this.datosUsuarioForm.value[sintoma].valor!=null && this.datosUsuarioForm.value[sintoma].fecha!=null){
          this.data[sintoma]=[];
          this.data[sintoma].push(this.datosUsuarioForm.value[sintoma]);
        }
      }
     
    }
  }

  validarObjetoCAM(){
    var sintoma = 'cam';
    var cambios = false;
    if(this.sintomas[sintoma]){
      for(let key in this.datosUsuarioForm.value[sintoma]){
        //console.log(this.datosUsuarioForm.value[sintoma][key]!= this.sintomas[sintoma][key] && key!='fecha');
        if(this.datosUsuarioForm.value[sintoma][key]!= this.sintomas[sintoma][key] && key!='fecha')
          cambios =true;
      }
    }
    else{
      for(let key in this.datosUsuarioForm.value[sintoma]){
        //console.log(this.datosUsuarioForm.value[sintoma][key])
        if(this.datosUsuarioForm.value[sintoma][key])
          cambios =true;
      }
    }
    return cambios;
  }

  checkCAM(criterio){
    var sintoma = 'cam';
    var cambios = false;
    //console.log(criterio)
    //console.log(this.sintomas);
    if(this.sintomas[sintoma]){
      for(let key in this.datosUsuarioForm.value[sintoma])
        if(this.datosUsuarioForm.value[sintoma][key]!= this.sintomas[sintoma][key] && key!='fecha')
          cambios =true;
      
      //console.log(this.datosUsuarioForm.value[sintoma][criterio])
    //console.log(cambios)
      if(cambios){
        //this.datosUsuarioForm.controls[sintoma].setValue({valor:this.datosUsuarioForm.value[sintoma].valor,fecha:moment().format()});
        if(this.datosUsuarioForm.get(`${sintoma}.fecha`).disabled){
          this.datosUsuarioForm.get(`${sintoma}.fecha`).setValue(moment().format());
          this.datosUsuarioForm.get(`${sintoma}.fecha`).enable();
        }
        //this.data[sintoma] = [];
        //this.data[sintoma].push(this.datosUsuarioForm.value[sintoma])  
      }
      else{
        //this.datosUsuarioForm.controls[sintoma].setValue({valor:this.datosUsuarioForm.value[sintoma].valor,fecha:this.sintomas[sintoma].fecha});
        //console.log(this.sintomas[sintoma].fecha);
        this.datosUsuarioForm.get(`${sintoma}.fecha`).setValue(this.sintomas[sintoma].fecha);
        this.datosUsuarioForm.get(`${sintoma}.fecha`).disable();
        //delete this.data[sintoma];
      }
    }
    else{
      for(let key in this.datosUsuarioForm.value[sintoma])
        if(this.datosUsuarioForm.value[sintoma][key])
          cambios =true;

      if(cambios){
        //this.datosUsuarioForm.controls[sintoma].setValue({valor:this.datosUsuarioForm.value[sintoma].valor,fecha:moment().format()});
        //if(this.datosUsuarioForm.get(`${sintoma}.fecha`).disabled){
          this.datosUsuarioForm.get(`${sintoma}.fecha`).setValue(moment().format());
          this.datosUsuarioForm.get(`${sintoma}.fecha`).enable();
        //}
        //else{

        //}
        //this.data[sintoma] = [];
        //this.data[sintoma].push(this.datosUsuarioForm.value[sintoma]) 
      }
      else{
        //this.datosUsuarioForm.controls[sintoma].setValue({valor:this.datosUsuarioForm.value[sintoma].valor,fecha:null});
        this.datosUsuarioForm.get(`${sintoma}.fecha`).setValue(null);
        this.datosUsuarioForm.get(`${sintoma}.fecha`).disable();
        //delete this.data[sintoma];
      }
    }
    //console.log(this.data)
  }

  getToday(){
    return moment().format();
  }

  async presentPopover(data: any) {
    const popover = await this.popOverController.create({
      component: AyudaAntecedenteComponent,
      //event: ev,
      componentProps: this.infoAyuda[data],
      translucent: true
    });

    return await popover.present();
  }

}
