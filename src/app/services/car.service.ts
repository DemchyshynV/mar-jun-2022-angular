import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {ICar, IPaginatedData} from '../interfaces';
import {urls} from '../configs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IPaginatedData<ICar>> {
    return this.httpClient.get<IPaginatedData<ICar>>(urls.cars);
  }
}
