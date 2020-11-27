import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ExecutiveSummary from "./ExecutiveSummary";
import WhoWeAreSection from "./WhoWeAre";
import Methodology from "./Methodology";
import BusinessProfile from "./BusinessProfile";
import Creative from "./Creative";
import SectorMatter from "./SectorMatter";
import Survey from "./Survey";
import WhyNow from "./WhyNow";
import Fade from "react-reveal/Fade";
import "./styles.css";

export default function SimpleContainer() {
  const img =
    "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" className="app-bar">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
      <Container
        maxWidth
        style={{
          backgroundColor: "#000",
          height: "571px",
          backgroundImage: `url(${img})`,
          backgroundSize: "cover"
        }}
      >
        <Container maxWidth="lg">
          <div style={{ height: "571px", width: "100%" }}>
            <div className="hero-container">
              <Typography variant="h3" className="hero-text">
                Creative Manufacturing and Handmade: A Sector Whose Time Has
                Come
              </Typography>
            </div>
          </div>
        </Container>
      </Container>
      <ExecutiveSummary />
      <Fade>
        <Container
          maxWidth
          style={{
            backgroundColor: "#000",
            height: "348px",
            backgroundImage: `url(${img})`,
            backgroundSize: "100%"
          }}
        />
      </Fade>
      <WhoWeAreSection/>
      <Methodology />
      <Creative />
      <BusinessProfile/>
      <SectorMatter/>
      <WhyNow/>
      <Survey/>

    </React.Fragment>
  );
}
