import { ACTION_TYPES } from "../Actions/LanguageAction";

const initLanguage = {
    language: "EN"
}

const languageReducer = (language = initLanguage, action) => {
    switch (action.type) {
        case ACTION_TYPES.CHANGE_LANGUAGE:
            return action.language

        default:
            return language
    }
}

export default languageReducer;