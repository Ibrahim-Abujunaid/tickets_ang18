import {
  AfterContentInit,
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { ControlComponent } from '../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterContentInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  
  @Output() add = new EventEmitter<{ title: string; text: string }>();
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('OnInit');
    console.log(this.form?.nativeElement);
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('this is after view init');
    console.log(this.form?.nativeElement);
  }

  onSubmit(title: string, ticketText: string) {
    this.add.emit({ title: title, text: ticketText });
  }
}
