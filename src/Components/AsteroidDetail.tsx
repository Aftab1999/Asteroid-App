import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";

const AsteriodDetail: React.FC<any> = () => {

  const { id } = useParams<any>();
  const navigate = useNavigate()
  let API_KEY = "xZtbcTyjwGtiiOswCsopAp2gTc7xKXfggsqPVQnP";
  const [data, setData] = React.useState<any>([]);

  useEffect(() => {
    itemData();
  }, []);

  const itemData = async () => {
    const res = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${API_KEY}`
    );
    console.log(res.data, "res.data");
    setData(res.data);
  };

  return (
    <div>
      <Container sx={{ minWidth: 300 }}>
        <Box
          style={{
            backgroundColor: "rgb(235, 181, 232)", 
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" data-testid="para">
            Asteroid Data
          </Typography>
          <div style={{ margin: "10px" }}>
            <strong>Name :-</strong>
            {data.name}
          </div>
          <div style={{ margin: "10px" }}>
            <strong>Nasa Jpl Url :-</strong>
            {data.nasa_jpl_url}
          </div>
          <div style={{ margin: "10px" }}>
            <strong>Is Potentially Hazardous Asteroid :-</strong>
            {data.is_potentially_hazardous_asteroid ? "true" : "false"}
          </div>
         {/* <Link style={{ textDecoration: "none" }} to="/"> */}
            <Button 
              style={{ margin: "10px" }}
              variant="contained"
              data-testid="back"
              onClick = {()=> navigate('/')}
            >
              Go Back
            </Button>
          {/* </Link> */}
        </Box>
      </Container>
    </div>
  );
};

export default AsteriodDetail;
