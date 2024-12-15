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
                formState: [...state.formState, action.payload]
                // formState: [e.target.name]: e.target.value
            }
        case ACTIONS.PLAN:
            return {
                ...state,
                formState: [...state.formState, action.payload]
            }
        case ACTIONS.ADDONS:
            return {
                ...state,
                formState: [...state.formState, action.payload]
            }
        default:
            break;
    }
}

const formState = {
    name: '',
    email: '',
    telephone: '',
    plan: {
        type: '',
        name: '',
        cost: '',
    },
    addons: {
        first: {
            name: '',
            cost: '',
            extra: '',
        },
        second: {
            name: '',
            cost: '',
            extra: '',
        }
    },
}

export const FormProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, formState);
    const [error, setError] = useState({});
    const [data, setData] = useState({
        name: '',
        email: '',
        telephone: '+2348126215807',
        plan: {
            type: '',
            name: '',
            cost: '9',
        },
        addons: {
            first: {
                name: '',
                cost: '1',
                extra: '',
            },
            second: {
                name: '',
                cost: '2',
                extra: '',
            }
        },
    });
    const [ isSelected, setIsSelected ] = useState();
    const [ toggle, setToggle ] = useState(false);
    const [isSelectedAddon, setIsSelectedAddon] = useState(false);

    const handleInput = (e) => {
        const input = {...data, [e.target.name]: e.target.value};
        setData(input);
        dispatch({ type: 'INPUT', payload: e})
        // setError(validation(data));
    }

    return(
        <FormContext.Provider value={{ state, data, setData, error, setError, isSelected, setIsSelected, toggle, setToggle, isSelectedAddon, setIsSelectedAddon }}>
            { children }
        </FormContext.Provider>
    )
}

export const useForm = () => {
    return useContext(FormContext);
}