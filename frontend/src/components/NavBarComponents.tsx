import { Box, Button, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

function NavBar() {
  const pages = ["Home", "Progetti", "Contatti"];

  return (
    <Box
      sx={{
        width: "100%",
        height: "70px",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-beetween",
        px: 3,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#FDF5E5",
          fontWeight: "bold",
        }}
      >
        Portofolio
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", flex: 1 }}>
        {pages.map((page) => (
          <Button
            key={page}
            sx={{
              color: "#FDF5E5",
              textTransform: "none",
              mx: 1,
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            {page}
          </Button>
        ))}
      </Box>
      <Link
        sx={{ color: "white" }}
        href="https://github.com/vendittogiovanni97"
      >
        <GitHubIcon
          fontSize="large"
          sx={{
            ml: 2,
          }}
        />
      </Link>
    </Box>
  );
}

export default NavBar;
