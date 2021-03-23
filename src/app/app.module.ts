import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {AngularFirestoreModule} from '@angular/fire/firestore';


export const firebaseConfig = {
  apiKey: "AIzaSyDRj1_n1bt7-NASuxTy-0ZSM3xAEFWMRbs",
  authDomain: "mycandidat-ccf84.firebaseapp.com",
  projectId: "mycandidat-ccf84",
  storageBucket: "mycandidat-ccf84.appspot.com",
  messagingSenderId: "598818483694",
  appId: "1:598818483694:web:dabb43a9f636effc2eb2ff",
  measurementId: "G-T0TNV3HCF2"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            AngularFireModule.initializeApp(firebaseConfig),
            AngularFireDatabaseModule,
            AngularFireAuthModule,
            AngularFireStorageModule,
            AngularFirestoreModule
          ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}


