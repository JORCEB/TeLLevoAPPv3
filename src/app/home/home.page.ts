import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  username: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
  }

  async solicitarViaje() {
    const alert = await this.alertController.create({
      header: 'Solicitud de viaje',
      message: '¿Deseas solicitar este viaje?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          }
        },
        {
          text: 'Solicitar',
          handler: () => {
            this.mostrarMensajeExito();
          }
        }
      ]
    });

    await alert.present();
  }

  async mostrarMensajeExito() {
    const alert = await this.alertController.create({
      header: '¡Viaje solicitado!',
      message: 'Tu solicitud de viaje se ha realizado con éxito.',
      cssClass: 'success-alert',
      buttons: ['OK']
    });

    await alert.present();
  }

  cerrarSesion() {
    this.router.navigateByUrl('/login');

  }
}
