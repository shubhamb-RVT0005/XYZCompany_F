import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-contact-us',
  imports: [CommonModule,RouterLink],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {}
