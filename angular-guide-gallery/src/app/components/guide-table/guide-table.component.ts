import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GuideService } from '../../services/guide.service';

@Component({
  selector: 'app-guide-table',
  templateUrl: './guide-table.component.html',
  styleUrls: ['./guide-table.component.css']
})
export class GuideTableComponent implements OnInit {

  guides = [];

  constructor(private guideServices: GuideService, private router: Router) { }

  ngOnInit() {
    this.guideServices.getGuides()
      .subscribe(
        res => {
          this.guides = res;
        },
        err => console.log(err)
      )
  }

  selectedRow(id: string) {
    this.router.navigate(['/guides', id]);
  }

}
