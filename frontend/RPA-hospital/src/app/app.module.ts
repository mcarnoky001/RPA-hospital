import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticleModule } from './article/article.module';
import { EditorModule } from './editor/editor.module';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { SettingsModule } from './settings/settings.module';
import { Routes } from '@angular/router';
import {MatTableModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  ApiService,
  ArticlesService,
  AuthGuard,
  CommentsService,
  FooterComponent,
  HeaderComponent,
  JwtService,
  ProfilesService,
  SharedModule,
  TagsService,
  UserService
} from './shared';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';

import { MainPageComponent } from './main-page/main-page.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });
const appRoutes: Routes = [
  { path: '', component: HomeModule },
  { path: 'main', component: MainPageComponent },
  { path: 'patient-detail/:id', component: PatientDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainPageComponent,
    PatientDetailComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ArticleModule,
    EditorModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileModule,
    rootRouting,
    SharedModule,
    SettingsModule,
    AuthModule,
    RouterModule.forRoot(
      appRoutes      
    ),
    CdkTableModule,
    MatTableModule,
    MatFormFieldModule,
  MatInputModule
  ],
  providers: [
    ApiService,
    ArticlesService,
    AuthGuard,
    CommentsService,
    JwtService,
    ProfilesService,
    TagsService,
    UserService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
