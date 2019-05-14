import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-creercompte',
  templateUrl: './creercompte.page.html',
  styleUrls: ['./creercompte.page.scss'],
})
export class CreercomptePage implements OnInit {
  public inscription: FormGroup ;
  motcle: any;
  confirme: any;
  // constructeur
  constructor(public http: HttpClient, private builder: FormBuilder, private alertclt: AlertController) {
      this.http = http;
      this.inscription = this.builder.group({
        entreprise: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9 \._\/\-]{3,15}$')])],
        phone: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]{10}')])],
        mail: ['', Validators.compose([Validators.required, Validators.maxLength(40),
                   Validators.pattern('^[a-z0-9_.-]+@[a-z0-9-]+\.[a-z0-9]{2,}$')])],
        region: ['', Validators.compose([Validators.required, Validators.maxLength(25), Validators.pattern('^[a-zA-Z0-9 \._\/]+$')])],
        ville: ['', Validators.compose([Validators.required, Validators.maxLength(25), Validators.pattern('^[a-zA-Z0-9 \._\/]+$')])],
        adresse: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9 \._\/:=]+$'), Validators.maxLength(40)])],
// tslint:disable-next-line: max-line-length
        motcle: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9 \._\/:=]+$'), Validators.minLength(5), Validators.maxLength(15)])],
      });
  }

  ngOnInit() {
  }
  // Verifier les champs
egal() {
  return((document.getElementById('pwd') as HTMLInputElement).value === (document.getElementById('conf') as HTMLInputElement).value);
}
// boîte de d'alert
async alerter(msg: string) {
const alrt = await this.alertclt.create({
  header: 'Crétion de votre compte',
  message: msg,
  buttons: ['D\'accord']
});
await alrt.present();
}

  // inscription
inscrire() {

  this.http.post('http://192.168.137.212:80/server/inscription.php', JSON.stringify(this.inscription.value)).
      subscribe((response) => {
       this.alerter(response.toString());
      });
 }


}
