import React from "react";





const Rate = ({ Rate, setRatingSearch }) => {

  const stars = (Rate) => {

    let startsTab = [];
    
    for (let i = 1; i <= 5; i++) {
      if (i <= Rate) {
        startsTab.push(
          <span
            style={{
              color: "#FFC83D",
              fontSize: "40px",
              marginLeft: "0",
              cursor: "pointer",
            }}
            onClick={() => setRatingSearch(i)}
          >
            ★
          </span>
        );
      } else {
        startsTab.push(
          <span
            style={{
              color: "#FFC83D",
              fontSize: "40px",
              marginLeft: "0",
              cursor: "pointer",
            }}
            onClick={() => setRatingSearch(i)}
          >
            ☆
          </span>
        );
      }
    }
    return startsTab;
  };
  return <div>{stars(Rate)}</div>;
};
Rate.defaultProps = {
  setRatingSearch: () => {},
  Rate: 1,
};
export default Rate;