import React from "react";
import styled from "styled-components";
import { Image } from "../Image";
import { Icon } from "../Icon";
import PropTypes from "prop-types";
import { RadioListBaseItem } from "../Form/RadioList/BaseItem";
import { TinyBadge } from "../Badge";
import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../theme";

export const FilesListBaseItem = ({ listTitle, files, LinkComponent }) => {
  return (
    <StyledStorageList>
      {listTitle && <h4>{listTitle}</h4>}
      <ul>
        {files.length === 0 && <p>Loading...</p>}
        {files?.map(({ payload }, index) => {
          const data = "5/1/2022";
          const size = "411 KB";
          if (payload.storageOption === listTitle || !listTitle) {
            return (
              <li className="single-file">
                <LinkComponent href={`/admin/fileCenter/file/${payload.cover[0].id}`}>
                  <div className="image-wrapper">
                    <Image src={payload.cover[0].publicUrl} alt={payload.title} width={48} height={48} />
                  </div>
                  <div className="data-wrapper">
                    <div className="title-and-status">
                      <span>{payload.title}</span>
                      {payload.private && <TinyBadge label="Private" ml={2} color="white" />}
                    </div>
                    <div className="metadata">
                      <span>{data}, </span>
                      <span>{size}</span>
                      {listTitle &&<span>, {listTitle}</span>}
                    </div>
                  </div>
                </LinkComponent>
                <a className="download" download title="Download" href="components/common/fileCenter/StorageList">
                  <Icon icon="arrow-down-to-bracket" prefix="far" />
                </a>
              </li>
            );
          }
        })}
      </ul>
    </StyledStorageList>
  );
};

const StyledStorageList = styled.div`
  ul {
    padding: 0;
    margin: 0 0 ${({ theme }) => theme.spacing(10)};
    list-style: none;

    li.single-file {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      margin: 0;
      background: ${({ theme }) => theme.palette.gray.semiLight};
      border-radius: 8px;

      &:not(:last-child) {
        margin-bottom: ${({ theme }) => theme.spacing(2)};
      }

      a.link {
        display: flex;
        align-items: center;
        width: 100%;
        padding: ${({ theme }) => theme.spacing(2)};
        text-decoration: none;
        color: inherit;

        .image-wrapper {
          margin-right: ${({ theme }) => theme.spacing(2)};

          img {
            border-radius: 8px;
          }
        }

        .data-wrapper {
          .title-and-status {
            display: flex;
            align-items: center;
            margin: 0;
            padding-bottom: ${({ theme }) => theme.spacing(1)};
            font-weight: bold;
          }
        }
      }

      a.download {
        display: grid;
        place-items: center;
        align-self: stretch;
        border-radius: 0 8px 8px 0;

        svg {
          color: ${({ theme }) => theme.palette.gray.black};
          margin-inline: ${({ theme }) => theme.spacing(7)};
        }
      }

      a.link, a.download {
        transition: background .3s ease-out;

        &:hover {
          background: ${({ theme }) => theme.palette.gray.regular};
        }
      }
    }
  }

  h4 {
    font-weight: 600;
  }
`;

RadioListBaseItem.propTypes = {
  listTitle: PropTypes.string,
  files: PropTypes.array,
  LinkComponent: PropTypes.func,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

RadioListBaseItem.defaultProps = {};
