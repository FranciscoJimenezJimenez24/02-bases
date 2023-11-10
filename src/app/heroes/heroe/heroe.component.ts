import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  public nombre:string="Goku";
  public edad:number=56;

  public get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }

  public getDescripcionHeroe():string{
    return `${this.nombre}-${this.edad}`;
  }

  cambiarNombre(){
    this.nombre= "Kakarot"
  }

  cambiarEdad(){
    this.edad= 76
  }

}

