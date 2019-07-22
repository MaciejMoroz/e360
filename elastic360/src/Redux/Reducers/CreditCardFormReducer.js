import { ACTION_TYPES } from "../Actions/CreditCardActions";
const initCard = {
    number: "xxxx-xxxx-xxxx-xxxx",
    firstName: "Your Name",
    lastName: "Your Last Name",
    date: "MM/YY"
}

const CreditCardFormContainer = (card = initCard, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_CARDNUMBER:
            return {
                ...card,
                number: action.cardNumber
            }

        case ACTION_TYPES.ADD_CARDNAME:
            return {
                ...card,
                firstName: action.cardName
            }
        case ACTION_TYPES.ADD_CARDLASTNAME:
            return {
                ...card,
                lastName: action.cardLastName
            }

        case ACTION_TYPES.ADD_CARDVALIDTHRU:
            return {
                ...card,
                validThru: action.cardValidThru
            }

        default:
            return card;
    }
};

export default CreditCardFormContainer;
