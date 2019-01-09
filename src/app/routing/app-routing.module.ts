import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NghomeComponent } from '../nghome/nghome.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HelloworldComponent } from '../helloworld/helloworld.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { MountainListComponent } from '../mountain/mountain-list/mountain-list.component';
import { VideosComponent } from '../videos/videos.component';
import { NlclubsComponent } from '../clubs/nlclubs/nlclubs.component';
import { ClubSiteComponent } from '../clubs/club-site/club-site.component';

const routes: Routes = [
  { path: 'ng', component: NghomeComponent },
  { path: '', component: DashboardComponent },
  { path: 'hw', component: HelloworldComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'ml/:id',  component: MountainListComponent},
  { path: 'ml', component: MountainListComponent },
  { path: 'vid', component: VideosComponent },
  { path: 'nlclubs', component: NlclubsComponent },
  { path: 'nlclubs/:id', component: ClubSiteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
