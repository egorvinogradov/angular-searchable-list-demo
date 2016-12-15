import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'header',
    templateUrl: './header.html',
    styleUrls: ['./header.sass']
})
export class Header {

    @Input() currentClient: any;
    @Output() notifySearch = new EventEmitter();
    @Output() notifyBackClick = new EventEmitter();

    onSearch(e: any) {
        this.notifySearch.emit(e.target.value);
    }

    onBackButton(){
        this.currentClient = null;
        this.notifyBackClick.emit();
    }
}
