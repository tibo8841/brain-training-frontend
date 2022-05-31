import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";

export default function MultiplayerResults() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" align="center" gutterBottom marginTop={"5%"}>
        Results!!!
      </Typography>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        marginTop={"15%"}
        marginBottom={"15%"}
      >
        Alex Wins!!! - u just got alex'd
      </Typography>
      <List>
        <ListItem sx={{ backgroundColor: "#FBE966 ", marginBottom: "2%" }}>
          <ListItemText align="center">Alex</ListItemText>
        </ListItem>
        <ListItem sx={{ backgroundColor: "#CECEC9  ", marginBottom: "2%" }}>
          <ListItemText align="center">Kamilah</ListItemText>
        </ListItem>
        <ListItem sx={{ backgroundColor: "#D49454 ", marginBottom: "2%" }}>
          <ListItemText align="center">
            Player Profile component would go here, with picture and stuff
          </ListItemText>
        </ListItem>
      </List>
      <Box mt={"10%"}>Chat component would go down here</Box>
    </Container>
  );
}

// -MultiplayerResults
//     -Display who won
//     -Display rankings of everyone
//     -Start new game button?
//     -Chat component displayed
