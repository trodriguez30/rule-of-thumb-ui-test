import React, { useCallback, useEffect, useRef, useState } from "react";
import { VIEW_TYPE } from "../../../definitions/constants";
import { RulingInterface } from "../../../definitions/type";
import RulingGridView from "../../molecules/RulingItem/RulingGridView";
import RulingListView from "../../molecules/RulingItem/RulingListView";

import "./RulingsList.scss";

interface RulingsListInterface {
  data: Array<RulingInterface>;
  type: string | number;
}
function RulingsList(props: RulingsListInterface) {
  const mobileBreakpoint = 768;

  const rulingListRef = useRef(document.createElement("div"));

  const [widthSize, setWidthSize] = useState<number>(0);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [viewSelected, setViewSelected] = useState(props.type);

  //constant to save the pointer position on x-axis
  const [screenX, setScreenX] = useState<number>(0);

  //constant to save the scroll position on x-axis
  const [scrollX, setScrollX] = useState<number>(0);

  useEffect(() => {
    //function to get screen width to handle scrolling at mobile
    function getScreenWidth() {
      setWidthSize(window.innerWidth);
    }
    // Add event listener to execute function to get width of screen
    window.addEventListener("resize", getScreenWidth);
    getScreenWidth();
    // Remove event listener when component will unmount
    return () => window.removeEventListener("resize", getScreenWidth);
  }, []);

  useEffect(() => {
    if (props.type) {
      setViewSelected(props.type);
    }
  }, [props.type, viewSelected]);

  //define type of view according to prop type, list or grid
  const ListItems = (item: RulingInterface) => {
    if (widthSize < mobileBreakpoint) {
      return <RulingGridView {...item} />;
    }
    return viewSelected === VIEW_TYPE[0].value ? (
      <RulingListView {...item} />
    ) : (
      <RulingGridView {...item} />
    );
  };

  //function to handle scrolling at mobile size according to user scrolling action
  function handleMouse(e: any, kind: string) {
    const currentList = rulingListRef.current;

    //only is available if there is a mobile screen
    if (widthSize < mobileBreakpoint) {
      switch (kind) {
        //case to start the scrolling
        case "down": {
          setScrolling(true);
          //save the inital pointer position when start the drag
          setScreenX(e.screenX);
          //save the inital scroll position when start the drag
          setScrollX(currentList.scrollLeft);
          break;
        }
        //case to end the scrolling and clean the values
        case "up": {
          setScrolling(false);
          //clean the pointer position when end the drag
          setScreenX(0);
          //clean the scroll position when end the drag
          setScrollX(0);
          break;
        }
        //case to scroll the list with drag method
        case "move": {
          if (scrolling) {
            currentList.scrollLeft = scrollX + screenX - e.screenX;
          }
          break;
        }
      }
    }
  }

  return (
    <div
      ref={rulingListRef}
      onMouseDown={(e) => handleMouse(e, "down")}
      onMouseUp={(e) => handleMouse(e, "up")}
      onMouseMove={(e) => handleMouse(e, "move")}
      className="ruling-list"
    >
      {props.data.map((item: RulingInterface, index: number) => (
        <ListItems {...item} key={index}/>
      ))}
    </div>
  );
}

export default RulingsList;
