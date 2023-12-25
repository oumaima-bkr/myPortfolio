import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import Swal from 'sweetalert2';


@Component({
    selector:"app-contact",
    templateUrl:"contact.component.html",
    styleUrls:["contact.component.css"]
})

export class Contact{

    contactForm:FormGroup
    constructor(private formBuilder: FormBuilder) {
        this.contactForm=this.formBuilder.group({
            email: ['',[Validators.required,Validators.email]],
            subject: ['',[Validators.required,Validators.minLength(3)]],
            content: ['',[Validators.required,Validators.minLength(3)]]
          });
    }

    onSubmit(){
        const emailControl = this.contactForm.get('email')
        const subjectControl=this.contactForm.get('subject')
        const contentControl=this.contactForm.get('content')

        if(this.contactForm.valid){

        }else{
            if(emailControl && !emailControl.valid){
                Swal.fire('Email Invalid', 'The email address is not valid.', 'error');
            }
            if (subjectControl && !subjectControl.valid) {
                Swal.fire('Subject Invalid', 'The text must be at least 4 characters long.', 'error');
            }
            if (contentControl && !contentControl.valid) {
                Swal.fire('Email Invalid', 'The text must be at least 4 characters long.', 'error');
            }
        }
    }
    


}