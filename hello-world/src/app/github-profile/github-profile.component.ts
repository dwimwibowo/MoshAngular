import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
      private router: Router) { }

  ngOnInit(): void {
    console.log('GithubProfile OnInit');

    // Option 1 - Observable
    this.route.paramMap
      .subscribe((params: any) => {
        let id: number = +params.get('id');
        let username: string = params.get('username');
        console.log('Observable: ' + id + ' - ' + username);
      });

    // Option 2 - Snapshot
    let id = this.route.snapshot.paramMap.get('id');
    let username = this.route.snapshot.paramMap.get('username');
    console.log('Snapshot: ' + id + ' - ' + username);
  }

  back(){
    this.router.navigate(
      ['/followers'],
      {
        queryParams: {
          page: 1,
          order: 'newest'
        }
      }
    );
  }
}
