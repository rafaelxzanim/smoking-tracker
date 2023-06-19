import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { TotalSmokedComponent } from './total-smoked/total-smoked.component';
import { RegisterDetailsComponent } from './register-details/register-details.component';
import { RegisterListComponent } from './register-list/register-list.component';
import { HttpClientModule } from '@angular/common/http';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    MenuComponent,
    FooterComponent,
    MainComponent,
    AboutComponent,
    RegisterComponent,
    TotalSmokedComponent,
    RegisterDetailsComponent,
    RegisterListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
