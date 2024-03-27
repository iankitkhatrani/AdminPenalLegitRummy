import ProtoTypes from "prop-types";



function PlayerInfo({ createdAt,uniqueId,chips,transAmount,totalBucket,transTypeText}) {
  return (
    <tr className="hover:bg-gray-600 border-b dark:border-darkblack-400">
      
      <td className="w-[165px] px-6 py-5 xl:px-0">
       
          <p className="text-base font-semibold text-bgray-900 dark:text-white">
            {createdAt}
          </p>
       
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {uniqueId}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
        ₹{chips}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-semibold text-bgray-900 dark:text-white">
        ₹{transAmount}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
        ₹{totalBucket}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {transTypeText}
        </p>
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
