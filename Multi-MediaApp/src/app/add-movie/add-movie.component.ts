import { Component } from '@angular/core';
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
import axios from 'axios';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaPage2Component } from '../media-page-2/media-page-2.component';

@Component({
  selector: 'app-add-movie',
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
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.sass',
})
export class AddMovieComponent {
  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  databaseMovies: any[] = [];

  floatLabelControl = new FormControl('auto' as FloatLabelType);

  addMovie = new FormGroup({
    title: new FormControl<string>(''),
    poster_path: new FormControl<string>(''),
  });

  // from docs
  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  onSubmit() {
    console.log(this.addMovie.value);
    this.addMovie.markAllAsTouched();
    const isFormValid = this.addMovie.valid;
    let isAddedToDatabase = false;
    this.databaseMovies.push(this.addMovie.value);
    axios
      .post(`http://localhost:5000/movies`, this.addMovie.value)
      .then((res: any) => {
        isAddedToDatabase = true;
        // Youtube tutorial for reloading component
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['./movie'], {
          relativeTo: this.route,
        });
        if (isFormValid && isAddedToDatabase) {
          this._snackBar.open('Movie Successfully Added', 'Close');
          this.dialogRef.closeAll();
        }
      })
      .catch((error: string) => {
        this._snackBar.open(error, 'Close');
        this.dialogRef.closeAll();
      });
  }

  ngOnInit(): void {
    this.addMovie = this.formBuilder.group({
      title: ['', Validators.required],
      poster_path: ['', Validators.required],
    });
  }
}
