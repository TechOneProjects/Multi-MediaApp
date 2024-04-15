import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SargeAboutMeComponent } from './sarge-about-me.component';

describe('SargeAboutMeComponent', () => {
  let component: SargeAboutMeComponent;
  let fixture: ComponentFixture<SargeAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SargeAboutMeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SargeAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
