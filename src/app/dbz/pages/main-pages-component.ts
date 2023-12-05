import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-pages-component.html'
})

export class MainPageComponent {
  constructor(public dbzService:DBZService){}
}
