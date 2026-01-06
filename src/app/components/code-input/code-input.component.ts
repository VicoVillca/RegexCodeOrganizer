import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextarea } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-code-input',
  standalone: true,  // ¡Standalone!
  imports: [CommonModule, FormsModule, InputTextarea, ButtonModule],
  templateUrl: './code-input.component.html',
  styleUrls: ['./code-input.component.scss']
})
export class CodeInputComponent {
  @Input() code: string = '';
  @Output() codeChange = new EventEmitter<string>();
  
  onCodeChange(newCode: string) {
    this.codeChange.emit(newCode);
  }
}