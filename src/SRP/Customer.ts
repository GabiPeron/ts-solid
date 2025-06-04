import Notifiable from "./interfaces/INotifiable";

export default class Customer implements Notifiable {
  private _name: string;
  private _email: string;

  constructor(name: string, email: string) {
    this._name = name;
    this._email = email;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  set name(value: string) {
    this._name = value;
  }

  set email(value: string) {
    this._email = value;
  }

  toString(): string {
    return `Name: ${this._name}, Email: ${this._email}`;
  }

  create(): void {}

  read(): void {}

  update(): void {}

  delete(): void {}
}
