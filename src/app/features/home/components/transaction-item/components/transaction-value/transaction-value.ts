import { Component, computed, input } from '@angular/core';
import { Transaction } from '../../../../../../shared/transaction/interfaces/transaction';
import { TransactionType } from '../../../../../../shared/transaction/enums/transaction-type';

const CssClass = {
  [TransactionType.INCOME]: 'income',
  [TransactionType.OUTCOME]: 'outcome',
};

@Component({
  selector: 'app-transaction-value',
  imports: [],
  styleUrl: './transaction-value.scss',
  template: ` {{ transaction().value }} `,
  host: {
    '[class]': 'cssClass()',
  },
})
export class TransactionValue {
  transaction = input.required<Transaction>();

  cssClass = computed(() => CssClass[this.transaction().type]);
}
