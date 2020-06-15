import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastController, PopoverController } from "@ionic/angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AyudaAntecedenteComponent } from './../../components/ayuda-antecedente/ayuda-antecedente.component';
import * as moment from "moment";

@Component({
  selector: 'app-usuario-antecedentes',
  templateUrl: './usuario-antecedentes.page.html',
  styleUrls: ['./usuario-antecedentes.page.scss'],
})
export class UsuarioAntecedentesPage implements OnInit {

  usuario:any;
  fecha = Date.now();
  antecedentesForm: FormGroup;
  edad:any;
  infoAyuda = [
    {
      titulo:'Inmunosupresores', 
      texto:'Consumo regular de medicamentos que interfieren con la función inmunológica, tales como prednisona, deflazacort, metilprednisolona, dexametasona, hidrocortisona, azatioprina, metotrexato, tacrolimus, micofenolato de mofetilo, ciclosporina y, en general, fármacos utilizados en quimioterapia para el cáncer o en el tratamiento de enfermedades autoinmunes o en personas receptoras de trasplantes de órganos.'},
    {
      titulo: 'Deterioro funcional',
      texto:'Aparición o empeoramiento de confusión, incontinencia, caídas, deterioro de la movilidad, pobre ingesta de alimentos o falta de cooperación con el personal de la residencia.'
    }
  ];
  constructor(
    private authService:AuthService,
    private formBuilder: FormBuilder, 
    private toastController: ToastController,
    private popOverController: PopoverController
  ) { }

  ngOnInit() {
    this.usuario = this.authService.usuario;
    this.edad = moment().diff(moment(this.usuario.fecha_nacimiento),'year');
    this.inicializarFormulario(this.usuario);
    
  }

  ionViewDidEnter() {
    
    this.usuario = this.authService.usuario;
    this.edad = moment().diff(moment(this.usuario.fecha_nacimiento),'year');
    //this.crearGraficaSintomasCOVID();
    this.inicializarFormulario(this.usuario);
  }

  actualizarAntecedentes(){
    //console.log(this.antecedentesForm.value);
    this.authService.actualizarAntecedentes(this.usuario.id,{data:this.antecedentesForm.value}).subscribe(u => {
      //console.log(this.usuario);
      console.log(u);
      this.authService.usuario = u['data'];
      this.usuario = u['data'];
      let toast = this.toastController.create({
        message: `Los signos vitales de ${this.usuario.nombre} han sido registrados.`,
        duration: 3000
      });
      
      toast.then(toast => toast.present());
      this.inicializarFormulario(this.usuario);
    });
  }

  inicializarFormulario(u){
    this.antecedentesForm = this.formBuilder.group({
      diabetes:[u.diabetes],
      hipertension:[u.hipertension],
      infarto:[u.infarto],
      cardiaca:[u.cardiaca],
      //cardiovascular:[false],
      inmunosupresores:[u.inmunosupresores],
      pulmonar:[u.pulmonar],
      hepatica:[u.hepatica],
      asma:[u.asma],
      renal:[u.renal],
      tabaquismo_activo:[u.tabaquismo_activo],
      tabaquismo_inactivo:[u.tabaquismo_inactivo],
      cancer:[u.cancer],
      vih:[u.vih],
      autoinmune:[u.autoinmune],
      obesidad:[u.obesidad],
      demencia:[u.demencia],
      dependiente:[u.dependiente],
      deterioro_funcional:[u.deterioro_funcional]
    });
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
