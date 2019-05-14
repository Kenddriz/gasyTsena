import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seconnecter',
  templateUrl: './seconnecter.page.html',
  styleUrls: ['./seconnecter.page.scss'],
})
export class SeconnecterPage implements OnInit {
  contact = ''; welcome = '';
  constructor() { 
   }

  ngOnInit() {
  }
  seConnecter() {
    this.welcome = this.contact;
  }

}
