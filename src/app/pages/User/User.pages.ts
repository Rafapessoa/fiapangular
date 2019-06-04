import { Component } from  '@angular/core';

import { UserService } from  '../../services/User.service';

@Component({
    //selector: 'user',
    templateUrl: './User.pages.html',
    styleUrls: ['./User.pages.css']
})

export class UserPage {
    constructor(
        private userService: UserService
    ){}

    private loading: Boolean = false;

    createUser(){
       
        this.loading = true;
        this.userService.create({
            name: 'Rafael',
            email: '123@123.com',
            age: '10',
            phone: '1155558888',
        }).then((data) =>{
           console.log('result', data);
           this.loading = false;
        });
    }
}