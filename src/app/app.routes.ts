import { Routes } from '@angular/router';

// export const routes: Routes = [];
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },


  {
    path: 'login',
    loadComponent: () =>
      import('../pages/login/login').then(m => m.Login)
  },

//   {
//     path: 'register',
//     loadComponent: () =>
//       import('../pages/register/register').then(m => m.Register)
//   },

//   {
//     path: 'payment',
//     loadComponent: () =>
//       import('../pages/payment/payment').then(m => m.Payment)
//   },

//   {
//     path: 'orders',
//     loadComponent: () =>
//       import('../pages/orders/orders').then(m => m.Orders)
//   }
];