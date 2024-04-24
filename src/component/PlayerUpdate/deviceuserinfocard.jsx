import GreenBtn from "../button/AddMony";

import { useNavigate, useLocation } from 'react-router-dom';

import React, { useState, useContext, useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';
import offerContext from '../../context/offerContext';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
function deviceuserinfo() {


  const location = useLocation();
  //console.log("location ", location.state)
  const Botinfo = location.state;

  //console.log("kycuserinfocard User Info  ", Botinfo)

  const context = useContext(offerContext)
  const { host, DeviceData } = context


  let [userdeviceInfo, SetuserdeviceInfo] = useState({})


  useEffect(() => {

    const submitdata = async () => {


      let resData = await DeviceData(Botinfo.UserId)

      await SetuserdeviceInfo(resData.userDecviceInfo)



    }

    submitdata()

  }, [Botinfo.UserId]);

  console.log("userdeviceInfo ",userdeviceInfo)
  
  return (
    <>
     

      
      <div className="mb-6 w-full rounded-lg bg-white px-[42px] py-5 dark:border dark:border-darkblack-400 dark:bg-darkblack-600 lg:mb-0 lg:w-1/2 2xl:mb-6 2xl:w-full">
        <div className="my-wallet mb-8 w-full">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-bold text-bgray-900 dark:text-white">
              Device Information
            </h3>
          </div>
        </div>
        <div className="w-full">
          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Device Name :- {userdeviceInfo.deviceName}
            </p>
          </div>
          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
            Device Model :-  {userdeviceInfo.deviceModel}
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Device Type :- {userdeviceInfo.deviceType}
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              OS :- {userdeviceInfo.operatingSystem}
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              RAM :- {userdeviceInfo.systemMemorySize}
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
            Processer Type :- {userdeviceInfo.processorType}
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
            Processer Count :- {userdeviceInfo.processorCount}
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Battry Percentage :- {userdeviceInfo.batteryLevel}
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Mobile Platform :- {userdeviceInfo.platform}
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Genuinity Check :- {userdeviceInfo.genuineCheckAvailable}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default deviceuserinfo;


// <div className="flex h-[98px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
//             <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
//               Enter amount deposit
//             </p>
//             <div className="flex h-[35px] w-full items-center justify-between">
//               <span className="text-2xl font-bold text-bgray-900 dark:text-white">
//               ₹
//               </span>
//               <label className="w-full">
//                 <input
//                   type="text" onChange={handleAmount}
//                   className="w-full border-none p-0 text-2xl font-bold text-bgray-900 focus:outline-none focus:ring-0 dark:border-darkblack-400 dark:bg-darkblack-600 dark:text-white"
//                 />
//               </label>
//             </div>
//           </div>


//           <button aria-label="none" onClick={SaveChange}
//             className="mt-7 bg-success-300 dark:bg-success-300 dark:text-bgray-900 border-2 border-transparent text-white rounded-lg px-4 py-3 font-semibold text-sm">Add Money</button>



//           <div className="flex h-[98px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
//             <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
//               Enter amount Deduct
//             </p>
//             <div className="flex h-[35px] w-full items-center justify-between">
//               <span className="text-2xl font-bold text-bgray-900 dark:text-white">
//               ₹
//               </span>
//               <label className="w-full">
//                 <input
//                   type="text" onChange={handleAmount}
//                   className="w-full border-none p-0 text-2xl font-bold text-bgray-900 focus:outline-none focus:ring-0 dark:border-darkblack-400 dark:bg-darkblack-600 dark:text-white"
//                 />
//               </label>
//              </div>
//           </div>

//           <button aria-label="none" onClick={SaveChangeDeduct}
//           className="mt-7 bg-red-300 dark:text-bgray-900 border-2 border-transparent text-white rounded-lg px-4 py-3 font-semibold text-sm">Deduct Money</button>
