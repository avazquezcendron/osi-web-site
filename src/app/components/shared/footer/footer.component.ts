import { Component, OnInit } from '@angular/core';
import { PageInfoService } from '../../../services/page-info.service';
import { IPageInfo } from '../interfaces/PageInfo/IPageInfo';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  public get currentYear(): number {
    return new Date().getFullYear();
  }

  public get getPageInfo(): IPageInfo {
    return this.pageInfoService.GetPageData;
  }

  constructor(private pageInfoService: PageInfoService) {}

  ngOnInit(): void {}
}
