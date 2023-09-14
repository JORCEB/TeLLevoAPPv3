import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular'; // Importa ToastController para mostrar un mensaje de éxito

@Component({
  selector: 'app-reset-password',
  templateUrl: 'reset-password.page.html',
  styleUrls: ['reset-password.page.scss'],
})
export class ResetPasswordPage {
  username: string = ''; // Agregamos la propiedad username

  constructor(private toastController: ToastController) {}

  async resetPassword() {
    // Aquí puedes implementar la lógica para restablecer la contraseña.
    // En este ejemplo, mostraremos un mensaje de éxito utilizando ToastController.

    if (this.username) { // Cambiamos "email" a "username"
      // Aquí puedes enviar un correo electrónico de restablecimiento de contraseña
      // o realizar cualquier otra acción necesaria para restablecer la contraseña.

      // Mostrar un mensaje de éxito utilizando un Toast
      const toast = await this.toastController.create({
        message: 'Se ha enviado un correo electrónico de restablecimiento de contraseña a ' + this.username, // Cambiamos "email" a "username"
        duration: 5000, // Duración en milisegundos
        position: 'bottom' // Posición en la pantalla
      });

      toast.present();
    } else {
      // Si el campo de correo electrónico está vacío, muestra un mensaje de error
      const toast = await this.toastController.create({
        message: 'Por favor, ingresa tu dirección de correo electrónico', // Cambiamos el mensaje de error
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
    }
  }
}
