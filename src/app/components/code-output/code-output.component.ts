import { Component, Input, AfterViewInit, ElementRef, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { OrganizedResult } from '../../../core/models/code-block.model';

declare var Prism: any;

@Component({
  selector: 'app-code-output',
  standalone: true,
  imports: [CommonModule,ButtonModule],
  templateUrl: './code-output.component.html',
  styleUrls: ['./code-output.component.scss']
})
export class CodeOutputComponent implements AfterViewInit, OnChanges {
  @Input() result: OrganizedResult | null = null;
  @ViewChild('codeElement') codeElement!: ElementRef;
  
  showCopied = false;
  
  copyToClipboard() {
    if (this.result?.organizedCode) {
      navigator.clipboard.writeText(this.result.organizedCode)
        .then(() => {
          this.showCopied = true;
          setTimeout(() => this.showCopied = false, 3000);
        })
        .catch(err => {
          console.error('Error al copiar:', err);
        });
    }else{
      console.log("!this.result?.organizedCode");
    }
  }
  
  ngAfterViewInit() {
    this.applySyntaxHighlighting();
  }
  
  ngOnChanges(changes: SimpleChanges) {
    
    if (changes['result'] && changes['result'].currentValue) {

      setTimeout(() => {
        this.forceHighlightUpdate();
      }, 50); // Aumentado a 50ms
    }
  }
  
  private applySyntaxHighlighting() {
    
    if (!this.codeElement?.nativeElement) {
      console.log('❌ codeElement no encontrado');
      return;
    }
    
    if (!this.result?.organizedCode) {
      console.log('❌ No hay código para mostrar');
      return;
    }
    
    if (typeof Prism === 'undefined') {
      console.log('❌ Prism no está cargado');
      return;
    }
    
    // Verifica el contenido actual
    const currentText = this.codeElement.nativeElement.textContent;
    const expectedText = this.result.organizedCode;
    console.log('Texto en elemento:', currentText?.substring(0, 50));
    console.log('Texto esperado:', expectedText?.substring(0, 50));
    
    // Aplica highlighting
    Prism.highlightElement(this.codeElement.nativeElement);
    console.log('✅ Highlighting aplicado');
  }
  
  // Método FORZADO para actualizar
  private forceHighlightUpdate() {
    console.log('💥 FORZANDO actualización de highlighting');
    
    if (!this.codeElement?.nativeElement || !this.result?.organizedCode) {
      return;
    }
    
    // 1. Asegurar que el texto esté actualizado
    const codeElement = this.codeElement.nativeElement;
    codeElement.textContent = this.result.organizedCode;
    
    // 2. Remover clases antiguas de Prism
    codeElement.className = 'language-java';
    
    // 3. Buscar el padre <pre> y también limpiarlo
    const preElement = codeElement.parentElement;
    if (preElement && preElement.tagName === 'PRE') {
      preElement.className = 'language-java';
    }
    
    // 4. Forzar reflow (truco para DOM)
    codeElement.offsetHeight;
    
    // 5. Aplicar highlighting
    if (typeof Prism !== 'undefined') {
      Prism.highlightElement(codeElement);
      console.log('🎉 Highlighting forzado exitoso');
    }
  }
  
  getLineCount(): number {
    return this.result?.organizedCode?.split('\n').length || 0;
  }
  
  getFileSize(): string {
    if (!this.result?.organizedCode) return '0';
    const bytes = new Blob([this.result.organizedCode]).size;
    return (bytes / 1024).toFixed(2);
  }
  
  getProcessingTime(): number {
    return this.result?.stats?.processingTime || 0;
  }
  
  getLinesReduced(): number {
    return this.result?.stats?.linesReduced || 0;
  }
}