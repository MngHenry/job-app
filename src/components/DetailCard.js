import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ job }) {
  return (
    <Card sx={{ minWidth: 200 }} mt={2}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {job.title}
          </Typography>
          <Typography variant="body2" color="text.primary">
            Description: {job.description}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Skills:{" "}
          </Typography>
          {job.skills.map((skill) => (
            <Typography variant="body2" component="div">
              {skill}
            </Typography>
          ))}
          <Typography gutterBottom variant="body2" component="div">
            City: {job.city}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Salary Range: ${parseInt(job.salaryLow)} to ${job.salaryHigh}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
