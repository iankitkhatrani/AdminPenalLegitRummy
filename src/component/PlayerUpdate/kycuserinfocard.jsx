  import GreenBtn from "../button/AddMony";

  import { useNavigate, useLocation } from 'react-router-dom';

  import React, { useState, useContext, useEffect } from 'react';
  import Toast from 'react-bootstrap/Toast';
  import offerContext from '../../context/offerContext';
  import Modal from 'react-bootstrap/Modal';
  import Button from 'react-bootstrap/Button';
  import FloatingLabel from 'react-bootstrap/FloatingLabel';
  import Form from 'react-bootstrap/Form';
  function kycuserinfo() {


    const location = useLocation();
    //console.log("location ", location.state)
    const Botinfo = location.state;

    //console.log("kycuserinfocard User Info  ", Botinfo)

    const context = useContext(offerContext)
    const { host, PlayerData } = context

    const [refreshData, setRefreshData] = useState(false);



    const navigate = useNavigate();
    const navigateToContacts = () => {
      // 👇️ navigate to /contacts 
      navigate('/transaction');
    };

    let [userInfo, SetuserInfo] = useState({})
    let [userPankycInfo, SetkyPancuserInfo] = useState({})
    let [userAadharkycInfo, SetkyAadharcuserInfo] = useState({})

    const [imagePanSrc, setImagePanSrc] = useState("");
    const [imageAdharfrontSrc, setImageAdharfrontSrc] = useState("");
    const [imageAdharbackSrc, setImageAdharbackSrc] = useState("");
    const [imageSrc, setImageSrc] = useState("");

    useEffect(() => {

      const submitdata = async () => {


        let resData = await PlayerData(Botinfo.UserId)

        console.log("resData ::::::::::::::::::", resData)

        console.log("userInfo ::::::::::::::::::", userInfo)


        await SetuserInfo(resData.userInfo)
        await SetkyPancuserInfo(resData.PanOKYCData)
        await SetkyAadharcuserInfo(resData.UserOKYCData)



        let avatarImg = (resData.userInfo && resData.userInfo.avatar != undefined) ? host + "/upload/avatar/" + resData.userInfo.avatar + ".png" : host + "/upload/profile-52x52.png"

        console.log("avatarImg ::::::::::::::::::::::::::::::::::::::", avatarImg)

        setImageSrc(avatarImg)

        let PanImg = (resData.PanOKYCData && resData.PanOKYCData.pancardfrontimages != undefined && resData.PanOKYCData.pancardfrontimages != "-") ? host + "/" + resData.PanOKYCData.pancardfrontimages : host + "/upload/dashboard2.jpg"

        console.log("PanImg ::::::::::::::::::::::::::::::::::::::", PanImg)
        setImagePanSrc(PanImg)

        let AdhrcardImg1 = (resData.UserOKYCData && resData.UserOKYCData.adharcardfrontimages != undefined && resData.UserOKYCData.adharcardfrontimages != "-") ? host + "/" + resData.UserOKYCData.adharcardfrontimages : host + "/upload/dashboard2.jpg"

        console.log("AdhrcardImg1 ::::::::::::::::::::::::::::::::::::::", AdhrcardImg1)
        setImageAdharfrontSrc(AdhrcardImg1)

        let AdhrcardImg2 = (resData.UserOKYCData && resData.UserOKYCData.adharcardbackimages != undefined && resData.UserOKYCData.adharcardbackimages != "-") ? host + "/" + resData.UserOKYCData.adharcardbackimages : host + "/upload/dashboard2.jpg"

        console.log("AdhrcardImg2 ::::::::::::::::::::::::::::::::::::::", AdhrcardImg2)
        setImageAdharbackSrc(AdhrcardImg2)
      }

      submitdata()

    }, [Botinfo.UserId, refreshData]);


    const handleImageError = () => {
      // If the image fails to load, set the image source to the default image
      setImageSrc('/src/assets/images/avatar/profile-52x52.png');
    };


    const panhandleImageError = () => {

      // If the image fails to load, set the image source to the default image
      setImagePanSrc('/src/assets/images/dashboard/dashboard2.png');
    };


    const adharfronthandleImageError = () => {
      // If the image fails to load, set the image source to the default image
      setImageAdharfrontSrc('/src/assets/images/dashboard/dashboard2.png');
    };



    const adharbackhandleImageError = () => {
      // If the image fails to load, set the image source to the default image
      setImageAdharbackSrc('/src/assets/images/dashboard/dashboard2.png');
    };

    //(UserId,userInfo.name,userInfo.email,userAadharkycInfo.adharcard,userPankycInfo.pancard,adminremark,adharcardadminverified,pancardadminverified)

    const navigateToContactsProfileUpdate = async (UserId, name, email, adharcard, pancardname, adminremark, adharcardadminverified, pancardadminverified) => {
      console.log("ID :::::::::::::", UserId)
      console.log("name :::::::::::::", name)
      console.log("email :::::::::::::", email)
      console.log("adharcard :::::::::::::", adharcard)
      console.log("pancardname :::::::::::::", pancardname)
      console.log("adminremark :::::::::::::", adminremark)
      console.log("adharcardadminverified :::::::::::::", adharcardadminverified)
      console.log("pancardadminverified :::::::::::::", pancardadminverified)


      navigate('/kycprofileupdate', { state: { UserId, name, email, adharcard, pancardname, adminremark, adharcardadminverified, pancardadminverified } });

    }

    return (
      <>



        <div className="mb-6 w-full rounded-lg bg-white px-[42px] py-5 dark:border dark:border-darkblack-400 dark:bg-darkblack-600 lg:mb-0 lg:w-1/2 2xl:mb-6 2xl:w-full">
          <div className="my-wallet mb-8 w-full">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-bold text-bgray-900 dark:text-white">
                User Kyc Information
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
                Name :- {userInfo.name != undefined ? userInfo.name : ""}
              </p>
            </div>
            <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                Eamil :- {userInfo.email}
              </p>
            </div>

            <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                Gender :- {userAadharkycInfo.gender == "-" ? "-" : userAadharkycInfo.gender == "M" ? "MALE" : "FEMALE"}
              </p>
            </div>

            <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                Mobile Number :- {userInfo.mobileNumber}
              </p>
            </div>

            <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                DOB :- {userAadharkycInfo.DOB}
              </p>
            </div>

            <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                State :- {userInfo.location}
              </p>
            </div>

            <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                PinCode :- {userAadharkycInfo.pincode}
              </p>
            </div>


          </div>
        </div>

        <div className="mb-6 w-full rounded-lg bg-white px-[42px] py-5 dark:border dark:border-darkblack-400 dark:bg-darkblack-600 lg:mb-0 lg:w-1/2 2xl:mb-6 2xl:w-full">
          <div className="my-wallet mb-8 w-full">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-bold text-bgray-900 dark:text-white">
                Pan Kyc Information
              </h3>
            </div>

            <div className="flex justify-center">
              <div className="card-slider relative w-[500px] md:w-[500px]">

                <div className="w-full">
                  <img src={imagePanSrc} alt="card" onError={panhandleImageError} />
                </div>

              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                Name :- {userPankycInfo.pancardname}
              </p>
            </div>
            <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                Pan No :- {userPankycInfo.pancard}
              </p>
            </div>

            <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                Father's Name :- {userPankycInfo.full_name}
              </p>
            </div>

            <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                DOB :- {userPankycInfo.DOB}
              </p>
            </div>
            <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                Hyperverge :-

                {!userPankycInfo.pancardverified ?
                  " Auto_Declined"
                  : " Auto_Approved"}


              </p>
            </div>

            <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                Hyperverge Remark :- {userPankycInfo.panHypervergemark}
              </p>
            </div>

            <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                Admin Status :-

                {!userPankycInfo.pancardadminverified ?
                  " Auto_Declined"
                  : " Auto_Approved"}
              </p>
            </div>

            <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                Admin  Remark :- {userPankycInfo.adminremark} || {userPankycInfo.adminname}
              </p>
            </div>

          </div>
        </div>

        <div className="mb-6 w-full rounded-lg bg-white px-[42px] py-5 dark:border dark:border-darkblack-400 dark:bg-darkblack-600 lg:mb-0 lg:w-1/2 2xl:mb-6 2xl:w-full">
          <div className="my-wallet mb-8 w-full">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-bold text-bgray-900 dark:text-white">
                Aadhar Kyc Information
              </h3>
            </div>

            <div className="flex justify-center">
              <div className="card-slider relative w-[500px] md:w-[500px]">

                <div className="w-full">
                  <img src={imageAdharfrontSrc} alt="card" onError={adharfronthandleImageError} />

                </div>

              </div>
              <div className="card-slider relative w-[500px] md:w-[500px]">

                <div className="w-full">
                  <img src={imageAdharbackSrc} alt="card" onError={adharbackhandleImageError} />

                </div>

              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                Digilocaker Verified :- {userAadharkycInfo.verified == true ? "YES" : "NO"}
              </p>
            </div>
            <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                Name :-  {userAadharkycInfo.full_name}
              </p>
            </div>

            <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                DOB :-  {userAadharkycInfo.DOB}
              </p>
            </div>

            <div className="flex h-[100px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                Address  :-  {userAadharkycInfo.userInfo}
              </p>
            </div>

            <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                Hyperverge :-

                {!userAadharkycInfo.verified ?
                  " Auto_Declined"
                  : " Auto_Approved"}


              </p>
            </div>

            <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                Hyperverge Remark :- {userAadharkycInfo.adharcardHypervergemark}
              </p>
            </div>

            <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                Admin Status :-

                {!userAadharkycInfo.adharcardadminverified ?
                  " Auto_Declined"
                  : " Auto_Approved"}
              </p>
            </div>

            <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
              <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
                Admin  Remark :- {userAadharkycInfo.adminremark} || {userAadharkycInfo.adminname}
              </p>
            </div>


            <button aria-label="none" onClick={() => navigateToContactsProfileUpdate(Botinfo.UserId, userInfo.name, userInfo.email, userAadharkycInfo.adharcard, userPankycInfo.pancard,
              userAadharkycInfo.adminremark, userAadharkycInfo.adharcardadminverified, userPankycInfo.pancardverified)}
              className="mt-7 bg-blue-300 dark:text-bgray-900 border-2 border-transparent text-white rounded-lg px-4  py-3 font-semibold text-sm">Edit Profile</button>

              
            <button aria-label="none" onClick={() => setRefreshData(!refreshData)}
              className="mt-7 bg-blue-300 dark:text-bgray-900 border-2 border-transparent text-white rounded-lg px-4 ml-10 py-3 font-semibold text-sm">Refresh Data</button>

          </div>
        </div>



      </>
    );
  }

  export default kycuserinfo;


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

  // <div className="mb-6 w-full rounded-lg bg-white px-[42px] py-5 dark:border dark:border-darkblack-400 dark:bg-darkblack-600 lg:mb-0 lg:w-1/2 2xl:mb-6 2xl:w-full">
  // <div className="my-wallet mb-8 w-full">
  //   <div className="mb-3 flex items-center justify-between">
  //     <h3 className="text-lg font-bold text-bgray-900 dark:text-white">
  //       Kyc Status
  //     </h3>
  //   </div>
  // </div>
  // <div className="w-full">
  //   <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
  //     <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
  //       Status :- "Status"
  //     </p>
  //   </div>
  //   <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
  //     <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
  //       Hyperverge Feedback :- "Hyperverge"
  //     </p>
  //   </div>

  //   <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
  //     <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
  //       Admin Feedback :- "Admnin Remakrk"
  //     </p>
  //   </div>

  //   <div className="flex h-[50px] w-full flex-col justify-between rounded-lg border border-bgray-200 p-4 focus-within:border-success-300 dark:border-darkblack-400">
  //     <p className="text-sm font-medium text-bgray-600 dark:text-bgray-50">
  //       Updated On  :- "10-10-2023"
  //     </p>
  //   </div>

  // </div>
  // </div>
