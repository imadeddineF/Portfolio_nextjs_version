import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

const CustomScrollBar = () => {
  return (
    <Scrollbars
      renderThumbVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            backgroundColor: "gray",
            borderRadius: "4px",
          }}
        />
      )}
      renderTrackVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            backgroundColor: "lightgray",
            borderRadius: "4px",
          }}
        />
      )}>
      {/* Your content goes here */}
    </Scrollbars>
  );
};

export default CustomScrollBar;
