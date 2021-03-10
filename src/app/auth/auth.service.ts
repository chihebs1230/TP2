import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore,AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  router: any;

  constructor(private afAuth:AngularFireAuth,private afs:AngularFirestore) { }
  createNewUser(signupForm:any){
return this.afAuth.createUserWithEmailAndPassword(signupForm.email,signupForm.password).then((result)=>{
  this.SetUserData(result.user,signupForm.userName)
}).catch((error)=>{
  console.log('error')
  window.alert(error.message)
})
  }
  SetUserData(user:any,username:any){
  const userRef:AngularFirestoreDocument<any>=this.afs.doc('user/${user.uid}')
  const userData:User={
   id:user.uid,
   email:user.email,
   userName:username,
  };
  return userRef.set(userData,{merge:true})
  }

  signIn (signInForm)
  {
    return this.afAuth.signInWithEmailAndPassword(signInForm.email, signInForm.password)
    .then((result) => {
      this.router.navigate(['/user-profile']);
    }).catch((error) => {
      window.alert(error.message);
    });
  }

get isLoggedIn() : boolean {

  const user = JSON.parse(localStorage.getItem('user'));
  return (user !== null) ? true:false;
}

SignOut()
{
  return this.afAuth.signOut().then(() => {
    localStorage.removeItem('user');
    this.router.navigate(['signin']);
  }
}
  signInWithPopup()
  {
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuth()).then(
      (result) => {
        this.SetUserData(result.user);
        this.router.navigate(['/user-profile']);
      }
    ).catch((error) => {
      window.alert(error.message);
    }

}
}