import { Component } from  '@angular/core';

@Component({
    selector: 'user-list',
    templateUrl: './UserList.page.html',
    styleUrls: ['./UserList.page.css']
})
export class UserListPage {
    private results = [
        { id: 1, name: 'Rafael', email: 'rafael@1.com'},
        { id: 2, name: 'Alice', email: 'alice@1.com'}
        
    ];


}