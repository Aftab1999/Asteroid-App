import { Box, Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

interface IState {
  id: string;
}
const Asteroid = () => {
  const [loading, setLoading] = React.useState(false);
  let navigate = useNavigate();
  let API_KEY = "xZtbcTyjwGtiiOswCsopAp2gTc7xKXfggsqPVQnP";
  const [id, setId] = React.useState<IState["id"]>("");

  const randomData = () => {
    setLoading(true);
    axios
      .get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`)
      .then((res) => {
        const data = res.data.near_earth_objects;
        const result = data[Math.floor(Math.random() * data.length)].id;
        console.log(result);
        navigate(`/asteroiddetails/${result}`);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const handleSubmit = () => {
    navigate(`/asteroiddetails/${id}`);
  };

  return (
    <Container
    
      maxWidth="xs"
      sx={{
        marginTop: "100px",
        height: "400px",
        border: '1px solid black',
        // bgcolor: "rgb(223, 175, 222)" 
     
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Asteroid
        </Typography>
        <TextField
          sx={{ margin: "25px" }}
          label="Enter Asteroid ID"
          variant="standard"
          value={id}
          data-testid="input"
          onChange={(e) => setId(e.target.value)}
        ></TextField>
        <Button
          id="submit"
          data-testid="submit"
          variant="outlined"
          onClick={ handleSubmit}
          disabled={id === ""}
        >
          Submit
        </Button>
        <Button
          id="random-asteroid"
          onClick={randomData}
          title="Random"
          variant="contained"
        >
          Random Asteroid
        </Button>
        {loading ? <CircularProgress /> : null}
      </Box>
    </Container>
  );
};
export default Asteroid;

// https://api.nasa.gov/planetary/apod?api_key=xZtbcTyjwGtiiOswCsopAp2gTc7xKXfggsqPVQnP

// xZtbcTyjwGtiiOswCsopAp2gTc7xKXfggsqPVQnP
