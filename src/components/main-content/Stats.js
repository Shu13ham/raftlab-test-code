import React from "react";

export default function Stats(props) {
  return (
    <div className="stats-wrapper bg-primary flex justify-between items-center flex-row">
      {props.stats.map((stat, i) => {
        return (
          <div className="stat  flex justify-center items-center" key={i}>
            <div className="img w-12 h-12 flex justify-center items-center">
              <img src="img/cash-stack-1.png" alt="" className="w-8 h-8" />
            </div>
            <div className="info">
              <p className="title text-xs text-grey-text m-0">{stat.title}</p>
              <div className="amount-percent  flex justify-center items-center">
                <span className="amount text-white font-semibold text-lg">
                  {stat.amount}
                </span>
                <span className="percent bg-white text-primary font-medium text-xs">
                  {stat.percent}
                </span>
              </div>
              <p className="previous-record text-white font-bold m-0 text-xs">
                <span className="text-xs text-grey-text  font-medium">
                  Previous Year{" "}
                </span>
                {stat.prevYear}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
