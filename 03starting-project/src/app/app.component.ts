import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './server-status/server-status.component';
import { TrafficComponent } from './traffic/traffic.component';
import { SupportTicketsComponent } from './support-tickets/support-tickets.component';
import { DashboardItemComponent } from "./dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ServerStatusComponent, TrafficComponent, SupportTicketsComponent, DashboardItemComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  
}
