import { Component } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  items: Observable<any[]>;

  constructor(
    public firestore: AngularFirestore
  ){
    this.items = this.firestore.collection('Test').valueChanges();
  }

}
