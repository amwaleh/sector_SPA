import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Fade from 'react-reveal/Fade';
import "./styles.css";

const MethodologySection = () => (
<Fade bottom>
  <Container maxWidth="lg" className="methodology">
  <Container maxWidth="md"  className="methodology">
    <Typography variant="h6">Our Methodology</Typography>
    <Typography variant="body1" className="executive-summary">
      The data for this report was collected from a 42-question online survey of
      enterprises, collectives, cooperatives and NGOs conducted over the spring
      and summer of 2020, when most were facing COVID-related restrictions.
    </Typography>
    <Typography variant="body1" className="executive-summary">
      We invited 605 stakeholders to take part in the survey. The results below
      are based on 191 responses of which 143 were complete and the vast
      majority nearly complete — a statistically small but significant sample.
      The total workforce of the 191 enterprises responding was approximately
      35,000 employees. Our experience reviewing available CMH data over decades
      leads us to believe these results are indicative of trends across the
      sector today.
    </Typography>
    <Typography variant="body1" className="executive-summary">
      The survey results are grouped into three regional categories — Asia,
      Africa/Middle East and Latin America/Caribbean (including Mexico). Of the
      191 organizations that completed surveys, 68% were from Africa/Middle
      East. The smallest sample size was from Asia, where India and Bangladesh
      accounted for most respondents.
    </Typography>
    <Typography variant="body1" className="executive-summary">
      We fully recognize that such a classification does not do justice to
      significant distinctions, for example, among Mexico, the Caribbean,
      Central and South America; among Turkey, Iran, the Levant and Arab world;
      between North and Sub-Saharan Africa; or between South and East Asia. But
      our review of the raw data has made us confident this three-region schema
      is the right framework for these insights.
    </Typography>
    <Typography variant="body1" className="executive-summary">
      The survey reflects a bias towards producers with internet access, though
      we know many CMH producers are not yet connected, particularly at
      individual artisan level. In 2019 5.2 billion people (67% of the world’s
      population) were mobile phone subscribers, 3.8 billion with
      internet-enabled phones. By 2025, 5.8 billion people are expected to have
      mobile phones.<sup>4</sup> As a result, the vast majority of CMH producers — formal
      businesses and individual artisan creators alike — now enjoy or are on the
      verge of gaining internet access.
    </Typography>
    <div>
      <hr className="annotation-line" />
      <Typography className="annotation">
        <sup>4</sup> GSMA 2020 report: https://www.gsma.com/mobileeconomy/
        <a href="https://www.gsma.com/mobileeconomy/">
          https://www.gsma.com/mobileeconomy/
        </a>
      </Typography>
    </div>
  </Container>
  </Container>
  </Fade>
);
export default MethodologySection;
