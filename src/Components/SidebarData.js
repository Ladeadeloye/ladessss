import React from 'react';
// import HomeIcon from '@mui/icons-material/Home';
// import FeedIcon from '@mui/icons-material/Feed';
// import GroupIcon from '@mui/icons-material/Group';
// import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import billpayments from "../Components/images/billpayments.jpg";
import chatbox from "../Components/images/chatbox.jpg";
import feeds from "../Components/images/feeds.jpg";
import groups from "../Components/images/groups.jpg";
import home from "../Components/images/home.jpg";
import wallet from "../Components/images/wallet.jpg";
import profile from "../Components/images/profile.jpg";


export const SidebarData = [
    {
        title:"Home",
        icon:<img src={home} alt="home"/>,
        link:"/home"
    },
    {
        title:"Feeds",
        icon:<img src={feeds} alt="feeds"/>,
        link:"/feeds"
    },
    {
        title:"Groups",
        icon:<img src={groups} alt="groups"/>,
        link:"/groups"
    },
    {
        title:"ChatBox",
        icon:<img src={chatbox} alt="chatbox"/>,
        link:"/chatbox"
    },
    {
        title:"Bills Payment",
        icon:<img src={billpayments} alt="billpayments"/>,
        link:"/bills-payment"
    },
    {
        title:"Wallet",
        icon:<img src={wallet} alt="wallet"/>,
        link:"/wallet"
    },
    {
        title:"Profile",
        icon:<img src={profile} alt="profile"/>,
        link:"/profile"
    }
]
