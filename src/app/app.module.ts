import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing/app-routing.module';
import { NgModule } from '@angular/core';
import { MatModule } from './mat/mat.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NghomeComponent } from './nghome/nghome.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryitemComponent } from './galleryitem/galleryitem.component';
import { MountainListComponent } from './mountain/mountain-list/mountain-list.component';
import { MountainItemComponent } from './mountain/mountain-item/mountain-item.component';
import { VideosComponent } from './videos/videos.component';
import { VideosItemsComponent } from './videos-items/videos-items.component';
import { NlclubsComponent } from './clubs/nlclubs/nlclubs.component';
import { ClubItemComponent } from './clubs/club-item/club-item.component';
import { ClubSiteComponent } from './clubs/club-site/club-site.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    NghomeComponent,
    DashboardComponent,
    NghomeComponent,
    GalleryComponent,
    GalleryitemComponent,
    MountainListComponent,
    MountainItemComponent,
    VideosComponent,
    VideosItemsComponent,
    NlclubsComponent,
    ClubItemComponent,
    ClubSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
