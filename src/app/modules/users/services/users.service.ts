import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAll(): Promise<any> {
    return this.http.get('http://localhost:3000/users').toPromise();
  }

  getOne(data: any): Promise<any> {
    return this.http.get(`localhost:3000/users/${data?.id}`).toPromise();
  }
  
  create(data: any): Promise<any> {
    return this.http.post('localhost:3000/users', data).toPromise();
  }

  edit(data: any): Promise<any> {
    return this.http.put(`localhost:3000/users/${data.id}`, data).toPromise();
  }

  delete(data: any): Promise<any> {
    return this.http.delete(`localhost:3000/users/${data.id}`).toPromise();
  }
}
