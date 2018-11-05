import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavItem } from '../../models/nav-item';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  navEnd: Observable<NavigationEnd>;
  navItems: NavItem[] = [];
  currentUrl: string;

  constructor(private router: Router) {
    // New Observable that publishes only the NavigationEnd event
    this.navEnd = router.events.pipe(
      filter(evt => evt instanceof NavigationEnd)
    ) as Observable<NavigationEnd>;
  }

  ngOnInit() {
    this.navItems.push(new NavItem('Home', '/', 'home'));
    this.navItems.push(new NavItem('Posts', '/posts', 'library_books'));

    this.navEnd.subscribe((event) => {
      this.currentUrl = event.url.split('?')[0];
    });
  }
}
