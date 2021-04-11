// const useStyles = makeStyles(() => ({
//     card: {
//       border: '2px solid',
//       borderColor: '#E7EDF3',
//       borderRadius: 16,
//       transition: '0.4s',
//       '&:hover': {
//         borderColor: '#5B9FED',
//       },
//     },
//   }));

//   <Grid container spacing={4} justify={'center'}> 

//   <Grid style={{border: '2px solid #cfe8fc', height: '100vh'}} item xs={12} sm={8} lg={5}>
// <Column className={styles.card} p={{ xs: 0.5, sm: 0.75, lg: 1 }} gap={gap}>
//    </Colmun>
//   </Grid>
//   </Grid>

import React, { Component } from 'react'


export default class Contaner extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            return (
                <Grid  style={{paddingBottom: "2rem"}}>
                 
                 <Card className={classes.root}>
                   <div className={classes.details}>
                   <CardHeader
                   style={{background : "#ccc"}}
                     avatar={
                       <Avatar aria-label="recipe" className={classes.avatar}>
                         R
                       </Avatar> }
                       title= {
                         <Typography component="span" variant="h5">
                         Jhon Doe Asks
                       </Typography>
                       }
                     />
                     <CardContent className={classes.content}>
                     <form onSubmit={handleSubmit}>
                      <FormControl component="fieldset" error={error} className={classes.formControl}>
                        <FormLabel component="legend">Pop quiz: Material-UI is...</FormLabel>
                        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                          <FormControlLabel value="best" control={<Radio />} label="The best!" />
                          <FormControlLabel value="worst" control={<Radio />} label="The worst." />
                        </RadioGroup>
                        <FormHelperText>Choose one of these options</FormHelperText>
                        <Button type="submit" variant="outlined" color="primary" className={classes.button}>
                          Check Answer
                        </Button>
                      </FormControl>
                    </form>
                     </CardContent>
                     
                   </div>
                  
                 </Card>
                 </Grid>
                
                  );
    }
}
