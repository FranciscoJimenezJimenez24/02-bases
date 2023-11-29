import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-pages-component.html'
})

export class MainPageComponent {
  public personajes: Personaje[]=[
    {
      nombre:"Krilin",
      fuerza: 500
    },
    {
      nombre:"Goku",
      fuerza:10000
    },
    {
      nombre:"Vegeta",
      fuerza:8000
    },
    {
      nombre:"Picolo",
      fuerza:6000
    }
  ];
}
