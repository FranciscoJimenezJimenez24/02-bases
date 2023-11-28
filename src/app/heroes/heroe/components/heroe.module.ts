import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListaComponent } from './lista/lista.component';
import { CommonModule } from '@angular/common';
import { DbzModule } from 'src/app/dbz/dbz.module';

@NgModule({
  declarations:[
    HeroeComponent,ListaComponent
  ],
  exports:[
    HeroeComponent,ListaComponent
  ],
  imports:[
    CommonModule,
  ],

})
export class HereoModule{

}
//fd
