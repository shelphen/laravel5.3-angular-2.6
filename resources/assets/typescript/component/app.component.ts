import { Component, OnInit } from '@angular/core';
import { User,Listing } from '../object-metadata';
import { UserService } from '../service/user.service'

@Component({
    selector: 'my-app',
    templateUrl: './html/app.html',
    styleUrls: ['./css/app.css'],
    providers: [ UserService ]
})

export class AppComponent implements OnInit
{
    constructor(private userService: UserService){}
    public title :string = 'List of Users';
    public selectedUser:number;
    public myUsers:User[];
    selectUser(id:number):void{
        this.selectedUser=id;
    }
    getUsers():void{
        this.myUsers = this.userService.getUsers();
    }

    getUsersPromise():void{
        this.userService.getUsersPromise().then(
            result => this.myUsers = result
        ).catch(function(error){console.log(error)});
    }

    ngOnInit(): void {
        this.getUsersPromise();
    }
}