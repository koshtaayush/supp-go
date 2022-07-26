import { Card, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import Filter from "../components/Filters";
import Header from "../components/Header";
import Page from "../components/Pagination";
import PostCard from "../components/PostCard";
import { posts } from "../mocks/posts";
import "./Home.css";

function Home() {
  const [currentFilter, setCurrentFilters] = useState("Most Recent");
  console.log("[post", posts);

  const onFilterChange = (name) => {
    console.log("name", name);
    setCurrentFilters(name);
  };
  return (
    <div className="home-page">
      <Header />
      <Filter onChange={onFilterChange} selectedFilter={currentFilter} />
      <Card
        sx={{
          paddingTop: "10px",
        }}
      >
        <Divider />
        {posts?.map((post) => (
          <PostCard data={post} />
        ))}
      </Card>
      <Page />
    </div>
  );
}

export default Home;
