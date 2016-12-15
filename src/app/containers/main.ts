import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import clients from '../../clients';

@Component({
    selector: 'main',
    templateUrl: './main.html',
    styleUrls: ['./main.sass'],
})
export class Main {

    allClients: any[] = this.buildUpSearchHashes(clients);
    filteredClients: any[] = this.allClients;
    currentClient: any = null;

    cleanUpNumber(numberString: string): string{
        return numberString.replace(/[^0-9]/g, '');
    }

    removeExtraSpaces(str: string): string{
        return str.replace(/\s+/g, ' ');
    }

    buildUpSearchHashes(clients: any[]): any[]{
        return clients.map(client => {
            const searchFields: any[] = [
                client.general.firstName,
                client.general.lastName,
                client.job.company,
                client.job.title,
                client.contact.email,
                this.cleanUpNumber(client.contact.phone),
                client.address.street,
                client.address.city,
                this.cleanUpNumber(client.address.zipCode),
                client.address.country,
            ];
            client.searchHash = this.removeExtraSpaces(searchFields.join(' ')).toLowerCase();
            return client;
        });
    }

    onClientSelect(client: any) {
        this.currentClient = client;
    }

    onSearch(value: string) {
        var query = this.removeExtraSpaces(value.trim()).toLowerCase();
        if (/^[0-9\(\)\s\-]+$/i.test(query)) {
            query = this.cleanUpNumber(query);
        }
        this.filteredClients = this.allClients.filter(client => {
            return client.searchHash.indexOf(query) > -1;
        });
    }
}
