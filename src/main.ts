import { bootstrapApplication } from '@angular/platform-browser';
    import { TableLazyLoadDemo } from './app/table-lazy-load-demo';
    import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

    bootstrapApplication(TableLazyLoadDemo, {
    providers: [provideAnimationsAsync()],
    }).catch((err) => console.error(err));