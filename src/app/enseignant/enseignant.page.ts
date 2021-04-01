import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.page.html',
  styleUrls: ['./enseignant.page.scss'],
})
export class EnseignantPage implements OnInit {
  items: Observable<any[]>;
  etats: Observable<any[]>;
  dataUser = {
    email: '',
    password:''
  };

  connected: boolean;

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public firestore: AngularFirestore,
  ) { 
    this.afAuth.authState.subscribe(auth => {
      if ( !auth){
        console.log('non connecté');
        this.connected = false;
        this.router.navigateByUrl('/login');
      } else {
        console.log('connecté');
        this.connected = true;
        
      }
    })
    this.items = this.firestore.collection('Candidat').valueChanges();
    this.etats = this.firestore.collection('Lycee').valueChanges();
  }

  logout(){
    this.afAuth.signOut();
  }

  ngOnInit() {
  }

  doRefresh(event) {  
    setTimeout(() => {
      event.target.complete();
    }, 1000); 
  }

  consulter(id){
    console.log(id);
    this.router.navigateByUrl("/consulter-candidat#"+id)
  }

}
