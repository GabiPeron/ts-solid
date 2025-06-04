import Notifiable from './interfaces/INotifiable';

export default class Notify {
  private _notifiable: Notifiable;

  constructor(notifiable: Notifiable) {
    this._notifiable = notifiable;
  }

  set notifiable(value: Notifiable) {
    this._notifiable = value;
  }

  get notifiable(): Notifiable {
    return this._notifiable;
  }

  toString(): string {
    return `Email: ${this._notifiable.email}`;
  }

  sendEmail(): Boolean {
    console.log(`Sending email to ${this._notifiable.email}`);
    return true;
  }
}
