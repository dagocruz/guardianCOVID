import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-ayuda-antecedente',
  templateUrl: './ayuda-antecedente.component.html',
  styleUrls: ['./ayuda-antecedente.component.scss'],
})
export class AyudaAntecedenteComponent implements OnInit {

  titulo:any;
  texto:any;

  constructor( private popoverController: PopoverController, private navParams: NavParams) { }

  ngOnInit() {
    this.titulo = this.navParams.get('titulo');
    this.texto = this.navParams.get('texto');
    //console.log(this.navParams.get('data'));
  }

}
