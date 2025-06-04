import IPaymentInstrument from "./interfaces/IPaymentInstrument";

export default class Rewards implements IPaymentInstrument {
  validate(): boolean {
    console.log("Validating Rewards...");
    // Additional validation logic specific to Rewards
    return true;
  }

  collectPayment(): boolean {
    console.log("Collecting payment via Rewards...");
    // Additional payment collection logic specific to Rewards
    return true;
  }
}