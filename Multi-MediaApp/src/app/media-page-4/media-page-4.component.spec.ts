import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPage4Component } from './media-page-4.component';

describe('MediaPage4Component', () => {
  let component: MediaPage4Component;
  let fixture: ComponentFixture<MediaPage4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaPage4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediaPage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
