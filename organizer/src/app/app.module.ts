import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule, MatCardModule, MatGridListModule, MatInputModule, MatButtonModule, MatRadioModule, MatIconModule, MatCheckboxModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { WeatherComponent } from './weather/weather.component';
import { AgendaComponent } from './agenda/agenda.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    AgendaComponent,
    NavigationComponent
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
    MatRadioModule,
    MatCheckboxModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
