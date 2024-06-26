import { Component, OnInit, inject } from '@angular/core';
import { DeleteMovieService } from '../delete-movie.service';
import { UpdateMovieService } from '../update-movie.service';
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
import { ActivatedRoute, Router } from '@angular/router';

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
export class UpdateMovieComponent implements OnInit{
  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private deleteMovieService: DeleteMovieService,
    private updateMovieService: UpdateMovieService
  ) {}

  baseUrl: string = 'http://localhost:3000/movies';
  moviesFromDB: any[] = [];
  movieId: string = '';

  floatLabelControl = new FormControl('auto' as FloatLabelType);

  updateMovie = new FormGroup({
    id: new FormControl<string>(''),
    title: new FormControl<string>(''),
    poster_path: new FormControl<string>(''),
  });

  movieResolveService = inject(MovieResolveService);

  // from Youtube tutorial
  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  onDelete() {
    this.deleteMovieService
      .deleteMovie(this.movieId, `${this.baseUrl}/${this.movieId}`)
      .subscribe(
        (res: any) => {
          // From YouTube tutorial on how to reload a component
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['./movie'], {
            relativeTo: this.route,
          });

          this._snackBar.open('Movie Successfully Deleted', 'Close', {
            duration: 3000
          });
          this.dialogRef.closeAll();
        },
        (error) => {
          this._snackBar.open(`Unable to delete movie: ${error}`, 'Close', {
            duration: 3000
          });
          this.dialogRef.closeAll();
        }
      );
  }

  onSubmit() {
    this.updateMovie.markAllAsTouched();
    const isFormValid = this.updateMovie.valid;
    let isDatabaseUpdated = false;
    this.updateMovieService
      .updateMovie(
        this.movieId,
        this.updateMovie.value,
        `${this.baseUrl}/${this.movieId}`
      )
      .subscribe(
        (res: any) => {
          isDatabaseUpdated = true;
          // From YouTube tutorial on how to reload component
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['./movie'], {
            relativeTo: this.route,
          });
          if (isFormValid && isDatabaseUpdated) {
            this._snackBar.open('Movie Successfully Updated', 'Close', {
              duration: 3000
            });
            this.dialogRef.closeAll();
          }
        },
        (error) => {
          this._snackBar.open(`Could not update movie: ${error}`, 'Close', {
            duration: 3000
          });
          this.dialogRef.closeAll();
        }
      );
  }

  // following stackoverflow example
  subscription: any;

  ngOnInit(): void {
    this.subscription = this.movieResolveService.getDetails.subscribe(
      (res: any) => {
        console.log(res);
        this.movieId = res.movieId;
        this.updateMovie = this.formBuilder.group({
          id: [res.movieId, Validators.required],
          title: [res.title, Validators.required],
          poster_path: [res.poster_path, Validators.required],
        });
      }
    );
  }
}
