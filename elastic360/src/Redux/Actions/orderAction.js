import axios from 'axios';

export const ACTION_TYPES = {
    ADD_ORDER: "ADD_ORDER",
    POST_OORDER: "POST_OORDER"

};
export const addOrder = (product, firstName, lastName, email, tel, itWasPaid, toPay, timeOFSub, quantOfsubscriptions) => ({
    type: ACTION_TYPES.ADD_ORDER,
    order: {
        pay: {
            itWasPaid: itWasPaid,
            toPay: toPay,
            timeOFSub: timeOFSub,
            quantOfsubscriptions: quantOfsubscriptions

        },
        product: product,
        user: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            tel: tel
        }
    }
});


export const postOrder = (productId, firstName, lastName, email, tel, itWasPaid, toPay, timeOFSub, quantOfsubscriptions) => {
    const URL = "http://localhost:4001";
    return () => {

        return axios.post(`${URL}/order/${productId}/${firstName}/${lastName}/${encodeURIComponent(email)}/${tel}/${itWasPaid}/${toPay}/${timeOFSub}/${quantOfsubscriptions}`)
            .then(response => {
                postOrderSuccess(response);
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const postOrderSuccess = (response) => {

    console.log(response);

};