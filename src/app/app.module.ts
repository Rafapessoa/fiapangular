import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/Header/Header.component';
import { UserListPage } from './pages/UserList/UserList.page'
import { UserPage } from './pages/User/User.pages'
import { LoadingComponent } from './components/Loading/Loading.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListPage,
    UserPage,
    LoadingComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
