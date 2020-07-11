import { AbstractControl, FormGroup} from '@angular/forms';
import { map } from 'rxjs/operators';
export class CommonValidator {
  public static passwordValidate(firstField, secondField) {
   return (c: FormGroup) => {
      return (c.controls && c.controls[firstField].value == c.controls[secondField].value) ? null : {
        passwordsEqual: {
          valid: false
        }
      };
    }
  }


  public static emptyValidate(control: FormGroup) {
    let firstCharacter=control.value.charAt(0)
    let secondCharacter=control.value.trim()
    secondCharacter= secondCharacter.charAt(0)
    let characterRegex=/^[A-Za-z][A-Za-z]*$/
    console.log("",characterRegex.test(secondCharacter))
    if(firstCharacter==' ' && !characterRegex.test(secondCharacter)){
          return{ space: {valid:true}  
        }}
   else {
        return null;
    }
}

public static characterValidate(control: FormGroup) {
  let firstCharacter=control.value.charAt(0)
  // console.log("aa",firstCharacter)
   let firstCharacterRegex=/^[A-Za-z][A-Za-z]*$/
   if(firstCharacter==''){
    return null
   }
      else if(!firstCharacterRegex.test(firstCharacter))  {
    return  {validateFirstCharacter: {
        valid: true      }   
   }}
   else{
     return null
   }
  }

  public static stringMaxLengthValidate(control: FormGroup) {
    let value = control.value.trim();
    let stringLength = value.length;
    console.log("stringmaxLength",stringLength)
    if (stringLength >20) {
        return {
            max: {
                valid: true
            }
        };
    }
    else {
      return null;
  }
}
}

