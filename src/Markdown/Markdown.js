import React from "react";
import styled, { css, useTheme } from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // ES6

import { MarkdownPropTypes, MarkdownDefaultProps } from "./props";

const Container = styled.div`
  .ql-container {
    min-height: 150px;
  }
`;

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "video"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
];

export const Markdown = ({ value, onChange, ...props }) => {
  const defaultProps = {
    ...props,
  };

  return (
    <Container>
      <ReactQuill
        defaultValue={value}
        modules={modules}
        formats={formats}
        onChange={onChange}
        theme="snow"
      />
    </Container>
  );
};

Markdown.propTypes = MarkdownPropTypes;

Markdown.defaultProps = MarkdownDefaultProps;
