import ProtoTypes from "prop-types";
import offerContext from '../../context/offerContext'
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';



function CustomerInfo({ gamePlayType, deal, tableName, entryFee, maxSeat, commission, status, id }) {

  const context = useContext(offerContext)

  const { DeleteTableEntry } = context


  const navigateToContactsEdit = (gamePlayType, deal, tableName, entryFee, maxSeat, commission, status, id) => {
    // 👇️ navigate to /contacts 
    console.log("Point Table entery ",id)

    navigate('/tableentryedit', {state:{gamePlayType, deal, tableName, entryFee, maxSeat, commission, status, id,"tabletype":"dealrummy"}});
  };


  const navigate = useNavigate();
  const navigateToContacts = () => {
    // 👇️ navigate to /contacts 
    navigate('/TableEntry?gametype=dealrummy');
  };

  const deleteTable = async (id) => {
    await DeleteTableEntry("admin/deal-lobbies/" + id)

    navigateToContacts()

  };


  return (
    <tr className="border-b border-bgray-300 dark:border-darkblack-400">

      <td className="px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {gamePlayType}
        </p>
      </td>
      <td className="px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {deal}
        </p>
      </td>
      <td className="px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {tableName}
        </p>
      </td>
      <td className="px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {entryFee}
        </p>
      </td>
      <td className="px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {maxSeat}
        </p>
      </td>
      <td className="px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {commission}
        </p>
      </td>
      <td className="px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {status}
        </p>
      </td>
      <td className="px-6 py-5 xl:px-0">
        <div className="flex justify-center">
          <button styles={{
            "margin": "1px",
            "background-color": "white",
            "color": "white",
            "border": "none",
            "padding": "5px 10px",
            "cursor": "pointer",
            "border-radius": "4px"
          }} onClick={() => navigateToContactsEdit(gamePlayType, deal, tableName, entryFee, maxSeat, commission, status, id)} >
            <img style={{ "width": "15px", "height": "15px", "margin": "10px" }} src="https://cdn3.iconfinder.com/data/icons/feather-5/24/edit-512.png" />
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
            <img style={{ "width": "15px", "height": "15px", "margin": "10px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSewqWoGi9-fXmd6_SKqNkg6-kmo7VctpXAhgBiKaliSA&s" />

          </button>
        </div>
      </td>
    </tr>
  );
}

CustomerInfo.propTypes = {
  title: ProtoTypes.string,
  content: ProtoTypes.string,
};

export default CustomerInfo;
