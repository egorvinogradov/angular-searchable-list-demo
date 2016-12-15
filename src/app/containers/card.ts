import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import clients from '../../clients';

@Component({
    selector: 'card',
    templateUrl: './card.html',
    styleUrls: ['./card.sass'],
})
export class Card {

    currentClient: any;

    constructor(
        private route: ActivatedRoute) {
        this.route = route;
    }

    ngOnInit(){
        this.route.params.subscribe(params => {
            if (params['name']) {
                this.currentClient = this.getClientByName(params['name']);
            }
            else {
                this.currentClient = {
                    general: {},
                    job: {},
                    contact: {},
                    address: {},
                };
            }
        });
    }

    getClientByName(name: string){
        return clients.filter(client => {
            const fullName = client.general.firstName + '-' + client.general.lastName;
            return fullName.toLowerCase() === name.toLowerCase();
        })[0];
    }
}
