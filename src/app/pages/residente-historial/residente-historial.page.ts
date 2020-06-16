import { ResidentesService } from "../../services/residentes.service";
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
  ApexLegend,
  ApexMarkers,
  ApexFill
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
  legend:ApexLegend,
  markers:ApexMarkers,
  fill:ApexFill
};

@Component({
  selector: 'app-residente-historial',
  templateUrl: './residente-historial.page.html',
  styleUrls: ['./residente-historial.page.scss'],
})
export class ResidenteHistorialPage implements OnInit {

   
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

  options: Partial<ChartOptions> = {
    series: [{
    name: 'XYZ MOTORS',
    data: [
      [1327359600000,30.95],
      [1327446000000,31.34],
      [1327532400000,31.18],
      [1327618800000,31.05],
      [1327878000000,31.00],
      [1327964400000,30.95],
      [1328050800000,31.24],
      [1328137200000,31.29],
      [1328223600000,31.85],
      [1328482800000,31.86],
      [1328569200000,32.28],
      [1328655600000,32.10],
      [1328742000000,32.65],
      [1328828400000,32.21],
      [1329087600000,32.35],
      [1329174000000,32.44],
      [1329260400000,32.46],
      [1329346800000,32.86],
      [1329433200000,32.75],
      [1329778800000,32.54],
      [1329865200000,32.33],
      [1329951600000,32.97],
      [1330038000000,33.41],
      [1330297200000,33.27],
      [1330383600000,33.27],
      [1330470000000,32.89],
      [1330556400000,33.10],
      [1330642800000,33.73],
      [1330902000000,33.22],
      [1330988400000,31.99],
      [1331074800000,32.41],
      [1331161200000,33.05],
      [1331247600000,33.64],
      [1331506800000,33.56],
      [1331593200000,34.22],
      [1331679600000,33.77],
      [1331766000000,34.17],
      [1331852400000,33.82],
      [1332111600000,34.51],
      [1332198000000,33.16],
      [1332284400000,33.56],
      [1332370800000,33.71],
      [1332457200000,33.81],
      [1332712800000,34.40],
      [1332799200000,34.63],
      [1332885600000,34.46],
      [1332972000000,34.48],
      [1333058400000,34.31],
      [1333317600000,34.70],
      [1333404000000,34.31],
      [1333490400000,33.46],
      [1333576800000,33.59],
      [1333922400000,33.22],
      [1334008800000,32.61],
      [1334095200000,33.01],
      [1334181600000,33.55],
      [1334268000000,33.18],
      [1334527200000,32.84],
      [1334613600000,33.84],
      [1334700000000,33.39],
      [1334786400000,32.91],
      [1334872800000,33.06],
      [1335132000000,32.62],
      [1335218400000,32.40],
      [1335304800000,33.13],
      [1335391200000,33.26],
      [1335477600000,33.58],
      [1335736800000,33.55],
      [1335823200000,33.77],
      [1335909600000,33.76],
      [1335996000000,33.32],
      [1336082400000,32.61],
      [1336341600000,32.52],
      [1336428000000,32.67],
      [1336514400000,32.52],
      [1336600800000,31.92],
      [1336687200000,32.20],
      [1336946400000,32.23],
      [1337032800000,32.33],
      [1337119200000,32.36],
      [1337205600000,32.01],
      [1337292000000,31.31],
      [1337551200000,32.01],
      [1337637600000,32.01],
      [1337724000000,32.18],
      [1337810400000,31.54],
      [1337896800000,31.60],
      [1338242400000,32.05],
      [1338328800000,31.29],
      [1338415200000,31.05],
      [1338501600000,29.82],
      [1338760800000,30.31],
      [1338847200000,30.70],
      [1338933600000,31.69],
      [1339020000000,31.32],
      [1339106400000,31.65],
      [1339365600000,31.13],
      [1339452000000,31.77],
      [1339538400000,31.79],
      [1339624800000,31.67],
      [1339711200000,32.39],
      [1339970400000,32.63],
      [1340056800000,32.89],
      [1340143200000,31.99],
      [1340229600000,31.23],
      [1340316000000,31.57],
      [1340575200000,30.84],
      [1340661600000,31.07],
      [1340748000000,31.41],
      [1340834400000,31.17],
      [1340920800000,32.37],
      [1341180000000,32.19],
      [1341266400000,32.51],
      [1341439200000,32.53],
      [1341525600000,31.37],
      [1341784800000,30.43],
      [1341871200000,30.44],
      [1341957600000,30.20],
      [1342044000000,30.14],
      [1342130400000,30.65],
      [1342389600000,30.40],
      [1342476000000,30.65],
      [1342562400000,31.43],
      [1342648800000,31.89],
      [1342735200000,31.38],
      [1342994400000,30.64],
      [1343080800000,30.02],
      [1343167200000,30.33],
      [1343253600000,30.95],
      [1343340000000,31.89],
      [1343599200000,31.01],
      [1343685600000,30.88],
      [1343772000000,30.69],
      [1343858400000,30.58],
      [1343944800000,32.02],
      [1344204000000,32.14],
      [1344290400000,32.37],
      [1344376800000,32.51],
      [1344463200000,32.65],
      [1344549600000,32.64],
      [1344808800000,32.27],
      [1344895200000,32.10],
      [1344981600000,32.91],
      [1345068000000,33.65],
      [1345154400000,33.80],
      [1345413600000,33.92],
      [1345500000000,33.75],
      [1345586400000,33.84],
      [1345672800000,33.50],
      [1345759200000,32.26],
      [1346018400000,32.32],
      [1346104800000,32.06],
      [1346191200000,31.96],
      [1346277600000,31.46],
      [1346364000000,31.27],
      [1346709600000,31.43],
      [1346796000000,32.26],
      [1346882400000,32.79],
      [1346968800000,32.46],
      [1347228000000,32.13],
      [1347314400000,32.43],
      [1347400800000,32.42],
      [1347487200000,32.81],
      [1347573600000,33.34],
      [1347832800000,33.41],
      [1347919200000,32.57],
      [1348005600000,33.12],
      [1348092000000,34.53],
      [1348178400000,33.83],
      [1348437600000,33.41],
      [1348524000000,32.90],
      [1348610400000,32.53],
      [1348696800000,32.80],
      [1348783200000,32.44],
      [1349042400000,32.62],
      [1349128800000,32.57],
      [1349215200000,32.60],
      [1349301600000,32.68],
      [1349388000000,32.47],
      [1349647200000,32.23],
      [1349733600000,31.68],
      [1349820000000,31.51],
      [1349906400000,31.78],
      [1349992800000,31.94],
      [1350252000000,32.33],
      [1350338400000,33.24],
      [1350424800000,33.44],
      [1350511200000,33.48],
      [1350597600000,33.24],
      [1350856800000,33.49],
      [1350943200000,33.31],
      [1351029600000,33.36],
      [1351116000000,33.40],
      [1351202400000,34.01],
      [1351638000000,34.02],
      [1351724400000,34.36],
      [1351810800000,34.39],
      [1352070000000,34.24],
      [1352156400000,34.39],
      [1352242800000,33.47],
      [1352329200000,32.98],
      [1352415600000,32.90],
      [1352674800000,32.70],
      [1352761200000,32.54],
      [1352847600000,32.23],
      [1352934000000,32.64],
      [1353020400000,32.65],
      [1353279600000,32.92],
      [1353366000000,32.64],
      [1353452400000,32.84],
      [1353625200000,33.40],
      [1353884400000,33.30],
      [1353970800000,33.18],
      [1354057200000,33.88],
      [1354143600000,34.09],
      [1354230000000,34.61],
      [1354489200000,34.70],
      [1354575600000,35.30],
      [1354662000000,35.40],
      [1354748400000,35.14],
      [1354834800000,35.48],
      [1355094000000,35.75],
      [1355180400000,35.54],
      [1355266800000,35.96],
      [1355353200000,35.53],
      [1355439600000,37.56],
      [1355698800000,37.42],
      [1355785200000,37.49],
      [1355871600000,38.09],
      [1355958000000,37.87],
      [1356044400000,37.71],
      [1356303600000,37.53],
      [1356476400000,37.55],
      [1356562800000,37.30],
      [1356649200000,36.90],
      [1356908400000,37.68],
      [1357081200000,38.34],
      [1357167600000,37.75],
      [1357254000000,38.13],
      [1357513200000,37.94],
      [1357599600000,38.14],
      [1357686000000,38.66],
      [1357772400000,38.62],
      [1357858800000,38.09],
      [1358118000000,38.16],
      [1358204400000,38.15],
      [1358290800000,37.88],
      [1358377200000,37.73],
      [1358463600000,37.98],
      [1358809200000,37.95],
      [1358895600000,38.25],
      [1358982000000,38.10],
      [1359068400000,38.32],
      [1359327600000,38.24],
      [1359414000000,38.52],
      [1359500400000,37.94],
      [1359586800000,37.83],
      [1359673200000,38.34],
      [1359932400000,38.10],
      [1360018800000,38.51],
      [1360105200000,38.40],
      [1360191600000,38.07],
      [1360278000000,39.12],
      [1360537200000,38.64],
      [1360623600000,38.89],
      [1360710000000,38.81],
      [1360796400000,38.61],
      [1360882800000,38.63],
      [1361228400000,38.99],
      [1361314800000,38.77],
      [1361401200000,38.34],
      [1361487600000,38.55],
      [1361746800000,38.11],
      [1361833200000,38.59],
      [1361919600000,39.60],
    ]
  }],
    chart: {
    type: 'area',
    stacked: false,
    height: 350,
    zoom: {
      type: 'x',
      enabled: true,
      autoScaleYaxis: true
    },
    toolbar: {
      autoSelected: 'zoom'
    }
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 3,
  },
  title: {
    text: 'Stock Price Movement',
    align: 'left'
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 90, 100]
    },
  },
  yAxis: {
    labels: {
      formatter: function (val) {
        return (val / 1000000).toFixed(0);
      },
    },
    title: {
      text: 'Price'
    },
  },
  xAxis: {
    type: 'datetime',
  },
  tooltip: {
    shared: false,
    y: {
      formatter: function (val) {
        return (val / 1000000).toFixed(0)
      }
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
    private popOverController: PopoverController,
    private residenteService: ResidentesService
  ) { moment.locale('es'); }

  ngOnInit() {
  
    if(this.residenteService.residente){
      this.usuario = this.residenteService.residente;
      this.edad = moment().diff(moment(this.usuario.fecha_nacimiento),'year');
      //this.actualizarDatosGraficasSignosVitales();
      //this.crearGraficasSignosVitales();
      //this.actualizarDatosSintomas();
    }
  }

  ionViewDidEnter() {
    //console.log('ionView: '+this.authService.usuario);
    if(this.residenteService.residente){
      this.usuario = this.residenteService.residente;
      this.edad = moment().diff(moment(this.usuario.fecha_nacimiento),'year');
      //this.actualizarDatosGraficas();
      //this.crearGraficaSintomasCOVID();
      this.actualizarDatosGraficasSignosVitales();
      this.actualizarDatosSintomas();
      //console.log(this.graficaTemperatura);
      this.crearGraficasSignosVitales();

      
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

  /*ngOnInit() {
    
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
  }*/

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
    if(data.length){
      this.graficaSintomas.series.push({name:'Inactivo',data:data});
      this.graficaSintomas.series.push({name:'Activo',data:[]});  
    }
  }

  actualizarDatosSignosVitales(){
    var data=[];
    this.options.series = [];
    for(let key in this.usuario.signos_vitales){
      
    }
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
                min:40,
                max:180
              }
            }]
          }
        }
      });
    
  }

}
