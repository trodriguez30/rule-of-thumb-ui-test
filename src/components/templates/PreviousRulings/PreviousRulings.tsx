import React, { useEffect, useState } from "react";
import "./PreviousRulings.scss";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { getRulings } from "../../../redux/rulings/actions";
import { VIEW_TYPE } from "../../../definitions/constants";
import RulingsList from "../../organisms/RulingsList";
import InfoState from "../../organisms/InfoState/InfoState";
import errorIcon from "../../../assets/img/error.svg";
import emptyIcon from "../../../assets/img/empty.svg";
import loaderIcon from "../../../assets/img/thumb_loader.svg";

function PreviousRulings() {
  const dispatch = useDispatch();
  const [view, setView] = useState("List");

  const {
    fetchingRulings,
    rulings,
    rulingsFetched,
    rulingsFetchFailed,
    error,
  } = useSelector((state: RootStateOrAny) => state.rulings);

  console.log(
    fetchingRulings,
    rulings,
    rulingsFetched,
    rulingsFetchFailed,
    error
  );

  useEffect(() => {
    if (rulings.length === 0) {
      dispatch(getRulings());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if(fetchingRulings){
    return <InfoState message="Cargando información..." icon={loaderIcon} type="loading" />
  }

  if (rulingsFetchFailed) {
    return <InfoState message={error} icon={errorIcon}  type="info" />
  }

  if (rulings.length === 0 && rulingsFetched) {
    return (
      <InfoState
        message="No se encontró información para mostrar"
        icon={emptyIcon}
        type="info"
      />
    );
  }

  return (
    <main role="main">
      <div className="main-top">
        <h2 className="main-top__title">Previous Rulings</h2>
        <select
          className="main-top__options"
          value={view}
          onChange={(e) => setView(e.target.value)}
        >
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
