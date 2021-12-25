import styled from "styled-components";

export const Container = styled.div` 
   width:90%;
   background-color: #35A751;
   max-width:500px;
   padding: 10px;
   color: white;
   div{
    display: flex;
    justify-content:space-between;
    align-items:center;
   }
   .value{
      margin-top:20px;
   }
   .value:hover{
      color: black;
   }
   margin: 10px;
   span{
      width: 100%;
   }
`;

export const Div = styled.div`
   display: flex;
   justify-content:center;
   width: 100%;
`;


