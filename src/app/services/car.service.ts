import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay, Observable} from 'rxjs';

import {ICar, IPaginatedData} from '../interfaces';
import {urls} from '../configs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(page=1): Observable<IPaginatedData<ICar>> {
    return this.httpClient.get<IPaginatedData<ICar>>(urls.cars, {params:{page}}).pipe(delay(2000));
  }
}
