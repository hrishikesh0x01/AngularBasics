import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginCredentials } from '../components/auth/login-credentials.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  removeToken(token: string) {
    localStorage.removeItem('token');
  }

  login(creds: LoginCredentials): Observable<any> {
    return this.http.post<any>(`http://localhost:3001/login`, creds);
  }

  checkAuth(): Observable<any> {
    localStorage.getItem('token');
    return this.http.get<any>(`http://localhost:3001/check-auth`);
  }
}
