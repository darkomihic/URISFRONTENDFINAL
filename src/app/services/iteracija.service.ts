import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iteracijaCreationDTO } from 'app/models/DTOs/iteracijaCreationDTO';
import { iteracijaUpdateDTO } from 'app/models/DTOs/iteracijaUpdateDTO';
import { Observable, map } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IteracijaService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:5028/api/iteracija"


  public getAllIteracijas() : Observable<any> {
    return this.http.get(this.getUrl())
      .pipe(map((response: Response) => response));
  }

  public getIteracijaById(id: string) : Observable<any> {
    return this.http.get(this.getUrl()+`/${id}`)
      .pipe(map((response: Response) => response));
  }

  public createIteracija(b: iteracijaCreationDTO) : Observable<any> {
    return this.http.post(this.getUrl(), b)
      .pipe(map((response: Response) => response));
  }

  public updateIteracija(b: iteracijaUpdateDTO) : Observable<any> {
    return this.http.put(this.getUrl(), b)
      .pipe(map((response: Response) => {console.log("Iteracija successfully updated."); return response}));
  }

  public deleteIteracija(id: string) : Observable<any> {
    return this.http.delete(this.getUrl()+`/${id}`)
      .pipe(map((response: Response) => response));
  }

  private getUrl() {
    return `${this.baseUrl}`;
  }
}
