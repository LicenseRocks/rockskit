import React from "react";

// UI
import { Profile } from ".";

export default {
  title: "Profile",
};

export const main = () => {
  const defaultProps = {
    coverSrc: "https://source.unsplash.com/featured/?human",
    description:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains were placed within this chamber during the Neolithic period, representing at least nine or ten individuals.",
    location: "Berlin, Germany",
    name: "Majid Amiri",
    shareOnClick: () => console.log("==== clicked ===="),
    socialLinks: [
      {
        icon: "twitter",
        url: "#",
      },
      {
        icon: "link",
        iconPrefix: "fas",
        url: "#",
      },
    ],
  };

  return <Profile {...defaultProps} />;
};
