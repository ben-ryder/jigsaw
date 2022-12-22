'use strict';

const path = require('path');
const fractal = module.exports = require('@frctl/fractal').create();


const statuses = {
    development: {
        label: "In Development",
        description: "In development and not ready for use.",
        color: "#FF3333"
    },
    unstable: {
        label: "Unstable",
        description: "Is ready for use but is unstable and subject to change.",
        color: "#FF9233"
    },
    stable: {
        label: "Stable",
        description: "Stable and ready to use.",
        color: "#29CC29"
    }
}

// Basic Configuration
fractal.set('project.title', '@ben-ryder/jigsaw');

// Component Config
fractal.components.set('path', path.join(__dirname, 'patterns'));
fractal.components.set('label', 'Patterns');
fractal.components.set('title', 'Patterns');
fractal.components.set('statuses', statuses);
fractal.components.set('default.status', 'development');

// Docs Config
fractal.docs.set('path', path.join(__dirname, 'docs'));
fractal.docs.set('statuses', statuses);
fractal.docs.set('default.status', 'development');


// Web UI configuration
fractal.web.set('static.path', path.join(__dirname, 'dist'));
fractal.web.set('builder.dest', path.join(__dirname, 'build'));