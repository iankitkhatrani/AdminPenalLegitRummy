import { useNavigate, useLocation } from 'react-router-dom';

import React, { useState, useContext, useEffect } from 'react';
import offerContext from '../../context/offerContext';

function kycupdate() {

  const location = useLocation();
  //console.log("location ", location.state)
  const KycInfo = location.state;

  console.log("KycInfo ", KycInfo)
  const context = useContext(offerContext)
  const { KYCUpdate } = context

  const BotmodeList = ["true", "false"];

  const [statusModeOption, setStatusModeOption] = useState('');

  const [statusPanModeOption, setStatusPanModeOption] = useState('');


  const navigate = useNavigate();
  const navigateToContacts = () => {
    // 👇️ navigate to /contacts 
    navigate('/kycmanagement?gametype=Rejected');
  };

  let [userInfo, SetuserInfo] = useState({
    userId: KycInfo.UserId,
    adminremark: "",
    verified: "",
    Pancardverified: ""
  })

  useEffect(() => {

    const submitdata = async () => {
      SetuserInfo({
        userId: KycInfo.UserId,
        adminremark: KycInfo.adminremark,
        verified: KycInfo.adharcardverified,
        Pancardverified: KycInfo.Pancardverifiedtemp

      })
      console.log("KycInfo 11111111111111111111111",KycInfo)
      setStatusModeOption(KycInfo.adharcardverified)
      setStatusPanModeOption(KycInfo.Pancardverifiedtemp)

    }
    submitdata()
  }, []);



  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("NAME :::::::::::::::::", value)
    SetuserInfo({
      ...userInfo,
      [name]: value,
    });

    console.log("handleChange ::::::::::::::::::::::", userInfo)

  };

  const handleBotModeselect = (event) => {
    const { name, value } = event.target;
    // Toggle the value of isChecked when checkbox is clicked
    setStatusModeOption(value);
    SetuserInfo({
      ...userInfo,
      ["verified"]: value,
    });
    console.log("userInfo :::::::::::::::::::::", userInfo)
  };

  const handlePanModeselect = (event) => {
    const { name, value } = event.target;
    // Toggle the value of isChecked when checkbox is clicked
    setStatusPanModeOption(value);
    SetuserInfo({
      ...userInfo,
      ["Pancardverified"]: value,
    });
    console.log("userInfo :::::::::::::::::::::", userInfo)
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    // You can handle the form submission here
    // This example just logs the data to the console

    console.log("userInfo ", userInfo)

    let res = await KYCUpdate(userInfo)

    console.log("REsponce ::::::::::::::::::::::", res)

    if (res.status == "ok") {
      navigateToContacts()
    } else {
      alert("Error Please enter")
    }
    console.log(userInfo);
  };


  return (
    <div className="w-full rounded-lg bg-white px-[24px] py-[200px] dark:bg-darkblack-600">
      <div className="flex flex-col space-y-5">
        <h3 className="text-2xl font-bold pb-5 text-bgray-900 dark:text-white dark:border-darkblack-400 border-b border-bgray-200">
          Kyc Updation
        </h3>
        <div className="mt-8">
          <form action="">
            <div className="grid 2xl:grid-cols-2 grid-cols-1 gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="robotname"
                  className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
                >
                  Remark
                </label>


                <textarea
                  type="textaear"
                  id="adminremark"
                  placeholder={KycInfo.adminremark}
                  name="adminremark"
                  className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-10 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
                  onChange={handleChange}
                />


              </div>
            </div>

            <div className="grid 2xl:grid-cols-2 grid-cols-1 gap-6">
              <div className="flex flex-col gap-2">

                <label
                  htmlFor="robotname"
                  className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
                >
                  Adharcard Status
                </label>

                <select style={{ "width": "290px" }}
                  className="bg-bgray-500 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"

                  value={statusModeOption} onChange={handleBotModeselect}>

                  {BotmodeList.map((option, index) => (
                    <option name="verified" key={index} value={option}>
                      {option}
                    </option>
                  ))}

                </select>
              </div>
            </div>

            <div className="grid 2xl:grid-cols-2 grid-cols-1 gap-6">
              <div className="flex flex-col gap-2">

                <label
                  htmlFor="robotname"
                  className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
                >
                  PanCard Status
                </label>

                <select style={{ "width": "290px" }}
                  className="bg-bgray-500 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"

                  value={statusPanModeOption} onChange={handlePanModeselect}>

                  {BotmodeList.map((option, index) => (
                    <option name="Pancardverified" key={index} value={option}>
                      {option}
                    </option>
                  ))}

                </select>
              </div>
            </div>

            <button
              aria-label="none"
              className="rounded-lg bg-success-300 text-white font-semibold mt-10 py-3.5 px-4"
              onClick={handleSubmit}
            >
              Save Kyc ReMark
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


export default kycupdate;