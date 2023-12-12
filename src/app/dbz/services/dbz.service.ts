import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';
import { v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})
export class DBZService {
  constructor() { }

  public personajes: Personaje[]=[
    {
      id: uuid(),
      nombre:"Krilin",
      fuerza: 500
    },
    {
      id: uuid(),
      nombre:"Goku",
      fuerza:10000
    },
    {
      id: uuid(),
      nombre:"Vegeta",
      fuerza:8000
    },
    {
      id: uuid(),
      nombre:"Picolo",
      fuerza:6000
    }
  ];

  public addPersonaje(personaje:Personaje):void{
    const newPersonaje:Personaje={...personaje,id:uuid()}
    this.personajes.push(newPersonaje)
  }

  /*public deletePersonaje(index:number):void{
    this.personajes.splice(index,1)
  }*/

  public deletePersonajeById(id:string):void{
    this.personajes=this.personajes.filter(personaje=>personaje.id!==id)
  }
}
