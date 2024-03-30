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
    private dialogRef: MatDialog
  ) {}
  floatLabelControl = new FormControl('auto' as FloatLabelType);

  addMovie = new FormGroup({
    title: new FormControl<string>(''),
    complete_poster_path: new FormControl<string>(''),
  });

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  onSubmit() {
    console.log(this.addMovie.value);
    this.addMovie.markAllAsTouched();
    const isFormValid = this.addMovie.valid;
    if (isFormValid) {
      this._snackBar.open('Movie Successfully Added', 'Close');
      this.dialogRef.closeAll();
    }
  }

  ngOnInit(): void {
    this.addMovie = this.formBuilder.group({
      title: ['', Validators.required],
      complete_poster_path: ['', Validators.required],
    });
  }
}
