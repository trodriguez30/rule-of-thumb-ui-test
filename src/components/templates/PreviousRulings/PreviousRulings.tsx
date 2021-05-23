import React, { useEffect, useState } from "react";
import "./PreviousRulings.scss";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { getRulings } from "../../../redux/rulings/actions";
import { VIEW_TYPE } from "../../../definitions/constants";
import RulingsList from "../../organisms/RulingsList";

function PreviousRulings() {
  const dispatch = useDispatch();
  const [view, setView] = useState("List");

  const {
    fetchingRulings,
    rulings,
    rulingsFetched,
    rulingsFetchFailed,
  } = useSelector((state: RootStateOrAny) => state.rulings);

  useEffect(() => {
    if (rulings.length === 0) {
      dispatch(getRulings());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main role="main">
      <div className="main-top">
        <h2 className="main-top__title">Previous Rulings</h2>
        <select className="main-top__options" value={view} onChange={(e) => setView(e.target.value)}>
            {VIEW_TYPE.map((v: any) => {
              return <option value={v.value}>{v.label}</option>;
            })}
          </select>
      </div>
      {rulings.length !== 0 && <RulingsList data={rulings} type={view} />}
    </main>
  );
}

export default PreviousRulings;
