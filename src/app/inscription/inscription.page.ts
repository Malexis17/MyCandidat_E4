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
  can_id:number;
  can_nom:string;
  can_prenom:string;
  can_adr:string;
  can_copos:string;
  can_ville:string;
  can_tel:number;
  can_mail:string;
  can_form:string;
  can_dateIns:string=new Date().getUTCDate() + "/" +(new Date().getUTCMonth()+1) + "/" + new Date().getUTCFullYear();


  Lycee:Observable<any[]>;
    lyc_nom:string;
    lyc_adr:string;
    lyc_copos:string;
    lyc_ville:string;

addFirestore(){
  this.can_id = new Date().getTime() + Math.floor(Math.random()*50);
  var id_doc_can= this.can_id.toString();
  this.firestore.collection('Candidat').doc(id_doc_can).set({
    can_id:this.can_id,
    can_nom:this.can_nom,
    can_prenom:this.can_prenom,
    can_adr:this.can_adr,
    can_copos:this.can_copos,
    can_ville:this.can_ville,
    can_tel:this.can_tel,
    can_mail:this.can_mail,
    can_form:this.can_form
  })
  this.firestore.collection('Lycee').add({
    can_id:this.can_id,
    lyc_nom:this.lyc_nom,
    lyc_adr:this.lyc_adr,
    lyc_copos:this.lyc_copos,
    lyc_ville:this.lyc_ville
  })
}

  firebaseText: String;


  constructor(public firestore: AngularFirestore) { 
    this.Candidat = this.firestore.collection('Candidat').valueChanges();
    this.Lycee=this.firestore.collection('Lycee').valueChanges();
  }

  ngOnInit() {
  }    
}







