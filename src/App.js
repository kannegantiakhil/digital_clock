import React, { useState, useEffect } from "react";

function DigiClock() {
  const [mytime, getMytime] = useState(" ");

  const tick = () => {
    let time =
      new Date().getHours() +
      ":" +
      new Date().getMinutes() +
      ":" +
      new Date().getSeconds();
    getMytime(time);
  };

  useEffect(() => {
    const t = setInterval(tick, 1000);

    return () => {
      clearTimeout(t);
    };
  }, [mytime]);

  return (
    <div>
      <table border="3" bgcolor="#ccff66">
        <tr>
          <td>
            <h1>DigitalClock</h1>
            <h2>{mytime}</h2>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default DigiClock;
