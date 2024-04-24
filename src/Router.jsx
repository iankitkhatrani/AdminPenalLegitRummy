import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import HomeTwo from "./pages/homeTwo";
import Statistics from "./pages/statistics";
import Analytics from "./pages/analytics";
import Transaction from "./pages/transaction";
import MyWallet from "./pages/myWallet";
import Inbox from "./pages/inbox";
import Integrations from "./pages/integrations";
import Users from "./pages/users";
import Calender from "./pages/calender";
import History from "./pages/history";
import Support from "./pages/supportTicket";
import Settings from "./pages/settings";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import ComingSoon from "./pages/commingSoon";
import Error from "./pages/error";
import Layout from "./component/layout";
import PersonalInfo from "./pages/settings/personal-info";
import Notification from "./pages/settings/notifaction";
import ProgramAndResources from "./pages/settings/program&resourses";
import Payment from "./pages/settings/payment";
import Faq from "./pages/settings/faq";
import Security from "./pages/settings/security";
import TermsAndCondition from "./pages/settings/terms&condition";
import HomeFive from "./pages/homeFive";


import Dashboard from "./pages/dashboard";
import GameHistory from "./pages/GameHistory";
import GameLogic from "./pages/gameLogic";
import BotList from "./pages/Bot";
import BotUpdate from "./pages/BotUpdate";
import Deposit from "./pages/Deposit";
import PayoutPendding from './pages/Payoutpendding'
import SocialURL from './pages/SocialURL'
import NoitceText from './pages/NoticeText'
import NotificationList from './pages/Notification'
import BannerList from './pages/Banner'
import Botadd from './pages/Botadd'
import PlayerAdd from './pages/Playeradd'
import Mail from './pages/Mail'
import Playeredit from './pages/PlayerUpdate'
import CoinManagement from './pages/CoinManagement'
import TableEntry from './pages/TableEntry'
import TableEntryAdd from './pages/TableEntryAdd'
import TableEntryAddPool from './pages/TableEntryAddPool'
import TableEntryAddPoint from './pages/TableEntryAddPoint'
import TableEntryEdit from './pages/TableEntryEdit'
import Chnagepwd from './pages/Chnagepwd'
import KycManagement from './pages/KycManagement'
import KycUpdateinfo from "./component/KycUpdate";
import Bankmanagement from './pages/BankDeatils'
import StateManagment from './pages/StateManagment'
import PaymentInManagement from './pages/paymentin'
import PaymentOutManagement from './pages/paymentout'
import TranscationPage from './pages/TranscationPage'
import PaymentConfig from './pages/paymentconfig'
import BotConfig from './pages/botconfig'
import BankUpdate from "./pages/BankUpdate";
import ReferralManagement from "./pages/ReferralManagement";
import ReferralUserManagement from "./pages/ReferralUserManagement";
import KycProfileUpdate from "./pages/KycProfileUpdate";
import AppMaintenance from "./pages/appMaintenance";
import MatchMaking from "./pages/matchMaking";





const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/matchmaking",
        element: <MatchMaking />,
      },
      {
        path: "/appmaintenance",
        element: <AppMaintenance />,
      },
      {
        path: "/kycprofileupdate",
        element: <KycProfileUpdate />,
      },
      {
        path: "/ReferralUserManagement",
        element: <ReferralUserManagement />,
      },
      {
        path: "/referralmanagement",
        element: <ReferralManagement />,
      },
      {
        path: "/bankUpdate",
        element: <BankUpdate />,
      },
      {
        path: "/botconfiguration",
        element: <BotConfig />,
      }, 
      {
        path: "/paymentConfig",
        element: <PaymentConfig />,
      },
      {
        path: "/transcationPage",
        element: <TranscationPage />,
      },
      {
        path: "/kycupdateinfo",
        element: <KycUpdateinfo />,
      },
      {
        path: "/paymentout",
        element: <PaymentOutManagement />,
      },
      {
        path: "/paymentin",
        element: <PaymentInManagement />,
      },
      {
        path: "/statemanagement",
        element: <StateManagment />,
      },
      {
        path: "/bankmanagement",
        element: <Bankmanagement />,
      },
      {
        path: "/kycmanagement",
        element: <KycManagement />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/home-3",
        element: <Statistics />,
      },
      {
        path: "/home-4",
        element: <Analytics />,
      },
      
      {
        path: "/gamehistory",
        element: <GameHistory />,
      },
      {
        path: "/gamelogic",
        element: <GameLogic />,
      },
      {
        path: "/botList",
        element: <BotList />,
      },
      {
        path: "/botUpdate",
        element: <BotUpdate />,
      },
      {
        path: "/botAddinfo",
        element: <Botadd />,
      },
      {
        path: "/transaction",
        element: <Transaction />,
      },
      {
        path: "/playeradd",
        element: <PlayerAdd />,
      },
      {
        path: "/playeredit",
        element: <Playeredit />,
      },
      {
        path: "/depositList",
        element: <Deposit />,
      },
      {
        path: "/payoutpendding",
        element: <PayoutPendding />,
      },
      {
        path: "/coinmanagement",
        element: <CoinManagement />,
      },
      {
        path: "/tableentry",
        element: <TableEntry />,
      },
      {
        path: "/tableentryadd",
        element: <TableEntryAdd />,
      },
      {
        path: "/pooltableentryadd",
        element: <TableEntryAddPool />,
      },
      {
        path: "/pointtableentryadd",
        element: <TableEntryAddPoint />,
      },
      {
        path: "/tableentryedit",
        element: <TableEntryEdit />,
      },
      {
        path: "/socialurl",
        element: <SocialURL />,
      },
      {
        path: "/noticetext",
        element: <NoitceText />,
      },
      {
        path: "/mail",
        element: <Mail />,
      },
      {
        path: "/notificationlist",
        element: <NotificationList />,
      },
      {
        path: "/bannerlist",
        element: <BannerList />,
      },
      {
        path: "/security",
        element: <Chnagepwd />,
      },
      {
        path: "/settings",
        Component: Settings,
        children: [
          {
            index: true,
            element: <PersonalInfo />,
          },
          {
            path: "notification",
            element: <Notification />,
          },
          {
            path: "program&resources",
            element: <ProgramAndResources />,
          },
          {
            path: "payment",
            element: <Payment />,
          },
          {
            path: "faq",
            element: <Faq />,
          },
          {
            path: "security",
            element: <Security />,
          },
          {
            path: "terms&conditions",
            element: <TermsAndCondition />,
          },
        ],
      },
      {
        path: "/my-wallet",
        element: <MyWallet />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/support-ticket",
        element: <Support />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/coming-soon",
    element: <ComingSoon />,
  },
  {
    path: "/home-5",
    element: <HomeFive />,
  },
  {
    path: "/404",
    element: <Error />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
