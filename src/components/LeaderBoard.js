import React, { Fragment } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import NavBar from "../layout/NavBar";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    width: "75%",
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  root: {
    maxWidth: "600px",
    margin: "auto",
  },
  title: {
    marginTop: "5rem",
  },
});

const LeaderBoard = ({ usersInfo, history }) => {
  const classes = useStyles();
  console.log({ usersInfo });
  const sortUsers = usersInfo.sort((a, b) => b.total - a.total);
  return (
    <Fragment>
      <NavBar history={history} />
      <Typography
        className={classes.title}
        align="center"
        variant="h3"
        gutterBottom
      >
        The Leader Board
      </Typography>
      <TableContainer className={classes.root}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              {/* <StyledTableCell>Dessert (100g serving)</StyledTableCell> */}
              <StyledTableCell>Users</StyledTableCell>
              <StyledTableCell align="right">
                Answered Questions
              </StyledTableCell>
              <StyledTableCell align="right">Created Questions</StyledTableCell>
              <StyledTableCell align="right">Score</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortUsers.map((user, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {user.name}
                </StyledTableCell>

                <StyledTableCell align="right">
                  {user.answersLength}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {user.questionsLength}
                </StyledTableCell>
                <StyledTableCell align="right">{user.total}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    usersInfo: Object.values(users).map((user) => {
      return {
        name: user.name,
        avatarUrl: user.avatarURL,
        questionsLength: user.questions.length,
        answersLength: Object.keys(user.answers).length,
        total: user.questions.length + Object.keys(user.answers).length,
      };
    }),
  };
};

export default connect(mapStateToProps)(LeaderBoard);
