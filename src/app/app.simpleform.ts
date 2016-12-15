// we'll import our depedencies
import { Component } from '@angular/core';

@Component({
	selector: 'simple-form',
	// we'll inline the template of our form
	templateUrl: './app.simpleform.html'
})
export class SimpleFormComponent {
	submitForm(form: any): void{
		console.log('Form Data: ');
		console.log(form);
	}
}