import { Component, Input, Output, signal,EventEmitter } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  @Input({ required: true }) data!: Ticket;
  @Output() close:EventEmitter<string> = new EventEmitter<string>();;
  detailsVisable=signal(false);

  onToggleDetails(){
    this.detailsVisable.update((wasVisable)=>!wasVisable);
  }
  onMarkAsCompleted(){
    this.close.emit();
  }
}
