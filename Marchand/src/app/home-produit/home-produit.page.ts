import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { AjoutPage } from '../pages-produit/ajout/ajout.page';
/*import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';*/

@Component({
  selector: 'app-home-produit',
  templateUrl: './home-produit.page.html',
  styleUrls: ['./home-produit.page.scss'],
})
export class HomeProduitPage implements OnInit {

  public listArray: any; /*list: Array<any>;
// tslint:disable-next-line: max-line-length
  public IdPro: Array<any>;
        CodeMar: any;
        NmProd: Array<string>;
        IdCat: Array<string>;
        DesPro: Array<string>;
        PU: Array<number>;
        image: Array<string>;*/
  constructor(public http: HttpClient, public modalController: ModalController) {
    this.http = http;
    this.read(); }

  ngOnInit() {
  }
  // Lecture des donnée produit
  read() {
    this.http.post('http://localhost/server/produit.php',
    {password: 'root'}).subscribe((response) => {
      console.log(response);
      this.listArray = response;
    }, () => {
      this.http.post('http://192.168.137.1/server/produit.php',
      {password: 'root'}).subscribe((response) => {
        console.log(response);
        this.listArray = response;
      });
    });
  }

  // modal ajout produit
  async ajoutModal() {
    const modal = await this.modalController.create({
      component: AjoutPage,
      componentProps: { value: 123 }
    });
    await modal.present();
  }
}
