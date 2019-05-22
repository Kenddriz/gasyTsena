import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.page.html',
  styleUrls: ['./ajout.page.scss'],
})
export class AjoutPage implements OnInit {

  constructor(navParams: NavParams, public ModalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.ModalController.dismiss();
  }
}
