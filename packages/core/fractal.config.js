'use strict';

const path = require('path');
const fractal = module.exports = require('@frctl/fractal').create();
const mandelbrot = require('@frctl/mandelbrot');

const statuses = {
    development: {
        label: "In Development",
        description: "In development and not ready for use.",
        color: "#df3333"
    },
    unstable: {
        label: "Unstable",
        description: "Is ready for use but is unstable and subject to change.",
        color: "#e1762b"
    },
    stable: {
        label: "Stable",
        description: "Stable and ready to use.",
        color: "#3d854d"
    }
}

// Basic Configuration
fractal.set('project.title', 'Jigsaw');

// Component Config
fractal.components.set('path', path.join(__dirname, 'patterns'));
fractal.components.engine("@frctl/nunjucks");
fractal.components.set("ext", ".njk");
fractal.components.set('label', 'Patterns');
fractal.components.set('title', 'Patterns');
fractal.components.set('statuses', statuses);
fractal.components.set('default.status', 'development');

// Docs Config
fractal.docs.set('path', path.join(__dirname, 'docs'));
fractal.docs.set('statuses', statuses);
fractal.docs.set('default.status', 'development');


// Web UI Configuration
fractal.web.set('static.path', path.join(__dirname, 'dist'));
fractal.web.set('builder.dest', path.join(__dirname, 'build'));

// Theme Configuration
const jigsawTheme = mandelbrot({
    nav: ['search', 'docs', 'components', 'information'],
    panels: ['notes', 'html', 'view', 'context'],
    information: [
        {
            label: 'Version',
            value: require('./package.json').version
        },
        {
            label: 'Published',
            value: new Date(),
            type: 'time', // Outputs a <time /> HTML tag
            format: (value) => {
                return value.toLocaleDateString('en');
            }
        }
    ],
    styles: [
        'default',
        '/css/development.css'
    ]
});
fractal.web.theme(jigsawTheme);
