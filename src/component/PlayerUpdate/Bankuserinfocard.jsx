import GreenBtn from "../button/AddMony";

import { useNavigate, useLocation } from 'react-router-dom';

import React, { useState, useContext, useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';
import offerContext from '../../context/offerContext';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
function bankuserinfo(gameName) {

  const context = useContext(offerContext)
  const { host, BankData } = context
  

  const location = useLocation();
  //console.log("location ", location.state)
  const Botinfo = location.state;

  console.log("Bank ::::::::::::::: User gameName  ", gameName)

  let [userInfo, SetuserInfo] = useState({})

  

  useEffect(() => {
    console.log("User Effect :::::::::::::::::::::::::: BANK ::::::::::::::::::::::::")
    const submitdata = async () => {


      let resData = await BankData(Botinfo.UserId)
      if(resData != undefined && resData.userBankInfo != undefined && resData.userBankInfo != null){
        SetuserInfo(resData.userBankInfo)
      }
 
      console.log("Bank LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL ",userInfo)

    }
    console.log("User Bank ::::::::::::::: User Info  ", Botinfo)
    submitdata()

  }, [gameName]);


  
  return (
    <>
      <div className="mb-6 w-full rounded-lg bg-white px-[42px] py-5 dark:border dark:border-darkblack-400 dark:bg-darkblack-600 lg:mb-0 lg:w-1/2 2xl:mb-6 2xl:w-full">
        <div className="my-wallet mb-8 w-full">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-bold text-bgray-900 dark:text-white">
              User Bank Information
            </h3>
          </div>
        </div>
        <div className="w-full">
          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Account Name :- {userInfo.name ||  "-"} 
            </p>
          </div>
          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Account No :-  {userInfo.accountNumber ||  "-"} 
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              IFSC Code :-  {userInfo.IFSC ||  "-"} 
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Bank Name :-  {  "-"} 
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Address :-  {"-"} 
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
            Hyperverge Status :-  {userInfo.paymentStatus ||  "-"} 
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Verified :-  {userInfo.verify == true ? "Verified" : "Not Verified" ||  "-"} 
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Approved :-  {userInfo.verify == true ? "Approved" : "Not Approved" ||  "-"} 
            </p>
          </div>


          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Added On :-  {userInfo.createdAt ||  "-"}
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Message :-  {userInfo.reMark ||  "-"} 
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default bankuserinfo;


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
