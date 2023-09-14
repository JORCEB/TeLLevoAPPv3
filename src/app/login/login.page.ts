import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private alertController: AlertController
  ) {}

  async login() {

    const authSuccessful = true;

    if (authSuccessful) {

      const alert = await this.alertController.create({
        header: 'Ingresado correctamente',
        message: `¡Bienvenido, ${this.username}!`,
        buttons: ['OK']
      });

      await alert.present();

      this.navCtrl.navigateForward('/home', {
        queryParams: { username: this.username }
      });
    } else {

    }
  }

  irAResetPassword() {
    this.router.navigate(['/reset-password']);
  }
}
