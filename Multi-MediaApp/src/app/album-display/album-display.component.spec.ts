import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDisplayComponent } from './album-display.component';

describe('AlbumDisplayComponent', () => {
  let component: AlbumDisplayComponent;
  let fixture: ComponentFixture<AlbumDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
