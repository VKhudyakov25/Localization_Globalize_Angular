import { Component } from '@angular/core';

import 'devextreme/localization/globalize/number';
import 'devextreme/localization/globalize/date';
import 'devextreme/localization/globalize/currency';
import 'devextreme/localization/globalize/message';

import deMessages from 'devextreme/localization/messages/de.json';
import ruMessages from 'devextreme/localization/messages/ru.json';

import deCldrData from 'devextreme-cldr-data/de.json';
import ruCldrData from 'devextreme-cldr-data/ru.json';
import supplementalCldrData from 'devextreme-cldr-data/supplemental.json';

import Globalize from 'globalize';
import { Payment, Locale, AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService],
  preserveWhitespaces: true,
})
export class AppComponent {
  locales: Locale[];
  locale: string;
  payments: Payment[];

  formatMessage = Globalize.formatMessage.bind(Globalize);

  constructor(private service: AppService) {
    this.locale = this.getLocale();
    this.payments = service.getPayments();
    this.locales = service.getLocales();

    // this.initGlobalize();
    Globalize.loadMessages(service.getDictionary());
    Globalize.locale(this.locale);
    Globalize.load(supplementalCldrData, deCldrData, ruCldrData);
    Globalize.loadMessages(deMessages);
    Globalize.loadMessages(ruMessages);
  }

  initGlobalize() {
    // Globalize.load(supplementalCldrData, deCldrData, ruCldrData);
    // Globalize.loadMessages(deMessages);
    // Globalize.loadMessages(ruMessages);
    // Globalize.loadMessages(this.service.getDictionary());
  }
  changeLocale(data: any) {
    console.log('data :>> ', data);
    this.setLocale(data.value);
    parent.document.location.reload();
  }
  getLocale() {
    const storageLocale = sessionStorage.getItem('locale');
    return storageLocale != null ? storageLocale : 'en';
  }
  setLocale(savingLocale: any) {
    sessionStorage.setItem('locale', savingLocale);
  }
}
