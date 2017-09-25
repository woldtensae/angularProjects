import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http' 
import { AppComponent } from './app.component';
import { PostsService} from './posts.service';
import { MypostComponent } from './mypost.component';


@NgModule({
  declarations: [
    AppComponent,
    MypostComponent,

  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
