import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFindSameComponent } from './create-find-same.component';

describe('CreateFindSameComponent', () => {
  let component: CreateFindSameComponent;
  let fixture: ComponentFixture<CreateFindSameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFindSameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateFindSameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
