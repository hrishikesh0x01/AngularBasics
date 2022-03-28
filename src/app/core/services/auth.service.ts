import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCredentials } from '../components/auth/user-credentials.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  removeToken() {
    localStorage.removeItem('token');
  }
  
  login(creds: UserCredentials): Observable<any> {
    return this.http.post<any>(`http://localhost:3001/login`, creds);
  }

  register(creds: UserCredentials): Observable<any> {
    return this.http.post<any>(`http://localhost:3001/register`, creds);
  }

  checkAuth(): Observable<any> {
    localStorage.getItem('token');
    return this.http.get<any>(`http://localhost:3001/check-auth`);
  }
}
