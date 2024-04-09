import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanetteComponent } from './janette.component';

describe('JanetteComponent', () => {
  let component: JanetteComponent;
  let fixture: ComponentFixture<JanetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JanetteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JanetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
