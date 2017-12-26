import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule, MatCardModule, MatGridListModule, MatInputModule, MatButtonModule, MatRadioModule, MatIconModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { WeatherComponent } from './weather/weather.component';
import { AgendaComponent } from './agenda/agenda.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    AgendaComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
