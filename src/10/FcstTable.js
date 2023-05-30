import { useState, useEffect } from "react";
import code from "./getcode.json";
import styles from "./FcstTable.module.css";


const FcstTable = ({ datas, gubun }) => {
  const [opTags, setOpTags] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [filteredDatas, setFilteredDatas] = useState([]);
 

  useEffect(() => {
    const tempcode = code
      .filter((i) => i["예보구분"] === gubun)
      .map((i) => ({
        key: i["항목값"],
        value: i["항목값"],
        label: `${i["항목명"]}(${i["항목값"]})`,
      }));
    setOpTags(tempcode);
  }, [gubun]);


  

  const showItem = (e) => {
    const value = e.target.value;
    setSelectedItem(value);
    console.log("Selected Item:", value);
  };

 
  useEffect(() => {
    const filtered = datas.filter(
      (item) =>
        item.category === selectedItem &&
        item.fcstDate &&
        item.fcstTime &&
        item.fcstValue
    );
    setFilteredDatas(filtered);
    console.log(selectedItem, datas);
  }, [selectedItem, datas]);



  const formatDate = (dateString) => {
    const year = dateString.substr(0, 4);
    const month = dateString.substr(4, 2);
    const day = dateString.substr(6, 2);
    return `${year}-${month}-${day}`;
  };

  const formatTime = (time) => {
    const formattedTime = time.substr(0, 2) + ":" + time.substr(2);
    return formattedTime;
  };

  if (!Array.isArray(datas)) {
    return <p>유효한 데이터가 아닙니다.</p>;
  }

  return (
    <main className={styles.container}>
      <form>
      <div className={styles.grid}>
          <div>
            <select id="sel" name="sel" onChange={showItem}>
              <option value="">선택</option>
              {opTags.map((tag) => (
                <option key={tag.key} value={tag.value}>
                  {tag.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">항목</th>
            <th scope="col">예측일자</th>
            <th scope="col">예측시각</th>
            <th scope="col">예보 값</th>
          </tr>
        </thead>
        <tbody>
         
            {filteredDatas.map((item, index) => (
                <tr key={index}>
                    <td>{item.category}</td>
                    <td>{formatDate(item.fcstDate)}</td>
                    <td>{formatTime(item.fcstTime)}</td>
                    <td>{item.fcstValue}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
};

export default FcstTable;
