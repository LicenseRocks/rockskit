import React from "react";

import { StoryWrapper } from "../../.storybook/decorators";
import { FilesList } from "./"

export default {
  title: "FilesList",
  component: FilesList,
  decorators: [StoryWrapper],
};

const files = [
  {
    "payload": {
      "cover": [
        {
          "id": 10,
          "key": "0x17c82dd67d70a51ea7b01a74a3e4627713160253/nftFiles/3/cover/babyyodawallpaperwhatspaper7.jpeg",
          "type": "cover",
          "nftId": 3,
          "public": true,
          "altName": null,
          "preview": "https://creatorshub.s3.eu-central-1.amazonaws.com/0x17c82dd67d70a51ea7b01a74a3e4627713160253/nftFiles/3/cover/babyyodawallpaperwhatspaper7.jpeg",
          "checksum": null,
          "fileName": "babyyodawallpaperwhatspaper7.jpeg",
          "fileType": "image/png",
          "createdAt": "2022-06-20T10:17:57.958Z",
          "creatorId": 4,
          "publicUrl": "https://creatorshub.s3.eu-central-1.amazonaws.com/0x17c82dd67d70a51ea7b01a74a3e4627713160253/nftFiles/3/cover/babyyodawallpaperwhatspaper7.jpeg",
          "updatedAt": "2022-06-20T10:17:57.957Z",
          "storageType": "AWS",
          "downloadable": false
        }
      ],
      "owner": "true",
      "price": "123",
      "terms": "true",
      "title": "Grogu",
      "amount": "10000",
      "status": "released",
      "currency": "eur",
      "useCaseId": 2,
      "amountType": "limited",
      "licenseType": "private",
      "nftToUpgrade": null,
      "secretPhrase": "",
      "storageOption": "AWS",
      "assetSameAsCover": true,
      "private": false
    }
  },
  {
    "payload": {
      "cover": [
        {
          "id": 10,
          "key": "0x17c82dd67d70a51ea7b01a74a3e4627713160253/nftFiles/3/cover/babyyodawallpaperwhatspaper7.jpeg",
          "type": "cover",
          "nftId": 3,
          "public": true,
          "altName": null,
          "preview": "https://creatorshub.s3.eu-central-1.amazonaws.com/0x17c82dd67d70a51ea7b01a74a3e4627713160253/nftFiles/3/cover/babyyodawallpaperwhatspaper7.jpeg",
          "checksum": null,
          "fileName": "babyyodawallpaperwhatspaper7.jpeg",
          "fileType": "image/png",
          "createdAt": "2022-06-20T10:17:57.958Z",
          "creatorId": 4,
          "publicUrl": "https://creatorshub.s3.eu-central-1.amazonaws.com/0x17c82dd67d70a51ea7b01a74a3e4627713160253/nftFiles/3/cover/babyyodawallpaperwhatspaper7.jpeg",
          "updatedAt": "2022-06-20T10:17:57.957Z",
          "storageType": "AWS",
          "downloadable": false
        }
      ],
      "owner": "true",
      "price": "123",
      "terms": "true",
      "title": "Grogu",
      "amount": "10000",
      "status": "released",
      "currency": "eur",
      "useCaseId": 2,
      "amountType": "limited",
      "licenseType": "private",
      "nftToUpgrade": null,
      "secretPhrase": "",
      "storageOption": "AWS",
      "assetSameAsCover": true,
      "private": true
    }
  },
]

const Link = ({ href, children }) => {
  return (
    <a href={href} className="link">
      {children}
    </a>
  )
};

export const main = () => {
  const defaultProps = {
    files: files,
    listTitle: "AWS",
    LinkComponent: Link
  };
  return <FilesList {...defaultProps} />;
};
