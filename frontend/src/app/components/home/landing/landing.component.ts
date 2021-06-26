import { Component, OnInit } from '@angular/core';
import { PageInfoService } from '../../../services/page-info.service';
import { IPageInfo } from '../../shared/interfaces/PageInfo/IPageInfo';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
})
export class LandingComponent implements OnInit {
  constructor(private pageInfoService: PageInfoService) {}
  public get getPageInfo(): IPageInfo {
    return this.pageInfoService.GetPageData;
  }
  ngOnInit(): void {}
}
