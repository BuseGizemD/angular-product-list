import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class MockApiService{

  private readonly URI = 'https://5b96285652764b001413bbd1.mockapi.io/api';

  constructor(private _httpCilent: HttpClient) {
  }

  /*
  * */
  getProductData(): Observable<any>{
    return this._httpCilent.get(this.URI + '/data');
  }
}
