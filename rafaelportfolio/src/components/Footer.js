import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "blue", 
                   textAlign: "center", 
                   marginTop: "-50px",
                   marginBottom:"20px"}}>
        Rafael Columna
      </h1>
      <Container>
        <Row>
          <Column>
            <FooterLink href="../about">About Me</FooterLink>
          </Column>
          <Column>
            <FooterLink href="../projects">Projects</FooterLink>
          </Column>
          <Column>
            <FooterLink href="#">Stack</FooterLink>
          </Column>
          <Column>
            <FooterLink href="../contact">Contact Me</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;