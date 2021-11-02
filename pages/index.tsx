import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { styled } from "@theme/stitches.config";
import { defaultFontStyles } from "@theme/typography";
import { SiTwitter } from "react-icons/si";
import React from "react";

const HomepageMedallion = styled("div", {
  ...defaultFontStyles,
  display: "flex",
  flexDirection: "column",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  mx: "auto",
  pb: "32.8vh",
  width: "340px",
});

const Subtitle = styled("div", {
  my: "$4",
  "> p": { lineHeight: 1.4, mb: 0, fontWeight: 400, opacity: 0.5 },
});

const ContactButton = styled("a", {
  display: "flex",
  width: "340px",
  // opacity: 0.5,
  transition: "opacity 333ms cubic-bezier(0.4, 0, 0.22, 1)",
  "&:hover": {
    opacity: 1,
  },
});

const StyledLink = styled("a", {
  color: "pink",
  opacity: 1,
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Matt Wood, Systems Designer</title>
        <meta name="description" content="Matt Wood, Systems Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomepageMedallion>
        <Subtitle>
          <div>Matt Wood, Systems Designer</div>
          <p>
            Currently building a collaborative web app to generate user
            interfaces using server specification documents
          </p>
          <p>
            <Link href="https://calendly.com/mattwoodco/30min" passHref>
              <StyledLink> Schedule a demo</StyledLink>
            </Link>
          </p>
        </Subtitle>

        <Link href="https://twitter.com/mattwoodco" passHref>
          <ContactButton title="Contact">
            <SiTwitter />
          </ContactButton>
        </Link>
      </HomepageMedallion>
    </>
  );
};

export default Home;
