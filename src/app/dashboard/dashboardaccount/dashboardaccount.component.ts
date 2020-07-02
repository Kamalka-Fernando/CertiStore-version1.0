import { Component, OnInit } from '@angular/core';
import { ImageCropperModule, ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-dashboardaccount',
  templateUrl: './dashboardaccount.component.html',
  styleUrls: ['./dashboardaccount.component.css']
})
export class DashboardaccountComponent{
  imageChangedEvent: any = 'save';
  croppedImage: any = 'https://www.w3schools.com/howto/img_avatar.png';

  fileChangeEvent(event: any) {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
  }
  imageLoaded() {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }
  crop(){
    this.imageChangedEvent.hide();
  }

}
