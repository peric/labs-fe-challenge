import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavItem } from '../../models/nav-item';
import { ConnectableObservable, Observable } from 'rxjs';
import { filter, publish } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  navEnd: ConnectableObservable<NavigationEnd>;
  navItems: NavItem[] = [];
  currentUrl: string;

  constructor(private router: Router) {
    // New Observable that publishes only the NavigationEnd event
    this.navEnd = publish()(router.events.pipe(
      filter(evt => evt instanceof NavigationEnd)
    )) as ConnectableObservable<NavigationEnd>;
  }

  ngOnInit() {
    this.navItems.push(new NavItem('Home', '/', 'home'));
    this.navItems.push(new NavItem('Posts', '/posts', 'library_books'));

    this.navEnd.subscribe((event: NavigationEnd) => this.currentUrl = event.url.split('?')[0]);

    this.navEnd.connect();
  }
}
