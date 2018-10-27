import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatDialogComponent } from './chat-dialog/chat-dialog';
import { ChatService } from '../services/chat.service';
@NgModule({
	imports: [
	  CommonModule,
	  FormsModule
	],
	declarations: [
	  ChatDialogComponent
	],
	exports: [ ChatDialogComponent ], // <-- export here
	providers: [ChatService]
  })
export class ComponentsModule {}
