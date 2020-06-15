import { AuthService } from './../../services/auth.service';
import { AyudaAntecedenteComponent } from './../../components/ayuda-antecedente/ayuda-antecedente.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ResidentesService } from "../../services/residentes.service";
import { ToastController, PopoverController } from "@ionic/angular";
import * as moment from "moment";



@Component({
  selector: 'app-nuevo-residente',
  templateUrl: './nuevo-residente.page.html',
  styleUrls: ['./nuevo-residente.page.scss'],
})
export class NuevoResidentePage implements OnInit {

  datosResidenteForm: FormGroup;
  today: string;
  usuario:any;

  infoAyuda = [
    {
      titulo:'Inmunosupresores', 
      texto:'Consumo regular de medicamentos que interfieren con la función inmunológica, tales como prednisona, deflazacort, metilprednisolona, dexametasona, hidrocortisona, azatioprina, metotrexato, tacrolimus, micofenolato de mofetilo, ciclosporina y, en general, fármacos utilizados en quimioterapia para el cáncer o en el tratamiento de enfermedades autoinmunes o en personas receptoras de trasplantes de órganos.'},
    {
      titulo: 'Deterioro funcional',
      texto:'Aparición o empeoramiento de confusión, incontinencia, caídas, deterioro de la movilidad, pobre ingesta de alimentos o falta de cooperación con el personal de la residencia.'
    }
  ];

  constructor(private formBuilder: FormBuilder, 
    private residentesService:ResidentesService, 
    private toastController: ToastController,
    private popOverController: PopoverController,
    private authService: AuthService) { }

  ngOnInit() {
    this.usuario = this.authService.usuario;
    let date = new Date();
    let mes = `${date.getMonth()+1}`;
    let dia = `${date.getDate()}`;
    if(date.getMonth()<10)
      mes = `0${date.getMonth()+1}`;
    if(date.getDate()<10)
      dia = `0${date.getDate()}`;

    this.today = `${date.getFullYear()}-${mes}-${dia}`;
    this.datosResidenteForm = this.formBuilder.group({
      nombre:['',[Validators.required]],
      fecha_nacimiento:['',[Validators.required]],
      genero:['',[Validators.required]],
      diabetes:[false],
      hipertension:[false],
      infarto:[false],
      cardiaca:[false],
      //cardiovascular:[false],
      inmunosupresores:[false],
      pulmonar:[false],
      hepatica:[false],
      asma:[false],
      renal:[false],
      tabaquismo_activo:[false],
      tabaquismo_inactivo:[false],
      cancer:[false],
      vih:[false],
      autoinmune:[false],
      obesidad:[false],
      demencia:[false],
      dependiente:[false],
      deterioro_funcional:[false]
    });
    //this.datosResidenteForm.reset();
    //console.log(this.datosResidenteForm.value);
  }

  registrarResidente(){
    let datosResidente:any = {...this.datosResidenteForm.value, residencia:{id:this.usuario.residencia.id}}
    //this.residentesService.registrar(this.datosResidenteForm.value).subscribe(data => {
    this.residentesService.registrar({data:datosResidente}).subscribe(data => {
      let residente = data['data'];
      let toast = this.toastController.create({
        message: `El residente ${residente['nombre']} ha sido agregado`,
        duration: 3000
      });
  
      toast.then(toast => toast.present());
      this.datosResidenteForm.reset();
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

  getToday(){
    return moment().format()
  }



}
