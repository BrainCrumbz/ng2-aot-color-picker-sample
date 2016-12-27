import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import CustomValidators from '../forms/CustomValidators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact-component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, CustomValidators.validateEmail]],
      content: ['', [Validators.required, Validators.minLength(10)]],
      color: ['', Validators.required],
    });

    this.colorControl = <FormControl>this.contactForm.controls['color'];
  }

  submitForm(): void {
    console.log(this.contactForm);
  }

  get colorBackground(): string {
    return (
      this.colorControl && this.colorControl.value ||
      '');
  }

  onColorPickerChange(colorCode: string): void {
    if (!this.colorControl) return;

    // update input field value within form after manually picking color
    this.colorControl.setValue(colorCode);
    this.colorControl.markAsDirty();
    this.colorControl.markAsTouched();
  }

  private colorControl: FormControl;
}
