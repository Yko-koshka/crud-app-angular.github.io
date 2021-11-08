import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators'
import { OwnerEntity } from './shared/create/create.component';

@Injectable({
  providedIn: 'root'
})
export class CrudAppService {

  constructor(private http: HttpClient) { }

  create (owner: OwnerEntity):Observable<OwnerEntity> {
    console.log(owner);
    return this.http.post<OwnerEntity>(`${environment.fbDbUrl}/owners.json`, owner)
    .pipe(map((response: FbCreateResponse) => {
      return {
        ...owner,
        id: response.name
      }
    }))
  }

  getAll() {
    return this.http.get(`${environment.fbDbUrl}/owners.json`)
    .pipe(map((response:{[key: string]: any}) => {
      return Object
      .keys(response)
      .map(key => ({
        ...response[key],
        id: key
      }))
    }))
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.fbDbUrl}/owners/${id}.json`)
  }
}

export interface FbCreateResponse {
  name: string
}
