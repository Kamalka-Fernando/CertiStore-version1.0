import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { DashboarduploadService } from './dashboardupload.service';

const uploadAPI = 'http://localhost:4000/api/upload';

@Component({
  selector: 'app-dashboardupload',
  templateUrl: './dashboardupload.component.html',
  styleUrls: ['./dashboardupload.component.css']
})
export class DashboarduploadComponent {
  uploader: FileUploader ;
  hasBaseDropZoneOver: boolean;
  hasAnotherDropZoneOver: boolean;
  response: string;
  private readonly newProperty = this;

  constructor(private upload: DashboarduploadService) { 
    this.uploader = new FileUploader({
      disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
      formatDataFunctionIsAsync: true,
      formatDataFunction: async (item) => {
        return new Promise( (resolve, reject) => {
          resolve({
            name: item._file.name,
            length: item._file.size,
            contentType: item._file.type,
            date: new Date()
          });
        });
      }
    });
    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;
    this.response = '';
    this.uploader.response.subscribe( res => this.response = res );
  }
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  uploadCertificate() {
     this.upload.uploadCertificate(this.uploader)
      .subscribe(
         res => console.log(res),
         err => console.log(err)
      );
     console.log(this.uploader);
  }
}
