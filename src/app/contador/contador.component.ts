//import { ContadorComponent } from './contador.component';
/*import {Component} from "@angular/core"

@Component( {
  selector:'app-contador',
  template:'<h1>Hola Mundo</h1>'
})
export class ContadorComponent{

}*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `<h1>{{title}}</h1>
            <hr>
            <h3>Contador:{{contador}}</h3>

            <button (click)="incrementarContador(incremento)">+4</button>
            <button (click)="decrementarContador(decrecimiento)">-2</button>
            <button (click)="resentearContador(reset)">RESET</button>
            <hr>
            `
})

export class ContadorComponent {
  public title: string = 'Mi primera app';
  public contador:number = 0;
  incremento=4
  decrecimiento=2
  reset=0

  incrementarContador(x:number){
    this.contador+=x;
  }
  decrementarContador(x:number){
    this.contador-=x;
  }
  resentearContador(x:number){
    this.contador=x;
  }
}
