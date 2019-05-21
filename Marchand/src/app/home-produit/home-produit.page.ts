import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
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
  constructor(public http: HttpClient) {
    this.http = http;
    this.read(); }

  ngOnInit() {
  }
  read() {
    this.http.post('http://localhost/server/produit.php',
    {password: 'root'}).subscribe((response) => {
      console.log(response);
      this.listArray = response;
    });

  }
}
