import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NghomeComponent } from '../nghome/nghome.component';
import { HelloworldComponent } from '../helloworld/helloworld.component';
import { DashboardComponent } from '../dashboard/dashboard.component';


const routes: Routes = [
 { path: '', component: DashboardComponent},
 { path: 'ng', component: NghomeComponent},
 { path: 'hw',  component: HelloworldComponent},
];

@NgModule ({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule {}