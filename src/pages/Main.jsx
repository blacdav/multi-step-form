import React, { useState } from 'react'
import YourInfo from '../pages/YourInfo'
import SelectPlan from '../pages/Selectplan'
import Addons from "../pages/Addons";
import Summary from "../pages/Summary";
import Submitted from "../pages/Submitted";
import { useForm } from '../context/FormManagement';

const Main = () => {
    const { step } = useForm()

  return (
    <div>
        {
            step === 0 && (
                <YourInfo />
            )
        }
        {
            step === 1 && (
                <SelectPlan />
            )
        }
        {
            step === 2 && (
                <Addons />
            )
        }
        {
            step === 3 && (
                <Summary />
            )
        }
        {
            step === 4 && (
                <Submitted />
            )
        }
    </div>
  )
}

export default Main
