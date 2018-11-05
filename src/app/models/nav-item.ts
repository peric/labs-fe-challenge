export class NavItem {
  constructor(title: string, url: string, icon: string) {
    this.title = title;
    this.url = url;
    this.icon = icon;
  }

  title: string;
  url: string;
  icon: string;
}
