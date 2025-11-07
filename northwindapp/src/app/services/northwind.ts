import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Northwind {
  constructor(private http: HttpClient) {}
 getProducts(limit = 100): Observable<{ data: any[] }> {
  return this.http.get<{ data: any[] }>(`https://northwind-api.miloudi.dev/v1/products?limit=${limit}`);
}


}

