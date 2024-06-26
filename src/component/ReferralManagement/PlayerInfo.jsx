import ProtoTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import React, { useState, useContext, useEffect } from 'react';
import offerContext from '../../context/offerContext';


import eye from "../../assets/images/eye.png";

function PlayerInfo({ UserId, UserName, total,totalbonus }) {

  const navigate = useNavigate();
  const navigateToContacts = (UserId) => {

    navigate('/ReferralUserManagement', { state: { UserId } });
  }

  return (
    <tr className="hover:bg-gray-600 border-b dark:border-darkblack-400">
      <td className="w-[165px] px-6 py-5 xl:px-0">

        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          {UserName}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {total}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
        ₹{totalbonus}
        </p>
      </td>

      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
        <button styles={{
          "margin": "1px",
          "background-color": "white",
          "color": "white",
          "border": "none",
          "padding": "5px 10px",
          "cursor": "pointer",
          "border-radius": "4px"
        }} onClick={() => navigateToContacts(UserId)} >

        <img style={{ "width": "30px", "height": "30px", "margin": "10px" }} src={eye} />
        </button>
        </p>
      </td>
      


    </tr>
  );
}

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
