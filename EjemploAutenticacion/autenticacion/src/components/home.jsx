import React, { useEffect, useState } from 'react';

import axios from 'axios';



const Home=() => {
  const [info, setinfo] = useState([])

  useEffect(() => {
    axios.get("https://api-colombia.com//api/v1/country/Colombia")
      .then(response => {
        setinfo(response.data);
      })
      .catch(error => {
        console.log("Error al hacer la consulta ", error);
      });
  }, []);
  return (
    <div>
      <table>
        <td>{info.name} </td>
        <td>{info.description}</td>
        <td>{info.stateCapital}</td>
        <td>{info.surface}</td>
        <td>{info.population}</td>
        <td>{info.languages}</td>
        <td>{info.timeZone}</td>
        <td>{info.currency}</td>
        <td>{info.currencyCode}</td>
        <td>{info.isoCode}</td>
        <td>{info.internetDomain}</td>
        <td>{info.phonePrefix}</td>
        <td>{info.radioPrefix}</td>
        <td>{info.aircraftPrefix}</td>
      </table>
    </div>
  )
}

export default Home

