import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  display: string;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private actroute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.LoginForm = this.fb.group({
      Login_Username: [null],
      Login_Password: [null]
    });
  }

  submit(): void {
    // Display all form values
    this.display = this.LoginForm.value;

    // Display Username
    this.display = this.LoginForm.value.Login_Username;

    // Checks if the Username is empty
    if (
      this.LoginForm.value.Login_Username == null ||
      this.LoginForm.value.Login_Password == null
    ) {
      this.display = "Username or Password  cannot be empty";
    }

    // Checks if the Password has Uppercase characters in it
    let ok = "no";
    for (let i = 0; i <= this.LoginForm.value.Login_Password.length - 1; i++) {
      if ( this.LoginForm.value.Login_Password[i].charCodeAt() >= 65 &&
        this.LoginForm.value.Login_Password[i].charCodeAt() <= 90
      ) {
        ok = "yes";
      }
    }

    if (ok == "no") {
      this.display = "you must have Uppercase in your Password";
    }

    if (ok == "yes") {
      // re-routes you to the add page
      this.route.navigate(["add"]);
    }
  }
  // end submitPeter
} // end class
