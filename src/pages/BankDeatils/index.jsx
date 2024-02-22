import BankManagment from "../../component/BankDetails";
import TeamChat from "../../component/teamChat";
import Wallet from "../../component/wallet";

function bankmanagement() {
  return (
    <main className="w-full xl:px-12 px-6 pb-6 xl:pb-12 sm:pt-[156px] pt-[100px]">
      {/* write your code here */}
      <div className="2xl:flex 2xl:space-x-[48px]">
        <section className="2xl:w-100 w-full 2xl:mb-0 mb-6">
          <BankManagment pageSize={9} />
        </section>
      </div>
    </main>
  );
}

export default bankmanagement;

// <section className="2xl:flex-1 w-full">
//           <Wallet />
//           <TeamChat />
//         </section>