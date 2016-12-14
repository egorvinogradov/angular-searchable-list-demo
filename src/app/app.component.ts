import { Component } from '@angular/core';
import clients from '../clients';

function cleanUpNumber(numberString: string): string{
    return numberString.replace(/[^0-9]/g, '');
}

function removeExtraSpaces(str: string): string{
    return str.replace(/\s+/g, ' ');
}

function buildUpSearchHashes(clients: any[]): any[]{
    return clients.map(client => {
        const searchFields: any[] = [
            client.general.firstName,
            client.general.lastName,
            client.job.company,
            client.job.title,
            client.contact.email,
            cleanUpNumber(client.contact.phone),
            client.address.street,
            client.address.city,
            cleanUpNumber(client.address.zipCode),
            client.address.country,
        ];
        client.searchHash = removeExtraSpaces(searchFields.join(' ')).toLowerCase();
        return client;
    });
}

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    allClients = buildUpSearchHashes(clients);
    filteredClients = this.allClients;
    currentClient = this.allClients[0];

    onCardClick(client: any) {
        this.currentClient = client;
    }

    onSearch(e: any) {
        var query = removeExtraSpaces(e.target.value.trim()).toLowerCase();
        if (/^[0-9\(\)\s\-]+$/i.test(query)) {
            query = cleanUpNumber(query);
        }
        this.filteredClients = this.allClients.filter(client => {
            return client.searchHash.indexOf(query) > -1;
        });
    }

}
