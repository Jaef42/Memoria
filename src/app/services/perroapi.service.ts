import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerroapiService {


  private urlApi='https://dog.ceo/api/breeds/image/random/10'
  constructor(private http: HttpClient) { }
  obtenerImagenes(): Observable<any>{
    return this.http.get<any>(this.urlApi)
  }
  
}

