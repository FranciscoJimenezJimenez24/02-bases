import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-pages-component.html'
})

export class MainPageComponent {
  constructor(private dbzService:DBZService){}

  get personajes():Personaje[]{
    return this.dbzService.personajes;
  }

  onDeletePersonaje(id:string):void{
    this.dbzService.deletePersonajeById(id);
  }

  onNewPersonaje(personaje:Personaje):void{
    this.dbzService.addPersonaje(personaje);
  }
}
