import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeaturesComponent } from './features/features.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { DashboardhomeComponent } from './dashboard/dashboardhome/dashboardhome.component';
import { DashboardviewComponent } from './dashboard/dashboardview/dashboardview.component';
import { DashboardaccountComponent } from './dashboard/dashboardaccount/dashboardaccount.component';
import { PaymentgatewayComponent } from './paymentgateway/paymentgateway.component';
import { DashboardnotificationsComponent } from './dashboard/dashboardnotifications/dashboardnotifications.component';
import { DashboarduploadComponent } from './dashboard/dashboardupload/dashboardupload.component';
import { DashboardshareComponent } from './dashboard/dashboardshare/dashboardshare.component';
import { OrgDashboardComponent } from './Organization/org-dashboard/org-dashboard.component';
import { OrgSignupComponent } from './Organization/org-signup/org-signup.component';
import { OrgSigninComponent } from './Organization/org-signin/org-signin.component';
import { OrgHomeComponent } from './Organization/org-home/org-home.component';
import { OrgCardProfileComponent } from './Organization/org-home/org-card-profile/org-card-profile.component';


const routes: Routes = [
  { path: 'Header', component: HeaderComponent },
  { path: 'Footer', component: FooterComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Aboutus', component: AboutusComponent },
  { path: 'Features', component: FeaturesComponent },
  { path: 'Contactus', component: ContactusComponent },
  { path: '',   redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Dashboard', redirectTo: 'Dashboard/Dashboardhome', pathMatch: 'full'},
  { path: 'Dashboard', component: DashboardComponent,
      children: [
        { path: 'Dashboardhome', component: DashboardhomeComponent },
        { path: 'Dashboardview', component: DashboardviewComponent },
        { path: 'Dashboardupload', component: DashboarduploadComponent },
        { path: 'Dashboardshare', component: DashboardshareComponent },
        { path: 'Dashboardaccount', component: DashboardaccountComponent },
        { path: 'Dashboardnotifications', component: DashboardnotificationsComponent }
      ]
  },
  { path: 'Orgdashboard', redirectTo: 'OrgDashboard/OrgHome', pathMatch: 'full'},
  { path: 'Orgdashboard', component: OrgDashboardComponent,
    children: [
        { path: 'OrgHome', component: OrgHomeComponent,
            children:[
              { path: 'OrgCardProfile',component: OrgCardProfileComponent }
            ]
        }, 
    ]
  },
  
  { path: 'orgSignin', component: OrgSigninComponent },
  { path: 'orgSignup', component: OrgSignupComponent },
  { path: 'Signin', component: SigninComponent },
  { path: 'Signup', component: SignupComponent },
  { path: 'Payment', component: PaymentgatewayComponent},
  { path: 'Feedback', component: FeedbackComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
