import { Grid } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dfdfdf;
  width: fit-content;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  padding-right: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
`;

const Image = styled.img`
  border-radius: 100%;
`;

const Name = styled.div`
  display: flex;
  padding-top: 10px;
  font-size: 18px;
`;

const Student = (props) => {
  return (
    <Container>
      <Grid container spacing={2}>
        {props.value.map((item) => (
          <Grid key={nanoid()} item xs={{lg:'2',xs:'',md:'4'}} >
            <Wrapper>
              <ImageContainer>
                <Image
                  src={`https://picsum.photos/id/${Math.floor(
                    Math.random() * 100
                  )}/200`}
                  alt="profile-img"
                />
              </ImageContainer>
              <Name>{item.name} </Name>
            </Wrapper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Student;
