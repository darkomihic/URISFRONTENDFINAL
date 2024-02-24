import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timCreationDTO } from 'app/models/DTOs/timCreationDTO';
import { timUpdateDTO } from 'app/models/DTOs/timUpdateDTO';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:5028/api/tim"


  public getAllTims() : Observable<any> {
    return this.http.get(this.getUrl())
      .pipe(map((response: Response) => response));
  }

  public getTimById(id: string) : Observable<any> {
    return this.http.get(this.getUrl()+`/${id}`)
      .pipe(map((response: Response) => response));
  }

  public createTim(b: timCreationDTO) : Observable<any> {
    b.datumFormiranjaTim = new Date().toISOString().slice(0, -1);
    console.log(b.datumFormiranjaTim);
    return this.http.post(this.getUrl(), b)
      .pipe(map((response: Response) => response));
  }

  public updateTim(b: timUpdateDTO) : Observable<any> {
    return this.http.put(this.getUrl(), b)
      .pipe(map((response: Response) => {console.log("Tim successfully updated."); return response}));
  }

  public deleteTim(id: string) : Observable<any> {
    return this.http.delete(this.getUrl()+`/${id}`)
      .pipe(map((response: Response) => response));
  }

  private getUrl() {
    return `${this.baseUrl}`;
  }
}
