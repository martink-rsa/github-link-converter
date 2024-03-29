/* eslint-disable no-useless-escape */
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
// eslint-disable-next-line object-curly-newline
import { Paper, TextField, Button, Grid, Link } from '@material-ui/core';

/*
TEST STRINGS:
martink-rsa.github.io
martink-rsa.github.io/
martink-rsa.github.io/ToDoList
martink-rsa.github.io/ToDoList/page
http://martink-rsa.github.io/ToDoList
https://martink-rsa.github.io/ToDoList

github.com
github.com/
github.com/martink-rsa
github.com/martink-rsa/
github.com/martink-rsa/
github.com/martink-rsa/ToDoList
github.com/martink-rsa/ToDoList/page/
http://github.com/martink-rsa/ToDoList
https://github.com/martink-rsa/ToDoList
https://www.github.com/martink-rsa/ToDoList
https://www.github.com/martink-rsa/ToDoList/page
*/

const ghPagesRegex = /github\.io/;
const ghLinkRegex = /github\.com/;
const ghPagesGroupedRegex = /^(https?\:\/\/)?([a-zA-Z0-9\-]*)(\.github\.io\/)([a-zA-Z0-9\-\_\/]+)/;
const ghRepoGroupedRegex = /^(https?\:\/\/)?(w{3}\.)?(github\.com\/)([a-zA-Z0-9\-]*)\/([a-zA-Z0-9\-\_\/]+)/;

class LinkConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputURL: '', // Set to empty for default
      convertedURL: '',
      allowConvert: false, // Set to false for default
    };
  }

  inputValidation = (inputURL) => {
    console.log(inputURL);
    console.log(ghPagesGroupedRegex.test(inputURL));
    // eslint-disable-next-line implicit-arrow-linebreak
    return (
      ghPagesGroupedRegex.test(inputURL) || ghRepoGroupedRegex.test(inputURL)
    );
  };

  handleChange = (event) => {
    const {
      target: { value: inputURL },
    } = event;
    this.setState(() => ({
      inputURL: inputURL.trim(),
      allowConvert: this.inputValidation(inputURL.trim()),
    }));
  };

  convertURL = () => {
    let { inputURL } = this.state;
    inputURL = inputURL.slice(0);
    if (inputURL.match(ghPagesRegex)) {
      const username = inputURL.match(ghPagesGroupedRegex)[2];
      const folders = inputURL.match(ghPagesGroupedRegex)[4];
      const newURL = `https://www.github.com/${username}/${folders}`;
      this.setState({ convertedURL: newURL });
    } else if (inputURL.match(ghLinkRegex)) {
      const username = inputURL.match(ghRepoGroupedRegex)[4];
      const folders = inputURL.match(ghRepoGroupedRegex)[5];
      const newURL = `https://${username}.github.io/${folders}`;
      this.setState({ convertedURL: newURL });
    }
  };

  openLink = () => {
    this.convertURL();
  };

  render() {
    const { appTitle } = this.props;
    const { inputURL, convertedURL, allowConvert } = this.state;
    return (
      <div>
        <Typography color="primary" variant="h4" component="h1" gutterBottom>
          {appTitle}
        </Typography>
        <Typography color="primary" component="p">
          Convert between GitHub Pages and GitHub Repository links.
        </Typography>
        <Container maxWidth="sm">
          <Box my={4}>
            <Paper>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    id="url-input"
                    label="Enter URL"
                    variant="outlined"
                    autoFocus
                    fullWidth
                    value={inputURL}
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="url-result"
                    label="Result"
                    variant="outlined"
                    fullWidth
                    disabled={!allowConvert}
                    value={convertedURL}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.convertURL}
                    disabled={!allowConvert}
                  >
                    Convert URL
                  </Button>
                  {allowConvert ? (
                    <Link href={convertedURL} target="_blank" rel="noopener">
                      <Button
                        variant="contained"
                        color="primary"
                        disabled={!allowConvert}
                        onClick={this.openLink}
                      >
                        Convert &amp; Go
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={!allowConvert}
                      onClick={this.openLink}
                    >
                      Convert &amp; Go
                    </Button>
                  )}
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Container>
      </div>
    );
  }
}

LinkConverter.propTypes = {
  appTitle: PropTypes.string.isRequired,
};

export default LinkConverter;
