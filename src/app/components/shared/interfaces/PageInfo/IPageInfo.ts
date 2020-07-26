export interface IPageInfo {
  title: string;
  navBar: INavBar;
  footer: IFooter;
  index: IIndex;
}

export interface IFooter {
  email: string;
  copyright: string;
}

export interface IIndex {
}

export interface INavBar {
  navBarTitle: string;
  menu: IMenu;
}

export interface IMenu {
  subMenu1: string;
  subMenu2: string;
  subMenu3: string;
  subMenu4: string;
  contactUs: string;
}
