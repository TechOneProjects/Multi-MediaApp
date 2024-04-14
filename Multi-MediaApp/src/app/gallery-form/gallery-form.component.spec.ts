import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFormComponent } from './gallery-form.component';

describe('GalleryFormComponent', () => {
  let component: GalleryFormComponent;
  let fixture: ComponentFixture<GalleryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalleryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
