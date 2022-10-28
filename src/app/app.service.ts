import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private httpClient: HttpClient) {}

  getUniversityList() {
    const url = 'http://universities.hipolabs.com/search';
    const params = {
      country: 'pakistan',
    };
    return this.httpClient.get(url, { params });
  }
}
