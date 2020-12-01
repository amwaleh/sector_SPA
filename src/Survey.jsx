import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Fade from "react-reveal/Fade";
import "./styles.css";

const SurveySector = () => (
  <Fade bottom>
    <Container maxWidth="" className="wrapper">
      <Container maxWidth="md">
        <Typography variant="h6" className="header">Our Survey</Typography>
        <Typography variant="body1" className="executive-summary">
          The CMH sector is dominated by women, youth and rural populations.
          Fully 74% of all enterprises have female founders;60% are under 35;
          and 62% live in towns or rural settings, away from major urban
          centres. Africa/Middle East have 80% female-led businesses, compared
          to 68% in Asia and 61% in Latin America/Caribbean.
          </Typography> 
          <Typography variant="body1" className="executive-summary">
          According to our
          survey, the 191 surveyed CMH enterprises in total employ approximately
          35,000 people, with each on average employing 318 people (excluding
          external networks used in periods of peak production). In
          Africa/Middle East, as well as in Latin America/Caribbean, nearly half
          those surveyed employ fewer than 25 people, with only a quarter
          employing over 100. This is in stark contrast to Asia, where only 20%
          of businesses employ fewer than 25 and 40% have more than 100
          employees, accounting for the larger average workforce in the survey
          group. 
          </Typography> 
          <Typography variant="body1" className="executive-summary">
          The combined 2019 revenue of our respondents was $35 million;
          the retail value of their production was five or more times greater,
          or $175+ million. Businesses in Asia have the strongest sales, with
          52% reporting over $100,000 in revenue; in Africa/Middle East and
          Latin America/Caribbean, only 30% had annual revenues over $100,000.
          </Typography> 
          <Typography variant="body1" className="executive-summary">
          The average business had revenue of $183,487 in 2019 but women-run
          enterprises in Asia, as well as in Africa/Middle East, generated
          considerably less than those run by men.<sup>5</sup> In Asia, women-led firms
          generated $124,000 per year compared to $1.2 million for those led by
          men. In Africa/Middle East, the difference was negligible: women-led
          businesses had $166,000 in revenue as against $174,000 for male-run.
          In Latin America/Caribbean, women-led businesses generated more annual
          revenue: $97,000 on average as opposed to $51,000 for male-run
          enterprises.
          </Typography> 
          <Typography variant="body1" className="executive-summary"> 
          In Asia and Latin America/Caribbean there is a direct
          correlation between revenues and the number of years the business has
          been in operation. This is not the case in Africa/Middle East where
          enterprises report significant growth between years six and ten, after
          which business growth tends to plateau. Businesses in Africa/Middle
          East face higher barriers to achieving scale, notably due to limited
          access to markets and financing, but also because suitable production
          skills, marketing and raw materials were unavailable, or production
          and financial management tools inadequate.
        </Typography>
        <div>
        <hr width="30px" className="annotation-line" />
        <Typography className="annotations">
          <sup>5</sup> Calculated as the weighted average of the revenue ranges respondents could select in the survey.
        </Typography>
      </div>
      </Container>
    </Container>
  </Fade>
);
export default SurveySector;
