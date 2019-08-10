import { Component } from  '@angular/core';
import { UserService } from '../../services/User.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'user-list',
    templateUrl: './UserList.page.html',
})
export class UserListPage {

    public results = []
    private filterBy: string = '';

    listForm = new FormGroup({
        name: new FormControl(''),
        age: new FormControl(''),
        phone: new FormControl(''),
        email: new FormControl(''),
    });

    setFilterBy(event: any){
        this.filterBy = event.target.value;
    }

    ngOnInit() {       
      this.getList()      
    }

    constructor(
        private userService: UserService,
    ) { }

    private getList() {
        this.userService.getAll().subscribe((data: any) => {
            this.results = []
            data.forEach(item => {
                this.results.push(item.payload.doc.data())  
                console.log(item.payload.doc.data());                    
                });
            
        });
    }

}