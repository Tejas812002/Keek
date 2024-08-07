
import React from "react";
import { Route, Routes } from "react-router-dom";
import LiveCampaign from "../ManageCampaign/LiveCampaign/LiveCampaign";
import PastCampaign from "../ManageCampaign/PastCampaign/PastCampaign";
import DraftCampaign from "../ManageCampaign/DraftCampaign/DraftCampaign";




const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" 
        element={
          <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
          {" "}
             Di
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
          path="/viewFavourites"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              viewFavourites
            </div>
          }
        />
         <Route
          path="/viewProfile"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              viewProfile
            </div>
          }
        />
      
        <Route
          path="/influencersBase"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              influencersBase
            </div>
          }
        />
        <Route
          path="/settings"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Settings
            </div>
          }
        />
        <Route
          path="/liveSupport"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Live Support
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
         {/* <Route
          path="/CampaignSummary"
          element={<CampaignSummary/>}
        />
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
