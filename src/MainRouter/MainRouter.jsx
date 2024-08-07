
import React from "react";
import { Route, Routes } from "react-router-dom";
import LiveCampaign from "../Manage/ManageCampaign/LiveCampaign/LiveCampaign";
import PastCampaign from "../Manage/ManageCampaign/LiveCampaign/LiveCampaign";
import DraftCampaign from "../Manage/ManageCampaign/DraftCampaign/DraftCampaign";
import AddCampaign from "../Manage/ManageCampaign/AddCampaign/AddCampaign";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" 
        element={
          <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
          {" "}
             Dashboard
        </div>
        } 
        />

        <Route
          path="/discoverInfluencers"
            element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              discoverInfluencers
            </div>
          }
        />
        <Route
          path="/manageCampaign"
          element={
            <LiveCampaign/>
          }
        />
       
        <Route
          path="/payments"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Payments
            </div>
          }
        />
          <Route
          path="/profile"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              profile
            </div>
          }
        />
         <Route
          path="/messages"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              messages
            </div>
          }
        />
      
        <Route
          path="/Analytics"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Analytics
            </div>
          }
        />
        <Route
          path="/ratingAndFeedback"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              RatingFeedback
            </div>
          }
        />
      
        
       
        <Route
          path="/PastCampaign"
          element={<PastCampaign/>}
        />
         <Route
          path="/DraftCampaign"
          element={<DraftCampaign/> }
        />

        <Route
          path="/AddCampaign"
          element={<AddCampaign/> }
        />
          
         {/*  
        <Route
          path="/ActiveCampaign"
          element={<ActiveCampaign/>}
        />
        
        <Route
          path="/musicList"
          element={<MusicList/>}
        />
         <Route
          path="/ratingAndFeedback"
          element={<FeedbackComponent/>}
        />

<Route
          path="/Calendar"
          element={<CalendarEvents/>}
        />
         */}


      </Routes>
      
    </>
  );
};

export default MainRouter;
