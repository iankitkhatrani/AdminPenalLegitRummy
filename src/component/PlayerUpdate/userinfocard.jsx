import GreenBtn from "../button/AddMony";

import { useNavigate, useLocation } from 'react-router-dom';

import React, { useState, useContext, useEffect } from 'react';
import offerContext from '../../context/offerContext';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function userInfo() {


  const name = cookies.get('name')


  const location = useLocation();
  //console.log("location ", location.state)
  const Botinfo = location.state;

  //console.log("User Info  ", Botinfo)

  const context = useContext(offerContext)
  const { AddMoney, DeductMoney, host, PlayerData, blockandunblock } = context


  const navigate = useNavigate();
  const navigateToContacts = () => {
    // 👇️ navigate to /contacts 
    navigate('/transaction');
  };

  let [userInfo, SetuserInfo] = useState({})
  let [userkycInfo, SetkycuserInfo] = useState({})
  let [userpanInfo, SetuserpanInfo] = useState({})
  let [typeofTransaction, setTypeofTransaction] = useState('ReFund');
  let [typeofAddto, setTypeofAddto] = useState('Main Wallet');


  let [typeofDudctfrom, setTypeofDudctfrom] = useState('Main Wallet');


  const [imageSrc, setImageSrc] = useState("");


  useEffect(() => {

    const submitdata = async () => {

      // SetuserInfo({
      //   userId: Botinfo.UserId,
      //   UserName: Botinfo.UserName,
      //   profileUrl: Botinfo.img,
      //   status: Botinfo.status,
      //   MobileNo: Botinfo.MobileNo,
      //   totalMatch: Botinfo.totalMatch,
      //   MainWallet: Botinfo.MainWallet,
      //   WinWallet: Botinfo.WinWallet,
      //   BonusWallet: Botinfo.BonusWallet,
      //   RegistrationDate: Botinfo.RegistrationDate,
      //   LastLogin: Botinfo.LastLogin,
      //   Status: Botinfo.status,
      //   email: Botinfo.email,
      //   uniqueId: Botinfo.uniqueId,
      // })
      let resData = await PlayerData(Botinfo.UserId)

      await SetuserInfo(resData.userInfo)
      await SetkycuserInfo(resData.UserOKYCData)
      await SetuserpanInfo(resData.PanOKYCData)
      // /host + "/upload/avatar/"+userInfo.avatar+".jpg"

      let avatarImg = (resData.userInfo && resData.userInfo.avatar != undefined) ? host + "/upload/avatar/" + resData.userInfo.avatar + ".png" : ""

      console.log("avatarImg ::::::::::::::::::::::::::::::::::::::", avatarImg)

      setImageSrc(avatarImg)
    }

    submitdata()
    //console.log("User IG:::::::::::::::::", userInfo)

  }, [Botinfo.UserId]);

  const [amount, setAmount] = useState(0);

  const handleAmount = async (event) => {
    const { name, value } = event.target;
    await setAmount(value)

    console.log("amount", amount)

  }


  const [remark, setRemark] = useState(0);

  const handleremark = async (event) => {
    const { name, value } = event.target;
    await setRemark(value)

    console.log("remark", remark)

  }


  const SaveChange = async () => {
    console.log("amount ", amount)

    let res = await AddMoney({ money: amount, txnmode: typeofTransaction, typeofAddto: typeofAddto, type: "Deposit", userId: Botinfo.UserId })

    if (res.status == "ok") {

      alert("Successfully Added...!!")
      navigateToContacts()
    } else {
      alert("Error Please enter proper data ....!!")
    }

    setAmount(0)

  }



  const SaveChangeDeduct = async () => {
    console.log("amount ", amount)

    if (remark == "") {
      alert("Error Please Enter proper remark..!!")
      return
    }


    let res = await DeductMoney({ money: amount, type: "Deduct", txnmode: remark, typeofDudctfrom: typeofDudctfrom, userId: Botinfo.UserId })

    if (res.status == "ok") {

      alert("Successfully Deduct...!!")
    } else {
      alert("Insufficient funds: Your account balance is too low to complete this transaction.")
    }

    setAmount(0)

  }

  const SaveChangeBlockandUnblock = async (isblockstatus) => {
    console.log("amount ", amount)

    let res = await blockandunblock({ userId: Botinfo.UserId, isblock: isblockstatus })

    if (res.status == "ok") {

      alert("Successfully Update...!!")
    } else {
      alert("Error Please enter")
    }

    setAmount(0)

  }

  const handleImageError = () => {
    // If the image fails to load, set the image source to the default image
    setImageSrc('/src/assets/images/avatar/profile-52x52.png');
  };

  return (
    <>
      <div className="mb-6 w-full rounded-lg bg-white px-[42px] py-5 dark:border dark:border-darkblack-400 dark:bg-darkblack-600 lg:mb-0 lg:w-1/2 2xl:mb-6 2xl:w-full">
        <div className="my-wallet mb-8 w-full">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-bold text-bgray-900 dark:text-white">
              User Information
            </h3>
          </div>

          <div className="flex justify-center">
            <div className="card-slider relative w-[100px] md:w-[100px]">

              <div className="w-full">
                <img src={imageSrc} alt="card" onError={handleImageError} />
              </div>

            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              User Name :- {userInfo.name != undefined ? userInfo.name : ""}
            </p>
          </div>
          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              User Name :- {userInfo.username}
            </p>
          </div>
          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Eamil :- {userInfo.email}
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              User Id :- {userInfo.uniqueId}
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Mobile Number :- {userInfo.mobileNumber}
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Status :- {userInfo.status == "" || userInfo.status == "false" || userInfo.status == false ? "DeActive" : "Active"}
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Main Wallet :- {userInfo.chips}
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Win Wallet :- {userInfo.winningChips}
            </p>
          </div>

          <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Bonus Wallet :- {userInfo.bonusChips}
            </p>
          </div>
          <div className="flex h-[200px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Aadhar card Details
            </p>

            <div className="flex h-[35px] w-full items-center justify-between">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                Aadhar Card :- {userkycInfo.adharcard}
              </p>

            </div>
            <div className="flex h-[35px] w-full items-center justify-between">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                Verified :- {userkycInfo.verified ? "Verified" : "UnVerified"}

              </p>

            </div>
            <div className="flex h-[90px] w-full items-center justify-between">
              <p style={{ maxWidth: '250px', overflowWrap: 'break-word' }} className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                Address :- {userkycInfo.userInfo}

              </p>

            </div>
          </div>
          <div className="flex h-[200px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Pan card Details
            </p>

            <div className="flex h-[35px] w-full items-center justify-between">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                Pan Card :- {userpanInfo.pancard}
              </p>

            </div>
            <div className="flex h-[35px] w-full items-center justify-between">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                Verified :- {userpanInfo.verified ? "Verified" : "Not Verified"}

              </p>

            </div>
            <div className="flex h-[35px] w-full items-center justify-between">
              <p style={{ maxWidth: '250px', overflowWrap: 'break-word' }} className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                Full Name :- {userpanInfo.full_name}

              </p>

            </div>
            <div className="flex h-[35px] w-full items-center justify-between">
              <p style={{ maxWidth: '250px', overflowWrap: 'break-word' }} className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                DOB :- {userpanInfo.DOB}

              </p>

            </div>
          </div>

          
          {name == "TeamLead" || name == "Support" ? "" : <div>
          <div className="flex h-[98px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Enter amount deposit
            </p>
            <div className="flex h-[35px] w-full items-center justify-between">
              <span className="text-2xl font-bold text-bgray-900 dark:text-white">
                ₹
              </span>
              <label className="w-full">
                <input
                  type="text" onChange={handleAmount}
                  className="w-full border-none p-0 text-2xl font-bold text-bgray-900 focus:outline-none focus:ring-0 dark:border-darkblack-400 dark:bg-darkblack-600 dark:text-white"
                />
              </label>
            </div>


          </div>

          <div className="flex h-[98px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Txn Mode
            </p>
            <div className="flex h-[35px] w-full items-center justify-between">
              <select
                className="search-input w-full border-none bg-bgray-100 px-0 text-sm tracking-wide text-bgray-600 placeholder:text-sm placeholder:font-medium placeholder:text-bgray-500 focus:outline-none focus:ring-0 dark:bg-darkblack-500"

                onChange={(e) => setTypeofTransaction(e.target.value)}>
                <option value="">Txn Mode</option>
                <option value="ReFund">ReFund</option>
                <option value="Bonus">Bonus</option>
                <option value="Admin">Admin</option>
                <option value="Other">Other</option>

              </select>
            </div>
          </div>


          <div className="flex h-[98px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Add To
            </p>
            <div className="flex h-[35px] w-full items-center justify-between">
              <select
                className="search-input w-full border-none bg-bgray-100 px-0 text-sm tracking-wide text-bgray-600 placeholder:text-sm placeholder:font-medium placeholder:text-bgray-500 focus:outline-none focus:ring-0 dark:bg-darkblack-500"

                onChange={(e) => setTypeofAddto(e.target.value)}>
                <option value="">Add To</option>
                <option value="Main Wallet">Main Wallet</option>
                <option value="Bonus Wallet">Bonus Wallet</option>
                <option value="Win Wallte">Win Wallte</option>
              </select>
            </div>
          </div>


          <button aria-label="none" onClick={SaveChange}
            className="mt-7 bg-success-300 dark:bg-success-300 dark:text-bgray-900 border-2 border-transparent text-white rounded-lg px-4 py-3 font-semibold text-sm">Add Money</button>



          <div className="flex h-[98px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Enter amount Deduct
            </p>
            <div className="flex h-[35px] w-full items-center justify-between">
              <span className="text-2xl font-bold text-bgray-900 dark:text-white">
                ₹
              </span>
              <label className="w-full">
                <input
                  type="text" onChange={handleAmount}
                  className="w-full border-none p-0 text-2xl font-bold text-bgray-900 focus:outline-none focus:ring-0 dark:border-darkblack-400 dark:bg-darkblack-600 dark:text-white"
                />
              </label>
            </div>
          </div>

          <div className="flex h-[98px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Enter Remark
            </p>
            <div className="flex h-[35px] w-full items-center justify-between">
              <span className="text-2xl font-bold text-bgray-900 dark:text-white">

              </span>
              <label className="w-full">
                <input
                  type="text" onChange={handleremark}
                  className="w-full border-none p-0 text-2xl font-bold text-bgray-900 focus:outline-none focus:ring-0 dark:border-darkblack-400 dark:bg-darkblack-600 dark:text-white"
                />
              </label>
            </div>
          </div>

          <div className="flex h-[98px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
            <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
              Deduct from
            </p>
            <div className="flex h-[35px] w-full items-center justify-between">
              <select
                className="search-input w-full border-none bg-bgray-100 px-0 text-sm tracking-wide text-bgray-600 placeholder:text-sm placeholder:font-medium placeholder:text-bgray-500 focus:outline-none focus:ring-0 dark:bg-darkblack-500"

                onChange={(e) => setTypeofDudctfrom(e.target.value)}>
                <option value=""> Deduct from</option>
                <option value="Main Wallet">Main Wallet</option>
                <option value="Bonus Wallet">Bonus Wallet</option>
                <option value="Win Wallte">Win Wallte</option>
              </select>
            </div>
          </div>


          <button aria-label="none" onClick={SaveChangeDeduct}
            className="mt-7 bg-red-300 dark:text-bgray-900 border-2 border-transparent text-white rounded-lg px-4 py-3 font-semibold text-sm">Deduct Money</button>
  
          </div>
          }
        </div>

        {name == "TeamLead"  || name == "Support" ? "" : <div>

          {userInfo.isBlock ? <button aria-label="none" onClick={(e) => SaveChangeBlockandUnblock(!userInfo.isBlock)}
            className="mt-7 bg-success-300 dark:bg-success-300 dark:text-bgray-900 border-2 border-transparent text-white rounded-lg px-4 py-3 font-semibold text-sm">UnBlock</button>
            :
            <button aria-label="none" onClick={(e) => SaveChangeBlockandUnblock(!userInfo.isBlock)}
              className="mt-7 bg-red-300 dark:text-bgray-900 border-2 border-transparent text-white rounded-lg px-4 py-3 font-semibold text-sm">Block</button>}

        </div> }
      </div>
    </>
  );
}

export default userInfo;


