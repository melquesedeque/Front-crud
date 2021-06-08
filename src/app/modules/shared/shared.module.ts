import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../users/services/users.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    HttpClientModule
  ],
  exports: [
    MatCardModule,
    HttpClientModule
  ],
  providers:[
    UsersService
  ]
})
export class SharedModule { }
