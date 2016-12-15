import { Component } from '@angular/core';

// We will need to import a couple of specific API’s for dealing with reactive forms
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'complex-form',
	// For this form, we'll write out UI in a separate file
	templateUrl: './app.complexform.html'
})
export class ComplexFormComponent {
	// The FormGroup object as you may remember from the simple form example exposes various API’s for dealing with forms. Here we are creating a new object and setting its type to FormGroup
	complexForm: FormGroup;

	// we are passing an instance of the FormBuilder to our constructor
	constructor(fb: FormBuilder) {
		// Here we are using the FormBuilder to build out our form.
		this.complexForm = fb.group({
			// we can set default value by passing in the corresponding value or leave blank
			'firstName': [null, Validators.required],
			// we can use more than one validator per field, if we want to use more than one validator we have to wrap our array of validators with a Validator compose function. Here we are using a required, minimum length and maximum length validator.

			'lastName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
			'gender': [null, Validators.required],
			'hiking': 'false',
			'running': 'false',
			'swimming': 'false'
		})
	}

	// Again we'll implement our form submit function that will just console.log the result
	submitForm(value: any): void {
		console.log('Reactive Form data: ')
		console.log(value);
	}
	
}