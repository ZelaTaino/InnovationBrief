import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from "rxjs/Rx";
import { AngularFireAuth } from "angularfire2/auth";
import { AuthInfo } from "./auth-info";
import { Router } from "@angular/router";
import { firebaseConfig } from '../../environments/firebase.config';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  private adminId:string = 'LBS9fMtoeGME8LXFQPlvgHTNxtI3';

  static UNKNOWN_USER = new AuthInfo(null);

  authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthService.UNKNOWN_USER);
  createdUID: string;

  constructor(private afAuth: AngularFireAuth, private router:Router) {
  }

  login(email, password):Observable<any> {
    return this.fromFirebaseAuthPromise(this.afAuth.auth.signInWithEmailAndPassword(email, password));
  }

  fromFirebaseAuthPromise(promise):Observable<any> {
        const subject = new Subject<any>();

        promise
            .then(res => {
                    this.createdUID = this.afAuth.auth.currentUser.uid;
                    const authInfo = new AuthInfo(this.afAuth.auth.currentUser.uid);
                    this.authInfo$.next(authInfo);
                    subject.next(res);
                    subject.complete();
                },
                err => {
                    this.authInfo$.error(err);
                    subject.error(err);
                    subject.complete();
                });
        return subject.asObservable();
    }

  getCreatedUID(): string{
    return this.createdUID;
  }


  signUp(email, password) {
    var secondaryApp = firebase.initializeApp(firebaseConfig, "Secondary");
    return this.fromFirebaseAuthPromise(secondaryApp.auth().createUserWithEmailAndPassword(email, password).then(function() {
      secondaryApp.auth().signOut();
    }));
  }

  getAuthState() {
    return this.afAuth.authState;
  }

  logout() {
    this.afAuth.auth.signOut();
    this.authInfo$.next(AuthService.UNKNOWN_USER);
    this.router.navigate(['/login']);
  }

  getCurrentUserId() {
    return new Promise(function (resolve, reject) {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          resolve(user.uid);
        } else {
          reject(Error('User not validated'));
        }
      });
    });
  };

  isAdmin(uid) {
      if (uid == this.adminId) {
          return true;
      } else {
          return false;
      }
  }
}
