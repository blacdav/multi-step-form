import { createContext, useContext, useReducer, useState } from "react";

const FormContext = createContext();

const ACTIONS = {
    INPUT: 'INPUT',
    PLAN: 'PLAN',
    ADDONS: 'ADDONS'
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INPUT:
            return {
                ...state,
                user_info: {...state.user_info, [action.payload.name]: action.payload.value}
                // formState: [e.target.name]: e.target.value
            }
        case ACTIONS.PLAN:
            const isPlanSelected = state.plan.find(p => p.name === action.payload.name);
            if (isPlanSelected) {
                // Remove plan if it's already selected
                return {
                    ...state,
                    plan: state.plan.filter(p => p.name !== action.payload.name)
                }
            } else if (state.plan.length < 2) {
                // Add plan if fewer than 2 plans are selected
                return {
                    ...state,
                    plan: [...state.plan, action.payload]
                }
            } else {
                // Do nothing if 2 plans are already selected
                return state;
            }
        case ACTIONS.ADDONS:
            return {
                ...state,
                addons: [...state.addons, action.payload]
            }
        default:
            break;
    }
}

const formState = {
    user_info: {
        name: '',
        email: '',
        telephone: '',
    },
    plan: [],
    addons: {
        name: '',
        cost: '',
        extra: '',
    }
}

export const FormProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, formState);
    const [error, setError] = useState({});
    const [ isSelected, setIsSelected ] = useState();
    const [ toggle, setToggle ] = useState(false);
    const [isSelectedAddon, setIsSelectedAddon] = useState(false);

    const handleInput = (e) => {
        const {name, value} = e.target;
        dispatch({ type: ACTIONS.INPUT, payload: {name, value}})
        // setError(validation(data));
    }

// Function to handle selection of a plan
const handlePlanClick = (plan) => {
    dispatch({ type: ACTIONS.PLAN, payload: plan });
};
console.log(state)

    return(
        <FormContext.Provider value={{ state, handleInput, handlePlanClick, error, setError, isSelected, setIsSelected, toggle, setToggle, isSelectedAddon, setIsSelectedAddon }}>
            { children }
        </FormContext.Provider>
    )
}

export const useForm = () => {
    return useContext(FormContext);
}