import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/ProjectContext";

function Date() {
  const { language, date } = useContext(AppContext);
  return (
    <div
      className={`text-app-surface w-full flex flex-col ${language === "FA" ? "justify-end" : "justify-start"} mt-4 border-2 border-app-border p-3 rounded-xl`}
    >
      <span className="text-app-primary">
        {language === "FA" ? (
          <span>امروز قراره چیکار کنیم؟</span>
        ) : (
          <span>What are we getting done today?</span>
        )}
      </span>
      <h1 className="text-2xl font-bold mt-1 mb-2">
        {date.date} {date.weekday} {date.monthName}
      </h1>
    </div>
  );
}

export default Date;
