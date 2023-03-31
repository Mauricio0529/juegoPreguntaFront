import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRedComponent } from './dialog-red.component';

describe('DialogRedComponent', () => {
  let component: DialogRedComponent;
  let fixture: ComponentFixture<DialogRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
