import Customer from './Customer';
import Notify from './Notify';

const customer = new Customer('John Doe', 'johndoe@hotmail.com');
const notify = new Notify(customer);

console.log(notify.sendEmail());
