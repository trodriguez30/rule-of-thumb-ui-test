import React from "react";
import { VIEW_TYPE } from "../../../definitions/constants";
import { RulingInterface } from "../../../definitions/type";
import RulingGridView from "../../molecules/RulingItem/RulingGridView";
import RulingListView from "../../molecules/RulingItem/RulingListView";

import './RulingsList.scss';

interface RulingsListInterface {
  data: Array<RulingInterface>;
  type: string;
}
function RulingsList(props: RulingsListInterface) {
  const ListItems = (item: any) => {
    return props.type === VIEW_TYPE[0].value ? (
      <RulingListView {...item} />
    ) : (
      <RulingGridView {...item} />
    );
  };
  return (
    <div className="ruling-list">
      {props.data.map((item: RulingInterface) => (
        <ListItems {...item} />
      ))}
    </div>
  );
}

export default RulingsList;
