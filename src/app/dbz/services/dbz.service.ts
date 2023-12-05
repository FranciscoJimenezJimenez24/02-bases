import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';

@Injectable({providedIn: 'root'})
export class DBZService {
  constructor() { }

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

  public onNewPersonaje(personaje:Personaje):void{
    console.log("MainPage");
    console.log(personaje);
    this.personajes.push(personaje)
  }

  public deletePersonaje(index:number):void{
    this.personajes.splice(index,1)
  }
}
