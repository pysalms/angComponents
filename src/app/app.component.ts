import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TrafficDataComponent } from './dashboard/traffic-data/traffic-data.component';
import { SupportTicketComponent } from './dashboard/support-ticket/support-ticket.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServerStatusComponent, TrafficDataComponent, SupportTicketComponent, DashboardItemComponent]
})
export class AppComponent {


}
