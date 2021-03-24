import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// @material-ui/icons components
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import EmojiEvents from "@material-ui/icons/EmojiEvents";
import GroupAdd from "@material-ui/icons/GroupAdd";
// import InsertChartOutlined from "@material-ui/icons/InsertChartOutlined";
// import PieChart from "@material-ui/icons/PieChart";

// core components
import CardStats from "components/Cards/CardStats.js";

import componentStyles from "assets/theme/components/header.js";

const useStyles = makeStyles(componentStyles);

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <div className={classes.header} style={{ paddingTop: "10px;" }}>
        <Container
          maxWidth={false}
          component={Box}
          classes={{ root: classes.containerRoot }}
        >
          <div>
            <Grid container>
              <Grid
                item
                xl={12}
                lg={12}
                xs={12}
                style={{ marginBottom: "0.5rem" }}
              >
                <div className="text-white" style={{ color: "#fff" }}>
                  <span
                    style={{
                      color: "#1894ff",
                      padding: "10px",
                      fontSize: "180%",
                    }}
                  >
                    Defi Auto Farm (DAF)
                  </span>
                </div>

                <div
                  class="text-white"
                  style={{
                    padding: "10px",
                    fontSize: "150%",
                  }}
                >
                  The easiest way to become a Defi farmer with our automated
                  compounding technology
                </div>
              </Grid>
              <Grid
                item
                xl={6}
                lg={6}
                xs={12}
                style={{ marginBottom: "0.5rem" }}
              >
                <CardStats
                  title="
                  The easiest way to become a Defi farmer with our "
                />
              </Grid>
              <Grid
                item
                xl={6}
                lg={6}
                xs={12}
                style={{ marginBottom: "0.5rem" }}
              >
                <CardStats
                  subtitle="Sales"
                  title="924"
                  icon={GroupAdd}
                  color="bgWarningLight"
                  footer={
                    <>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        color={theme.palette.warning.main}
                        marginRight=".5rem"
                        display="flex"
                        alignItems="center"
                      >
                        <Box
                          component={ArrowDownward}
                          width="1.5rem!important"
                          height="1.5rem!important"
                        />{" "}
                        1.10%
                      </Box>
                      <Box component="span" whiteSpace="nowrap">
                        Since yesterday
                      </Box>
                    </>
                  }
                />
              </Grid>
              <Grid item xl={12} lg={12} xs={12}>
                <CardStats
                  subtitle="Performance"
                  title="49,65%"
                  icon={EmojiEvents}
                  color="bgInfo"
                  footer={
                    <>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        color={theme.palette.success.main}
                        marginRight=".5rem"
                        display="flex"
                        alignItems="center"
                      >
                        <Box
                          component={ArrowUpward}
                          width="1.5rem!important"
                          height="1.5rem!important"
                        />{" "}
                        10%
                      </Box>
                      <Box component="span" whiteSpace="nowrap">
                        Since last month
                      </Box>
                    </>
                  }
                />
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
