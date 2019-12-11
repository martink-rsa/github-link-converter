import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Paper, TextField, Button, Grid } from '@material-ui/core';

const ghPagesRegex = /github\.io/;
const ghLinkRegex = /github\.com/;
const ghCombinedRegex = /github\.(io|com)/;

class LinkConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputURL: 'www.github.com',
      convertedURL: '',
      allowConvert: false
    };
  }

  inputValidation = inputURL => ghCombinedRegex.test(inputURL);

  handleChange = event => {
    const {
      target: { value: inputURL }
    } = event;
    this.setState(() => {
      return {
        inputURL,
        allowConvert: this.inputValidation(inputURL)
      };
    });
  };

  convertURL = () => {
    const inputURL = this.state.inputURL.slice(0);
    console.log(inputURL);
  };

  render() {
    return (
      <div>
        <Typography color="primary" variant="h4" component="h1" gutterBottom>
          {this.props.appTitle}
        </Typography>
        <Typography color="primary" component="p">
          Convert between a GitHub Pages and Repo link
        </Typography>
        <Container maxWidth="sm">
          <Box my={4}>
            <Paper>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    id="url-input"
                    label="Enter URL"
                    // placeholder="https://github.com/martink-rsa/github-link-converter"
                    variant="outlined"
                    autoFocus
                    fullWidth
                    value={this.state.inputURL}
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="url-result"
                    label="Result"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.convertURL}
                    disabled={!this.state.allowConvert}
                  >
                    Convert URL
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    disabled={!this.state.allowConvert}
                  >
                    Convert &amp; Go
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Container>
      </div>
    );
  }
}

export default LinkConverter;
