import { useSelector } from "react-redux";

import columns from "../../columnsSummary.json";
import { getNotes } from "../../redux/noteSelector";
import Table from "../Table";

const TableSummary = () => {
  let dataNotes = useSelector(getNotes);

  const getDataSummary = dataNotes?.reduce((acc, { category, archived }) => {
    const findNote = acc.find((element, idx) => {
      if (element?.category === category) {
        archived ? (acc[idx].archived += 1) : (acc[idx].active += 1);
        return element?.category === category;
      }
    });
    if (!findNote) {
      acc.push({
        category,
        archived: archived ? 1 : 0,
        active: !archived ? 1 : 0,
      });
    }
    return acc;
  }, []);

  getDataSummary.sort((a, b) => {
    if (a.category > b.category) {
      return 1;
    }
    if (a.category < b.category) {
      return -1;
    }
    return 0;
  });

  return (
    <>
      <Table columns={columns} rows={getDataSummary}></Table>
    </>
  );
};

export default TableSummary;
