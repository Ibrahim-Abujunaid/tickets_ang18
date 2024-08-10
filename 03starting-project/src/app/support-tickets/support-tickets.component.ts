import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import {Ticket} from'./ticket.model'
import { TicketComponent } from './ticket/ticket.component';
import { tick } from '@angular/core/testing';
@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [NewTicketComponent,TicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css'
})
export class SupportTicketsComponent {
  tickets: Ticket[] = [];
  onAdd(ticketdata:{title:string; text:string}){
   const ticket:Ticket={
    title:ticketdata.title,
    request:ticketdata.text,
    id:Math.random().toString(),
    status:'open'
   }
   this.tickets.push(ticket)
  }

  onCloseTicket(id:string){
   this.tickets = this.tickets.map((ticket)=>{
   if (ticket.id===id){
    return {...ticket,status:'close'}
   }
   return ticket;
   });
  }
}
