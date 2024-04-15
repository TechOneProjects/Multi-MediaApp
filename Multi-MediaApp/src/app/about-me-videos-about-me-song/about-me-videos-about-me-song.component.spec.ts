import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeVideosAboutMeSongComponent } from './about-me-videos-about-me-song.component';

describe('AboutMeVideosAboutMeSongComponent', () => {
  let component: AboutMeVideosAboutMeSongComponent;
  let fixture: ComponentFixture<AboutMeVideosAboutMeSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeVideosAboutMeSongComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutMeVideosAboutMeSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
