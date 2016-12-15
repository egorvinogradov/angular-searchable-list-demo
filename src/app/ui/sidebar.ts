import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import clients from '../../clients';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.html',
    styleUrls: ['./sidebar.sass'],
})
export class Sidebar {

    @Input() filteredClients: any[];
    @Output() notify = new EventEmitter();

    onClientSelect(client: any) {
        this.notify.emit(client);
    }
}
