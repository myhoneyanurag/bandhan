import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'select-type', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'select-type',
    loadChildren: () => import('./select-type/select-type.module').then( m => m.SelectTypePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'waiting-approval',
    loadChildren: () => import('./waiting-approval/waiting-approval.module').then( m => m.WaitingApprovalPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'upload-activities',
    loadChildren: () => import('./upload-activities/upload-activities.module').then( m => m.UploadActivitiesPageModule)
  },
  {
    path: 'notificationns',
    loadChildren: () => import('./notificationns/notificationns.module').then( m => m.NotificationnsPageModule)
  },
  {
    path: 'mypoints',
    loadChildren: () => import('./mypoints/mypoints.module').then( m => m.MypointsPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'my-activities',
    loadChildren: () => import('./my-activities/my-activities.module').then( m => m.MyActivitiesPageModule)
  },
  {
    path: 'stepper',
    loadChildren: () => import('./stepper/stepper.module').then( m => m.StepperPageModule)
  },
  {
    path: 'rank',
    loadChildren: () => import('./rank/rank.module').then( m => m.RankPageModule)
  },
  {
    path: 'login-manager',
    loadChildren: () => import('./login-manager/login-manager.module').then( m => m.LoginManagerPageModule)
  },
  {
    path: 'home-manager',
    loadChildren: () => import('./home-manager/home-manager.module').then( m => m.HomeManagerPageModule)
  },
  {
    path: 'settings-manager',
    loadChildren: () => import('./settings-manager/settings-manager.module').then( m => m.SettingsManagerPageModule)
  },
  {
    path: 'notification-manager',
    loadChildren: () => import('./notification-manager/notification-manager.module').then( m => m.NotificationManagerPageModule)
  },
  {
    path: 'new-request',
    loadChildren: () => import('./new-request/new-request.module').then( m => m.NewRequestPageModule)
  },
  {
    path: 'terms-condition',
    loadChildren: () => import('./terms-condition/terms-condition.module').then( m => m.TermsConditionPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'schemes',
    loadChildren: () => import('./schemes/schemes.module').then( m => m.SchemesPageModule)
  },
  {
    path: 'nameste',
    loadChildren: () => import('./nameste/nameste.module').then( m => m.NamestePageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
