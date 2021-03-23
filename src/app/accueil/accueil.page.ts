import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  items: Observable<any[]>;

  constructor(
    public firestore: AngularFirestore
  ){
    this.items = this.firestore.collection('Test').valueChanges();
  }

  ngOnInit() {
  }

}
