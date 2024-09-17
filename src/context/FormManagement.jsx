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
            name: '',
        },
        addons: {},
    })

    return(
        <FormContext.Provider value={{ step, setStep, data, setData, error, setError }}>
            { children }
        </FormContext.Provider>
    )
}

export const useForm = () => {
    return useContext(FormContext);
}