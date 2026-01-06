import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { OrganizationOptions } from '../../core/models/code-block.model';

@Component({
  selector: 'app-options-panel',
  standalone: true,  // ¡Standalone!
  imports: [CommonModule, FormsModule, DropdownModule, CheckboxModule],
  templateUrl: './options-panel.component.html',
  styleUrls: ['./options-panel.component.scss']
})
export class OptionsPanelComponent {
  @Input() options!: OrganizationOptions;
  @Output() optionsChange = new EventEmitter<OrganizationOptions>();
  
  onOptionChange() {
    this.optionsChange.emit(this.options);
  }
}