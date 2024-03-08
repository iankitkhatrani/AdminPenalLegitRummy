import React, { useState, useContext, useEffect } from 'react';
import ProtoTypes from "prop-types";
import CustomerInfo from "./PlayerInfo";
import offerContext from '../../context/offerContext';
import { useNavigate } from 'react-router-dom';

function PlayerTab({ status }) {
  //-------------------------------------------------------------------------------------------------------
  const [active, setActive] = useState(false);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  console.log("status ", status)

  const Dropdown = (item) => {
    setPageSize(item)
    setActive(!active)
  }
  //------------------------------------------------------------------------------------------------------------
  const navigate = useNavigate();
  const navigateToUserRegister = () => {
    navigate('/kycmanagement');
  };

  let [userData, setUserData] = useState([]);
  const context = useContext(offerContext)
  const { KYCPageList } = context

  useEffect(() => {
    const submitdata = async () => {
      setUserData(await KYCPageList(status))
    }
    submitdata()
  }, [status]);

  //--------------------------- Paggeation and No Of Pages ------------------------------------
  // Filter the user data based on date range and search term
  const filteredUsers = userData.filter((user) => {

    const registrationDate = new Date(user.createdAt);
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;

    return (
      (!from || registrationDate >= from) &&
      (!to || registrationDate <= to) &&
      (searchTerm === '' ||
        user.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.verified.includes(searchTerm.toLowerCase()) ||
        // user.Pancardverified.includes(searchTerm.toLowerCase()) ||
        // user.Pancard.includes(searchTerm.toLowerCase()) ||
        user.adharcard.includes(searchTerm))
    );
  });

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Filter the user data for the current page
  const usersOnCurrentPage = filteredUsers.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredUsers.length / pageSize);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const resetDate = () => {
    setFromDate("")
    setToDate("")
  }
  //-----------------------------------------------------------------------------------------------

  const handleFromDateChange = (event) => {
    const selectedDate = event.target.value;
    const currentDate = new Date().toISOString().split('T')[0];
    if (selectedDate > currentDate) {
      alert('From date cannot be beyond current date');
    } else if (selectedDate && toDate && new Date(selectedDate) >= new Date(toDate)) {
      alert('From date must be earlier than To date');
    } else {

      setFromDate(selectedDate);


    }
  };

  const handleToDateChange = (event) => {
    const selectedDate = event.target.value;
    const currentDate = new Date().toISOString().split('T')[0];
    if (selectedDate > currentDate) {
      alert('To date cannot be beyond current date');
    } else if (fromDate && selectedDate && new Date(fromDate) >= new Date(selectedDate)) {
      alert('To date must be later than From date');
    } else {
      setToDate(selectedDate);
    }
  };


  const handleSort = (key) => {
    const direction = sortDirection === 'asc' ? 'desc' : 'asc';
    const sorted = [...userData].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    setUserData(sorted);
    setSortDirection(direction);
  };

  return (
    <>
      <div className="flex h-[56px] w-full space-x-4">
        <div className="hidden h-full rounded-lg border border-transparent bg-bgray-100 px-[18px] focus-within:border-success-300 dark:bg-darkblack-500 sm:block sm:w-70 lg:w-88">
          <div className="flex h-full w-full items-center space-x-[15px]">
            <span>
              <svg
                className="stroke-bgray-900 dark:stroke-white"
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="9.80204"
                  cy="10.6761"
                  r="8.98856"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.0537 17.3945L19.5777 20.9094"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <label htmlFor="listSearch" className="w-full">
              <input
                type="text"
                id="listSearch"
                placeholder="Search by User Id, Aadhar ,Status , or others..."
                className="search-input w-full border-none bg-bgray-100 px-0 text-sm tracking-wide text-bgray-600 placeholder:text-sm placeholder:font-medium placeholder:text-bgray-500 focus:outline-none focus:ring-0 dark:bg-darkblack-500"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="filter-content w-full">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">

          <input
            type="date"
            placeholder="From Date"
            value={fromDate}
            onChange={handleFromDateChange}
          />
          <input
            type="date"
            placeholder="To Date"
            value={toDate}
            onChange={handleToDateChange}
            style={{ marginLeft: "1rem" }}
          />
          <button aria-label="none"
            className="bg-success-300 dark:bg-success-300 dark:text-bgray-900 border-2 border-transparent text-white rounded-lg px-4 py-3 font-semibold text-sm" onClick={resetDate}>Reset</button>

         
        </div>
      </div>
      <div className="table-content w-full overflow-x-auto">
        <table className="table-fixed hover:border-collapse text-center w-full">
          <tbody>
            <tr className="border-b border-bgray-300 dark:border-darkblack-400">
              <td className="w-[190px] px-6 py-5 xl:px-0" onClick={() => handleSort('userId')}>
                <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                User Id
                </span>
              </td>
              <td className="w-[165px] px-6 py-5 xl:px-0" onClick={() => handleSort('userId')}>
                <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                User Name
                </span>
              </td>
              <td className="w-[150px] px-6 py-5 xl:px-0" onClick={() => handleSort('adharcard')}>
                <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                  Aadhaar Card ⬆⬇
                </span>
              </td>
              <td className="w-[150px] px-6 py-5 xl:px-0">
                <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                  DOB ⬆⬇
                </span>
              </td>
              <td className="w-[165px] px-6 py-5 xl:px-0" onClick={() => handleSort('createdAt')}>
                <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                  Created Date ⬆⬇
                </span>
              </td>
              <td className="w-[150px] px-6 py-5 xl:px-0" onClick={() => handleSort('verified')}>
                <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                  Aadhaar Status ⬆⬇
                </span>

              </td>
              <td className="w-[165px] px-6 py-5 xl:px-0" onClick={() => handleSort('Pancard')}>
                <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                  Pan Card ⬆⬇
                </span>
              </td>
              <td className="w-[150px] px-6 py-5 xl:px-0" onClick={() => handleSort('Pancardverified')}>
                <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                  Pancard Status ⬆⬇
                </span>
              </td>
              <td className="w-[165px] px-6 py-5 xl:px-0">
                <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                  Admin Remark
                </span>
              </td>
              <td className="w-[165px] px-6 py-5 xl:px-0">
                <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                  Remark Date
                </span>
              </td>
             
              
            </tr>
            {usersOnCurrentPage?.map((user, index) =>
              pageSize
                ? index + 1 <= pageSize && (
                  <CustomerInfo
                    key={user._id}
                    UserId={user.userId}
                    userName={user.userName}
                    adharcard={user.adharcard}
                    createdAt={user.createdAt}
                    verified={user.verified == "" || user.verified == false ? "UnVerified" : "Verified"}
                    Pancard={user.pancard}
                    Pancardverified={user.pancardverified == undefined || user.pancardverified == "" || user.pancardverified == false ? "UnVerified" : "Verified"}
                    adminremark={user.adminremark}
                    adminremarkcd={user.adminremarkcd}
                    dob={user.userInfo != undefined && user.userInfo.user_dob != undefined ? user.userInfo.user_dob : "-"}

                  />
                )
                : index < 3 && (
                  <CustomerInfo
                    key={user._id}
                    userName={user.userName}
                    UserId={user.userId}
                    adharcard={user.adharcard}
                    createdAt={user.createdAt}
                    verified={user.verified == "" || user.verified == false ? "UnVerified" : "Verified"}
                    Pancard={user.pancard}
                    Pancardverified={user.pancardverified == undefined || user.pancardverified == "" || user.pancardverified == false ? "UnVerified" : "Verified"}
                    adminremark={user.adminremark}
                    adminremarkcd={user.adminremarkcd}
                    dob={user.userInfo != undefined && user.userInfo.user_dob != undefined ? user.userInfo.user_dob : "-"}
                  />
                )
            )}
          </tbody>
        </table>
      </div>
      <div className="pagination-content w-full">
        <div className="flex w-full items-center justify-center lg:justify-between">
          <div className="hidden items-center space-x-4 lg:flex">
            <span className="text-sm font-semibold text-bgray-600 dark:text-bgray-50">
              Show result:
            </span>
            <div className="relative">
              <button
                aria-label="none"
                onClick={() => setActive(!active)}
                type="button"
                className="flex items-center space-x-6 rounded-lg border border-bgray-300 px-2.5 py-[14px] dark:border-darkblack-400"
              >
                <span className="text-sm font-semibold text-bgray-900 dark:text-bgray-50">
                  {pageSize}
                </span>
                <span>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.03516 6.03271L8.03516 10.0327L12.0352 6.03271"
                      stroke="#A0AEC0"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              <div
                id="result-filter"
                style={{ display: active ? "block" : "none" }}
                className="absolute right-0 top-14 z-10 hidden w-full overflow-hidden rounded-lg bg-white shadow-lg"
              >
                <ul>
                  {[5, 10, 20, 25, 50].map((item) => (
                    <li
                      key={item}
                      onClick={() => Dropdown(item)}
                      className="text-bgray-90 cursor-pointer px-5 py-2 text-sm font-medium hover:bg-bgray-100"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-5 sm:space-x-[35px]">
            <button aria-label="none" type="button" onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="text-sm font-semibold text-bgray-600 dark:text-bgray-50"
            >
              Previous
              <span>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7217 5.03271L7.72168 10.0327L12.7217 15.0327"
                    stroke="#A0AEC0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            <button aria-label="none" type="button" onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="text-sm font-semibold text-bgray-600 dark:text-bgray-50"
            >
              Next
              <span>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.72168 5.03271L12.7217 10.0327L7.72168 15.0327"
                    stroke="#A0AEC0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

PlayerTab.propTypes = {
  pageSize: ProtoTypes.number,
};

export default PlayerTab;
