import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Fade from "react-reveal/Fade";
import "./styles.css";

const SectorMatter = () => (
  <Fade bottom>
    <Container maxWidth="lg" >
      <Container maxWidth="md" >
        <Typography variant="h6">Why Does the Sector Matter?</Typography>
        <Typography variant="body1" className="executive-summary">
          The CMH sector is a relatively “new” and unexplored sector. It is both
          ripe for investment and capable of generating significant growth in a
          new global economy. 
          </Typography>
          <Typography variant="body1" className="executive-summary">
          CMH has immense job creation and revenue
          potential, particularly (but not exclusively) for low-income
          communities across Africa/Middle East, Asia, Latin America/Caribbean.
          </Typography>
          <Typography variant="body1" className="executive-summary">
          The CMH sector is vital for engaging women, youth and rural
          populations in the global economy as it provides meaningful work and
          income to such large populations. 
          </Typography>
          <Typography variant="body1" className="executive-summary">
          CMH is by its very nature circular
          and employs less industrial and more sustainable processes such as
          small-batch production and boutique manufacturing, while relying
          heavily on renewable agricultural inputs. 
          </Typography>
          <Typography variant="body1" className="executive-summary">
          <Typography className="sector-heading" >
          The CMH Sector Vital for achieving the SDGs 
          </Typography>
          The CMH sector has the scope and growth potential
          to have a tangible impact on most SDGs: CMH livelihoods in rural areas
          underpin progress towards ‘no poverty’ (SDG 1). High rates of
          participation by women and youth are critical to ‘global equality’
          (SDG 5). The scale and global growth potential of CMH deliver ‘good
          jobs and economic growth’ (SDG 8). Digital, finance, logistics and
          training activities contribute to ‘Innovation and Infrastructure’ (SDG
          9). They also ‘reduce inequalities in and among countries’ (SDG 10).
          CMH businesses ‘protect and safeguard the world’s cultural and natural
          heritage’ (SDG 11). CMH also ensures ‘sustainable consumption and
          production patterns’ (SDG 12). By empowering producers, CMH can
          contribute indirectly to ‘zero hunger’ (SDG 2), ‘good health and
          well-being’ (SDG 3), ‘quality education’ (SDG 4) and ‘clean water and
          sanitation’ (SDG 6). Sector-wide CMH collaboration is also a powerful
          form of ‘partnership for the goals’ (SDG 17).
        </Typography>
      
      </Container>
    </Container>
  </Fade>
);
export default SectorMatter;
