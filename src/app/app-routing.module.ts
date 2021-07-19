import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/auth/sign-up/sign-up.module').then((m) => m.SignUpModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./pages/about-us/about-us.module').then((m) => m.AboutUsModule),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./pages/blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'blog-details',
    loadChildren: () =>
      import('./pages/blog-details/blog-details.module').then(
        (m) => m.BlogDetailsModule
      ),
  },
  {
    path: 'class-details',
    loadChildren: () =>
      import('./pages/class-details/class-details.module').then(
        (m) => m.ClassDetailsModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'event-details',
    loadChildren: () =>
      import('./pages/event-details/event-details.module').then(
        (m) => m.EventDetailsModule
      ),
  },
  {
    path: 'event',
    loadChildren: () =>
      import('./pages/events/events.module').then((m) => m.EventsModule),
  },
  {
    path: 'faq',
    loadChildren: () =>
      import('./pages/faq/faq.module').then((m) => m.FaqModule),
  },
  {
    path: 'our-class',
    loadChildren: () =>
      import('./pages/our-class/our-class.module').then(
        (m) => m.OurClassModule
      ),
  },
  {
    path: 'our-studio',
    loadChildren: () =>
      import('./pages/our-studio/our-studio.module').then(
        (m) => m.OurStudioModule
      ),
  },
  {
    path: 'portfolio',
    loadChildren: () =>
      import('./pages/portfolio/portfolio.module').then(
        (m) => m.PortfolioModule
      ),
  },
  {
    path: 'faculty',
    loadChildren: () =>
      import('./pages/faculty/faculty.module').then((m) => m.FacultyModule),
  },
  {
    path: 'founder',
    loadChildren: () =>
      import('./pages/founder/founder.module').then((m) => m.FounderModule),
  },
  {
    path: 'syllabus',
    loadChildren: () =>
      import('./pages/syllabus/syllabus.module').then((m) => m.SyllabusModule),
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('./pages/payment/payment.module').then((m) => m.PaymentModule),
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      scrollPositionRestoration:'enabled'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
