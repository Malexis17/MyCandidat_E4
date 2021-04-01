import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulter-candidat',
  templateUrl: './consulter-candidat.page.html',
  styleUrls: ['./consulter-candidat.page.scss'],
})
export class ConsulterCandidatPage implements OnInit {

  items: Observable<any[]>;
  etats: Observable<any[]>;
  id;
  

  constructor(
    public firestore: AngularFirestore,
    public router: Router,
    ) { 
    this.items = this.firestore.collection('Candidat').valueChanges();
    this.etats = this.firestore.collection('Lycee').valueChanges();
    this.id = this.router.url.slice(-13)
  }

  ngOnInit() {
  }

}
