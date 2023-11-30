import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private load: LoadingController , private toast: ToastController) {}
  async loadSenha() 
  {
    const load = await this.load.create({
     
      message: 'Aguarde o email de recuperação',
      duration: 3000,
    });
    
    load.present(); 
  }

  async Toast() {
    const toast = await this.toast.create({
      message: 'Sem conexão, Verifique sua rede',
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }

}
