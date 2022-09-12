import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import jobs from "../data.json";
import JobCards from "../components/JobCards";
import Container from "@mui/material/Container";
import PaginationBar from "../components/PaginationBar";
import { useContext } from "react";
import { ModeContext } from "../App";

const totalPages = Math.round(jobs.length / 5);

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { searchInput } = useContext(ModeContext);

  return (
    <Container>
      <Grid container spacing={2} mt={2}>
        {jobs
          .filter((job) => {
            let filter = searchInput;
            if (!filter) return true;
            let name = job.title.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .slice((currentPage - 1) * 5, currentPage * 5)
          .map((job) => (
            <Grid item xs={12} lg={4} key={job.id}>
              <JobCards job={job} />
            </Grid>
          ))}
      </Grid>
      {searchInput ? (
        <></>
      ) : (
        <PaginationBar
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}
    </Container>
  );
}

export default HomePage;
