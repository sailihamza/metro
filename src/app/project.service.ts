import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projet } from '../app/project';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  private baseUrl = 'http://localhost:8082/projects';

  constructor(private http: HttpClient) { }

  getProjetByid(id: string) {
  const url = `${this.baseUrl}/${id}`;
  return this.http.get(url);
}

getProjet(): Observable<Projet[]> {
  return this.http.get<Projet[]>(this.baseUrl);
}


  createProjet(projet: Projet) {
    return this.http.post<Projet>(this.baseUrl, projet);
  }

  updateProjet(id: string, projet: Projet): Observable<Projet> {
    return this.http.put<Projet>(`${this.baseUrl}/update/${id}`, projet);
  }

  deleteProjet(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}
