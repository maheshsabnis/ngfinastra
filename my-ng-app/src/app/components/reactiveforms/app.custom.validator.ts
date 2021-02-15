import { AbstractControl } from "@angular/forms";

export class CustomValidator {
  // since the return type is not fixed
  // 'any' is used
  static checkEven(ctrl: AbstractControl):any {
    let val = parseInt(ctrl.value);
    if(val%2 === 0)
      return null; // valid
    return {even:false}; // invalid
  }
}
