import { ColaboradoresService } from './../../services/colaboradores.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastController, PopoverController, IonSlides } from '@ionic/angular';
import { timer, Subscription } from "rxjs";

import * as moment from "moment";


@Component({
  selector: 'app-codigo-qr-colaborador',
  templateUrl: './codigo-qr-colaborador.page.html',
  styleUrls: ['./codigo-qr-colaborador.page.scss'],
})
export class CodigoQrColaboradorPage implements OnInit {

  @ViewChild('slides', {static: true}) slides: IonSlides;

  color:any;
  datosUsuarioForm: FormGroup;
  sintomas = {};
  data = {};
  dataTemperatura = {};
  usuario:any;
  tablaCategoria:any;
  qrCreado:any;
  qrData:any;
  infoQR:any;
  horas:any;
  minutos:any;
  segundos:number;
  tiempoActual:any;
  countDown:Subscription;
  tiempoExpiracion:any;
  slideOpts2 = {
    initialSlide: 0,
    speed: 400
  };
  slideOpts = {
    initialSlide: 0,
    speed: 600,
    on: {
      beforeInit() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}flip`);
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        swiper.params = Object.assign(swiper.params, overwriteParams);
        swiper.originalParams = Object.assign(swiper.originalParams, overwriteParams);
      },
      setTranslate() {
        const swiper = this;
        const { $, slides, rtlTranslate: rtl } = swiper;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          let progress = $slideEl[0].progress;
          if (swiper.params.flipEffect.limitRotation) {
            progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          }
          const offset$$1 = $slideEl[0].swiperSlideOffset;
          const rotate = -180 * progress;
          let rotateY = rotate;
          let rotateX = 0;
          let tx = -offset$$1;
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
            rotateX = -rotateY;
            rotateY = 0;
          } else if (rtl) {
            rotateY = -rotateY;
          }
  
           $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
  
           if (swiper.params.flipEffect.slideShadows) {
            // Set shadows
            let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
            if (shadowBefore.length === 0) {
              shadowBefore = swiper.$(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'left' : 'top'}"></div>`);
              $slideEl.append(shadowBefore);
            }
            if (shadowAfter.length === 0) {
              shadowAfter = swiper.$(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'right' : 'bottom'}"></div>`);
              $slideEl.append(shadowAfter);
            }
            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
          }
          $slideEl
            .transform(`translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
        }
      },
      setTransition(duration) {
        const swiper = this;
        const { slides, activeIndex, $wrapperEl } = swiper;
        slides
          .transition(duration)
          .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
          .transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
          let eventTriggered = false;
          // eslint-disable-next-line
          slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;
  
            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
            for (let i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      }
    }
  };
  constructor(
    private formBuilder: FormBuilder, 
    private authService:AuthService,
    private toastController: ToastController,
    private colaboradoresService: ColaboradoresService

  ) { 
   }

  ngOnInit() {

    this.usuario = this.colaboradoresService.colaborador;

    this.colaboradoresService.getQR(this.usuario.id).subscribe(qrs => {
      //console.log('getQR');
      //console.log(qrs);
      if(qrs['data'].length){
        let aux = qrs['data'][0];
        let duration:any = moment.duration((moment(aux['fecha_expiracion']).valueOf()-moment().valueOf()),'milliseconds');
        //console.log(moment(aux['fecha']).format());
        //console.log(moment().format());
        //console.log(duration/1000);
        if((duration-1000) > 1){
          this.colaboradoresService.infoQR = qrs['data'][0];
          this.infoQR = this.colaboradoresService.infoQR;
          this.qrData = JSON.stringify({id_QR:this.infoQR['id'],fecha_expiracion:this.infoQR['fecha_expiracion']});
          this.infoQR['creado'] = true;
          this.slides.slideTo(1);
          this.iniciarContador();
          //console.log(this.infoQR);
        }
        else{
          this.infoQR = {};
          this.infoQR['creado'] = false;
          this.infoQR['data'] = {};
          if(this.countDown){
            this.countDown.unsubscribe();
            this.countDown = null;
          }
        }
      }
    });
    
    
    this.datosUsuarioForm = this.formBuilder.group({
      tos:this.formBuilder.group({
        valor:[false],
        fecha:[moment().format()]
      }),
      fiebre:this.formBuilder.group({
        valor:[false],
        fecha:[moment().format()]
      }),
      dolor_cabeza: this.formBuilder.group({
        valor:[false],
        fecha:[moment().format()]
      }),
      dificultad_respirar:this.formBuilder.group({
        valor:[false],
        fecha:[moment().format()]
      }),
      odinofagia:this.formBuilder.group({
        valor:[false],
        fecha:[moment().format()]
      }),
      rinorrea:this.formBuilder.group({
        valor:[false],
        fecha:[moment().format()]
      }),
      conjuntivitis:this.formBuilder.group({
        valor:[false],
        fecha:[moment().format()]
      }),
      mialgias:this.formBuilder.group({
        valor:[false],
        fecha:[moment().format()]
      }),
      veraz:[false,[Validators.requiredTrue]]
    });

    this.actualizarSintomas();
    this.crearTablaEstatus();
    
  }

  ngOnDestroy(){
    if(this.countDown){
      this.countDown.unsubscribe();
      this.countDown=null;
    }
  }

  crearTablaEstatus(){
    this.tablaCategoria = new Array(4);
    var categorias1 = new Array(6);
    var categorias2 = new Array(6);
    var categorias3 = new Array(6);
    var categorias4 = new Array(6);
    categorias1[0] = "#28ba62";
    categorias1[1] = "#28ba62";
    categorias1[2] = "#28ba62";
    categorias1[3] = "#28ba62";
    categorias1[4] = "#28ba62";
    categorias1[5] = "#28ba62";
    this.tablaCategoria[0] = categorias1;
    categorias2[0] = "#28ba62";
    categorias2[1] = "#28ba62";
    categorias2[2] = "#28ba62";
    categorias2[3] = "#28ba62";
    categorias2[4] = "#28ba62";
    categorias2[5] = "#28ba62";
    this.tablaCategoria[1] = categorias2;
    categorias3[0] = "#ffc409";
    categorias3[1] = "#f07c00";
    categorias3[2] = "#f07c00";
    categorias3[3] = "#f07c00";
    categorias3[4] = "#f07c00";
    categorias3[5] = "#f07c00";
    this.tablaCategoria[2] = categorias3;
    categorias4[0] = "#f07c00";
    categorias4[1] = "#f07c00";
    categorias4[2] = "#eb445a";
    categorias4[3] = "#eb445a";
    categorias4[4] = "#eb445a";
    categorias4[5] = "#eb445a";
    this.tablaCategoria[3] = categorias4;

  }

  actualizarSintomas(){

    for(var key in this.usuario.sintomas_covid){
      if(this.datosUsuarioForm.value.hasOwnProperty(key)){
        let array_key = this.usuario.sintomas_covid[key];
        //console.log(array_key[array_key.length-1].valor);
        //this.datosUsuarioForm.controls[key].setValue({valor:array_key[array_key.length-1].valor, fecha:{value:array_key[array_key.length-1].fecha}});
        this.datosUsuarioForm.get(`${key}.valor`).setValue(array_key[array_key.length-1].valor);
        this.sintomas[key]=array_key[array_key.length-1];
      } 
     }
  }

  generarCodigo(){
    this.crearObjetoData();
    //this.registrarCodigoQR();
  }

  crearObjetoData(){
    this.data = {};
    for(var sintoma in this.datosUsuarioForm.value){
      if(this.sintomas[sintoma]){
        if(this.sintomas[sintoma].valor != this.datosUsuarioForm.value[sintoma].valor){
          this.data[sintoma]=[];
          this.data[sintoma].push(this.datosUsuarioForm.value[sintoma]);
        }
      }
      else{
        if(this.datosUsuarioForm.value[sintoma].valor!=false && this.datosUsuarioForm.value[sintoma].fecha!=null){
          this.data[sintoma]=[];
          this.data[sintoma].push(this.datosUsuarioForm.value[sintoma]);
        }
      }
    }
    //console.log(this.data);
    //console.log(this.dataTemperatura);
    if(this.data['fiebre']){
      delete this.data['fiebre'];
    }
    else{
      if(this.dataTemperatura['temperatura'])
        delete this.dataTemperatura['temperatura'];
    }
    if(Object.keys(this.data).length){
      //console.log(this.data);
      this.authService.registrarSintomas(this.usuario.id,{data:this.data}).subscribe(u => {

        if(Object.keys(this.dataTemperatura).length){
          this.authService.registrarSignosVitales(this.usuario.id,{data:this.dataTemperatura}).subscribe(u2 => {
            this.registrarCodigoQR();
            this.colaboradoresService.colaborador = u2['data'];
            this.usuario = this.colaboradoresService.colaborador;
            this.actualizarSintomas();

          });
        }
        else{
          this.registrarCodigoQR();
          this.colaboradoresService.colaborador = u['data'];
          this.usuario = u['data'];
          this.actualizarSintomas();
        }
      });
    }
    else{
      if(Object.keys(this.dataTemperatura).length){
        this.authService.registrarSignosVitales(this.usuario.id,{data:this.dataTemperatura}).subscribe(u2 => {
          this.registrarCodigoQR();
          this.colaboradoresService.colaborador = u2['data'];
          this.usuario = u2['data'];
          this.actualizarSintomas();

        });
      }
      else{
        //console.log('Generar código sin guardar sintomas');
        this.registrarCodigoQR();
      }
    }
  }

  registrarCodigoQR(){
    var criterio_1 = 0,criterio_2 = 0;
    for(var sintoma in this.datosUsuarioForm.value){
      if(this.datosUsuarioForm.value[sintoma].valor){
        if(sintoma == 'fiebre' || sintoma == 'dolor_cabeza' || sintoma == 'tos'){
          criterio_1++;
        }
        else
          if(sintoma == 'dificultad_respirar' || sintoma == 'odinofagia' || sintoma == 'rinorrea' || sintoma=='conjuntivitis' || sintoma=='mialgias')
            criterio_2++;
      }
    }
    //console.log(`c1= ${criterio_1}`);
    //console.log(`c2= ${criterio_2}`);
    this.color = this.tablaCategoria[criterio_1][criterio_2];
    if(this.datosUsuarioForm.value['fiebre'].valor && criterio_1 <2){
      this.color = '#ffc409';
    }
    
    var data= {};
    data['fecha_expiracion'] = moment().add(2,'hours').format();
    data['data'] = {color:this.color};
    //data['usuario'] = {id:this.usuario.id,nombre:this.usuario.nombre};
    
    this.colaboradoresService.registrarQR({data:data},this.usuario.id).subscribe(dataQR =>{
      console.log(dataQR);
      this.colaboradoresService.infoQR = dataQR['data'];
      this.infoQR = this.colaboradoresService.infoQR;
      this.infoQR['creado'] = true;
      this.qrData = JSON.stringify({id_QR:this.infoQR['id'],fecha:this.infoQR['fecha_expiracion']});

      let toast = this.toastController.create({
        message: `Se ha creado el código QR para ${this.usuario.nombre}.`,
        duration: 3000
      });
      
      toast.then(toast => toast.present());

      this.iniciarContador();
      this.slides.slideTo(1);

    });
  }



  checkData(sintoma){
    if(sintoma=='fiebre'){
      if(this.datosUsuarioForm.get(`${sintoma}.valor`).value == true){
        this.dataTemperatura['temperatura'] = [];
        this.dataTemperatura['temperatura'].push({valor_1:38,fecha:moment().format()});
      }
      else{
        this.dataTemperatura['temperatura'] = [];
        this.dataTemperatura['temperatura'].push({valor_1:36,fecha:moment().format()});
      }
    }
  }

  iniciarContador(){
    if(this.infoQR['creado']){
      if(this.countDown){
        this.countDown.unsubscribe();
        this.countDown = null;
       }    
      var duration:any = moment.duration((moment(this.colaboradoresService.infoQR['fecha_expiracion']).valueOf()-moment().valueOf()),'milliseconds');
      //console.log(moment(this.authService.infoQR['expiracion']).format());
      //console.log(moment().format()); 
      

      this.countDown = timer(0, 1000).subscribe(() => {
        //console.log(duration/1000);
        if((duration-1000) > 1){
          //console.log(this.countDown);
          duration = moment.duration(duration - 1000, 'milliseconds');
          this.tiempoExpiracion = moment(duration._data).format("HH:mm:ss");
          this.segundos=duration.seconds();
          this.horas = duration.hours();
          this.minutos = duration.minutes();
        }
        else{
          this.countDown.unsubscribe();
          this.slides.slideTo(0);
          this.infoQR = {};
          this.infoQR['creado'] = false;
          this.infoQR['data'] = {};
        }
      });
    }
  }

}
