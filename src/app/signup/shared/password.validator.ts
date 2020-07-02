import { AbstractControl } from '@angular/forms';

export function PasswordValidator(control: AbstractControl): {

  [ key: string ]: boolean } | null {
  const Password = control.get('password');
  const ConfirmPassword = control.get('confirmpassword');

  return Password && ConfirmPassword && Password.value !== ConfirmPassword.value ?
  { 'misMatch ': true } : null;
}


