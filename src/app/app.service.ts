import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import {Activity} from './Activity';



@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = 'http://localhost:8082/';

  constructor(private http: HttpClient) { }

  // Add User - Create
  adduser(activity: Activity) {
    return this.http.post<Activity>(`${this.url}my-entities`, activity);
  }

  getuser(id: string) {
    const url = `${this.url}my-entities/${id}`;
    return this.http.get(url);
  }


  // Get Users - Read
  getUsers(): Observable<any[]> {    
    return this.http.get<any[]>(this.url + 'my-entities');
  }

  // Get User by Id - Read
  getUserById(id: number): Observable<Activity> {
    return this.http.get<Activity>(`${this.url}my-entities/${id}`);
  }

  // Update User - Update
  updateUser(id?: number , activity?: any): Observable<any>{
    return this.http.put<any>(`${this.url}my-entities/update/${id}`, activity)
  }

  updateuser(id: string, activity?: any) {
    return this.http.put(`${this.url}my-entities/update/${id}`, activity);
  }
    // Delete User - Delete
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}my-entities/delete/${id}`);
  }

}
