import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComponentsPage } from './multi-file-upload.component';
import { MultiFileUploadComponent } from '../multi-file-upload/multi-file-upload.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FileUploadModule,
    RouterModule.forChild([
      {
        path: '',
        component: ComponentsPage,
      },
    ]),
  ],
  declarations: [ComponentsPage, MultiFileUploadComponent],
})
export class ComponentPageModule {}