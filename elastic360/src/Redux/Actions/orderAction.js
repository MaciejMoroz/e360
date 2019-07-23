export const ACTION_TYPES = {
    ADD_ORDER: "ADD_ORDER",
};
export const addOrder = (product, firstName, lastName, email, tel) => ({
    type: ACTION_TYPES.ADD_ORDER,
    order: {
        product: product,
        user: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            tel: tel
        }
    }
});





