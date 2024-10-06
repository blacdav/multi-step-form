import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useForm } from '../context/FormManagement';

const Selectplan = () => {
  const { step, setStep, data, setData, toggle, setToggle, isSelected, setIsSelected } = useForm();
  const [plan, setPlan] = useState([]);
  const [selectedPlans, setSelectedPlans] = useState([]);

  useEffect(() => {
    getPlan();
  }, []);

  const getPlan = async () => {
    try {
      const res = await fetch('/Data.json');
      if (!res.ok) {
        throw new Error(`Network Response was not OK`);
      }
      const data = await res.json();
      console.log(data);
      setPlan(data.Plans);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle selection of a plan
  const handlePlanClick = (planId) => {
    if (selectedPlans.includes(planId.id)) {
      // Deselect the plan if already selected
      setSelectedPlans(selectedPlans.filter(id => id !== planId.id));
    } else if (selectedPlans.length < 1) {
      // Select the plan if less than 2 plans are selected0
      setSelectedPlans([...selectedPlans, planId.id]);
      // const myPlan = {...data, [plan.name]: 'Arcane'}

      // setData(selectedPlans)
      console.log(selectedPlans)
    }
  };

  const handleSubmit = (e, planId) => {
    e.preventDefault();

    if(selectedPlans.length < 1) {
      alert('please select a plan')
    } else {
      // setStep(step + 1);
    }

    if (toggle === true) {
      setData({...data, [plan.type]: 'yearly'})
      // data.plan.type = 'yearly';
    } else {
      data.plan.type = 'monthly';
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-lvh">
      <Sidebar />
      <div className="w-full md:w-3/4 py-8 -mt-28 md:mt-0 md:overflow-y-auto">
        <div className="md:px-52">
          <form onSubmit={handleSubmit} className="">
            <div className="bg-white shadow-lg md:shadow-none shadow-gray md:bg-transparent rounded-xl mx-5 md:mx-0 px-5 md:px-0 py-8 grid gap-5">
              <div className="w-full grid justify-start md:mb-10 md:leading-10">
                <h1 className="flex justify-start text-3xl text-primary font-semibold">Select your plan</h1>
                <p className="text-gray">You have the option of monthly or yearly billing.</p>
              </div>

              <div className="flex flex-col md:flex-row gap-5 *:h-24 *:md:h-48">
                {plan.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => handlePlanClick(p)}
                    className={`flex flex-row md:flex-col justify-normal md:justify-between items-center md:items-start gap-4 w-full md:w-1/3 border-2 hover:cursor-pointer hover:border-secondary ${
                      selectedPlans.includes(p.id) ? 'border-secondary' : 'border-gray'
                    } rounded-lg p-3`}
                  >
                    {/* <input type="radio" name='plan' checked={selectedPlans.includes(p)} className={`h-5 w-5`} /> */}
                    <img src={p.icon} alt="arcade icon" width={40} />
                    <div className="grid justify-between">
                      <p className="font-semibold text-primary">{p.name}</p>
                      <small className="text-gray">
                        ${toggle === true ? p.ycost : p.mcost}/{toggle === true ? 'yr' : 'mo'}
                      </small>
                      <small className={`${!toggle ? 'hidden' : ''} text-primary font-semibold`}>2 months free</small>
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-full rounded-lg bg-slate-200 h-12 grid items-center justify-center">
                <div className="flex gap-3 items-center font-bold">
                  <p className={`${toggle === false ? 'text-secondary transition duration-100' : 'text-gray'}`}>Monthly</p>
                  <div className="h-4 w-8 bg-primary flex items-center px-1 rounded-full">
                    <div
                      onClick={() => setToggle(!toggle)}
                      className={`${toggle ? 'translate-x-3' : 'translate-x-0'} h-3 w-3 rounded-full bg-white hover:cursor-pointer transform duration-100`}
                    ></div>
                  </div>
                  <p className={`${toggle === true ? 'text-secondary transition duration-100' : 'text-gray'}`}>Yearly</p>
                </div>
              </div>
            </div>

            <div className="w-full h-auto flex bg-black md:bg-transparent p-5 md:px-0 font-semibold justify-between items-baseline mt-5 absolute bottom-0 md:relative md:bottom-auto">
              <p onClick={() => setStep(step - 1)} className="font-semibold text-gray hover:text-primary cursor-pointer">
                Go Back
              </p>
              <button className="rounded-lg bg-primary text-white w-fit h-12 px-5">Next step</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Selectplan;
