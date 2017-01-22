import {XHRBackend} from '@angular/http';

import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';

import {LoadingComponent} from './components/loading.component';
import {HeaderComponent} from './components/header.component';

bootstrap(LoadingComponent);
bootstrap(HeaderComponent);