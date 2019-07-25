export const ACTION_TYPES = {
    CHANGE_LANGUAGE: "CHANGE_LANGUAGE",
};

export const changeLanguage = (language) => ({
    type: ACTION_TYPES.CHANGE_LANGUAGE,
    language
})