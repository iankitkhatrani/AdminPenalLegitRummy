import ProtoTypes from "prop-types";
import offerContext from '../../context/offerContext'
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


import edit from "../../assets/images/edit.png";
import trash from "../../assets/images/trash.png";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function CustomerInfo({ gamePlayType, tableName, entryFee, maxSeat, commission, status, id }) {

  const context = useContext(offerContext)

  const { DeleteTableEntry } = context

  const name = cookies.get('name')


  const navigate = useNavigate();
  const navigateToContactsedit = (gamePlayType, tableName, entryFee, maxSeat, commission, status, id) => {
    // 👇️ navigate to /contacts 
    console.log("Point Table entery ", id)

    navigate('/tableentryedit', { state: { gamePlayType, tableName, entryFee, maxSeat, commission, status, id, "tabletype": "pointrummy" } });
  };

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts 
    console.log("Page Reload ::::::::::::::::")
    navigate('/TableEntry?gametype=pointrummy');
  };



  const deleteTable = async (id) => {
    await DeleteTableEntry("admin/lobbies/" + id)
    navigateToContacts()
    window.location.reload();
  };

  return (
    <tr className="hover:bg-gray-600 border-b dark:border-darkblack-400">

      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {id}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {gamePlayType}
        </p>
      </td>

      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {tableName}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {entryFee}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {maxSeat}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {commission}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {status}
        </p>
      </td>


      <td className="w-[165px] px-6 py-5 xl:px-0">
        {name == "Support" ? "-" : <div className="flex justify-center">
          <button styles={{
            "margin": "1px",
            "background-color": "white",
            "color": "white",
            "border": "none",
            "padding": "5px 10px",
            "cursor": "pointer",
            "border-radius": "4px"
          }} onClick={() => navigateToContactsedit(gamePlayType, tableName, entryFee, maxSeat, commission, status, id)} >
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
          }} onClick={() => deleteTable(id)} >
            <img style={{ "width": "30px", "height": "30px", "margin": "10px" }} src={trash} />
          </button>
        </div> }
      </td>
    </tr>
  );
}

CustomerInfo.propTypes = {
  title: ProtoTypes.string,
  content: ProtoTypes.string,
};

export default CustomerInfo;
