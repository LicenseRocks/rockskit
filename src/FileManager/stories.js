import React from "react";

import { StoryWrapper } from "../../.storybook/decorators";
import { FileManager } from ".";

export default {
  title: "FileManager",
  decorators: [StoryWrapper],
};

export const main = () => {
  const defaultProps = {
    data: [
      {
        label: "Proof documents",
        files: [
          {
            id: 1,
            name: "license_273.pdf",
            date: "01/03/2020",
            description: "Certificate with QR Code",
            previewUrl: "https://via.placeholder.com/500",
          },
        ],
      },
      {
        label: "Contracts",
        files: [
          {
            id: 2,
            name: "license_273.pdf",
            date: "01/03/2020",
            description: "Certificate with QR Code",
          },
          {
            id: 3,
            name: "denys-nevozhai-6OAWj_ZvSxx-unsplash.jpg",
            date: "01/03/2019",
            description: "Enterprise contract",
          },
        ],
      },
      {
        label: "Transfer Documents",
        files: [],
      },
    ],
  };

  return <FileManager {...defaultProps} />;
};
