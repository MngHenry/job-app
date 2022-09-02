import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import jobs from "../data.json";
import JobCards from "../components/JobCards";
import Container from "@mui/material/Container";
import PaginationBar from "../components/PaginationBar";

const totalPages = Math.round(jobs.length / 5);

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  function handlePagination(event) {
    setCurrentPage(parseInt(event.target.textContent));
  }

  return (
    <Container>
      <Grid container spacing={2} mt={2}>
        {jobs.slice((currentPage - 1) * 5, currentPage * 5).map((job) => (
          <Grid item xs={12} lg={4}>
            <JobCards job={job} />
          </Grid>
        ))}
      </Grid>
      <PaginationBar
        totalPages={totalPages}
        handlePagination={handlePagination}
      />
    </Container>
  );
}

export default HomePage;
