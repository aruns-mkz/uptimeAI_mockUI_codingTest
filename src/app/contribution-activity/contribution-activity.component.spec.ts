import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionActivityComponent } from './contribution-activity.component';

describe('ContributionActivityComponent', () => {
  let component: ContributionActivityComponent;
  let fixture: ComponentFixture<ContributionActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContributionActivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContributionActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
