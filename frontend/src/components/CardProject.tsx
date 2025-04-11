import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";

interface Project {
  id: number;
  name: string;
  language: string;
  description: string | null;
}

export default function CardProject() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<unknown>(null);
  const user = "vendittogiovanni97";

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${user}/repos?sort=updated&per_page=3`
        );

        if (!response.ok) {
          throw new Error("Errore nel recupero dei progetti");
        }

        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProject();
  }, [user]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <>
      {projects.map((project) => (
        <Card
          key={project.id}
          sx={{
            maxWidth: 345,
            background: "none",
            border: 1,
            borderColor: "red",
          }}
        >
          <CardContent>
            <Typography
              sx={{ color: "white" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {project.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>
              {project.description}
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>
              {project.language}
            </Typography>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
