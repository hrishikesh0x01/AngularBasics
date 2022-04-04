import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  deleteFile(id: number) {
    return this.http.delete<any>(`${this.apiLink}/images/${id}`);
  }
  apiLink: string;

  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  getUploadedFiles() {
    return this.http.get<any>(`${this.apiLink}/images`);
  }

  uploadFile(newFiles: any) {
    return this.http.post<any>(`${this.apiLink}/images`, newFiles);
  }
}
