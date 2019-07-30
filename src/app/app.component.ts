import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

import {slide} from './shared/animations/slide';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    animations: [slide]
})

export class AppComponent {
    prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
}
