import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(matIconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon('arrow', sanitizer.bypassSecurityTrustResourceUrl('assets/arrow.svg'));
  }
}
