import ProtoTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

import edit from "../../assets/images/edit.png";
import trash from "../../assets/images/trash.png";

function PlayerInfo({ UserId,userName, adharcard, createdAt, verified,Pancard,Pancardverified,adminremark,adminremarkcd }) {

  const navigate = useNavigate();
  const navigateToContacts = (UserId,userName, adharcard, createdAt, verified,Pancard,Pancardverified,adminremark,adminremarkcd) => {
    navigate('/kycupdateinfo', { state: { UserId,userName, adharcard, createdAt, verified,Pancard,Pancardverified,adminremark,adminremarkcd } });
  }


  return (
    <tr className="hover:bg-gray-600 border-b dark:border-darkblack-400">

      <td className="w-[165px] px-6 py-5 xl:px-0">
          <p className="text-base font-semibold text-bgray-900 dark:text-white">
            {UserId}
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
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {createdAt}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {verified}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {Pancard}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {Pancardverified}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {adminremark}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {adminremarkcd}
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
          }} onClick={() => navigateToContacts(UserId,userName, adharcard, createdAt, verified,Pancard,Pancardverified,adminremark,adminremarkcd)} >
            <img style={{ "width": "30px", "height": "30px", "margin": "10px" }} src={edit} />
          </button>
         
        </div>
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
