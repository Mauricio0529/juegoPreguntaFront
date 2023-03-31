import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificationScoreComponent } from './clasification-score.component';

describe('ClasificationScoreComponent', () => {
  let component: ClasificationScoreComponent;
  let fixture: ComponentFixture<ClasificationScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasificationScoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasificationScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
