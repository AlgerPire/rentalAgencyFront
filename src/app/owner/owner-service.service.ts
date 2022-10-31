import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private url = 'http://localhost:8080/owner/';

  constructor(private http: HttpClient) {
  }

  listOwner(): Observable<any> {
    return this.http.get(`${this.url}listAll`);
  }

  addOwner(Owner: Object): Observable<Object> {
    return this.http.post(`${this.url}addOwner`, Owner);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, {responseType: 'text'});
  }
}


