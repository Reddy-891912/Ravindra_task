import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControllerComponent } from './controller/controller.component';
import { InitialStageComponent } from './initial-stage/initial-stage.component';
import { Stage2Component } from './stage2/stage2.component';
import { Stage3Component } from './stage3/stage3.component';
import { FinalStageComponent } from './final-stage/final-stage.component';
import { DeleteTasksComponent } from './delete-tasks/delete-tasks.component';
import { FormsModule } from '@angular/forms';
import { OperationsComponent } from './operations/operations.component';

@NgModule({
  declarations: [
    AppComponent,
    ControllerComponent,
    InitialStageComponent,
    Stage2Component,
    Stage3Component,
    FinalStageComponent,
    DeleteTasksComponent,
    OperationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
