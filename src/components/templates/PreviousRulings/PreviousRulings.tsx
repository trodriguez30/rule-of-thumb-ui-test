import React, { useEffect, useState } from "react";
import Select from "react-select";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { getRulings } from "../../../redux/rulings/actions";
import { VIEW_TYPE } from "../../../definitions/constants";

import RulingsList from "../../organisms/RulingsList/RulingsList";
import InfoState from "../../organisms/InfoState/InfoState";

import errorIcon from "../../../assets/img/error.svg";
import emptyIcon from "../../../assets/img/empty.svg";
import loaderIcon from "../../../assets/img/thumb_loader.svg";

import "./PreviousRulings.scss";

function PreviousRulings() {
  const dispatch = useDispatch();
  const [view, setView] = useState(VIEW_TYPE[0].value);

  const {
    fetchingRulings,
    rulings,
    rulingsFetched,
    rulingsFetchFailed,
    error,
  } = useSelector((state: RootStateOrAny) => state.rulings);

  //UseEffect to fetch data from API
  useEffect(() => {
    if (rulings.length === 0) {
      dispatch(getRulings());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //handle component when is fetching data from API
  if (fetchingRulings) {
    return (
      <InfoState
        message="Cargando información..."
        icon={loaderIcon}
        type="loading"
      />
    );
  }

  //Handle error response from API
  if (rulingsFetchFailed) {
    return <InfoState message={error} icon={errorIcon} type="info" />;
  }

  //Handle empty data response from API
  if (rulings.length === 0 && rulingsFetched) {
    return (
      <InfoState
        message="No se encontró información para mostrar"
        icon={emptyIcon}
        type="info"
      />
    );
  }

  //Show rulings items when API response is successful
  return (
    <main role="main">
      <div className="main-top">
        <h2 className="main-top__title">Previous Rulings</h2>
        <Select
        className="main-top__select"
          options={VIEW_TYPE}
          onChange={value => setView(value ? value.value : '')}
          defaultValue={VIEW_TYPE[0]}
        />
      </div>
      {rulings.length !== 0 && <RulingsList data={rulings} type={view} />}
    </main>
  );
}

export default PreviousRulings;
