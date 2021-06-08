import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  dataList: any = [];
  constructor(public usersService:UsersService) { }

  ngOnInit(): void {
    this.allUsers();
  }

  allUsers(): void{
    this.usersService.getAll().then(res =>{
      this.dataList = res;
    });
  }

}
