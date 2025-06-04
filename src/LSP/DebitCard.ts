import BankCard from './BankCard';

export default class DebitCard extends BankCard {
  validate(): boolean {
    console.log('Validating debit card...');
    // Additional validation logic specific to debit cards
    return true;
  }

  collectPayment(): boolean {
    console.log('Collecting payment via debit card...');
    // Additional payment collection logic specific to debit cards
    return true;
  }
}
