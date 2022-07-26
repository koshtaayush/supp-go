import { Card } from "@mui/material";

const Filter = ({ selectedFilter, onChange }) => {
  return (
    <Card
      sx={{
        display: "flex",
        columnGap: "10px",
        justifyContent: "center",
        fontSize: "18px",
      }}
    >
      {["Most Viewed", "Most Recent", "Hot"].map((c) => {
        return (
          <FilterCard
            isSelected={selectedFilter === c}
            onChange={() => onChange(c)}
          >
            {c}
          </FilterCard>
        );
      })}
    </Card>
  );
};

// Most Recent
//   <Card>Hot</Card>
//   <Card>Most Viewed</Card>

const FilterCard = ({ children, isSelected = false, onChange }) => {
  return (
    <Card
      sx={{
        display: "flex",
        border: "1px solid black",
        justifyContent: "end",
        fontSsize: " 18px",
        background: isSelected ? "#bcbcfb" : "white",
        padding: "20px",
        cursor: "pointer",
      }}
      onClick={onChange}
    >
      {children}
    </Card>
  );
};

export default Filter;
