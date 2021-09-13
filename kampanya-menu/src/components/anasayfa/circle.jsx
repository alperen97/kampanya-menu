import React,{ useState } from "react";
import { useStore } from "../../contextAPI/store/Provider";
import Dumenli from "./dumenli";
import Dumensiz from "./dumensiz";
const Circle = (props) => {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStore("");
  // eslint-disable-next-line
  const [isInclude, setInclude] = useState((user.seenStories).includes(props.kampanya.CampaignId));
  return (
    <div>
      {isInclude ? (
        <Dumensiz kampanya={props.kampanya} />
      ) : (
        <Dumenli kampanya={props.kampanya} />
      )}
    </div>
  );
};

export default Circle;
