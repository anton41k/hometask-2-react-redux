import { v4 as uuidv4 } from "uuid";
import Td from "../Td/Td";
import Th from "../Th/Th";
import { TableStyle, Tbody, Thead, Tr } from "./Table.styled";

const Table = ({ columns, rows }) => {
  return (
    <>
      <TableStyle>
        <Thead>
          <Tr>
            {columns.map((column, idx) => (
              <Th key={uuidv4()} column={column}></Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row, idx) => (
            <Tr key={uuidv4()}>
              {columns.map((column, idx) => (
                <Td key={uuidv4()} row={row} column={column} idx={idx}></Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </TableStyle>
    </>
  );
};

export default Table;
