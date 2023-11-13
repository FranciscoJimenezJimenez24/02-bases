import { Component } from "@angular/core";

@Component({
    selector: 'app-centro',
    template: `
                <h3>Localidad</h3>
                <h5>{{localidad}}</h5>
                <h3>Familia Profesionales</h3>
                <h5>{{familiaProfesionales}}</h5>
                <h3>CENTRO</h3>
                <h5>{{centro}}</h5>
                <img [src]="logo" alt="Logo del centro">
                <hr>
                    <button (click)="cambiarCentro()">Cambiar de centro</button>
                <hr>
            `
  })
export class CentroComponent{
    //Creamos varios atributos necesarios
    public localidad:string ="Torremolinos";
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
        
    }
}