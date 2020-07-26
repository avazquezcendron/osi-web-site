import { Component, OnInit } from '@angular/core';
import { PageInfoService } from '../../../services/page-info.service';
import { IPageInfo } from '../interfaces/PageInfo/IPageInfo';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent implements OnInit {

  public get getPageInfo(): IPageInfo {
    return this.pageInfoService.GetPageData;
  }

  constructor(private pageInfoService: PageInfoService) {}

  ngOnInit(): void {}
}
