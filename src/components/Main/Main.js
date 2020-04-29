import React from "react";
import { useLocation } from "react-router-dom";
// import styled from "styled-components";
import LearnedItem from "./LearnedItem/LearnedItem";
import Form from "./Form/Form";
// import { Back } from "@styled-icons/entypo/Back";

const Main = () => {
  const userId = useLocation().pathname.replace("/", "");

  return (
    <>
      {/* <Link to="/">
        <StyledBack />
      </Link> */}
      <Form userId={userId} />
      <LearnedItem userId={userId} />
    </>
  );
};

export default Main;

// const StyledBack = styled(Back)`
//   width: 50px;
//   height: 80px;
//   color: #5d02ff;
//   opacity: 0.6;
//   position: absolute;
//   top: 50px;
//   right: 50px;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   &:hover {
//     transform: scale(1.3, 1.3);
//   }
// `;
