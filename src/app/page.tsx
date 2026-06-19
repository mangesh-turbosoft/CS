"use client";

import { useEffect, useState } from "react";

import Firstsec from "@/componants/Firstsec";
import Intro from "@/componants/Intro";
import CaseStudies from "@/componants/casestudies";

export default function Home() {
  // const [showPopup, setShowPopup] = useState(false);
  // useEffect(() => {
  //   setShowPopup(true);
  // }, []);

  return (
    <>
      {/* {showPopup && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-xl">
            <h2 className="text-xl font-bold">Test Popup</h2>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-4 py-2 bg-black text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )} */}

      <Firstsec />
      <Intro />
      <CaseStudies />
    </>
  );
}