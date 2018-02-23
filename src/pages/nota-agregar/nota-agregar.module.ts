import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotaAgregarPage } from './nota-agregar';

@NgModule({
  declarations: [
    NotaAgregarPage,
  ],
  imports: [
    IonicPageModule.forChild(NotaAgregarPage),
  ],
})
export class NotaAgregarPageModule {}
