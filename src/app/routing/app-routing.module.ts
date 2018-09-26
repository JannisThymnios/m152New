import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NghomeComponent } from '../nghome/nghome.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HelloworldComponent } from '../helloworld/helloworld.component';
import { GalleryComponent } from '../gallery/gallery.component';


const routes: Routes = [
  { path: 'ng', component: NghomeComponent },
  { path: '', component: DashboardComponent },
  { path: 'hw', component: HelloworldComponent },
  { path: 'gallery', component: GalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
