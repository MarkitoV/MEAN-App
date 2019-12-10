import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { GuideService } from "../../services/guide.service";

@Component({
  selector: 'app-guide-list',
  templateUrl: './guide-list.component.html',
  styleUrls: ['./guide-list.component.css']
})
export class GuideListComponent implements OnInit {

  guides = [];

  constructor(private guideService: GuideService, private router: Router) { }

  ngOnInit() {
    this.guideService.getGuides()
      .subscribe(
        res => {
          this.guides = res;
        },
        err => console.log(err)
      )
  }

  selectedCard(id: string) {
    this.router.navigate(['/guides', id]);
  }

}
