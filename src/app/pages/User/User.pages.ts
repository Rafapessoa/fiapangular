import { Component } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from '../../services/User.service';


@Component({
    //selector: 'user',
    templateUrl: './User.pages.html',
    //styleUrls: ['./User.pages.css']
})

export class UserPage {


    userForm = new FormGroup({
        name: new FormControl('', Validators.required),
        age: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
    });

    private userId: string = '';
    //private data: object = {};
    private loading: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        private router: UserService
    ) { }



    ngOnInit() {
        this.userId = this.route.snapshot.paramMap.get('id');
        console.log(this.userId)
        if (this.userId) {
            this.getUser(this.userId)
        }

    }

    private getUser(id: string) {
        this.userService.getById(id).subscribe((data: any) => {

            console.log(data.payload.data());
            const result = data.payload.data();

            Object.keys(result)
                .filter(item => item !== 'id')
                .forEach(item => {
                    this
                        .userForm.controls[item].setValue(result[item]);
                });
            this.loading = false;
        });
    }


    onsubmit() {
  
        this.loading = true;

        if (this.userId) {

            this.userService.update(this.userForm.value, this.userId).
            then((data) => {
                console.log('result', data);
                this.loading = false;                
            })
            .catch(
            
            );
        }
        else {
            this.userService.create(this.userForm.value).then((data) => {
                console.log('result', data);
                this.loading = false;
            })
            .catch(
            
            );
        }

    }








}