import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function BasicCard({ job }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ minWidth: 150, Height: 200 }}>
      <CardContent sx={{ minHeight: 150 }}>
        <Typography variant="h5" component="div" sx={{ minHeight: 70 }}>
          {job.title}
        </Typography>{" "}
        <Typography variant="body1">Skills:</Typography>{" "}
        {job.skills ? (
          job.skills
            .slice(0, 4)
            .map((skill) => <Typography variant="body3">{skill}</Typography>)
        ) : (
          <></>
        )}
        <Typography variant="body1">City:</Typography>{" "}
        <Typography variant="body3"> {job.city}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          onClick={() => navigate(`/jobs/${job.id}`)}
        >
          More Detail
        </Button>
      </CardActions>
    </Card>
  );
}
