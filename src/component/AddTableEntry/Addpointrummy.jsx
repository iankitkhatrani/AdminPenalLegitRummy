import { useNavigate, useLocation } from 'react-router-dom';

import React, { useState, useContext, useEffect } from 'react';
import offerContext from '../../context/offerContext';

function addtableentry() {

  const context = useContext(offerContext)

  const { addTableentryAPI } = context

  const navigate = useNavigate();
  const navigateToContacts = () => {
    // 👇️ navigate to /contacts 
    navigate('/TableEntry?gametype=pointrummy');
  };


  let [tableInfo, SettableInfo] = useState({
    gamePlayType: "pointrummy",
    tableName: "",
    entryFee:0,
    maxSeat:0,
    status:false,
    commission:0,
    expireIn:10
  })

  const OnChange = (event) => {
    let { name, value } = event.target;

    //value = (value?.toLowerCase?.() === 'true') ? true : false


    SettableInfo({
      ...tableInfo,
      [name]: value,
    });


    console.log("handleChange ::::::::::::::::::::::", tableInfo)

  };


  const handleChange = (event) => {
    const { name, value } = event.target;
        console.log("NAME :::::::::::::::::",name)
        console.log("value :::::::::::::::::",value)

    SettableInfo({
        ...tableInfo,
        [name]: value,
    });

    console.log("handleChange ::::::::::::::::::::::",tableInfo)

};

const handleSubmit = async (event) => {
    event.preventDefault();
    // You can handle the form submission here
    // This example just logs the data to the console

    console.log("tableInfo ",tableInfo)

    let res = await addTableentryAPI(tableInfo,"admin/lobbies")

    console.log("REsponce ::::::::::::::::::::::",res)

    if(res.status == 200){
        navigateToContacts()
    }else{
        alert("Error Please enter")
    }
    console.log(userInfo);
};



  return (
    <div className="w-full rounded-lg bg-white px-[24px] py-[20px] dark:bg-darkblack-600">
      <div className="flex flex-col space-y-5">
        <h3 className="text-2xl font-bold pb-5 text-bgray-900 dark:text-white dark:border-darkblack-400 border-b border-bgray-200">
          Pool Table Information's
        </h3>
        <div className="mt-8">
          <form action="">
            <div className="grid 2xl:grid-cols-2 grid-cols-1 gap-6">
              

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="Table Name"
                  className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
                >
                Table Name
                </label>
                <input
                  type="text"
                  id="tableName"
                  placeholder="tableName"
                  name="tableName"
                  className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="Table Name"
                  className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
                >
                Commission
                </label>
                <input
                  type="text"
                  id="commission"
                  placeholder="commission"
                  name="commission"
                  className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
                  onChange={handleChange}
                />
              </div>


              <div className="flex flex-col gap-2">
                <label
                  htmlFor="Title"
                  className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
                >
                Entry Fee
                </label>
                <input
                  type="text"
                  id="entryFee"
                  placeholder="entryFee"
                  name="entryFee"
                  className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
                  onChange={handleChange}
                />
              </div>


              <div className="flex flex-col gap-2">
                <label
                  htmlFor="Title"
                  className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
                >
                Max Seat
                </label>
                <input
                  type="text"
                  id="maxSeat"
                  placeholder="maxSeat"
                  name="maxSeat"
                  className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="Title"
                  className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
                >
                Table Status
                </label>
                <label  htmlFor="Active"
                className="text-base text-bgray-600 dark:text-bgray-50  font-medium">
                  <input
                    type="radio"
                    value="Active"
                    name="status"
                    checked={tableInfo.status === true || tableInfo.status === "true" || tableInfo.status == "Active"}
                    onChange={OnChange}
                  />
                  Active
                </label>
                <label htmlFor="Inactive"
                className="text-base text-bgray-600 dark:text-bgray-50  font-medium">
                  <input
                    type="radio"
                    value="DeActive"
                    name="status"
                    checked={tableInfo.status === false || tableInfo.status === "false" || tableInfo.status === "" || tableInfo.status == "DeActive"}
                    onChange={OnChange}
                  />
                     Inactive
                </label>
              </div>


              
            </div>
            <div className="flex justify-end">
              <button
                aria-label="none"
                className="rounded-lg bg-success-300 text-white font-semibold mt-10 py-3.5 px-4"
                onClick={handleSubmit}
              >
                Add Table
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


export default addtableentry;