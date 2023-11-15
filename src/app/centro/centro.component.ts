import { Component,OnInit } from '@angular/core';

interface Centro{
  localidad:string;
  familiaProfesionales:string[];
  centro:string;
  logo:string;
}

const playamar:Centro={
  localidad:"Torremolinos",
  familiaProfesionales:["Informática y Comunicaciones","Transporte","Mantenimiento"],
  centro:"IES Playamar",
  logo:"../assets/logo-ies-playamar.png",
}

const jacaranda:Centro={
  centro:"IES Jacaranda",
  familiaProfesionales:["Hostelería","Turismo"],
  localidad:"Churriana",
  logo:"../assets/logo_iesjacaranda.png",
}

const manantiales:Centro={
  centro:"IES Manantiales",
  familiaProfesionales:["Estética Integral y Bienestar","Gestión de Alojamientos Turísticos","Administración de Sistemas Informáticos en Red"],
  localidad:"Torremolinos",
  logo:"../assets/logo_manantiales.jpg",
}

const centroVacio:Centro={
  centro:"",
  familiaProfesionales:[],
  localidad:"",
  logo:"",
}


@Component({
  selector: 'app-centro',
  templateUrl:'./centro.component.html',
  /*template: `
              <!--<h3>Localidad</h3>
              <h5>{{localidad}}</h5>
              <h3>Familia Profesionales</h3>
              <h5>{{familiaProfesionales}}</h5>
              <h3>CENTRO</h3>
              <h5>{{centro}}</h5>
              <img [src]="logo" alt="Logo del centro">
              <hr>
                  <button (click)="cambiarCentro()">Cambiar de centro</button>
              <hr>-->


            ` */
})
export class CentroComponent implements OnInit{
    //Creamos varios atributos necesarios
    /*public localidad:string ="Torremolinos";
    public familiaProfesionales:string[]=["Informática y Comunicaciones","Transporte","Mantenimiento"];
    public centro:string="IES Playamar";
    public logo:string="../assets/logo-ies-playamar.png"
    //este atributo es necesario para cambiar de centro
    public centroCambiado:boolean=false;

    cambiarCentro(){
        if (this.centroCambiado){
            this.localidad ="Torremolinos";
            this.familiaProfesionales=["Informática y Comunicaciones","Transporte","Mantenimiento"];
            this.centro="IES Playamar";
            this.logo="../assets/logo-ies-playamar.png"
            this.centroCambiado=false;
        }else{
            this.centro="IES Jacaranda"
            this.familiaProfesionales=["Hostelería","Turismo"]
            this.localidad="Churriana"
            this.logo="../assets/logo_iesjacaranda.png"
            this.centroCambiado=true
        }

    }*/

  public institutos:Centro[]=[jacaranda,playamar,manantiales]
  public pila:Centro[]=[]
  public posicion:number=0
  ngOnInit(): void{}

  anterior(){
    this.posicion-=1
  }

  posterior(){
    this.posicion+=1
  }

  eliminarUltimoHeroe(){
    this.pila.splice(this.posicion,1,this.institutos.pop() || centroVacio)
  }

  anyadirHeroe(){
    this.institutos.splice(this.posicion,1,this.pila.pop() || centroVacio)
  }
}
