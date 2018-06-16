import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatTabsModule, MatTableModule,
  MatIconModule, MatListModule, MatAutocompleteModule, MatInputModule, MatNativeDateModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AppRoute } from './app.routing';
import { AmComponent } from './angular-material/angular-material.component';
import { AutoCompleteComponent } from './angular-material/auto-complete/auto-complete.component';
import { ADatePickerComponent } from './angular-material/date-picker/a-date-picker.component';
import { AInputComponent } from './angular-material/a-input/a-input.component';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    AutoCompleteComponent,
    AmComponent,
    DemoComponent,
    ADatePickerComponent,
    AInputComponent
  ],
  entryComponents:[
    ADatePickerComponent,
    AInputComponent,
    AutoCompleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoute,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
