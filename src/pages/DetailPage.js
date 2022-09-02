import React from "react";
import jobs from "../data.json";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import DetailCard from "../components/DetailCard";

function DetailPage() {
  const params = useParams();
  const jobId = params.id;
  const job = jobs.find((job) => job.id === jobId);
  if (!job)
    return (
      <Typography variant="h5" component="div" sx={{ minHeight: 70 }}>
        No job found
      </Typography>
    );
  return (
    <Container>
      <DetailCard job={job} />
    </Container>
  );
}

export default DetailPage;
