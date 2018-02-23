import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-nota-agregar',
  templateUrl: 'nota-agregar.html',
})
export class NotaAgregarPage {

  public title: string = "Nueva Nota";

  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl: ToastController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad NotaAgregarPage');
  }


  agregarNota(formulario: NgForm) {
    this.mensajeToast("Nota Agregada");
    console.log(formulario);
    formulario.resetForm();
  }


  mensajeToast(mensaje: string) {    
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: 'bottom'
    }).present();
  }

  
}
