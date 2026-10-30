import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-libro-card',
  styleUrl: './libro-card.css',
  templateUrl: './libro-card.html',
})
export class LibroCard {
  titulo:string = "Clean Code";
  autor:string = "Robert C. Martin";
  anio:number = 2008;
  categoria:string = "Buenas prácticas";
  copias:number = 3;
}