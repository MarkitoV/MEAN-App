import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidePreviewComponent } from './guide-preview.component';

describe('GuidePreviewComponent', () => {
  let component: GuidePreviewComponent;
  let fixture: ComponentFixture<GuidePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
