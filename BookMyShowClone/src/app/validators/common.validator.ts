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


https://mdbootstrap.com/previews/docs/latest/html/intros/intro-register-classic-form.html

https://mdbootstrap.com/docs/angular/css/background-image/#v-3

https://www.wozber.com/en-us/app/versions/local/story/education
https://workstack.io/
https://www.impactbnd.com/blog/18-award-winning-website-designs

https://tobiasahlin.com/blog/flexbox-break-to-new-row/

https://www.youtube.com/watch?time_continue=30&v=N0uCMHi1Mps

https://dribbble.com/shots/4892731-Dashboard-Design

https://dribbble.com/shots/5363100-A-Influencer-Profile/attachments

https://medium.com/theymakedesign/website-dashboard-ui-examples-inspiration-5db21df04cbd

https://dribbble.com/shots/9830381-Management-System-for-Hospitals-and-Labs

https://in.pinterest.com/pin/556124253990865014/?nic_v2=1a2tk84cp

https://in.pinterest.com/pin/649081365033052821/?nic_v2=1a2tk84cp