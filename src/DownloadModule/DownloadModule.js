import React from "react";
import styled from "styled-components";
import QRCode from "qrcode.react";

import {
  DownloadModuleButton,
  DownloadModulePropTypes,
  DownloadModuleDefaultProps,
} from ".";
import { Flex, Text, TextButton } from "..";
import { DISPLAY, SPACER } from "../theme";

const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.gray.semiLight};
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: 16px;
  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

export const DownloadModule = ({
  downloadPdfText,
  downloadPdfUrl,
  downloadQrCodeDesc,
  downloadQrCodeText,
  downloadQrCodeUrl,
  qrCodeUrl,
  qrCodeValue,
  ...props
}) => {
  return (
    <Container {...props}>
      <Flex container mb={8}>
        <DownloadModuleButton icon="file-pdf" />
        <TextButton content={downloadPdfText} href={downloadPdfUrl} size="sm" />
      </Flex>

      <Flex container wrap="nowrap">
        <QRCode includeMargin size={76} value={qrCodeValue} />
        <Flex item>
          <Text content={downloadQrCodeDesc} ml={2} />
          <TextButton
            content={downloadQrCodeText}
            href={downloadQrCodeUrl}
            ml={1}
            size="sm"
          />
        </Flex>
      </Flex>
    </Container>
  );
};

DownloadModule.propTypes = DownloadModulePropTypes;

DownloadModule.defaultProps = DownloadModuleDefaultProps;
