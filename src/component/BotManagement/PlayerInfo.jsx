import ProtoTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import React, { useState, useContext, useEffect } from 'react';
import offerContext from '../../context/offerContext';

import edit from "../../assets/images/edit.png";
import trash from "../../assets/images/trash.png";


function PlayerInfo({ UserId, img, UserName, GamePlay, MainWallet, Status }) {

  const navigate = useNavigate();
  const navigateToContacts = (UserId, img, UserName, GamePlay, MainWallet, Status) => {
    // 👇️ navigate to /contacts 
    console.log("User ID  User Bot ", UserId)

    navigate('/botUpdate', { state: { UserId, img, UserName, GamePlay, MainWallet, Status } });
  };

  const context = useContext(offerContext)
  const { BotDelete, host, BotList } = context

  const DeleteUser = async (userid) => {
    console.log("delete ::::::::::::::")
    await BotDelete(userid)
    window.location.reload();
  }
  console.log("img :::::::::::::::::::::",img)
  let value = "/src/assets/images/avatar/"+img+".png"
  if(img.includes('BotUpload')){
    value = host+"/"+img
  } 

  console.log("value ",value)
  const [imageSrc, setImageSrc] = useState(value);

  const handleImageError = () => {
    // If the image fails to load, set the image source to the default image
    setImageSrc('/src/assets/images/avatar/profile-52x52.png');
  };
  return (
    <tr className="hover:bg-gray-600 border-b dark:border-darkblack-400">
      <td className="w-[65px] px-6 py-5 xl:px-0">
        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          <div className="h-10 w-10 overflow-hidden rounded-full">
            <img src={imageSrc} alt="Profile" onError={handleImageError} className="h-full w-full object-cover" />
            
          </div>
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {UserName}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {GamePlay}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          ₹{MainWallet}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          {Status}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <div className="flex justify-center">
          <button styles={{
            "margin": "1px",
            "background-color": "white",
            "color": "white",
            "border": "none",
            "padding": "5px 10px",
            "cursor": "pointer",
            "border-radius": "4px"
          }} onClick={() => navigateToContacts(UserId, img, UserName, GamePlay, MainWallet, Status)} >
            <img style={{ "width": "30px", "height": "30px", "margin": "10px" }} src={edit} />
          </button>
          <button styles={{
            "margin": "1px",
            "background-color": "white",
            "color": "white",
            "border": "none",
            "padding": "5px 10px",
            "cursor": "pointer",
            "border-radius": "4px"
          }} onClick={() => DeleteUser(UserId)} >
            <img style={{ "width": "30px", "height": "30px", "margin": "10px" }} src={trash} />

          </button>
        </div>
      </td>
    </tr>
  );
}

// PlayerInfo.propTypes = {
//   UserId:ProtoTypes.string,
//   UserName:ProtoTypes.string,
//   MobileNo:ProtoTypes.string,
//   GamePlay:ProtoTypes.Number,
//   MainWallet:ProtoTypes.Number,
//   RegistrationDate:ProtoTypes.string,
//   LastLogin:ProtoTypes.string,
//   Block:ProtoTypes.string,
//   Status:ProtoTypes.string
// };

export default PlayerInfo;
