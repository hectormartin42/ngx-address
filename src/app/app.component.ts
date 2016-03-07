import {Component, ApplicationRef, Inject} from "angular2/core";
import {AddressAutocompleteComponent} from './address-autocomplete.component';
import {PlaceSuggestion} from './place-suggestion';
import {Address} from './address';

@Component({
    selector: 'my-app',
    templateUrl: 'templates/app.tpl.html',
    directives: [AddressAutocompleteComponent]
})
export class AppComponent {
    private address: any;
    private country: string = 'NL';
    private applicationRef: ApplicationRef;

    constructor(
        applicationRef: ApplicationRef
    ) {}

    onAddress(address: any) {
        this.address = address;
    }
}
