import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{
    path: 'usuarios',
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule),
    data: {
      hasSystemBar: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
