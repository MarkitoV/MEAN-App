import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideTableComponent } from './guide-table.component';

describe('GuideTableComponent', () => {
  let component: GuideTableComponent;
  let fixture: ComponentFixture<GuideTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
