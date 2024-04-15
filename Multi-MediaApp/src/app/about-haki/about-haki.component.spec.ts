import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHakiComponent } from './about-haki.component';

describe('AboutHakiComponent', () => {
  let component: AboutHakiComponent;
  let fixture: ComponentFixture<AboutHakiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutHakiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutHakiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
