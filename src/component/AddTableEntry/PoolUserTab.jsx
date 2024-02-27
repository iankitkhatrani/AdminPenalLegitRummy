import ProtoTypes from "prop-types";
import CustomerInfo from "./PoolUserInfo";
import users from "../../data/user";
import offerContext from '../../context/offerContext'
import React, { useContext, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';


function UserTab({ gameType }) {
  const context = useContext(offerContext)

  //=-----------------------------------------------------------
  const [active, setActive] = useState(false);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  const Dropdown = (item) => {
    setPageSize(item)
    setActive(!active)
  }
  //===========================================================



  const { GetDealBetList } = context
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const submitdata = async () => {
      console.log("gameType ", gameType)

      setNotices(await GetDealBetList(gameType))
    }
    submitdata()
  }, []);

  const navigate = useNavigate();
  const navigateToUserRegister = () => {
    navigate('/pooltableentryadd');
  };
  console.log("notices pool ", notices)


  //--------------------------- Paggeation and No Of Pages ------------------------------------
  // Filter the user data based on date range and search term
  const filteredUsers = notices.filter((user) => {

    return (
      (searchTerm === '' ||
        user.entryFee.toString().includes(searchTerm) ||
        user.maxSeat.toString().includes(searchTerm)|| 
        user.tableName.toString().includes(searchTerm))
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

  
  const handleSort = (key) => {
    const direction = sortDirection === 'asc' ? 'desc' : 'asc';
    const sorted = [...notices].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    setNotices(sorted);
    setSortDirection(direction);
  };

  return (
    <>
      <div className="filter-content w-full">
        <label htmlFor="listSearch" className="w-full">
          <input
            type="text"
            id="listSearch"
            placeholder="Search by Entry Fee,Table Name maxSeat...."
            className="search-input w-full border-none bg-bgray-100 px-0 text-sm tracking-wide text-bgray-600 placeholder:text-sm placeholder:font-medium placeholder:text-bgray-500 focus:outline-none focus:ring-0 dark:bg-darkblack-500"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">


          <button aria-label="none"
            className="bg-success-300 dark:bg-success-300 dark:text-bgray-900 border-2 border-transparent text-white rounded-lg px-4 py-3 font-semibold text-sm" onClick={navigateToUserRegister} >Add Pool Table Entry</button>

        </div>
      </div>

      <div className="table-content w-full overflow-x-auto">
        <table className="table-fixed hover:border-collapse text-center w-full">
          <tbody>
            <tr className="border-b border-bgray-300 dark:border-darkblack-400">

              <td className="w-[165px] px-6 py-5 xl:px-0" onClick={() => handleSort('gamePlayType')}>
                
                  <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                    Game Play Type⬆⬇
                  </span>
                 
              </td>
              <td className="w-[165px] px-6 py-5 xl:px-0" onClick={() => handleSort('type')}>
                <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                    Type⬆⬇
                  </span>
              </td>
              <td className="w-[165px] px-6 py-5 xl:px-0" onClick={() => handleSort('tableName')}>
                
                  <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                    Table Name⬆⬇
                  </span>
              </td>
              <td className="w-[165px] px-6 py-5 xl:px-0" onClick={() => handleSort('entryFee')}>
               
                  <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                    Entry Fee⬆⬇
                  </span>
              </td>
              <td className="w-[165px] px-6 py-5 xl:px-0" onClick={() => handleSort('maxSeat')}>
               
                  <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                    Max Seat⬆⬇
                  </span>
              </td>
              <td className="w-[165px] px-6 py-5 xl:px-0" onClick={() => handleSort('commission')}>
               
                  <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                    Commission⬆⬇
                  </span>
              </td>
              <td className="w-[165px] px-6 py-5 xl:px-0" onClick={() => handleSort('status')}>
               
                  <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                    Status⬆⬇
                  </span>
              </td>
              <td className="w-[165px] px-6 py-5 xl:px-0">
                  <span className="text-base font-medium text-bgray-600 dark:text-black-50">
                    Action⬆⬇
                  </span>
              </td>
            </tr>
            {usersOnCurrentPage?.map((user, index) =>
              pageSize
                ? index + 1 <= pageSize && (
                  <CustomerInfo
                    key={user._id}
                    gamePlayType={user.gamePlayType}
                    type={user.type}
                    tableName={user.tableName}
                    entryFee={user.entryFee}
                    maxSeat={user.maxSeat}
                    status={user.status}
                    commission={user.commission}
                    id={user._id}
                  />
                )
                : index < 3 && (
                  <CustomerInfo
                    key={user._id}
                    gamePlayType={user.gamePlayType}
                    type={user.type}
                    tableName={user.tableName}
                    entryFee={user.entryFee}
                    maxSeat={user.maxSeat}
                    status={user.status}
                    commission={user.commission}
                    id={user._id}

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

UserTab.propTypes = {
  pageSize: ProtoTypes.number,
};

export default UserTab;
