import { Injectable } from '@angular/core';
import { genderCreateDTO, genderDTO } from './gender';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GendersService {
  private apiURL = environment.apiURL+"classification";

  constructor(private http: HttpClient) {}

  public getAll(): Observable<genderDTO[]> {
    return this.http.get<genderDTO[]>(this.apiURL);
  }
  public create(gender:genderCreateDTO){
    return this.http.post<genderCreateDTO[]>(this.apiURL,gender);
    
  }
}
