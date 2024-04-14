import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryImageEditFormComponent } from './gallery-image-edit-form.component';

describe('GalleryImageEditFormComponent', () => {
  let component: GalleryImageEditFormComponent;
  let fixture: ComponentFixture<GalleryImageEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryImageEditFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalleryImageEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
