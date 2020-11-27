import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Fade from "react-reveal/Fade";
import "./styles.css";

const SectorMatter = () => (
  <Fade bottom>
    <Container maxWidth="lg">
      <Container maxWidth="md">
        <Typography variant="h6">Why Now?</Typography>
        <Typography variant="body1" className="executive-summary"> 
          <Typography className="sector-heading">
          Changing Consumer Demand: Small-Batch and Boutique Manufacturing
          </Typography>
          Centralized factories became the standard template for manufacturing
          at a time when most customers wanted the same products. Today’s
          consumers are seeking something different — unique, bespoke,
          innovative products that tell a story. Digitally-enabled CMH is at
          their service, with smaller-batch boutique manufacturing that empowers
          producers worldwide to meet this new wave of consumer demand for
          conscientious and authentic products.
          </Typography>
          <Typography variant="body1" className="executive-summary">
          <Typography className="sector-heading">
          Working from Home: A New VirtualProduction Model 
          </Typography>
          Working from home is a new worldwide reality. For
          CMH, remote work is an unparalleled opportunity. With the right
          digital tools, CMH has the potential to become an alternative
          manufacturing model connecting producers through distributed and
          virtual networks to manufacturers, brands, designers and buyers.
          Instead of migrating to traditional factories in remote cities, this
          creative workforce remains in its home communities, capturing more
          value for producer families and mitigating the costs of migration and
          runaway urbanization. 
          </Typography>
          <Typography variant="body1" className="executive-summary">
          <Typography className="sector-heading">
          Digitalization and Technology: Building an inclusive Economy 
          </Typography>
          Already an effective enabler before the global
          pandemic, technology has now become a defining feature of CMH success.
          Given widespread mobile phone and internet access even in remote
          areas, CMH enterprises can leapfrog into a central position in the new
          economy. Closing the sector’s digital gap can reduce poverty and
          underpin growing prosperity worldwide.
        </Typography>
      </Container>
    </Container>
  </Fade>
);
export default SectorMatter;
