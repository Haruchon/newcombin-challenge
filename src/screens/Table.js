import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { useGetData } from "../hooks/useGetData";
import { useMyChallengeContext } from "../provider";

function Table() {
  let navigate = useNavigate();
  function handleReturn() {
    navigate(-1);
  }
  const { dataList, token } = useMyChallengeContext();
  const { getData } = useGetData();

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 120000);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!token) navigate("/");
  }, [navigate, token]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Table Page</p>
        {dataList.length === 0 && <p>No data</p>}
        {dataList.length !== 0 && (
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>SSN</th>
              </tr>
            </thead>
            <tbody>
              {dataList.map((item, index) => (
                <tr key={index}>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.address}</td>
                  <td>{item.ssn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <button onClick={handleReturn} className="App-link-button">
          Return
        </button>
      </header>
    </div>
  );
}

export default Table;
