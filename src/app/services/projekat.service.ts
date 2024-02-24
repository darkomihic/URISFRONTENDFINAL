import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { projekatCreationDTO } from 'app/models/DTOs/projekatCreationDTO';
import { projekatUpdateDTO } from 'app/models/DTOs/projekatUpdateDTO';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjekatService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:5028/api/projekat"


  public getAllProjects() : Observable<any> {
    return this.http.get(this.getUrl())
      .pipe(map((response: Response) => response));
  }

  public getProjectById(id: string) : Observable<any> {
    return this.http.get(this.getUrl()+`/${id}`)
      .pipe(map((response: Response) => response));
  }

  public createProject(b: projekatCreationDTO) : Observable<any> {
    return this.http.post(this.getUrl(), b)
      .pipe(map((response: Response) => response));
  }

  public updateProject(b: projekatUpdateDTO) : Observable<any> {
    return this.http.put(this.getUrl(), b)
      .pipe(map((response: Response) => {console.log("Projekat successfully updated."); return response}));
  }

  public deleteProject(id: string) : Observable<any> {
    return this.http.delete(this.getUrl()+`/${id}`)
      .pipe(map((response: Response) => response));
  }

  private getUrl() {
    return `${this.baseUrl}`;
  }
}
