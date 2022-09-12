import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import ButtonModal from "./ButtonModal";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#999900" : "#80AAFF",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
  borderRadius: 15,
}));
export default function BasicCard({ job }) {
  return (
    <Card sx={{ minWidth: 200, Height: 200 }}>
      <CardContent sx={{ minHeight: 150 }}>
        <Typography fontSize={25} component="div" sx={{ minHeight: 70 }}>
          {job.title}
        </Typography>{" "}
        <Typography variant="body1">Skills:</Typography>{" "}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 1, md: 2 }}
        >
          {" "}
          {job.skills ? (
            job.skills.slice(0, 4).map((skill) => (
              <Item key={skill}>
                <Typography fontSize={10}>{skill}</Typography>
              </Item>
            ))
          ) : (
            <>None</>
          )}
        </Stack>
        <Typography variant="body1">City:</Typography>{" "}
        <Typography variant="body3"> {job.city}</Typography>
      </CardContent>
      <CardActions>
        <ButtonModal job={job} />
      </CardActions>
    </Card>
  );
}
