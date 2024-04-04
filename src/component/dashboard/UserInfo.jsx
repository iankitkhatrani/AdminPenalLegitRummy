import ProtoTypes from "prop-types";

function CustomerInfo({ UserName, RegistrationDate}) {

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
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {UserName}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {formatDateTo12hr(RegistrationDate)}
        </p>
      </td>
    </tr>
  );
}

CustomerInfo.propTypes = {
  name: ProtoTypes.string,
  RegistrationDate: ProtoTypes.string,
};

export default CustomerInfo;
