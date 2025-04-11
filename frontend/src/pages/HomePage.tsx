import { Typography, Button, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function HomePages() {
  return (
    <Box className="w-full max-w-6xl mx-auto p-8 md:p-30 ml-2">
      <Typography
        variant="h1"
        sx={{
          color: "white",
          fontWeight: "bold",
          mb: 4,
          fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
          "& span": { color: "#6366F1" },
        }}
      >
        Venditto <span>Giovanni</span>
      </Typography>

      <Typography
        variant="h6"
        sx={{
          color: "white",
          maxWidth: "800px",
          mb: 6,
          lineHeight: 1.8,
        }}
      >
        Ciao, sono un junior developer specializzato in React e Material UI. Con
        una solida formazione in sviluppo frontend e un approccio orientato alla
        soluzione dei problemi, trasformo concetti in interfacce intuitive e
        responsive. Alla ricerca di nuove sfide per crescere professionalmente.
      </Typography>

      <Button
        variant="contained"
        size="large"
        endIcon={<ArrowForwardIcon />}
        sx={{
          bgcolor: "#6366F1",
          py: 1.5,
          px: 4,
          borderRadius: 2,
          "&:hover": {
            bgcolor: "#4F46E5",
          },
        }}
      >
        Scopri i miei progetti
      </Button>
    </Box>
  );
}

export default HomePages;
