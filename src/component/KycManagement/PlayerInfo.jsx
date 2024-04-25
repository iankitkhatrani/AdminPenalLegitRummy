import ProtoTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import React, { useState, useContext, useEffect } from 'react';
import offerContext from '../../context/offerContext';

import edit from "../../assets/images/edit.png";
import trash from "../../assets/images/trash.png";

function PlayerInfo({ UserId,userName, adharcard, createdAt, verified,adharcardHypervergemark,adharcardadminverified,
  Pancard,Pancardverified,panHypervergemark,pancardadminverified, adminremark,adminremarkcd,dob,ReId,adminname,status }) {

  const context = useContext(offerContext)
  const { PlayerData } = context

  const navigate = useNavigate();
  const navigateToContacts = async (id) => {

    var PlayerDataInfo = await PlayerData(id)
    console.log("PlayerDataInfo", PlayerDataInfo)
    if (PlayerDataInfo.userInfo != undefined) {
      navigate('/playeredit', {
        state: {
          UserId: PlayerDataInfo.userInfo._id,
          UserName: PlayerDataInfo.userInfo.username,
          MobileNo: PlayerDataInfo.userInfo.mobileNumber,
          totalMatch: PlayerDataInfo.userInfo.counters.totalMatch.toFixed(2),
          MainWallet: PlayerDataInfo.userInfo.chips.toFixed(2),
          WinWallet: PlayerDataInfo.userInfo.winningChips.toFixed(2),
          BonusWallet: PlayerDataInfo.userInfo.chips.toFixed(2),
          RegistrationDate: PlayerDataInfo.userInfo.createdAt,
          LastLogin: PlayerDataInfo.userInfo.lastLoginDate,
          status: PlayerDataInfo.userInfo.status ? 'Blocked' : 'Active',
          profileUrl: PlayerDataInfo.userInfo.profileUrl,
          email: PlayerDataInfo.userInfo.email,
          uniqueId: PlayerDataInfo.userInfo.uniqueId,
          avatar: PlayerDataInfo.userInfo.avatar
        }
      });
    } else {
      alert("user not exist ...!!")
    }
  }


  const navigateToContactsApprove = async (UserId, adminremark,adharcardadminverified,pancardadminverified) => {
    console.log("ID :::::::::::::", UserId)
    console.log("adminremark :::::::::::::", adminremark)
    console.log("adharcardadminverified :::::::::::::", adharcardadminverified)
    console.log("pancardadminverified :::::::::::::", pancardadminverified)


    navigate('/kycupdateinfo', { state: { UserId, adminremark,adharcardadminverified,pancardadminverified} });

  }

  function formatDateTo12hr(dateTimeStr) {
    const dateTime = new Date(dateTimeStr);
    const formattedDate = dateTime.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true // Set to true for 12-hour format
    });
    return formattedDate;
  }

  return (
    <tr className="hover:bg-gray-600 border-b dark:border-darkblack-400">

      <td className="w-[165px] px-6 py-5 xl:px-0">
          <p className="text-base font-semibold text-bgray-900 dark:text-white">
          <button styles={{
            "margin": "1px",
            "background-color": "white",
            "color": "white",
            "border": "none",
            "padding": "5px 10px",
            "cursor": "pointer",
            "border-radius": "4px"
          }} onClick={() => navigateToContacts(UserId)} >
            {UserId}
            </button>
          </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
          <p className="text-base font-semibold text-bgray-900 dark:text-white">
            {userName}
          </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
          <p className="text-base font-semibold text-bgray-900 dark:text-white">
            {adharcard}
          </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
          <p className="text-base font-semibold text-bgray-900 dark:text-white">
            {dob}
          </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {formatDateTo12hr(createdAt)}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          

          {!verified ? <p style={{ "backgroundColor": "red" }} className="text-base font-semibold text-bgray-900 dark:text-white">
          Auto_Declined
        </p> : <p style={{ "backgroundColor": "green" }} className="text-base font-semibold text-bgray-900 dark:text-white">Auto_Approved</p>}


        </p>
      </td>
      {status == "Rejected" ? <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {adharcardHypervergemark}
        </p>
      </td> : ""}

      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          

          {!adharcardadminverified ? "-" : <p style={{ "backgroundColor": "green" }} className="text-base font-semibold text-bgray-900 dark:text-white">Admin_Approved</p>}


        </p>
      </td>

      
      
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {Pancard}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
         

          {!Pancardverified ? <p style={{ "backgroundColor": "red" }} className="text-base font-semibold text-bgray-900 dark:text-white">
            Auto_Declined
          </p> : <p style={{ "backgroundColor": "green" }} className="text-base font-semibold text-bgray-900 dark:text-white">Auto_Approved</p>}

        </p>
      </td>
      {status == "Rejected" ? <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {panHypervergemark}
        </p>
      </td> : ""}
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          

          {!pancardadminverified ?"-": <p style={{ "backgroundColor": "green" }} className="text-base font-semibold text-bgray-900 dark:text-white">Admin_Approved</p>}


        </p>
      </td>

      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {adminremark}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {adminname}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {formatDateTo12hr(adminremarkcd)}
        </p>
      </td>
      
 

    </tr>
  );
}



// <td className="w-[165px] px-6 py-5 xl:px-0">
// <p className="text-base font-medium text-bgray-900 dark:text-white">


//   <button styles={{
//     "margin": "1px",
//     "background-color": "white",
//     "color": "white",
//     "border": "none",
//     "padding": "5px 10px",
//     "cursor": "pointer",
//     "border-radius": "4px"
//   }} onClick={() => navigateToContactsApprove(UserId, adminremark,adharcardadminverified,pancardadminverified)} >

//   <img style={{ "width": "30px", "height": "30px", "margin": "10px" }} src={edit} />
//   </button>

// </p>

// </td>

// <td className="w-[165px] px-6 py-5 xl:px-0">
//         <div className="flex justify-center">
//           <button styles={{
//             "margin": "1px",
//             "background-color": "white",
//             "color": "white",
//             "border": "none",
//             "padding": "5px 10px",
//             "cursor": "pointer",
//             "border-radius": "4px"
//           }} onClick={() => navigateToContacts(UserId,userName, adharcard, createdAt, verified,Pancard,Pancardverified,adminremark,adminremarkcd)} >
//             <img style={{ "width": "30px", "height": "30px", "margin": "10px" }} src={edit} />
//           </button>
         
//         </div>
//       </td>

// <button styles={{
//   "margin": "1px",
//   "background-color": "white",
//   "color": "white",
//   "border": "none",
//   "padding": "5px 10px",
//   "cursor": "pointer",
//   "border-radius": "4px"
// }} onClick={() => DeleteUser(UserId)} >
//   <img style={{ "width": "30px", "height": "30px", "margin": "10px" }} src={trash} />
// </button>

// PlayerInfo.propTypes = {
//   UserId:ProtoTypes.string,
//   UserName:ProtoTypes.string,
//   MobileNo:ProtoTypes.string,
//   GamePlay:ProtoTypes.Number,
//   MainWallet:ProtoTypes.Number,
//   RegistrationDate:ProtoTypes.string,
//   LastLogin:ProtoTypes.string,
//   status:ProtoTypes.string,
//   Status:ProtoTypes.string
// };

export default PlayerInfo;
