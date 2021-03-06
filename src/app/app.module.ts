import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SigninComponent } from './components/authentication/signin/signin.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireAuth } from "@angular/fire/auth";
import { UserProfileModule } from './user-profile.module';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    UserProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
