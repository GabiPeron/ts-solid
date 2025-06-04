import BankCard from './BankCard';

export default class CreditCard extends BankCard {
  validate(): boolean {
    console.log('Validating credit card...');
    // Additional validation logic specific to credit cards
    return true;
  }

  collectPayment(): boolean {
    console.log('Collecting payment via credit card...');
    // Additional payment collection logic specific to credit cards
    return true;
  }
}
