export const ACTION_TYPES = {
    ADD_CARDNUMBER: "ADD_CARDNUMBER",
    ADD_CARDNAME: "ADD_CARDNAME",
    ADD_CARDLASTNAME: "ADD_CARDLASTNAME",
    ADD_CARDVALIDTHRU: "ADD_CARDVALIDTHRU"
};
export const addCardNumber = (cardNumber) => ({
    type: ACTION_TYPES.ADD_CARDNUMBER,
    cardNumber: cardNumber

});

export const addCardName = (cardName) => ({
    type: ACTION_TYPES.ADD_CARDNAME,
    cardName: cardName

});

export const addCardLastName = (cardLastName) => ({
    type: ACTION_TYPES.ADD_CARDLASTNAME,
    cardLastName: cardLastName

});

export const addCardValidThru = (cardValidThru) => ({
    type: ACTION_TYPES.ADD_CARDVALIDTHRU,
    cardValidThru: cardValidThru

});
