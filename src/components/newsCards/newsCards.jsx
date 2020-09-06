import React from "react";
import { Grid, Grow } from "@material-ui/core";

import NewsCard from "../newsCard/newsCard";
import Panel1 from "./panel1.png";
import Panel2 from "./panel2.png";
import Panel3 from "./panel3.png";
import Panel4 from "./panel4.png";
import Uip from "./uip.png";
import Tyu from "./tyu.png";
import Tyu1 from "./tyu1.png";
import useStyles from "./styles.js";
import "./styling.css";

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <div>
        <img className="uui" src={Uip} alt="banner" />
        <h1>The Main Instructions </h1>
        <h3>to get started</h3>
        <div className="instruction" xs={12} sm={6} md={4} lg={3}>
          <img className="panel" src={Panel1} alt="instructions" />
          <img className="panel" src={Panel2} alt="instructions" />
          <img className="panel" src={Panel3} alt="instructions" />
          <img className="panel" src={Panel4} alt="instructions" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="cantainerr">
        <img className="goBack" src={Tyu} alt="go back" />
        <img className="openArt" src={Tyu1} alt="open Article" />
      </div>
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {articles.map((article, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
              <NewsCard article={article} activeArticle={activeArticle} i={i} />
            </Grid>
          ))}
        </Grid>
      </Grow>
    </div>
  );
};

export default NewsCards;
