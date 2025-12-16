import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { profileSetName, profileSetProfile, selectProfile} from './store/profile.store';
import { Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private store = inject(Store);
  private fb = inject(FormBuilder);

  public title = signal('...');
  public form = this.fb.group({
    name: [ '', [Validators.required, Validators.minLength(3)]],
    age: [0, [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    saySomething: [''] 
  });
  
  constructor() {}
  
  profile$ = this.store.select(selectProfile);

  submit() {
    if(this.form.invalid) {
      return;
    };

    const profile = this.form.getRawValue();


    console.log("salvando profile ...", profile)
    this.store.dispatch(profileSetProfile({profile: {
        name: profile.name!,
        age: profile.age ?? 0,
        email: profile.email ?? "",
        saySomething: profile.saySomething ?? ""
    }}));
    this.title.set("Wow");
  }

}
