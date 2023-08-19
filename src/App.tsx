import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<AboutHome />} />
      </Routes>
    </Container>
  );
};
export default App;
