
import offerContext from '../../context/offerContext'
import React, { useContext, useEffect, useState, useRef } from 'react';

function matchMaking() {

  //==== App Version Configragtion ==========================================================

  const [matchmaking, setMatchmaking] = useState({
    "LocationAlgorithm": false,
    "IPBLOCKAlgorithm": false,
    "ContactMatchAlgorithm": false,
    "MinimumDistance": 0.5
  });

  //=================================================================================


  const context = useContext(offerContext)

  const { Getmatchmaking, matchmakingupdateset } = context

  useEffect(() => {

    const submitdata = async () => {

      let versiondata = await Getmatchmaking()
      console.log("versiondata ::::::::::::::::::", versiondata)
      setMatchmaking({
        LocationAlgorithm: versiondata.LocationAlgorithm,
        IPBLOCKAlgorithm: versiondata.IPBLOCKAlgorithm,
        ContactMatchAlgorithm: versiondata.ContactMatchAlgorithm,
        MinimumDistance: versiondata.MinimumDistance
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

    setMatchmaking({
      ...matchmaking,
      [name]: value,
    });

    console.log("matchmaking ::::::::::::::::::::::", matchmaking)

  };

  const handleSubmitAppverison = async () => {
    let res = await matchmakingupdateset(matchmaking)
    console.log("REs :::::::::::::::::::::", res)
    if (res.falgs == true) {
      alert("Success Save")
    }
    console.log(matchmaking);
  };


  const handleversionClick = (value,name) => {
   

    setMatchmaking({
      ...matchmaking,
      [name]: value,
    });

    console.log("matchmaking ::::::::::::::::::::::", matchmaking)

  };

  return (
    <div className="mb-[24px] w-full">
      <h1>
        <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">MatchMaking Configuration</p>
        <hr></hr></h1>
      <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-1">
        <div className="rounded-lg bg-white p-5 dark:bg-darkblack-600">


          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[113px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Minimum Distance</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <input
                  type="text"
                  id="MinimumDistance"
                  name="MinimumDistance"
                  placeholder={matchmaking.MinimumDistance}
                  className="bg-bgray-500 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
                  onChange={handleversionChange}
                />
              </span>
            </div>
          </div>

          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[112px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Location Algorithm</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <p className="text-base font-medium text-bgray-900 dark:text-white" >
                  {

                    (matchmaking.LocationAlgorithm == true) ?
                      <button onClick={()=>handleversionClick(false,"LocationAlgorithm")} style={{ width: "50px", height: "40px", "backgroundColor": "green" }} className="text-base font-semibold text-bgray-900 dark:text-white">
                        YES
                      </button> : <button onClick={()=>handleversionClick(true,"LocationAlgorithm")} style={{ width: "50px", height: "40px", "backgroundColor": "red" }} className="text-base font-semibold text-bgray-900 dark:text-white">
                        NO
                      </button>
                  }
                </p>
              </span>
            </div>
          </div>


          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[105px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">IP BLOCK Algorithm</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <p className="text-base font-medium text-bgray-900 dark:text-white" >
                  {

                    (matchmaking.IPBLOCKAlgorithm == true) ?
                      <button onClick={()=>handleversionClick(false,"IPBLOCKAlgorithm")} style={{ width: "50px", height: "40px", "backgroundColor": "green" }} className="text-base font-semibold text-bgray-900 dark:text-white">
                        YES
                      </button> : <button onClick={()=>handleversionClick(true,"IPBLOCKAlgorithm")} style={{ width: "50px", height: "40px", "backgroundColor": "red" }} className="text-base font-semibold text-bgray-900 dark:text-white">
                        NO
                      </button>
                  }
                </p>
              </span>
            </div>
          </div>


          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[60px]">
              <div className="icon">
                <span>
                  <p className="text-1xl font-bold leading-[48px] text-bgray-900 dark:text-white">Contact Match Algorithm</p>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
                <p className="text-base font-medium text-bgray-900 dark:text-white" >
                  {

                    (matchmaking.ContactMatchAlgorithm == true) ?
                      <button onClick={()=>handleversionClick(false,"ContactMatchAlgorithm")} style={{ width: "50px", height: "40px", "backgroundColor": "green" }} className="text-base font-semibold text-bgray-900 dark:text-white">
                        YES
                      </button> : <button onClick={()=>handleversionClick(true,"ContactMatchAlgorithm")} style={{ width: "50px", height: "40px", "backgroundColor": "red" }} className="text-base font-semibold text-bgray-900 dark:text-white">
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

export default matchMaking;










