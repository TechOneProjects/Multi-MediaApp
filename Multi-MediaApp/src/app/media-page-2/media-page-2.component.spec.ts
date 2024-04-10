import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPage2Component } from './media-page-2.component';

describe('MediaPage2Component', () => {
  let component: MediaPage2Component;
  let fixture: ComponentFixture<MediaPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaPage2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediaPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
