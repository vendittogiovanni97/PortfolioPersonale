import { Container } from "@mui/material";
import NavBar from "./components/NavBarComponents";
import CardProject from "./components/CardProject";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          background: "radial-gradient(circle, #191970 0%, #000000 50%)",
          minHeight: "100vh",
        }}
      >
        <NavBar />
        <HomePage />
        <CardProject />
      </Container>
    </>
  );
}

export default App;
