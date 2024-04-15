import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGamesComponent } from './video-games.component';

describe('VideoGamesComponent', () => {
  let component: VideoGamesComponent;
  let fixture: ComponentFixture<VideoGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoGamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
