import "@angular/compiler"
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-pages-component';
import { ListaDBZComponent } from './components/listaDBZ/listaDBZ.component';
import { AddPersonajeComponent } from './components/addPersonaje/addPersonaje.component';
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [MainPageComponent,ListaDBZComponent,AddPersonajeComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[MainPageComponent]
})
export class DbzModule { }
