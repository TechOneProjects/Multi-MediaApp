import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDanielVComponent } from './about-daniel-v.component';

describe('AboutDanielVComponent', () => {
  let component: AboutDanielVComponent;
  let fixture: ComponentFixture<AboutDanielVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutDanielVComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutDanielVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
