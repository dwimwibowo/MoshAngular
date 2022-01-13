import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, switchMap } from 'rxjs';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers!: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) {
    
  }

  ngOnInit(): void {
    // this.route.paramMap.subscribe();
    // let id = this.route.snapshot.paramMap.get('id');

    // this.route.queryParamMap.subscribe();
    // let page = this.route.snapshot.queryParamMap.get('page');

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(
      switchMap((combined: any) => {
        // Param
        let id = combined[0].get('id');
        // Query Parameter
        let page = combined[1].get('page');
        let order = combined[1].get('order');

        console.log(id + " - " + page + " - " + order);

        return this.service.getAll();
      })
    )
    .subscribe((followers: any) => {
        this.followers = followers;
    });
  }
}