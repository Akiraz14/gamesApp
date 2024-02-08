import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSameComponent } from './find-same.component';

describe('FindSameComponent', () => {
  let component: FindSameComponent;
  let fixture: ComponentFixture<FindSameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindSameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindSameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
