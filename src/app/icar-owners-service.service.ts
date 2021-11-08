import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CarEntity, OwnerEntity } from './shared/create/create.component';

@Injectable({
  providedIn: 'root'
})

export class ICarOwnersServiceService {
  
  constructor(private http: HttpClient) { }
  dataSource = ELEMENT_DATA;

}
export interface PeriodicElement {
  id: number
  patronymic:  string,
  name: string,
  lastName: string,
  quantity: number,
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, patronymic: 'Филатова', name: 'Наталья', lastName: 'Олеговна', quantity: 3 },
  {id: 2, patronymic: 'Филатова', name: 'Наталья', lastName: 'Олеговна', quantity: 1 },
  {id: 3, patronymic: 'Филатова', name: 'Наталья', lastName: 'Олеговна', quantity: 2 },
];

export interface ICarOwnersService {
  getOwners(): Observable<OwnerEntity[]>;
  getOwnerById(aId: number): Observable<OwnerEntity>;
  createOwner(
  aLastName: string,
  aFirstName: string,
  aMiddleName: string,
  aCars: CarEntity[]
  ): Observable<OwnerEntity>;
  editOwner(aOwner: OwnerEntity): Observable<OwnerEntity>;
  deleteOwner(aOwnerId: number): Observable<OwnerEntity[]>;
}


