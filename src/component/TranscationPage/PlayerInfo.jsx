import ProtoTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import React, { useState, useContext, useEffect } from 'react';
import offerContext from '../../context/offerContext';

import edit from "../../assets/images/edit.png";
import trash from "../../assets/images/trash.png";

function PlayerInfo({ OrderId, UserId, transAmount, winningChips, chips, bonusChips, referralChips, totalBucket, createdAt, transType, transTypeText, gameId }) {


  const navigate = useNavigate();
  const navigateToContacts = (OrderId, UserId, transAmount, winningChips, chips, bonusChips, referralChips, totalBucket, createdAt, transType, transTypeText, gameId) => {

    navigate('/playeredit', { state: { OrderId, UserId, transAmount, winningChips, chips, bonusChips, referralChips, totalBucket, createdAt, transType, transTypeText, gameId } });
  }

  const context = useContext(offerContext)
  const { host } = context

  return (
    <tr className="hover:bg-gray-600 border-b dark:border-darkblack-400">


      <td className="w-[165px] px-6 py-5 xl:px-0">

        <p className="text-base font-semibold text-bgray-900 dark:text-white">

          {OrderId}
        </p>
      </td>

      <td className="w-[160px] px-6 py-5 xl:px-0">

        <p className="text-base font-semibold text-bgray-900 dark:text-white">

          {UserId}
        </p>
      </td>
      <td className="w-[145px] px-6 py-5 xl:px-0">
        {
          transAmount > 0 ?
          <p style={{"background-color":"green"}} className="text-base font-semibold text-bgray-900 dark:text-white">
        ₹{transAmount}
        </p> : 
        <p style={{"background-color":"red"}} className="text-base font-semibold text-bgray-900 dark:text-white">
        ₹{transAmount}
        </p>


        }
        
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
        ₹{winningChips}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
        ₹{chips}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          ₹{bonusChips}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          ₹{referralChips}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          ₹{totalBucket}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {createdAt}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {transType}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {transTypeText}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {gameId}
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
