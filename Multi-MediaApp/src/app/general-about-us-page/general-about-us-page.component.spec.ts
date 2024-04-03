import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralAboutUsPageComponent } from './general-about-us-page.component';

describe('GeneralAboutUsPageComponent', () => {
  let component: GeneralAboutUsPageComponent;
  let fixture: ComponentFixture<GeneralAboutUsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralAboutUsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralAboutUsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
