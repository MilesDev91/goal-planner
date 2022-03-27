import { Box, Button, Typography } from "@mui/material";
import LandingImage from "../../images/pexels-tetyana-kovyrina-1439087.jpg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

export default function Landing(): JSX.Element {
  const navigate = useNavigate();

  const getStartedHandler = () => {
    navigate("/sign-up");
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${LandingImage})`,
        width: "100%",
        height: "600px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ alignSelf: "center", textAlign: "center" }}>
        <Typography variant="h4">Success Takes Planning</Typography>
        <Button
          variant="contained"
          sx={{
            alignSelf: "center",
            mt: 1,
          }}
          onClick={() => getStartedHandler()}
        >
          <Typography>Get Started</Typography> <ChevronRightIcon />
        </Button>
      </Box>
    </Box>
  );
}
