import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChasesMusicComponent } from './chases-music.component';

describe('ChasesMusicComponent', () => {
  let component: ChasesMusicComponent;
  let fixture: ComponentFixture<ChasesMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChasesMusicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChasesMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
