import { Component, inject } from '@angular/core';
import { PrestamoService } from '../../services/prestamo-service';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  protected prestamoService = inject(PrestamoService);
  
  nombre:string = 'Valeria M.';
  rol:string = 'ESTUDIANTE';
}
