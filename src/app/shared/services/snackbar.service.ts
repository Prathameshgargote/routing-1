import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private snackbar:MatSnackBar
  ) { }

  opensnakbar(msg:string){
    this.snackbar.open(msg,'close',{
      verticalPosition:'top',
      horizontalPosition:'left',
      duration:3000
    })
  }
}
