import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
