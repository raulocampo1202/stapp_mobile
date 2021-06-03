import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  processRequest = async (method: string, uri: string, body: any): Promise<any> => {
    const url = `${environment.baseUrl}/${uri}`;

    try {
      switch (method) {
        case 'get':
          return this.httpClient.get(url).toPromise();

        case 'post':
          break;

        case 'delete':
          break;

        case 'patch':
          return this.httpClient.patch(url, body).toPromise();

        default:
          break;
      }
    } catch (e) {
      throw e;
    }
  };

}
