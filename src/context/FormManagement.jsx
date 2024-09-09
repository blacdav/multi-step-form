import { createContext, useContext, useReducer } from "react";

const FormContext = createContext()

const ACTIONS = {
    YOUR_INFO: 'your-info',
    SELECT_PLAN: 'select-plan',
    ADD_ONS: 'add-ons',
    SUMMARY: 'summary'
}

const reducer = (formData, action) => {
    switch (action.type) {
        case ACTIONS.YOUR_INFO:
            
            break;

        case ACTIONS.SELECT_PLAN:
            
            break;

        case ACTIONS.ADD_ONS:
            
            break;
        
        case ACTIONS.SUMMARY:
            
            break;
    
        default:
            break;
    }
}

const data = {
    name: '',
    email: '',
    telephone: '',
    plan: [],
    addons: [],
}

export const FormProvider = ({ children }) => {
    const [formData, dispatch] = useReducer(reducer, data)

    const yourInfo = (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.YOUR_INFO });
    }

    const selectPlan = (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.SELECT_PLAN });
    }

    const addOns = (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_ONS });
    }

    const summary = (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.SUMMARY });
    }

    return(
        <FormContext.Provider value={{ yourInfo, selectPlan, addOns, summary, formData }}>
            { children }
        </FormContext.Provider>
    )
}

export const useForm = () => {
    return useContext(FormContext);
}