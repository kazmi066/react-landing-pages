import React from "react";
import "./Features.css";
import Picture5 from "../../assets/Picture5.png";
import Picture6 from "../../assets/Picture6.png";
import Picture7 from "../../assets/Picture7.png";
import Feature from "./Feature/Feature";

export default function Features() {
  let feature_content = {
    item_1: {
      id: 1,
      image: Picture5,
      heading: "+ Remote Mobile & Desktop Testing",
      list: {
        desc_1: "In-depth target audience selection and screeners",
        desc_2: "Ideal for user engagement pre/post product launch",
      },
    },
    item_2: {
      id: 2,
      image: Picture6,
      heading: "+ Quick turnaround and increased conversion velocity",
      list: {
        desc_1:
          "15-min unmoderated video sessions to 60-minute moderated group sessions ",
        desc_2: "Set panels for quicker feedback",
        desc_3:
          "Ideal for website/app UI/UX testing and offline CPG product testing",
      },
    },
    item_3: {
      id: 3,
      image: Picture7,
      heading: "+ In-depth analysis and richer insight",
      list: {
        desc_1: "Real reactions and honest feedback from users",
        desc_2:
          "Sentiment analysis, wordcloud, net promotor scores, statistics",
        desc_3:
          "Ideal for media/storyboard feedback, price/packaging/taste A/B tests",
      },
    },
  };

  return (
    <section id="features">
      <h1 className="title">Features & Benefits</h1>
      <Feature item={feature_content.item_1} right />
      <Feature item={feature_content.item_2} left />
      <Feature item={feature_content.item_3} right />
    </section>
  );
}
