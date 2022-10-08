import { SearchOutlined } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { StudentContext } from "../context/StudentContext";
import Student from "./Student";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: space-between;
  background-color: #f6f6f7;
  width: 100%;
  position: fixed;
`;

const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #dfdfdf;
  flex-direction: row;
  border-radius: 5px;
  align-items: center;
  padding: 5px;
  margin-right:20px;
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
    // eslint-disable-next-line
  const [students, setStudents] = useContext(StudentContext);

  const [name, setName] = useState("");
  const [foundUsers, setFoundUsers] = useState(students);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = students.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
      console.log(results);
    } else {
      setFoundUsers(students);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Title>Student Registry</Title>
          <SearchContainer>
            <Search
              type="search"
              onChange={filter}
              value={name}
              placeholder="Search"
            />
            <SearchOutlined style={{ cursor: "pointer" }} />
          </SearchContainer>
        </Wrapper>
        <Student value={foundUsers} />
      </Container>
    </>
  );
};

export default Navbar;
