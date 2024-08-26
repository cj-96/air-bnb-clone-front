import { NgClass } from '@angular/common';
import { Component, input, InputSignal, NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [NgClass,FontAwesomeModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {

  imageUrl = input<String>();
  avatarSize = input<"avatar-sm" | "avatar-xl">();

}
