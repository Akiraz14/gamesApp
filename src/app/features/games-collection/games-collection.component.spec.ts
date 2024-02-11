import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesCollectionComponent } from './games-collection.component';

describe('GamesCollectionComponent', () => {
  let component: GamesCollectionComponent;
  let fixture: ComponentFixture<GamesCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesCollectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamesCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
