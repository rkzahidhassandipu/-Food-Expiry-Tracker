import React from "react";
import useAuth from "../../Hooks/useAuth";
import BannerSlider from "../../Components/BannerSlider/BannerSlider";
import PlatformInsights from "../../Components/PlatformInsights/PlatformInsights";
import WhyUseFoodExpiry from "../../Components/FoodExpiry/FoodExpiry";
import QuickTips from "../../Components/QuickTips/QuickTips";
import ExpiringSoon from "../../Components/ExpiringSoon/ExpiringSoon";
import ExpiredItems from "../../Components/ExpiredItems/ExpiredItems";
import { Helmet } from "react-helmet";

const Home = () => {
  const info = useAuth();
  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Food Expiry</title>
      </Helmet>
      <div className="w-4/5 mx-auto">
        <BannerSlider />
      </div>
      <div className="bg-white dark:bg-gray-900/30">
        <PlatformInsights />
      </div>

      <div className="w-4/5 mx-auto">
        <ExpiringSoon />
        <ExpiredItems />
        <WhyUseFoodExpiry />
        <QuickTips />
      </div>
    </div>
  );
};

export default Home;
