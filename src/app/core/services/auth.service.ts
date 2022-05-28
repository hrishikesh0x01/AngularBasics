import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCredentials } from '../components/auth/user-credentials.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authEndPoint: string = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  removeToken() {
    localStorage.removeItem('token');
  }
  
  login(creds: UserCredentials): Observable<any> {
    return this.http.post<any>(`${this.authEndPoint}/login`, creds);
  }

  register(creds: UserCredentials): Observable<any> {
    return this.http.post<any>(`${this.authEndPoint}/register`, creds);
  }

  checkAuth(): Observable<any> {
    localStorage.getItem('token');
    return this.http.get<any>(`${this.authEndPoint}/check-auth`);
  }
}
