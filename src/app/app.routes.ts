import { Routes } from '@angular/router';
import { Error } from './error/error';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Porfolio } from './porfolio/porfolio';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
    title: 'Home',
  },
  {
    path: 'about',
    component: About,
    title: 'About',
  },
  {
    path: 'portfolio',
    component: Porfolio,
    title: 'Portfolio',
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact',
  },
  {
    path: '**',
    component: Error,
    title: 'Error 404',
  },
];
