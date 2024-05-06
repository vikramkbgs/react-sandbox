import React from "react";
import SocialBox from "./SocialBox";
import "./Social.css"

class Social extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
          name: "LinkedIn",
          link: "https://www.linkedin.com/",
          bgColor: "red",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
          name: "GitHub",
          link: "https://github.com/",
          bgColor: "green",
        },
        {
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553",
          name: "Twitter",
          link: "https://twitter.com/",
          bgColor: "yellow",
        },
      ],
    };
  }

  render() {
    const db = this.state.data;

    return (
      <div className="Social">
        {db.map((data, index) => {
          return <SocialBox key={index} product={data} />;
        })}
      </div>
    );
  }
}

export default Social;
