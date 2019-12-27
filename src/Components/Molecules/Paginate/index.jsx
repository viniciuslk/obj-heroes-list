import React from "react";
import { func, bool, number } from "prop-types";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { theme } from "styled-tools";

import { ObjArrowLeft, ObjArrowRight } from "./Arrows";
import { useWindowSize } from "../../../Hooks";

const StdPaginate = styled("div")`
  text-align: center;
  margin: ${theme("space.9")} 0;

  * {
    outline: none;
  }

  .obj-paginate {
    &__container {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;

      & li {
        display: inline-block;
        align-items: center;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    &__break {
      cursor: pointer;
      color: ${theme("colors.primary")};
    }

    &__item {
      margin: 0 ${theme("space.sm")};
      border: 1px solid ${theme("colors.primary")};
      font-size: ${theme("fontSizes.md")};
      color: ${theme("colors.primary")};
      min-width: 32px;
      padding: 5.5px 0;
      border-radius: ${theme("radii.base")};
      cursor: pointer;

      a {
        padding: ${theme("space.xxs")};
      }

      &--active {
        color: white;
        background: ${theme("colors.primary")};
      }
    }
  }
`;

const ObjPaginate = ({ onPageChange, pageCount, isFirstPage, isLastPage }) => {
  const { width } = useWindowSize();

  return (
    <StdPaginate>
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={width > 992 ? 2 : 2}
        marginPagesDisplayed={width > 992 ? 1 : 0}
        previousLabel={<ObjArrowLeft opaque={isFirstPage} />}
        nextLabel={<ObjArrowRight opaque={isLastPage} />}
        breakClassName="obj-paginate__break"
        onPageChange={onPageChange}
        nextClassName="obj-paginate__next"
        containerClassName="obj-paginate__container"
        pageClassName="obj-paginate__item"
        activeClassName="obj-paginate__item--active"
      />
    </StdPaginate>
  );
};

ObjPaginate.propTypes = {
  onPageChange: func,
  pageCount: number,
  isFirstPage: bool,
  isLastPage: bool
};

export default ObjPaginate;
