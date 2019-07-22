export const ACTION_TYPES = {
    ADD_ORDER: "ADD_ORDER",
};
export const addOrder = (productId, firstName, lastName, email, tel) => ({
    type: ACTION_TYPES.ADD_ORDER,
    order: {
        productId: productId,
        user: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            tel: tel
        }
    }
});



