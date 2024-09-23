import { createContext, useContext, useState } from "react";

const FormContext = createContext()

export const FormProvider = ({ children }) => {
    const [step, setStep] = useState(0);
    const [error, setError] = useState({});
    const [data, setData] = useState({
        name: '',
        email: '',
        telephone: '',
        plan: {
            type: '',
            name: 'Arcade',
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
    const [ isSelected, setIsSelected ] = useState(false);
    const [ toggle, setToggle ] = useState(false);
    const [isSelectedAddon, setIsSelectedAddon] = useState(false);

    return(
        <FormContext.Provider value={{ step, setStep, data, setData, error, setError, isSelected, setIsSelected, toggle, setToggle, isSelectedAddon, setIsSelectedAddon }}>
            { children }
        </FormContext.Provider>
    )
}

export const useForm = () => {
    return useContext(FormContext);
}