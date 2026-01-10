import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '', redirectTo:'overview', pathMatch: 'full'
   
  },
   {
    path: 'overview',
    loadComponent: () =>
      import('./overview/overview.component')
        .then(m => m.OverviewComponent)
  },
  {
    path: 'repositories',
    loadComponent: () =>
      import('./repositories/repositories.component')
        .then(m => m.RepositoriesComponent)
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./projects/projects.component')
        .then(m => m.ProjectsComponent)
  },
  {
    path: 'packages',
    loadComponent: () =>
      import('./packages/packages.component')
        .then(m => m.PackagesComponent)
  },
  {
    path: 'stars',
    loadComponent: () =>
      import('./stars/stars.component')
        .then(m => m.StarsComponent)
  }
];
