import IPaymentInstrument from './interfaces/IPaymentInstrument';

export default abstract class BankCard implements IPaymentInstrument {
  validate(): boolean {
    console.log('Validating bank card...');
    return true;
  }

  collectPayment(): boolean {
    console.log('Collecting payment via bank card...');
    return true;
  }
}
