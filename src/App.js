import { Container } from "./App.styled.js";
import TableNotes from "./components/TableNotes";
import TableSummary from "./components/TableSummary";

function App() {
  return (
    <Container>
      <TableNotes />
      <TableSummary />
    </Container>
  );
}

export default App;
