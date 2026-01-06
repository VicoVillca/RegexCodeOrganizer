import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

// Importar componentes standalone
import { CodeInputComponent } from '../../components/code-input/code-input.component';

//import { CodeOrganizerService } from '../../core/services/code-organizer.service';
import { OptionsPanelComponent } from '../../components/options-panel/options-panel.component';
import { OrganizationOptions, OrganizedResult } from '../../core/models/code-block.model';

@Component({
  selector: 'app-organizer-page',
  standalone: true,  // ¡Este también es standalone!
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    ProgressSpinnerModule,
    
    // Importar los componentes standalone aquí
    CodeInputComponent,
    OptionsPanelComponent,
    CodeInputComponent
  ],
  templateUrl: './organizer-page.component.html',
  styleUrls: ['./organizer-page.component.scss']
})
export class OrganizerPageComponent {
  inputCode: string = '';

  
  constructor() {}
  
  organizeCode() {
    /*if (!this.inputCode.trim()) return;
    
    this.isProcessing = true;
    
    setTimeout(() => {
      this.result = this.organizerService.organizeJavaCode(this.inputCode, this.options);
      this.isProcessing = false;
    }, 500);*/
  }
}