import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import Rewards from "./Rewards";

// const card = new CreditCard();
// const card = new DebitCard();
const card = new Rewards();

card.validate();
card.collectPayment();