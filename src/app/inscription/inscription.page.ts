import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
/*import { AnyARecord } from 'node:dns';*/
import { Observable } from 'rxjs';




@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],

})
export class InscriptionPage implements OnInit {
Candidat: Observable<any[]>;
  firebaseText: String;
  firebaseData ={
    nom:'',
    Prenom:'',
    Adresse:'',
    CodePostal:'',
    Ville:'',
    Telephone:'',
    Email:'',
    Formation:''
  
   
  };

  
  constructor(public firestore: AngularFirestore) { 
    this.Candidat = this.firestore.collection('Candidat').valueChanges();
    
  }

  ngOnInit() {
  }




  addFirebase() {
    this.firestore.collection('Candidat').add(this.firebaseData);
      this.firebaseData={
        nom:'',
    Prenom:'',
    Adresse:'',
    CodePostal:'',
    Ville:'',
    Telephone:'',
    Email:'',
    Formation:''
    
   
   
  };
  
  }

}
