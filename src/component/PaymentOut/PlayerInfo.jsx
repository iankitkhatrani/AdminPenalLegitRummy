import ProtoTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

import edit from "../../assets/images/edit.png";
import trash from "../../assets/images/trash.png";

function PlayerInfo({ OrderID, userId, UserName, Amount, accountNo, ifscCode, PaymentMode, PaymentStatus, RequestDate, Autopay, Action, _id }) {

  const navigate = useNavigate();
  const navigateToContacts = (OrderID, userId, UserName, Amount, PaymentMode, PaymentStatus, RequestDate, Autopay, Action, _id) => {
    navigate('/playeredit', { state: { OrderID, userId, UserName, Amount, PaymentMode, PaymentStatus, RequestDate, Autopay, Action, _id } });
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
          {OrderID}
        </p>
      </td>
      <td className="w-[185px] px-6 py-5 xl:px-0">

        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          {userId}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">

        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          {UserName}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          ₹{Amount}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">

        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          {accountNo}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">

        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          {ifscCode}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {PaymentMode}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        {PaymentStatus == "Pending" ? <p style={{ "backgroundColor": "red" }} className="text-base font-semibold text-bgray-900 dark:text-white">
          {PaymentStatus}
        </p> : <p style={{ "backgroundColor": "green" }} className="text-base font-semibold text-bgray-900 dark:text-white">{PaymentStatus}</p>}
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          {formatDateTo12hr(RequestDate)}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          {Autopay}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {Action}
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
