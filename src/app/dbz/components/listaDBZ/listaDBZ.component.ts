import { Component, OnInit,Input } from '@angular/core';
import { Personaje } from '../../interfaces/personajes.interface';

@Component({
  selector: 'dbz-lista',
  templateUrl: 'listaDBZ.component.html'
})

export class ListaDBZComponent {
  @Input("miLista")
  public listaPersonajes:Personaje[]=[
    {
      nombre:"Trunks",
      fuerza:7000
    },
    {
      nombre:"Defaul",
      fuerza:0
    }
  ]
}
