import React, { useState, useEffect } from "react";

import { selectUser } from "../../store/user/selectors";
import { useSelector } from "react-redux";

export default function Mylibrary() {
  const user = useSelector(selectUser);

  console.log("extracts?", user.extract);

  return (
    <div>
      <div>
        {user.extract.map((anExtract) => (
          <p key={Math.random()}>"{anExtract.text}"</p>
        ))}
      </div>
    </div>
  );
}
