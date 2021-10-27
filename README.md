<div id="top"></div>

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url] [![MIT License][license-shield]][license-url] [![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">Satelite Engineer React Template</h3>

  <p align="center">
    This is a template to use with Satelite Engineer to quickly create a React web application
    <br />
    <a href="https://github.com/satelite-digital/engineer-template-react"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/satelite-digital/engineer-template-react">View Demo</a>
    ·
    <a href="https://github.com/satelite-digital/engineer-template-react/issues">Report Bug</a>
    ·
    <a href="https://github.com/satelite-digital/engineer-template-react/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#available-scripts">Available Scripts</a></li>
      </ul>
    </li>
    <li>
      <a href="#customization">Customization</a>
      <ul>
        <li><a href="#templates">Templates</a></li>
        <li><a href="#models">Models</a></li>
        <li>
          <a href="#pages">Pages</a>
          <ul>
            <li><a href="#state">State</a></li>
            <li><a href="#hooks">Hooks</a></li>
            <li><a href="#actions">Actions</a></li>
            <li><a href="#components">Components</a></li>
          </ul>
        </li>
        <li><a href="#plugins">Plugins</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

# About The Project

![Template Screenshot][product-screenshot]

Every time we start a new web application we end up doing the same tasks over and over again. [Satelite Engineer](https://github.com/satelite-digital/engineer) aims to solve this issue by providing a tool that allows any developer to turn any existing codebase into a powerful application template, or create one from scratch.

This template serves as an example of how you can build a frontend template using React. You can also fork, clone or download and use as a starting point for creating your own templates.

<p align="right">(<a href="#top">back to top</a>)</p>

## Built With

- [Satelite Engineer](https://github.com/satelite-digital/engineer)
- [React](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/)
- [React Router](https://reactrouter.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

# Getting Started

The easiest way to start using this template is through the [Satelite Engineer CLI](https://github.com/satelite-digital/engineer-cli):

```bash
# In an empty directory:
npx engineer init https://github.com/satelite-digital/engineer-template-react/archive/main.zip

# Build with default setup:
npx engineer build

```

To customize this template jump to [Customization](#customization).

<!-- AVAILABLE SCRIPTS -->
## Available Scripts

In the project directory, you can run:

<table>
  <thead>
    <th>Command</th>
    <th>Description</th>
  </thead>
  <tbody>
    <tr>
      <td width="20%"><code>yarn start</code></td>
      <td>Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.</td>
</tr>
<tr>
    <td width="20%"><code>yarn test</code></td>
    <td>Launches the test runner in the interactive watch mode.
See the section about running tests for more information.</td>
</tr>
<tr>
    <td width="20%"><code>yarn build</code></td>
    <td>Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.</td>
</tr>
<tr>
    <td width="20%"><code>yarn eject</code></td>
    <td>Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.</td>
</tr>

  </tbody>
</table>

[More inofrmation on Create React App](https://create-react-app.dev/docs/getting-started)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CUSTOMIZATION -->
# Customization

There are three main resources you can customize:

- Templates
- Models
- Pages

You'll find all of these [here.](./.satelite/engineer/)

## Templates

This template comes with two built-in templates. One used to generate the `App.js` which defines the routes of the application. The other is used to render every page that can be accessible through the routes.

The templating engine used in this template is [Handlebars](https://handlebarsjs.com/).

To use a custom templating engine read [this section of the Satelite Engineer docs.](https://github.com/satelite-digital/engineer#options)

## Models

Models represent the domain of your application. This could be shared with a backend template to serve as single source of thruth.

To customize or add new models simply add a new `*.js` file in `./.satelite/engineer/models` that exports an object with the following schema:

```

```

The `engineer.config.js` file at the root of this template is setup to automatically fetch all models from the specified folder.

## Pages

A Page is an object that describes the a component that will be rendered when a route is visited. The Page object includes the route definition and other relevant metadata.

To add new pages to your project follow the same process as with models. Pages can be found in `./.satelite/engineer/pages/`.

A Page object should have the following schema:

```

```

A page might reference Components, Hooks and Actions. You can also define a State and a set of Actions. These are just references to code that should already exist, or can be added through plugins or simply defined inline.

### State

This section is a work in progress

### Hooks

This section is a work in progress

### Actions

This section is a work in progress
### Components

Visit the [components documentation here.](./docs/COMPONENTS.md)

### Plugins

This section is a work in progress

<!-- ROADMAP -->
# Roadmap

- [] Improve documentation
  - [] Add Changelog
  - [] Add JSON schemas
  - [] Add more components
  - [] Improve components documentation
  - [] Describe State, Hooks, Actions and Plugins

See the [open issues](https://github.com/satelite-digital/engineer-template-react) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTRIBUTING -->
# Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
# License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

# Contact

Erick Ruano - [@\_erickruano](https://twitter.com/_erickruano) - erick.ruano@satelite.digital

Project Link: [https://github.com/satelite-digital/engineer-template-react](https://github.com/satelite-digital/engineer-template-react)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/satelite-digital/engineer-template-react.svg?style=for-the-badge
[contributors-url]: https://github.com/satelite-digital/engineer-template-react/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/satelite-digital/engineer-template-react.svg?style=for-the-badge
[forks-url]: https://github.com/satelite-digital/engineer-template-react/network/members
[stars-shield]: https://img.shields.io/github/stars/satelite-digital/engineer-template-react.svg?style=for-the-badge
[stars-url]: https://github.com/satelite-digital/engineer-template-react/stargazers
[issues-shield]: https://img.shields.io/github/issues/satelite-digital/engineer-template-react.svg?style=for-the-badge
[issues-url]: https://github.com/satelite-digital/engineer-template-react/issues
[license-shield]: https://img.shields.io/github/license/satelite-digital/engineer-template-react.svg?style=for-the-badge
[license-url]: https://github.com/satelite-digital/engineer-template-react/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/erick-ruano-fullstack
[product-screenshot]: ./docs/screenshot.png
