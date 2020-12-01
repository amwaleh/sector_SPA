import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Fade from 'react-reveal/Fade';
import "./styles.css";

const CreativeSection = () => (
  <Fade bottom>
  <Container maxWidth="md" className="wrapper">
    <Typography variant="h6" className="header">
      Creative Manufacturing and Handmade at a Glance
    </Typography>
    <Typography variant="body1" className="executive-summary">
      The CMH sector today provides work for approximately 300 million people —
      predominantly women, youth and migrants living in rural areas with low
      incomes and often operating informally. Many are already supplying the
      world’s largest retailers. The sector’s growth is being driven by rapid
      transformation of consumer preferences that increasingly emphasize product
      provenance and transparency, sustainability and storytelling, as well as
      the emergence of ethically-minded and responsibly-sourced brands.
    </Typography>
    <Typography variant="body1" className="executive-summary">
      Many retailers, both luxury and mainstream, already source knitwear, rugs,
      embroidery, textiles, jewelry and other detailing from the CMH sector, yet
      this only accounts for a tiny fraction of total product selection largely
      sourced from mass production factories. Buyers lack the ability to reach
      artisan producers easily: strict compliance requirements often exclude CMH
      enterprises.
    </Typography>
    <Typography variant="body1" className="executive-summary">
      As a result, the CMH sector is at a crossroads. It can continue to grow at
      the same pace, remain principally analog and deny its workforce the
      digital advantages afforded to growing businesses. Or it can adopt the
      right digital tools, backed by financing and increased investment, to
      place itself at the forefront of a major shift towards boutique
      manufacturing and ethically-sourced products made by talented producers
      and creators, living in diverse communities with long-standing design
      traditions. Transformed by technology and entrepreneurship, CMH can
      flourish in the global marketplace.
    </Typography>
    <Typography variant="body1" className="executive-summary creative-quote">
      “We are trying to streamline our systems to be more virtual, and want to
      train artisans to interact with production information through improved
      use of their smartphones.”
    </Typography>
  </Container>
  </Fade >
);
export default CreativeSection;
