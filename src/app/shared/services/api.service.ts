import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  fetchUrl(url: string): Promise<Array<{}>> {
    return this.http.get(url)
      .map(res => res.json())
      .toPromise()
  }

  searchUrl(term: string ,filter: string): Promise<Array<{}>> {
    return this.http.get('../../assets/mock-data.json/?title=${term}')
      .map(res => res.json())
      .toPromise()
  } 

}
