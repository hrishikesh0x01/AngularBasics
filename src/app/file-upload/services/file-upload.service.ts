import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/////////////////////////////////////////////////////////////////
import { environment } from 'src/environments/environment';
import { FileData, FileDataAdapter } from '../models/FileData';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private _apiLink: string;

  constructor(private http: HttpClient, private _fileDataAdapter: FileDataAdapter) {
    this._apiLink = environment.baseURL;
  }

  getUploadedFiles(): Observable<FileData[]> {
    return this.http.get<FileData[]>(`${this._apiLink}/images`).pipe(
      map(files => files.map(file => this._fileDataAdapter.adapt(file)))
    );
  }

  uploadFile(newFile: FileData): Observable<FileData> {
    return this.http.post<FileData>(`${this._apiLink}/images`, newFile).pipe(
      map(file => this._fileDataAdapter.adapt(file))
    );
  }

  deleteFile(id: number): Observable<void> {
    return this.http.delete<void>(`${this._apiLink}/images/${id}`);
  }
}
