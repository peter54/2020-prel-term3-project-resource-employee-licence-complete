import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
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
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from "@angular/material";
import { RouterModule, Routes } from "@angular/router";
import { DataService } from "./services/data.service";

// COMPONENTS
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { DisplayRecordComponent } from "./display-record/display-record.component";
import { DisplaySortComponent } from "./display-sort/display-sort.component";
import { AddComponent } from "./add/add.component";
import { ReportsComponent } from "./reports/reports.component";
import { Report1Component } from "./report-1/report-1.component";
import { Report2Component } from "./report-2/report-2.component";
import { Report3Component } from "./report-3/report-3.component";

// ROUTING LINKS
const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "display-sort", component: DisplaySortComponent },
  { path: "add", component: AddComponent },
  { path: "reports", component: ReportsComponent },
  { path: "report1", component: Report1Component },
  { path: "report2", component: Report2Component },
  { path: "report3", component: Report3Component },
  { path: "login", component: LoginComponent },
  { path: "display/:id", component: DisplayRecordComponent },
  { path: "**", component: LoginComponent }
];

// MODULES
@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    // ROUTING
    RouterModule.forRoot(
      appRoutes
      //  { enableTracing: true } // <-- debugging purposes only
    )
  ], // end imports
  declarations: [
    AppComponent,
    ReportsComponent,
    Report1Component,
    Report2Component,
    AddComponent,
    LoginComponent,
    Report3Component,
    DisplayRecordComponent,
    DisplaySortComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent],
  providers: [DataService]
})
export class AppModule {}
