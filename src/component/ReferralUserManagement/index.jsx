import { useNavigate, useLocation } from 'react-router-dom';

import ProtoTypes from "prop-types";
import Pagination from "../Pagination";

import Search from "../forms/Search";
import PlayerTab from "./PlayerTab";
function ReferralManagement({ pageSize }) {


  const location = useLocation();
  //console.log("location ", location.state)
  const KycInfo = location.state;

  
  console.log("KycInfo ", KycInfo)
  return (
    <div className="w-full rounded-lg bg-white px-[24px] py-[20px] dark:bg-darkblack-600">
      <div className="flex flex-col space-y-5">
      <h3 className="text-2xl font-bold pb-5 text-bgray-900 dark:text-white dark:border-darkblack-400 border-b border-bgray-200">
        Referral User Management
      </h3>

        <PlayerTab pageSize={pageSize} userId={KycInfo.UserId} />
      </div>
    </div>
  );
}

ReferralManagement.propTypes = {
  pageSize: ProtoTypes.number,
};

export default ReferralManagement;
