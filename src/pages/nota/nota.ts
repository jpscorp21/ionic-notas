import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotaAgregarPage } from '../nota-agregar/nota-agregar';


@IonicPage()
@Component({
  selector: 'page-nota',
  templateUrl: 'nota.html',
})


export class NotaPage {  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotaPage');
  }

  irAgregarNota() {
    this.navCtrl.push(NotaAgregarPage);
  }
}
