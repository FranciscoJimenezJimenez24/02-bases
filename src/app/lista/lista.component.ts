import {Component,OnInit} from '@angular/core';
@Component({
  selector:'app-lista',
  templateUrl:'./lista.component.html',
  styleUrls:['./lista.component.css']
})
export class ListaComponent implements OnInit{
  public nombreHeroes:string[]=["Goku","Piccolo","Vegeta","Gohan","Trunks"]
  public heroeEliminado:string=""
  public pila:string[]=[]
  public posicion:number=0
  ngOnInit(): void{}

  anterior(){
    this.posicion-=1
  }

  posterior(){
    this.posicion+=1
  }

  eliminarUltimoHeroe(){
    this.pila.splice(this.posicion,0,this.nombreHeroes.pop() || "")
  }

  anyadirHeroe(){
    this.nombreHeroes.splice(this.posicion,0,this.pila.pop() || "")
  }

}
