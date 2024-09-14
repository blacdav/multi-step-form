import { createContext, useContext, useState } from "react";

const FormContext = createContext()

export const FormProvider = ({ children }) => {
    const [step, setStep] = useState(0)
    const [data, setData] = useState({
        name: '',
        email: '',
        telephone: '',
        plan: '',
        addons: {},
    })

    return(
        <FormContext.Provider value={{ step, setStep, data, setData }}>
            { children }
        </FormContext.Provider>
    )
}

export const useForm = () => {
    return useContext(FormContext);
}