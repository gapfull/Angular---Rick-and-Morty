import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationListService {

  private baseUrl: string = "https://rickandmortyapi.com/api/location";
  constructor(private http: HttpClient) { }

  public getLocations(){
    return this.http.get(this.baseUrl);

  }
}
