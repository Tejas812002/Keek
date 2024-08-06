import Dashboard from "../ManageCampaign/Components/Dashboard/Dashboard";
import React from "react";
import { Route, Routes } from "react-router-dom";




const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" 
        element={<Dashboard/>} 
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
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              manageCampaign
            </div>
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
        
        {/* <Route
          path="/AddCampaign"
          element={<AddCampaign/>}
        />
         <Route
          path="/budget"
          element={<Budget/>}
        />
         <Route
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
