import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: 'base.page.html',
  styleUrls: ['base.page.scss'],
})
export class BasePage {
  constructor(private router: Router) {}

  redirectToLoginPage() {
    // Navegar a la página de inicio de sesión
    this.router.navigate(['/login']); // Asegúrate de que 'login' sea la ruta correcta
  }
}
