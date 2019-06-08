import { Component } from  '@angular/core';
import { UserService } from '../../services/User.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'user-list',
    templateUrl: './UserList.page.html',
    //styleUrls: ['./UserList.page.css']
})
export class UserListPage {

    private results = []

    listForm = new FormGroup({
        name: new FormControl(''),
        age: new FormControl(''),
        phone: new FormControl(''),
        email: new FormControl(''),
    });

    ngOnInit() {
       
      this.getList()
      
    }

    constructor(
        private userService: UserService,
    ) { }

    private getList() {
        this.userService.getAll().subscribe((data: any) => {
            //debugger
            this.results = []
            data.forEach(item => {
                this.results.push(item.payload.doc.data())  
                console.log(item.payload.doc.data());                    
                });
            
        });
    }

}