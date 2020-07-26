import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPageInfo } from '../components/shared/interfaces/PageInfo/IPageInfo';

@Injectable({
  providedIn: 'root',
})
export class PageInfoService {
  private data: IPageInfo;
  private dataLoaded = false;

  public get GetPageData(): IPageInfo {
    return this.data;
  }

  constructor(private http: HttpClient) {
    this.http.get<IPageInfo>('../assets/data/page.info.json').subscribe((jsonData) => {
      this.data = jsonData;
      this.dataLoaded = true;
      // console.log(this._data);
    });
  }
}
