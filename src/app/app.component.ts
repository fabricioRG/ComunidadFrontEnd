import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from './data.service';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']

})

export class AppComponent implements OnInit {
  users$: User = new User;
  values: string[] = ['Tag 1', 'Tag 2', 'Tag 4'];

  specialPage: boolean;

  private specialPages: any[] = [
    '/pages/login',
    '/pages/register',
    '/pages/lock',
    '/pages/pricing',
    '/pages/single-post',
    '/pages/post-listing'
  ];

  private currentUrl = '';

  constructor(
    private router: Router,
    private location: Location,
    private dataService: DataService
  ) {

    this.router.events.subscribe((route:any) => {
      this.currentUrl = route.url;

      this.specialPage = this.specialPages.indexOf(this.currentUrl) !== -1;
    });

  }

  ngOnInit(){
    return this.dataService.getUsers()
    .subscribe(data => this.users$ = data);
  }

  goBack(): void {
    this.location.back();
  }
}
