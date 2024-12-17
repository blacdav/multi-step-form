import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../context/FormManagement';

const Addons = () => {
  const { state, toggle, handleAddonsClick } = useForm();
  const [addons, setAddons] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getPlan();
  }, []);

  const getPlan = async () => {
    try {
      const res = await fetch('http://localhost:3000/Data.json');
      if (!res.ok) {
        throw new Error(`Network Response was not OK`);
      }
      const data = await res.json();
      setAddons(data.AddOns);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(state.addons.length === 0) {
      alert('please select items');
    } else if(state.addons.length === 1) {
      alert('please select atleast two items');
    } else {
      navigate('/summary')
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-svh">
      <Sidebar />
      <div className="w-full md:w-3/4 py-8 -mt-28 md:mt-0 overflow-y-auto">
        <div className="md:px-36">
          <form onSubmit={handleSubmit} className="grid gap-3">
            <div className="bg-white shadow-lg md:shadow-none md:bg-transparent rounded-xl mx-5 md:mx-0 px-5 md:px-0 py-8 grid gap-3">
              <div className="w-full grid justify-start md:mb-10 md:leading-10 text-left">
                <h1 className="flex justify-start text-3xl text-primary font-semibold">Pick add-ons</h1>
                <p className="text-gray">Add-ons help enhance your gaming experience.</p>
              </div>

              {addons.map((a) => (
                <div
                  key={a.id}
                  onClick={() => handleAddonsClick(a)}
                  className={`flex h-20 justify-between items-center px-5 gap-1 border-2 ${
                    state.addons.some(s => s.name === a.name) ? 'border-secondary' : 'border-gray'
                  } hover:cursor-pointer hover:border-secondary rounded-lg`}
                >
                  <div className="flex gap-4 leading-5">
                    <input
                      type="checkbox"
                      checked={state.addons.some(s => s.name === a.name)}
                      onChange={() => state.addons.some(s => s.name === a.name)} // No need to handle checkbox separately
                      className="accent-secondary w-4"
                    />
                    <div className="text-justify">
                      <p className="text-sm font-bold text-primary">{a.name}</p>
                      <p className="text-xs text-gray">{a.extra}</p>
                    </div>
                  </div>
                  <p className="text-xs text-secondary font-bold">
                    +${toggle === true ? a.ycost : a.mcost}/{toggle === true ? 'yr' : 'mo'}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-full bg-black px-5 md:px-0 md:bg-transparent font-semibold flex justify-between items-baseline p-5 mt-5 absolute bottom-0 md:relative md:bottom-auto">
              <p onClick={() => navigate(-1)} className="text-gray hover:text-primary hover:cursor-pointer">Go Back</p>
              <button className="rounded-lg bg-primary text-white w-fit h-12 px-5">Next step</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addons;
