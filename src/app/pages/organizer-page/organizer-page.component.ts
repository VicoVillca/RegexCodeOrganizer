import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CodeInputComponent } from '../../components/code-input/code-input.component';
import { CodeOutputComponent } from '../../components/code-output/code-output.component';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { JavaValidatorService } from '../../../core/services/java-validator.service';

@Component({
  selector: 'app-organizer-page',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    ProgressSpinnerModule,
    CodeInputComponent,
    CodeOutputComponent,
    Toast
  ],
  templateUrl: './organizer-page.component.html',
  styleUrls: ['./organizer-page.component.scss']
})

export class OrganizerPageComponent {
  options: any;
  result: any;
  isProcessing: boolean = false;
  inputCode: string = '';

  onCodeChange(codigo: string) {
    console.log(codigo);
    this.inputCode = codigo;
    this.organizeCode();
  }
  constructor(private messageService: MessageService,
    private javaValidatorService: JavaValidatorService
  ) { }
  limpiarPanel() {
    this.result = null;
  }

  organizeCode() {
    if (!this.javaValidatorService.isValidJavaCode(this.inputCode)) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error de Compilacion',
        detail: 'Por favor ingresa un codigo valido',
        life: 3000
      });
      this.result = null;
      return;
    }
    if (!this.inputCode.trim()) {
      this.result = null;
      this.messageService.add({
        severity: 'error',
        summary: 'Código vacío',
        detail: 'Por favor completa el formulario',
        life: 3000
      });
      return
    };

    this.isProcessing = true;

    this.result = {
      organizedCode: this.formatCode(this.inputCode),
      stats: {
        processingTime: 450,
        linesReduced: 5
      }
    };

    this.messageService.add({
      severity: 'success',
      summary: 'Se ordeno el codigo con exito!',
      life: 3000
    });
  }

  private formatCode(code: string): string {
    // la logica va aqui
    return code;
  }
}