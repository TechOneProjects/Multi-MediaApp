import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumBottomCardComponent } from './album-bottom-card.component';

describe('AlbumBottomCardComponent', () => {
  let component: AlbumBottomCardComponent;
  let fixture: ComponentFixture<AlbumBottomCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumBottomCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumBottomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
