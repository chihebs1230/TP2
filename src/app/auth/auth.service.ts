import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore,AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

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
}
