import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasanAboutMeComponent } from './hasan-about-me.component';

describe('HasanAboutMeComponent', () => {
  let component: HasanAboutMeComponent;
  let fixture: ComponentFixture<HasanAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HasanAboutMeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HasanAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
