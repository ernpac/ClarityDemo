import { Component } from '@angular/core';
import '@cds/core/icon/register.js';
import { ClarityIcons, userIcon, cogIcon, bellIcon, boltIcon, administratorIcon, dashboardIcon, searchIcon, shieldIcon, certificateIcon } from '@cds/core/icon';

ClarityIcons.addIcons(userIcon, cogIcon, bellIcon, boltIcon, administratorIcon, dashboardIcon, searchIcon, shieldIcon, certificateIcon);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClarityDemo';
}
