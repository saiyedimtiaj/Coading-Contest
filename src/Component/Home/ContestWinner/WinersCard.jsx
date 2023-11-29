/* eslint-disable react/prop-types */
import { Grid, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const WinersCard = ({ winner }) => {
  return (
    <Grid item md={4} xs={6} sm={12}>
      <Card>
        <CardMedia
          component="img"
          alt="green iguana"
          sx={{ height: "200px" }}
          image={winner.image}
        />
        <CardContent>
          <Stack
            spacing={2}
            direction="row"
            useFlexGap
            alignItems={"center"}
            sx={{my:2}}
          >
            <img style={{width:'50px',borderRadius:'50%',height:'50px',backgroundSize:'cover'}} src={winner?.winnerImage} alt="" />
            <Typography variant="h5">
                {winner.winnerName}
            </Typography>
          </Stack>
          <Typography gutterBottom variant="h5" component="div">
            Attemped Contest : {winner?.participationCount}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {winner?.description.slice(0,70)}...
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default WinersCard;
