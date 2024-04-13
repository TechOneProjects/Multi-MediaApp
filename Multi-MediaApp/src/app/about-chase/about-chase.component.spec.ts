import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutChaseComponent } from './about-chase.component';

describe('AboutChaseComponent', () => {
  let component: AboutChaseComponent;
  let fixture: ComponentFixture<AboutChaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutChaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutChaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
