import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { AuthService } from "../../services/auth.service";
import { Storage } from "@ionic/storage";

import { Chart } from "chart.js";
import * as moment from "moment";

import { ToastController, PopoverController } from '@ionic/angular';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart,
  ApexStroke,
  ApexPlotOptions,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  colors: any;
  plotOptions: ApexPlotOptions,
  yAxis:ApexYAxis,
  xAxis:ApexXAxis,
  tooltip:ApexTooltip,
  legend:ApexLegend
};


@Component({
  selector: 'app-usuario-historial',
  templateUrl: './usuario-historial.page.html',
  styleUrls: ['./usuario-historial.page.scss'],
})
export class UsuarioHistorialPage implements OnInit {
  
  @ViewChild('canvasTemperatura', {static:false}) canvasTemperatura;
  @ViewChild('canvasPulso', {static:false}) canvasPulso;
  @ViewChild('canvasFrecuencia', {static:false}) canvasFrecuencia;
  @ViewChild('canvasPresion', {static:false}) canvasPresion;
  @ViewChild('canvasSaturacion', {static:false}) canvasSaturacion;

  @ViewChild("chart",{static:false}) chart: ChartComponent;
  
  

  public graficaSintomas: Partial<ChartOptions> = {
    series: [ ],
    colors: ['#008FFB','#FF4560'],
    chart: {
      height: 400,
      type: 'rangeBar',
      toolbar:{
        show:false
      }
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    xAxis: {
      type: 'datetime',
      //max: new Date().getTime(),
      labels:{
        format:'dd/MM/yyyy'
      }
    },
    tooltip:{
      x:{
        format:'dd/MM @ HH:mm'
      },
      y: {
        title: {
            formatter: (seriesName) => '',
        },
      }
    },
    legend:{
      position:'top'
    },
    dataLabels:{
      enabled: true,
      formatter: function(val, opts) {
        //var label = opts.w.globals.labels[opts.dataPointIndex]
        var a = moment(val[0])
        var b = moment(val[1])
        var diff = moment.duration(b.diff(a, 'hours'),'hours').humanize()
        //return diff + (diff > 1 ? ' horas' : ' horas')
        return diff;
      },
      style: {
        colors: ['#f3f4f5', '#fff']
      }
    }
  };


  usuario:any = null;
  fecha = Date.now();

  graficaTemperatura:any;
  graficaPulso:any;
  graficaFrecuencia:any;
  graficaPresion:any;
  graficaSaturacion:any;

  edad:any;

  configSignosVitales:any = {
    labels: [],
    temperatura: {
      label:'Temperatura',
      data: [],
      backgroundColor:'rgba(255, 124, 56,0.3)',
      borderColor: 'rgb(255, 124, 56)',
      borderWidth: 1
    },
    pulso: {
      label:'Pulso arterial',
      data: [],
      backgroundColor:'rgba(224, 62, 54,0.3)',
      borderColor: 'rgb(224, 62, 54)',
      borderWidth: 1
    },
    frecuencia_respiratoria:{
      label:'Frecuencia respiratoria',
      data: [],
      backgroundColor:'rgba(184, 13, 87,0.3)',
      borderColor: 'rgb(184, 13, 87)',
      borderWidth: 1
    },
    saturacion_oxigeno:{
      label:'Saturación de oxígeno',
      data: [],
      backgroundColor:'rgba(44, 0, 62,0.3)',
      borderColor: 'rgb(44, 0, 62)',
      borderWidth: 1
    }
  }

  configDataPresion = {
    presion_arterial:{
      label:'Sistólica',
      data: [],
      backgroundColor:'rgba(112, 9, 97,0.3)',
      borderColor: 'rgb(112, 9, 97)',
      borderWidth: 1
    },
    presion_arterial_disto:{
      label:'Diastólica',
      data: [],
      backgroundColor:'rgba(255, 9, 97,0.3)',
      borderColor: 'rgb(112, 9, 97)',
      borderWidth: 1
    },
  }

  labelSintomas:any = {
    tos:{
      name:'Tos',
    },
    fatiga:{
      name:'Fatiga',
    },
    fiebre:{
      name:'Fiebre',
    },
    dificultad_respirar:{
      name:'Dificultad para respirar',
    },
    perdida_olfato_gusto:{
      name:'Perdida de olfato y gusto',
    },
    dolor_pecho:{
      name:'Dolor de pecho'
    },
    hipoxemia:{
      name:'Hipoxemia'
    },
    artalgias:{
      name:'Dolor articular'
    },
    mialgias:{
      //name:'Cuerpo cortado/Dolor muscular'
      name:'Cuerpo cortado'
    },
    odinofagia:{
      name:'Dolor o ardor de garganta'
    },
    conjuntivitis:{
      name:'Dolor o ardor de ojos'
    },
    rinorrea:{
      name:'Escurrimiento nasal'
    },
    dolor_cabeza:{
      name:'Dolor de cabeza'
    },
    diarrea:{
      name:'Diarrea'
    },
    delirio:{
      name:'Delirio'
    }
  };



  constructor(
    private authService: AuthService, 
    private storage: Storage,
    private toastController: ToastController,
    private popOverController: PopoverController
  ) { moment.locale('es'); }

  ngOnInit() {
    
    this.authService.getUsuarioData().subscribe(usuario => {
      this.authService.usuario = usuario['data'];
      this.usuario = usuario['data'];
      this.edad = moment().diff(moment(this.usuario.fecha_nacimiento),'year');
      //console.log('OnInit: '+this.authService.usuario);
      //this.actualizarDatosGraficas(); 
      //this.crearGraficaSignosVitales(); 
      
      this.actualizarDatosGraficasSignosVitales();
      this.crearGraficasSignosVitales();
      this.actualizarDatosSintomas();
    });
  }

  ionViewDidEnter() {
    //console.log('ionView: '+this.authService.usuario);
    if(this.authService.usuario){
      this.usuario = this.authService.usuario;
      this.edad = moment().diff(moment(this.usuario.fecha_nacimiento),'year');
      //this.actualizarDatosGraficas();
      //this.crearGraficaSintomasCOVID();

      this.actualizarDatosGraficasSignosVitales();
      this.actualizarDatosSintomas();
      if(this.graficaTemperatura)
        this.graficaTemperatura.update();
      if(this.graficaPulso)
        this.graficaPulso.update();
      if(this.graficaFrecuencia)
        this.graficaFrecuencia.update();
      if(this.graficaPresion)
        this.graficaPresion.update();
      if(this.graficaSaturacion)
        this.graficaSaturacion.update();  
    }
  }

  actualizarDatosSintomas(){
    var data=[];
    this.graficaSintomas.series = [];

    for(let key in this.labelSintomas){
      if(this.usuario.sintomas_covid.hasOwnProperty(key)){
        var sintomas = this.usuario.sintomas_covid[key]; 

        for(let i = 0; i<sintomas.length; i++){
          if(i%2 == 0)
            if((i+1)<sintomas.length)
              data.push({fillColor: '#008FFB',x:this.labelSintomas[key].name, y:[new Date(sintomas[i].fecha).getTime()+(moment(sintomas[i].fecha).utcOffset()*60*1000),new Date(sintomas[i+1].fecha).getTime()+(moment(sintomas[i+1].fecha).utcOffset()*60*1000)]});
            else
              data.push({fillColor: '#FF4560',x:this.labelSintomas[key].name, y:[new Date(sintomas[i].fecha).getTime()+(moment(sintomas[i].fecha).utcOffset()*60*1000),new Date(moment().format()).getTime()+(moment().utcOffset()*60*1000)]});
        }
      }
    }
    this.graficaSintomas.series.push({name:'Inactivo',data:data});
    this.graficaSintomas.series.push({name:'Activo',data:[]});
  }

  actualizarDatosGraficasSignosVitales(){
    if(this.usuario.signos_vitales['presion_arterial']){
      this.configDataPresion['presion_arterial'].data = [];
      this.configDataPresion['presion_arterial_disto'].data = [];
      for(let registro of this.usuario.signos_vitales['presion_arterial']){
        this.configDataPresion['presion_arterial'].data.push({x:registro.fecha,y:registro.valor_1});
        this.configDataPresion['presion_arterial_disto'].data.push({x:registro.fecha,y:registro.valor_2});
      }
      //console.log(this.configSignosVitales['temperatura'].data);
    }

    for(let signoVital in this.configSignosVitales){
      if(this.usuario.signos_vitales[signoVital]){
        this.configSignosVitales[signoVital].data = [];
        for(let registro of this.usuario.signos_vitales[signoVital]){
          this.configSignosVitales[signoVital].data.push({x:registro.fecha,y:registro.valor_1});
        }
        //console.log(this.configSignosVitales[signoVital].data);
      }
    }

    
  }

  crearGraficasSignosVitales(){

    if(this.configSignosVitales['temperatura'].data.length)
      var referenciaFiebre = {
        label:'fiebre',
        data: [{x:this.configSignosVitales['temperatura'].data[0].x,y:37.8},{x:this.configSignosVitales['temperatura'].data[this.configSignosVitales['temperatura'].data.length-1].x,y:37.8}],
        borderColor: '#FF4560',
        borderWidth: 2,
        fill:false,
        borderDash:[3, 3],
        pointRadius:0
      };
    
    if(this.configSignosVitales['saturacion_oxigeno'].data.length)
      var referenciaHipoxemia = {
        label:'hipoxemia',
        data: [{x:this.configSignosVitales['saturacion_oxigeno'].data[0].x,y:90},{x:this.configSignosVitales['saturacion_oxigeno'].data[this.configSignosVitales['saturacion_oxigeno'].data.length-1].x,y:90}],
        borderColor: '#FF4560',
        borderWidth: 2,
        fill:false,
        borderDash:[3, 3],
        pointRadius:0
      };


    if(this.configSignosVitales['temperatura'].data.length)
      this.graficaTemperatura = new Chart(this.canvasTemperatura.nativeElement,{
        type:'line',
        data:{
          datasets:[
            this.configSignosVitales['temperatura'],referenciaFiebre
          ]
        },
        options: {
          responsive:true,
          scales:{
            xAxes:[{
              type: 'time',
              time:{
                unit:'day',
                displayFormats:{
                  day: 'DD/MM'
                },
                tooltipFormat:'DD/MM/YYYY HH:mm'
              }
            }],
            yAxes:[{
              scaleLabel:{
                display:true,
                labelString:'grados centigrados'
              },
              ticks:{
                min:30,
                max:42
              }
            }]
          }
        }
      });
    
    if(this.configSignosVitales['pulso'].data.length)
      this.graficaPulso = new Chart(this.canvasPulso.nativeElement,{
        type:'line',
        data:{
          datasets:[
            this.configSignosVitales['pulso']
          ]
        },
        options: {
          responsive:true,
          scales:{
            xAxes:[{
              type: 'time',
              time:{
                unit:'day',
                displayFormats:{
                  day: 'DD/MM'
                },
                tooltipFormat:'DD/MM/YYYY HH:mm'
              }
            }],
            yAxes:[{
              scaleLabel:{
                display:true,
                labelString:'latidos/minuto'
              },
              ticks:{
                min:40,
                max:160
              }
            }]
          }
        }
      });
    
    if(this.configSignosVitales['frecuencia_respiratoria'].data.length)
      this.graficaFrecuencia = new Chart(this.canvasFrecuencia.nativeElement,{
        type:'line',
        data:{
          datasets:[
            this.configSignosVitales['frecuencia_respiratoria']
          ]
        },
        options: {
          responsive:true,
          scales:{
            xAxes:[{
              type: 'time',
              time:{
                displayFormats:{
                  day: 'DD/MM'
                },
                unit: 'day',
                tooltipFormat:'DD/MM/YYYY HH:mm'
              }
            }],
            yAxes:[{
              scaleLabel:{
                display:true,
                labelString:'respiraciones/minuto'
              },
              ticks:{
                min:0,
                max:50
              }
            }]
          }
        }
      });

    if(this.configSignosVitales['saturacion_oxigeno'].data.length)
      this.graficaSaturacion = new Chart(this.canvasSaturacion.nativeElement,{
        type:'line',
        data:{
          datasets:[
            this.configSignosVitales['saturacion_oxigeno'],referenciaHipoxemia
          ]
        },
        options: {
          responsive:true,
          scales:{
            xAxes:[{
              type: 'time',
              time:{
                unit:'day',
                displayFormats:{
                  day: 'DD/MM'
                },
                tooltipFormat:'DD/MM/YYYY HH:mm'
              }
            }],
            yAxes:[{
              scaleLabel:{
                display:true,
                labelString:'porcentaje (%)'
              },
              ticks:{
                min:70,
                max:100
              }
            }]
          }
        }
      });

    if(this.configDataPresion['presion_arterial'].data.length) 
      this.graficaPresion = new Chart(this.canvasPresion.nativeElement,{
        type:'line',
        data:{
          datasets:[
            this.configDataPresion['presion_arterial'],this.configDataPresion['presion_arterial_disto']
          ]
        },
        options: {
          responsive:true,
          scales:{
            xAxes:[{
              type: 'time',
              time:{
                unit:'day',
                displayFormats:{
                  day: 'DD/MM'
                },
                tooltipFormat:'DD/MM/YYYY HH:mm'
              }
            }],
            yAxes:[{
              scaleLabel:{
                display:true,
                labelString:'presión arterial (mmHg)'
              },
              ticks:{
                min:60,
                max:180
              }
            }]
          }
        }
      });
    
  }

  pantallaQR(){
    console.log('entrar QR');
  }

}
