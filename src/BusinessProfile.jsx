import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import "./styles.css";

const MethodologySection = () => (
  <Fade bottom>
    <Container maxWidth="lg" className="methodology">
      <Container maxWidth="md" className="methodology">
        <Typography variant="h5">Business Profile</Typography>
        <Grid container justify="space-between">
          <Grid item md="5">
            <Typography>Top countries by revenue</Typography>
            {[
              { country: "Bangladesh", value: "$550,001" },
              { country: "India", value: "$504,167" },
              { country: "Uganda", value: "$503,126" },
              { country: "Nepal", value: "$375,001" },
              { country: "Afghanistan", value: "$375,00" }
            ].map((x) => (
              <Typography className="countries">
                <b>{x.country}</b>, {x.value}
              </Typography>
            ))}
          </Grid>
          <Grid item md="6">
            <Typography className="profile-text">
              The average business in 2019 was headed by a woman, generating
              revenue of
            </Typography>
            <Typography variant="h2" className="figures">
              $183,487
            </Typography>
            <Typography className="profile-text">
              Employing 318 handmade producers with an average median order
              value of
            </Typography>
            <Typography variant="h2" className="figures">
              $12,464
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Container>
  </Fade>
);
export default MethodologySection;
