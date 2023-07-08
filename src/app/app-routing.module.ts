import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'change-num',
    loadChildren: () => import('./Pages/change-num/change-num.module').then( m => m.ChangeNumPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./Pages/main/main.module').then( m => m.MainPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
