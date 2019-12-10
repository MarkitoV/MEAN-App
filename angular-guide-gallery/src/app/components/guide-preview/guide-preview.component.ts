import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { GuideService } from "../../services/guide.service";

import { Guide } from "../../interface/Guide";

@Component({
  selector: 'app-guide-preview',
  templateUrl: './guide-preview.component.html',
  styleUrls: ['./guide-preview.component.css']
})
export class GuidePreviewComponent implements OnInit {

  id: string;
  guide: Guide;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private guideService: GuideService
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.id = params['id'];
      this.guideService.getGuide(this.id)
        .subscribe(
          res => {
            this.guide = res;
          },
          err => console.log(err)
        );
    });
  }

  deleteGuide(id: string) {
    this.guideService.deleteGuide(id)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/guides']);
        },
        err => console.log(err)
      );
  }

  updateGuide(title: HTMLInputElement, description: HTMLTextAreaElement, subject: HTMLInputElement, numberLab: HTMLInputElement, semester: HTMLInputElement, docent: HTMLInputElement): boolean {
    this.guideService.updateGuide(this.id, title.value, description.value, subject.value, numberLab.value, semester.value, docent.value)
      .subscribe(
        res => {
          this.router.navigate(['/guides']);
        },
        err => console.log(err)
      );
    return false;
  }

}
