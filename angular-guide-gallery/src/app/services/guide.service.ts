import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Guide } from '../interface/Guide';

@Injectable({
  providedIn: 'root'
})
export class GuideService {

  URI = 'http://localhost:4000/api/guides';

  constructor(private http: HttpClient) { }

  createGuide(title: string, description: string, subject: string, numberLab: string, semester: string, docent: string, guide: File) {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('subject', subject);
    fd.append('numberLab', numberLab);
    fd.append('semester', semester);
    fd.append('docent', docent);
    fd.append('image', guide);
    return this.http.post(this.URI, fd);
  }

  getGuides() {
    return this.http.get<Guide[]>(this.URI);
  }

  getGuide(id: string) {
    return this.http.get<Guide>(`${this.URI}/${id}`);
  }

  deleteGuide(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }

  updateGuide(id: string, title: string, description: string, subject: string, numberLab: string, semester: string, docent: string) {
    return this.http.put(`${this.URI}/${id}`, { title, description, subject, numberLab, semester, docent });
  }
}
