import {Component, Output, ChangeDetectionStrategy, EventEmitter} from '@angular/core';
import { SchemaKeysStoreService } from '../shared/services/schema-keys-store.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteComponent {

  private _typeaheadNoResults = false;

  @Output() onValueChange: EventEmitter<string> = new EventEmitter<string>();
  selected = '';
  currentPath = '';
  dataSource: Observable<any>;

  constructor(private schemaKeysStoreService: SchemaKeysStoreService) {
    this.dataSource = Observable
    .create((observer: any) => {
      observer.next(this.selected);
    })
    .mergeMap((token: string) => this.getStatesAsObservable(token));
  }

  getStatesAsObservable(token: string): Observable<any> {
    let path = '';
    let slashIndex = token.lastIndexOf('/');
    if (slashIndex < 0) {
      path = '';
    } else if (slashIndex === token.length - 1) {
      path = token.slice(0, -1);
    } else {
      path = token.slice(0, slashIndex);
    }
    this.currentPath = path;
    let query = new RegExp(token.slice(slashIndex + 1), 'ig');

    return Observable.of(
      this.schemaKeysStoreService.forPath(path).filter(state => query.test(state))
    );
  }

  get typeaheadNoResults() {
    return this._typeaheadNoResults;
  }

  set typeaheadNoResults(e: boolean) {
    this._typeaheadNoResults = e;
  }

  selectUserInput(event) {
    if (this.currentPath!== '') {
      this.selected = `${this.currentPath}/${event}`;
    }
  }

  onKeyEvent(event) {
    if (event.which === 13) {
      this.onValueChange.emit(this.selected);
    }
  }

}
