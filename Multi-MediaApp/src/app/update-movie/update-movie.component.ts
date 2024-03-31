import { Component, Input, inject } from '@angular/core';
import {
  MatDialogModule,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialog,
} from '@angular/material/dialog';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  FloatLabelType,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MovieResolveService } from '../movie-resolve.service';
import { DatabaseServiceService } from '../database-service.service';

@Component({
  selector: 'app-update-movie',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatFormFieldModule,
    MatInputModule,
    MatDialogActions,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  templateUrl: './update-movie.component.html',
  styleUrl: './update-movie.component.sass',
})
export class UpdateMovieComponent {
  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialog,
    private databaseService: DatabaseServiceService
  ) {}

  movieId: string = '';

  floatLabelControl = new FormControl('auto' as FloatLabelType);

  updateMovie = new FormGroup({
    title: new FormControl<string>(''),
    complete_poster_path: new FormControl<string>(''),
  });

  movieResolveService = inject(MovieResolveService);

  // from Youtube tutorial
  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  onSubmit() {
    console.log(this.updateMovie.value);
    this.updateMovie.markAllAsTouched();
    const isFormValid = this.updateMovie.valid;
    let isDatabaseUpdate = false;
    this.databaseService
      .updateMovie(this.updateMovie.value)
      .subscribe((res: any) => {
        console.log(res);
      });
    if (isFormValid && isDatabaseUpdate) {
      this._snackBar.open('Movie Successfully Updated', 'Close');
      this.dialogRef.closeAll();
    }
  }

  // following stackoverflow example
  subscription: any;

  ngOnInit(): void {
    // this.updateMovie = this.formBuilder.group({
    //   title: ['', Validators.required],
    //   complete_poster_path: ['', Validators.required],
    // });

    this.subscription = this.movieResolveService.getDetails.subscribe(
      (res: any) => {
        console.log(res);
        this.updateMovie = this.formBuilder.group({
          title: [res.title, Validators.required],
          complete_poster_path: [res.complete_poster_path, Validators.required],
        });
        this.movieId = res.movieId;
      }
    );
  }
}
