import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CountryService {

  private nameList: String[] = [];

  constructor(private http: HttpClient) {
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe((e: any) => {
      this.nameList = [];
      e.forEach(c => {
        const name = c['name'];
        if (name !== undefined) {
          this.nameList.push(name);

        }
      });
    });
  }
  getCountryNames() {
    return this.nameList;
  }

}
