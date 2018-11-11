import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import * as AfricasTalking from "africastalking";


const credentials = {
  username: "sandox",
  apiKey: "6a5a18c8259a48555291a910c169782189c078ed6abd6e1520aeb24bdc387169"
}

const africastalking = AfricasTalking(credentials);

const sms = africastalking.SMS;



@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})


export class SmsComponent implements OnInit {

  submitted: boolean = false;
  success: boolean = false;

  messageForm: FormGroup;



  constructor(private formBuilder: FormBuilder) { 
    this.messageForm = this.formBuilder.group({
      number: ['', Validators.required],
      message: ['', Validators.required]
    });

  }

  //Submit that sends an SMS
  //Create a working AT Service that can be accessed 

  sendSMS(){

    this.submitted = true;

    if(this.messageForm.invalid) {
      return;
    } else {

      const opts = {
        to: this.messageForm.controls.number.value,
        message: this.messageForm.controls.message.value
      }

      sms.send(opts)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        })
    }

    this.success = true
    
  }


  ngOnInit() {
    
  }


}
