import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LibroCard } from './componentes/libro-card/libro-card';
import { Navbar } from './componentes/navbar/navbar';
import { LibroLista } from './componentes/libro-lista/libro-lista';

@Component({
  imports: [RouterOutlet, Navbar, LibroLista, LibroCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
