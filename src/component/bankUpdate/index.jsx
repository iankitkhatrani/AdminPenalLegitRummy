import { useNavigate, useLocation } from 'react-router-dom';

import React, { useState, useContext, useEffect } from 'react';
import offerContext from '../../context/offerContext';

function bankUpdate() {

  const location = useLocation();
  //console.log("location ", location.state)
  const Botinfo = location.state;

  const context = useContext(offerContext)
  const { BankUpdate, host } = context


  const navigate = useNavigate();
  const navigateToContacts = () => {
    // 👇️ navigate to /contacts 
    navigate('/bankmanagement?status=Pending');
  };

  const BotmodeList = ["Pending", "Approved", "Rejected"];

  const [statusModeOption, setStatusModeOption] = useState('');
  let [userInfo, SetuserInfo] = useState({
    Id: Botinfo.id,
    reMark: "",
    paymentStatus: Botinfo.paymentStatus
  })

  useEffect(() => {

    const submitdata = async () => {
      SetuserInfo({
        Id: Botinfo.id,
        reMark: Botinfo.reMark,
        paymentStatus: Botinfo.paymentStatus
      })
      setStatusModeOption(Botinfo.paymentStatus)
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
      ["paymentStatus"]: value,
    });
    console.log("userInfo :::::::::::::::::::::", userInfo)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // You can handle the form submission here
    // This example just logs the data to the console

    console.log("userInfo ", userInfo)


    if (userInfo.reMark.length == 0 || !/^[a-zA-Z\s]+$/.test(userInfo.reMark)) {
      alert("Invalid ReMark. ReMark should only contain alphabetic characters and spaces.")
      return false
    }

    let res = await BankUpdate(userInfo)

    console.log("REsponce ::::::::::::::::::::::", res)

    if (res.status == "ok") {
      navigateToContacts()
    } else {
      alert("Error Please enter Vailed Data")
    }
    console.log(userInfo);
  };


  return (
    <div className="w-full rounded-lg bg-white px-[24px] py-[20px] dark:bg-darkblack-600">
      <div className="flex flex-col space-y-5">
        <h3 className="text-2xl font-bold pb-5 text-bgray-900 dark:text-white dark:border-darkblack-400 border-b border-bgray-200">
          Bank Updation
        </h3>
        <div className="mt-8">
          <form action="">
            <div className="grid 2xl:grid-cols-2 grid-cols-1 gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="robotname"
                  className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
                >
                  ReMark
                </label>


                <input
                  type="text"
                  id="reMark"
                  placeholder={Botinfo.reMark}
                  name="reMark"
                  className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
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
                  Payment Status
                </label>

                <select style={{ "width": "290px" }}
                  className="bg-bgray-500 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"

                  value={statusModeOption} onChange={handleBotModeselect}>

                  {BotmodeList.map((option, index) => (
                    <option name="paymentStatus" key={index} value={option}>
                      {option}
                    </option>
                  ))}

                </select>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                aria-label="none"
                className="rounded-lg bg-success-300 text-white font-semibold mt-10 py-3.5 px-4"
                onClick={handleSubmit}
              >
                Save Bank Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


export default bankUpdate;