import PlayerUpdate from "../../component/PlayerUpdate";
import UserInfoCard from "../../component/PlayerUpdate/userinfocard";
import HistoryTable from "../../component/PlayerUpdate/playerhistory";
import TransactionData from "../../component/PlayerUpdate/Transaction/playertransaction";
import DepositData from "../../component/PlayerUpdate/Deposit/playerdeposit";
import KycuserInfo from "../../component/PlayerUpdate/kycuserinfocard";
import BankuserInfo from "../../component/PlayerUpdate/Bankuserinfocard";

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


import React, { useState, useContext, useEffect } from 'react';
function playerUpdateinfo() {

    const [state, setState] = useState("home");

  return (

    <>
    <Tabs
    id="controlled-tabs"
    activeKey={state}
    onSelect={(key) => setState(key)}
  >
    <Tab eventKey="home" title="Home">
      {/* Content for Home tab */}
      <div>Home tab content goes here</div>
    </Tab>
    <Tab eventKey="profile" title="Profile">
      {/* Content for Profile tab */}
      <div>Profile tab content goes here</div>
    </Tab>
    <Tab eventKey="contact" title="Contact">
      {/* Content for Contact tab */}
      <div>Contact tab content goes here</div>
    </Tab>
  </Tabs>

    <main className="w-full xl:px-12 px-6 pb-6 xl:pb-12 sm:pt-[156px] pt-[100px]">
      {/* write your code here */}
      <div className="2xl:flex 2xl:space-x-[48px]">
      <section className="mb-6 2xl:mb-0 2xl:flex-1">

    

          <HistoryTable gameName="Rummy"/>
          <TransactionData gameName="Withdrawal"/>
          <DepositData gameName="Deposit"/>
          <DepositData gameName="Referral Bonus"/>
          <KycuserInfo/>
          <BankuserInfo/>
        </section>
        <section className="2xl:w-[400px] w-full flex flex-col lg:flex-row 2xl:space-x-0 2xl:flex-col lg:space-x-6 space-x-0">
          <UserInfoCard />
        </section>
      </div>
    </main>
    </>
  );
}

export default playerUpdateinfo;

// <section className="2xl:flex-1 w-full">
//           <Wallet />
//           <TeamChat />
//         </section>