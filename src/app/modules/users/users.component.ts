import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  dataList: any = [];
  constructor(public usersService:UsersService, public router:Router) { }

  ngOnInit(): void {
    this.allUsers();
  }

  allUsers(): void{
    this.usersService.getAll().then(res =>{
      this.dataList = res;
    });
  }

  editUser(id: any): void {
    this.router.navigateByUrl(`usuarios/${id}`)
  }

  deleteItem(id: any): void {
    this.usersService
      .delete({id: id})
      .then(() => {
        this.allUsers()
      })
      .catch((rej: any) => {
      })
      .finally(() => {
      });
  }



}
