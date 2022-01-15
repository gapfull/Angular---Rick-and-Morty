import { LocationModule } from './pages/location/location.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: `home`, loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: `about`, loadChildren: () =>
      import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: `character`, loadChildren: () =>
      import('./pages/character/character.module').then(m => m.CharacterModule)
  },
  {
    path: `location`, loadChildren: () =>
      import('./pages/location/location.module').then(m => m.LocationModule)
  },
  {
    path: `episode`, loadChildren: () =>
      import('./pages/episode/episode.module').then(m => m.EpisodeModule)
  },
  { path: ``, redirectTo: `home`, pathMatch: `full` }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
