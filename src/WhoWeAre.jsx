import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Fade from "react-reveal/Fade";
import "./styles.css";

const WhoWeAreSection = () => (
  <Fade Bottom>
    <Container maxWidth="md" className="wrapper">
      <Typography variant="h6" className="header">Who are we?</Typography>
      <Typography variant="body1" className="executive-summary">
        Powered by People (PBP) is a technology platform providing CMH
        enterprises with production and enterprise management software, as well
        as access to financing and markets. We produced this report with many
        partners. Trade + Impact was instrumental in survey preparation and data
        analysis. The survey was distributed through partners Nest, The
        Challenges Group, By Hand Consulting, Aid to Artisans, Trade Facility
        Office Canada, AOW Handmade, Stacey Edgar Consulting, ITC Shetrades,
        CBI, WFTO, Challenges WorldWide, MADE51 and Sprout Enterprise. We all
        share the same goal: to unlock the creativity and talent of millions of
        artisan entrepreneurs worldwide.
      </Typography>
      <Typography variant="body1" className="executive-summary">
        In launching this sector-wide report, we are profoundly aware of the
        central role handmade producers and creative manufacturers have played
        throughout the long history of human civilization and continue to play
        today. Our motivation for launching the PBP platform is to use a
        data-driven approach and technology to transform existing skills and
        human potential into a growing CMH ecosystem that empowers producers;
        launches and grows sustainable businesses; and preserves traditions,
        while driving progress towards the Sustainable Development Goals (SDGs).
        <sup>3</sup>
      </Typography>

      <div>
        <hr width="30px" className="annotation-line" />
        <Typography className="annotations">
          <sup>3</sup> The 2030 Agenda for Sustainable Development, adopted by
          all United Nations Member States in 2015,{" "}
          <a href="https://sdgs.un.org/goals">https://sdgs.un.org/goals.</a>
        </Typography>
      </div>
    </Container>
  </Fade>
);
export default WhoWeAreSection;
