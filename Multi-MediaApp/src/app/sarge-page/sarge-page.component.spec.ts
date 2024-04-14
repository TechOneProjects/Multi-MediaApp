import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SargePageComponent } from './sarge-page.component';

describe('SargePageComponent', () => {
  let component: SargePageComponent;
  let fixture: ComponentFixture<SargePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SargePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SargePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
