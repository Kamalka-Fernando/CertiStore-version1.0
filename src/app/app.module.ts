
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardviewComponent } from './dashboard/dashboardview/dashboardview.component';
import { DashboardaccountComponent } from './dashboard/dashboardaccount/dashboardaccount.component';
import { DashboardhomeComponent } from './dashboard/dashboardhome/dashboardhome.component';
import { DashboardnotificationsComponent } from './dashboard/dashboardnotifications/dashboardnotifications.component';
import { DashboarduploadComponent } from './dashboard/dashboardupload/dashboardupload.component';
import { DashboardshareComponent } from './dashboard/dashboardshare/dashboardshare.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PaymentgatewayComponent } from './paymentgateway/paymentgateway.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { ReactiveFormsModule } from '@angular/forms';

import { SigninService } from './signin/signin.service';
import { SignupService } from './signup/signup.service';
import { FeedbackService } from './feedback/feedback.service';
import { OrgDashboardComponent } from './Organization/org-dashboard/org-dashboard.component';
import { OrgSignupComponent } from './Organization/org-signup/org-signup.component';
import { OrgSigninComponent } from './Organization/org-signin/org-signin.component';
import { OrgHomeComponent } from './Organization/org-home/org-home.component';
import { OrgCardProfileComponent } from './Organization/org-home/org-card-profile/org-card-profile.component';


@NgModule({
   declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    FeaturesComponent,
    SigninComponent,
    SignupComponent,
    AboutusComponent,
    ContactusComponent,
    DashboardviewComponent,
    DashboardaccountComponent,
    DashboardhomeComponent,
    DashboardnotificationsComponent,
    DashboardshareComponent,
    DashboarduploadComponent,
    FeedbackComponent,
    PaymentgatewayComponent,
    HeaderComponent,
    FooterComponent,
    OrgDashboardComponent,
    OrgSignupComponent,
    OrgSigninComponent,
    OrgHomeComponent,
    OrgCardProfileComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FileUploadModule,
    ImageCropperModule,
    NgxPageScrollModule,
    ReactiveFormsModule
  ],
  providers: [
    SigninService,
    SignupService,
    FeedbackService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


