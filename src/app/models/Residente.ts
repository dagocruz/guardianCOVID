export interface Residente {
  _id:string,
  nombre: string,
  edad:number,
  genero: string,
  diabetes:boolean,
  cardiovascular:boolean,
  inmunosupresores:boolean,
  pulmonar:boolean,
  hepatica:boolean,
  asma:boolean,
  renal:boolean,
  tabaquismo:boolean,
  sospechoso:boolean,
  sintomasCOVID: [],
  signosVitales: []
}