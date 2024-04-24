
import offerContext from '../../context/offerContext'
import React, { useContext, useEffect, useState, useRef } from 'react';

function appMaintenance() {

  //==== App Version Configragtion ==========================================================

  const [appversion, setAppversion] = useState({
    App_Version: "",
    ForceUpdate: false,
    MaintenanceMode: false,
    DeviceRestriction: false,
    LocationRestriction: false
  });

  //=================================================================================


  const context = useContext(offerContext)

  const { Getappversion, appversionset } = context

  useEffect(() => {

    const submitdata = async () => {

      let versiondata = await Getappversion()
      console.log("versiondata ::::::::::::::::::", versiondata)
      setAppversion({
        App_Version: versiondata.App_Version,
        ForceUpdate: versiondata.ForceUpdate,
        MaintenanceMode: versiondata.MaintenanceMode,
        DeviceRestriction: versiondata.DeviceRestriction,
        LocationRestriction: versiondata.LocationRestriction
      })

      //===================================================================================
    }
    submitdata()
  }, []);


  //===========================================================


  //========================== aap version ====================================================

  const handleversionChange = (event) => {
    const { name, value } = event.target;
    console.log("NAME :::::::::::::::::", name)
    console.log("value :::::::::::::::::", value)

    setAppversion({
      ...appversion,
      [name]: value,
    });

    console.log("appversion ::::::::::::::::::::::", appversion)

  };

  const handleSubmitAppverison = async () => {
    let res = await appversionset(appversion)
    console.log("REs :::::::::::::::::::::", res)
    if (res.falgs == true) {
      alert("Success Save")
    }
    console.log(appversion);
  };


  const handleversionClick = (value,name) => {
   

    setAppversion({
      ...appversion,
      [name]: value,
    });

    console.log("appversion ::::::::::::::::::::::", appversion)

  };

  return (
    <div className="mb-[24px] w-full">
      <h1>
        <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">App Version Data</p>
        <hr></hr></h1>
      <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-1">
        <div className="rounded-lg bg-white p-5 dark:bg-darkblack-600">


          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[113px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">App Version</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <input
                  type="text"
                  id="App_Version"
                  name="App_Version"
                  placeholder={appversion.App_Version}
                  className="bg-bgray-500 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
                  onChange={handleversionChange}
                />
              </span>
            </div>
          </div>

          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[105px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Force Update</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <p className="text-base font-medium text-bgray-900 dark:text-white" >
                  {

                    (appversion.ForceUpdate == true) ?
                      <button onClick={()=>handleversionClick(false,"ForceUpdate")} style={{ width: "50px", height: "40px", "backgroundColor": "green" }} className="text-base font-semibold text-bgray-900 dark:text-white">
                        YES
                      </button> : <button onClick={()=>handleversionClick(true,"ForceUpdate")} style={{ width: "50px", height: "40px", "backgroundColor": "red" }} className="text-base font-semibold text-bgray-900 dark:text-white">
                        NO
                      </button>
                  }
                </p>
              </span>
            </div>
          </div>


          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[63px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Maintenance Mode</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <p className="text-base font-medium text-bgray-900 dark:text-white" >
                  {

                    (appversion.MaintenanceMode == true) ?
                      <button onClick={()=>handleversionClick(false,"MaintenanceMode")} style={{ width: "50px", height: "40px", "backgroundColor": "green" }} className="text-base font-semibold text-bgray-900 dark:text-white">
                        YES
                      </button> : <button onClick={()=>handleversionClick(true,"MaintenanceMode")} style={{ width: "50px", height: "40px", "backgroundColor": "red" }} className="text-base font-semibold text-bgray-900 dark:text-white">
                        NO
                      </button>
                  }
                </p>
              </span>
            </div>
          </div>


          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[75px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Device Restriction</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <p className="text-base font-medium text-bgray-900 dark:text-white" >
                  {

                    (appversion.DeviceRestriction == true) ?
                      <button onClick={()=>handleversionClick(false,"DeviceRestriction")} style={{ width: "50px", height: "40px", "backgroundColor": "green" }} className="text-base font-semibold text-bgray-900 dark:text-white">
                        YES
                      </button> : <button onClick={()=>handleversionClick(true,"DeviceRestriction")} style={{ width: "50px", height: "40px", "backgroundColor": "red" }} className="text-base font-semibold text-bgray-900 dark:text-white">
                        NO
                      </button>
                  }
                </p>
              </span>
            </div>
          </div>


          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[63px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Location Restriction</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <p className="text-base font-medium text-bgray-900 dark:text-white" >
                  {

                    (appversion.LocationRestriction == true) ?
                      <button onClick={()=>handleversionClick(false,"LocationRestriction")} style={{ width: "50px", height: "40px", "backgroundColor": "green" }} className="text-base font-semibold text-bgray-900 dark:text-white">
                        YES
                      </button> : <button onClick={()=>handleversionClick(true,"LocationRestriction")} style={{ width: "50px", height: "40px", "backgroundColor": "red" }} className="text-base font-semibold text-bgray-900 dark:text-white">
                        NO
                      </button>
                  }
                </p>
              </span>
            </div>
          </div>

          <div className="mb-5 flex items-center justify-between">
            <button onClick={handleSubmitAppverison}
              aria-label="none"
              className="bg-success-300 dark:bg-success-300 dark:text-bgray-900 border-2 border-transparent text-white rounded-lg px-4 py-3 font-semibold text-sm">
              Sumbit
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}

export default appMaintenance;










