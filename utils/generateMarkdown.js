// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
  ### ${data.description}

### Table of Contents: 
[Description](#Description)

[Installation](#Installation)

[Usage](#Usage)

[Contribution-Guidelines](#Contribution-Guidelines)

[Tests](#Tests)

[License](#License)

[Questions](#Questions)

## Installation
  ### ${data.install}
## Usage
  ### ${data.usage}
## Contribution-Guidelines
  ### ${data.contribution}
## Tests
  ### ${data.tests}
## License
  ### ${data.license}
## Questions
  ### ${data.questions}

`;
}

module.exports = generateMarkdown;
