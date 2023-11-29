import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Container, Grid, Typography } from '@mui/material';
import WinersCard from './WinersCard';

const ContestWinner = () => {
    const axiosPublic = useAxiosPublic();
    const {  data:courses=[] } = useQuery({
        queryKey: ['winning-contest',],
        queryFn:  async () => {
            const res = await axiosPublic.get(`/courses`)
            return res.data
        }
      })
      const winner = courses?.filter(contest=>contest.winnerStatus === 'selected')
      console.log(winner);
    return (
      <Container style={{margin:'40px auto'}} maxWidth="lg">
        <Grid sx={{textAlign:'center',marginY:'36px'}}>
            <Typography variant='h2'>
                Our Winner Contestor
            </Typography>
            <Typography sx={{maxWidth:'750px', margin:'0px auto'}}>
            Triumphs in the Realm of Algorithms and Logic"? This title aims to evoke a sense of grandeur and excitement, inspiring participants to engage in epic coding battles and aspire to achieve triumph in your contest.
            </Typography>
        </Grid>
         <Grid container spacing={2}>
         {
            winner?.map(winner=><WinersCard key={winner?._id} winner={winner} />).slice(0,3)
         }
         </Grid>
      </Container>
    );
};

export default ContestWinner;