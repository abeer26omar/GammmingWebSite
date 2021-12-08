import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


//Modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BreadcrumbModule } from 'angular-crumbs';
import { FormsModule } from '@angular/forms';
import { GaugeModule } from 'angular-gauge';
import { SearchPipe } from './search.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { NgwWowModule } from 'ngx-wow';



//components
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CounterComponent } from './home/counter/counter.component';
import { PopUpVideoComponent } from './home/pop-up-video/pop-up-video.component';
import { OwlCarouselComponent } from './home/owl-carousel/owl-carousel.component';
import { FooterComponent } from './footer/footer.component';
import { AllGamesComponent } from './all-games/all-games.component';
import { GameDetailsComponent } from './all-games/game-details/game-details.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpHeadersInterceptor } from './interceptors/http-headers.interceptor';
import { HttpErrorInterceptor } from './interceptors/http-errors.interceptor';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { SigninComponent } from './Auth/signin/signin.component';
import { PlayersComponent } from './players/players.component';
import { ProfileComponent } from './players/profile/profile.component';
import { GamesComponent } from './home/pop-games/pop-games.component';
import { ForgetPasswordComponent } from './Auth/forget-password/forget-password.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    CounterComponent,
    GamesComponent,
    PopUpVideoComponent,
    OwlCarouselComponent,
    FooterComponent,
    AllGamesComponent,
    GameDetailsComponent,
    SearchPipe,
    NotFoundComponent,
    SignUpComponent,
    SigninComponent,
    PlayersComponent,
    ProfileComponent,
    ForgetPasswordComponent,
    ContactComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    CarouselModule,
    BreadcrumbModule,
    FormsModule,
    HttpClientModule,
    GaugeModule.forRoot(),
    ReactiveFormsModule,
    NgwWowModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpHeadersInterceptor,
    multi: true,
  },
  {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpErrorInterceptor,
  multi: true
 }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
