import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { GuideService } from "../../services/guide.service";

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-guide-form',
  templateUrl: './guide-form.component.html',
  styleUrls: ['./guide-form.component.css']
})
export class GuideFormComponent implements OnInit {

  file: File;
  guideSelected: string | ArrayBuffer;

  constructor(private guideService: GuideService, private router: Router) { }

  ngOnInit() {
  }

  onGuideSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.guideSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  uploadGuide(title: HTMLInputElement, description: HTMLTextAreaElement, subject: HTMLInputElement, numberLab: HTMLInputElement, semester: HTMLInputElement, docent: HTMLInputElement): boolean {
    this.guideService.createGuide(title.value, description.value, subject.value, numberLab.value, semester.value, docent.value, this.file)
      .subscribe(res => {
        this.router.navigate(['/guides']);
        console.log(res);
      }, err => console.log(err));
    return false;
  }
}
