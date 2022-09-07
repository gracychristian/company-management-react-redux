import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";

const Cards = ({ header, value, footer }) => {
  return (
    <Card className="border mb-5">
      <CardHeader
        title={header}
        className="border-b bg-gray-300"
        sx={{
          p: ".5rem",
        }}
      />
      <CardContent sx={{ p: "5px 1rem" }}>
        <Typography sx={{ fontWeight: 600 }}>Name :</Typography>
        <Typography>{value.address}</Typography>
      </CardContent>
      <CardContent sx={{ p: "5px 1rem" }}>
        <Typography sx={{ fontWeight: 600 }}>Address :</Typography>
        <Typography>{value.name}</Typography>
      </CardContent>
      <CardContent sx={{ p: "5px 1rem" }}>
        <Typography sx={{ fontWeight: 600 }}>Revenue :</Typography>
        <Typography>{value.revenue}</Typography>
      </CardContent>
      <CardContent sx={{ p: "5px 1rem 1rem 1rem" }}>
        <Typography sx={{ fontWeight: 600 }}>Phone :</Typography>
        <Typography>{value.phone}</Typography>
      </CardContent>
      <CardActions className="text-blue-500 border-t bg-gray-300">
        {footer}
      </CardActions>
    </Card>
  );
};

export default Cards;
