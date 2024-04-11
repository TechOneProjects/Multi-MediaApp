import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, inject } from '@angular/core';
import {  DBAlbum } from '../chases-music/album.interface';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { AlbumBottomCardComponent } from '../album-bottom-card/album-bottom-card.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-album-display',
  standalone: true,
  imports: [MatBottomSheetModule, AlbumBottomCardComponent, MatRadioModule, FormsModule, MatButtonModule],
  templateUrl: './album-display.component.html',
  styleUrl: './album-display.component.sass'
})
export class AlbumDisplayComponent implements OnChanges {
  @Input() dbAlbumArr: DBAlbum[] = [];
  @Output() selectedCompEvent = new EventEmitter<string>(); 
  @Output() refreshFetch = new EventEmitter<string>();

  bottomSheet = inject(MatBottomSheet);


  openBottomSheet(album: DBAlbum):void {
    this.bottomSheet.open(AlbumBottomCardComponent, {
      data: {album, bottomSheet: this.bottomSheet}
    })
    this.bottomSheet._openedBottomSheetRef?.afterDismissed().subscribe(()=> {
      this.refreshFetch.emit("")
    })
  }

  filteredArr: DBAlbum [] =  [];
  filterGenre: string = ""

  filter(): void {
    if(this.filterGenre) {
      this.filteredArr = this.dbAlbumArr.filter(album => album.genres.includes(this.filterGenre))
    } else {
      this.filteredArr = this.dbAlbumArr
    }
  }

  switchComp(): void {
    this.selectedCompEvent.emit("albums")
  }

ngOnChanges(changes: SimpleChanges): void {
  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //Add '${implements OnChanges}' to the class.
  this.filter()
}
}
