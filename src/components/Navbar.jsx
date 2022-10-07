import { SearchOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f6f6f7;
  position: fixed;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  justify-content: space-between;
`;

const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #dfdfdf;
  flex-direction: row;
  border-radius: 5px;
  align-items: center;
  padding: 5px;
`;

const Search = styled.input`
  border: none;
  background-color: transparent;
  font-size: 16px;
`;

const Title = styled.div`
  display: flex;
  font-size: 28px;
  font-family: "Helvetica Neue";
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Registry</Title>
        <SearchContainer>
          <Search placeholder="John Doe" />
          <SearchOutlined style={{ cursor: "pointer" }} />
        </SearchContainer>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
