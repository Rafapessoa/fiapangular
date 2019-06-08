import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import uuid from 'uuid';

@Injectable({providedIn: 'root'})
export class UserService{
    constructor(
        private http: HttpClient,
        private db: AngularFirestore
        ){}
   
    getById(id: string){
        return this.db.collection(
            'users').doc(id).snapshotChanges()
    }

    create(data){
        return this.db.collection('users').add({
            id: uuid(),
            ...data,
        });
    }

    update(data, DocId){
        return this.db.collection('users').doc(DocId).update(data);
    }

    getAll(){
        return this.db.collection('users').snapshotChanges();
    }

}