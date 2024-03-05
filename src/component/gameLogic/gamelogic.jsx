
import offerContext from '../../context/offerContext'
import React, { useContext, useEffect, useState, useRef } from 'react';

function gameLogic() {

  //==== WelcomeBonus ==========================================================

  const [welcomBonus, setWelcomBonus] = useState({
    welcomebonus: true,
    welcomebonusamount: 0,
  });

  // Define a state variable to hold the checked state of the checkbox
  const [isCheckedwelcome, setIsCheckedwelcome] = useState(false);
  //=================================================================================

  //==== WelcomeBonus ==========================================================

  const [referralBonus, setReferralBonus] = useState({
    referralbonus: true,
    referralbonusrate: 0,
    referralbonusamount: 0,
  });

  // Define a state variable to hold the checked state of the checkbox
  const [isCheckedwreferral, setIsCheckedreferral] = useState(false);
  //=================================================================================



  const context = useContext(offerContext)

  const { GetWelComeBonus, WelComeBonusset , GetreferralBonus, referralBonusset } = context

  useEffect(() => {

    const submitdata = async () => {
      //============================= welcome ============================
      let welcomeBonusData = await GetWelComeBonus()
      console.log("welcomeBonusData ::::::::::::::::::", welcomeBonusData)
      setWelcomBonus({
        welcomebonus: welcomeBonusData.welcomebonus,
        welcomebonusamount: welcomeBonusData.welcomebonusamount,
      })
      setIsCheckedwelcome(welcomeBonusData.welcomebonus)
      //==================================================================

      let referralBonusData = await GetreferralBonus()
      console.log("referralBonusData ::::::::::::::::::", referralBonusData)
      setReferralBonus({
        referralbonus: referralBonusData.referralbonus,
        referralbonusrate: referralBonusData.referralbonusrate,
        referralbonusamount: referralBonusData.referralbonusamount,
      })
      setIsCheckedreferral(referralBonusData.referralbonus)

      //======================================
    }
    submitdata()
  }, []);


  //===========================================================

  //======================= wel Come Bonus =============================== Event 
  const handleBonusChange = (event) => {
    const { name, value } = event.target;
    console.log("NAME :::::::::::::::::", value)
    setWelcomBonus({
      ...welcomBonus,
      [name]: parseInt(value),
    });

    console.log("handleChange ::::::::::::::::::::::", welcomBonus)

  };

  const handleCheckboxChange = (event) => {
    const { name, value } = event.target;
    // Toggle the value of isChecked when checkbox is clicked
    setIsCheckedwelcome(!isCheckedwelcome);
    setWelcomBonus({
      ...welcomBonus,
      [name]: !isCheckedwelcome,
    });
  };

  const handleSubmitwelcome = async () => {
    let res = await WelComeBonusset(welcomBonus)
    console.log("REs :::::::::::::::::::::", res)
    if (res.falgs == true) {
      alert("Success Save")
    }
    console.log(welcomBonus);
  };
  //===================================================================================
  //================================== referral  ====================================

  const handlereferralChange = (event) => {
    const { name, value } = event.target;
    console.log("NAME :::::::::::::::::", value)
    setReferralBonus({
      ...referralBonus,
      [name]: parseInt(value),
    });

    console.log("referralBonus handleChange ::::::::::::::::::::::", referralBonus)

  };

  const handlereferralCheckboxChange = (event) => {
    const { name, value } = event.target;
    // Toggle the value of isChecked when checkbox is clicked
    setIsCheckedreferral(!isCheckedwreferral);
    setReferralBonus({
      ...referralBonus,
      [name]: !isCheckedwreferral,
    });
  };

  const handlereferralSubmitwelcome = async () => {
    let res = await referralBonusset(referralBonus)
    console.log("REs :::::::::::::::::::::", res)
    if (res.falgs == true) {
      alert("Success Save")
    }
    console.log(welcomBonus);
  };

  //=================================================================================

  return (
    <div className="mb-[24px] w-full">
      <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-3">

        <div className="rounded-lg bg-white p-5 dark:bg-darkblack-600">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[7px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">WelCome Bonus</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <input
                  type="checkbox"
                  id="welcomebonus"
                  name="welcomebonus"
                  checked={isCheckedwelcome}
                  onChange={handleCheckboxChange}
                />
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-5 dark:bg-darkblack-600">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[7px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">WelCome Bonus Amount</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <input
                  type="text"
                  id="welcomebonusamount"
                  name="welcomebonusamount"
                  placeholder={welcomBonus.welcomebonusamount}
                  className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"

                  onChange={handleBonusChange}
                />
              </span>
            </div>
          </div>
        </div>

        
        <div className="rounded-lg  p-5 ">
        </div>

        <div className="rounded-lg  p-5 ">
        </div>

        <div className="rounded-lg  p-5">

          <div className="mb-5 flex items-center justify-between">
            <button onClick={handleSubmitwelcome}
              aria-label="none"
              className="bg-success-300 dark:bg-success-300 dark:text-bgray-900 border-2 border-transparent text-white rounded-lg px-4 py-3 font-semibold text-sm">
              WelCome Bonus Sumbit
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-3">

        <div className="rounded-lg bg-white p-5 dark:bg-darkblack-600">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[7px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Referral (First deposit) Bonus On Off</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <input
                  type="checkbox"
                  id="referralbonus"
                  name="referralbonus"
                  checked={isCheckedwreferral}
                  onChange={handlereferralCheckboxChange}
                />
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-5 dark:bg-darkblack-600">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[7px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Referral Bonus %</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <input
                  type="text"
                  id="referralbonusrate"
                  name="referralbonusrate"
                  placeholder={referralBonus.referralbonusrate}
                  className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"

                  onChange={handlereferralChange}
                />
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-5 dark:bg-darkblack-600">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center space-x-[7px]">
            <div className="icon">
              <span>
                <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Referral Bonus Amount</p>
              </span>
            </div>
            <span className="text-lg font-semibold text-bgray-900 dark:text-white">
              <input
                type="text"
                id="referralbonusamount"
                name="referralbonusamount"
                placeholder={referralBonus.referralbonusamount}
                className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"

                onChange={handlereferralChange}
              />
            </span>
          </div>
        </div>
      </div>

        <div className="rounded-lg  p-5 ">
        </div>

        <div className="rounded-lg  p-5">

          <div className="mb-5 flex items-center justify-between">
            <button onClick={handlereferralSubmitwelcome}
              aria-label="none"
              className="bg-success-300 dark:bg-success-300 dark:text-bgray-900 border-2 border-transparent text-white rounded-lg px-4 py-3 font-semibold text-sm">
              Referral (First deposit) Sumbit
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default gameLogic;










