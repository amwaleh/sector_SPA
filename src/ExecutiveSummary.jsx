import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Fade from 'react-reveal/Fade';
import "./styles.css";

const ExecutiveSummary = () => (
  <Fade Bottom>
  <Container maxWidth="md">
    <Typography variant="h6">Executive Summary</Typography>
    <Typography variant="body1" className="executive-summary">
      With over $500 billion in annual revenue today, the creative manufacturing
      and handmade (CMH) sector is projected to grow by 20% per year, reaching
      $1 trillion by 2024.12 Dominated by women, youth and rural populations,
      CMH is already the second-largest employer globally (after agriculture),
      but the sector has been chronically under-served by investment,
      digitalization, access to business finance and markets. Despite enormous
      scale and potential, the sector continues to be undervalued as a vehicle
      for economic, social and environmental impact. We undertook this survey to
      find out why.
    </Typography>

    <Typography variant="body1" className="executive-summary">
      Out of 191 enterprises on four continents employing nearly 35,000 people,
      we found the majority have significant potential to grow. Yet most lack
      tools and services required to compete in a global retail marketplace.
      They face three principal barriers: insufficient financing and market
      access as well as lack of technology for business automation and scale.
    </Typography>

    <Typography variant="body1" className="executive-summary">
      They also have clear advantages, including in-demand skills and pervasive
      mobile adoption. As a result, the sector is ripe for solutions that use
      data collection and analysis to support improved enterprise management.
      This will in turn attract higher levels of market and financial access,
      and investment.
    </Typography>

    <Typography variant="body1" className="executive-summary">
      This report seeks to clarify the sector’s challenges and opportunities,
      while igniting interest among partners and stakeholders. Only a combined
      effort by impact investors and venture capitalists; donors,
      philanthropists and non-profits; major retailers and wholesalers; bankers,
      logistics firms and artisan enterprises themselves will move this massive,
      dynamic, but often neglected sector forward.
    </Typography>

    <Typography variant="body1" className="executive-summary">
      While this report makes no claim to be definitive, it represents a
      substantial sample from four continents. Given the relative lack of
      data-driven studies of CMH to date, these conclusions should be of
      interest to a wide audience. The report was undertaken with financial
      support from the Mastercard Foundation out of a shared conviction that by
      making more data, analysis and insights available, we can together
      identify and deliver the right enablers for long-term success.
    </Typography>

    <Typography variant="body1" className="executive-summary">
      Together with many visionary partners worldwide, we aim to expand
      opportunities in the CMH sector. By pinpointing where value is created in
      global supply chains, we can guide larger investments towards strategic
      results, thereby making CMH more mainstream. Digitally-enabled CMH
      producers have the potential to become an alternative manufacturing model
      for retailers, wholesalers, designers and consumers increasingly drawn to
      small-batch production, customization and transparent supply chains for
      unique, authentic and sustainably-produced products. CMH has the potential
      to deliver a strategic response, at scale, to the changing preferences of
      engaged consumers now seeking unique brands and designs that impact the
      well-being of those at the bottom of the pyramid. This new model has the
      power to deliver higher incomes for artisan producers living in some of
      the world’s poorest regions.
    </Typography>
    <div>
      <hr width="30px" />
      <Typography className="annotations">
        <sup>1</sup> Research and Markets, ltd. “Handicrafts Market: Global
        Industry Trends, Share, Size, Growth, Opportunity and Forecast
        2018-2023.” Research and Markets,, June 2018,
        <a href="www.researchandmarkets.com/reports/4592343/handicrafts-market-global-industry-trends">
          www.researchandmarkets.com/reports/4592343/handicrafts-market-global-industry-trends
        </a>
        .<sup>2</sup> Creative manufacturing: a form of production, not
        conducive to automation, employing craftsmanship and other hand-made
        techniques to change creative elements and designs frequently;
        smaller-batch fabrication rooted in circular economy principles that
        integrate local traditions and niche natural inputs, while catering to
        global markets.
      </Typography>
    </div>
  </Container>
  </Fade>
);
export default ExecutiveSummary;
