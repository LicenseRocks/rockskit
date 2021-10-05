<p align="center">
  <img src="https://license.rocks/wp-content/uploads/2020/08/logo-horizontal.png" width="250">
</p>

<h1 align="center">RocksKit</h1>

<div align="center">

license.rocks GmbH design system components for React.js.

</div>

## title

This is the name of the project. It describes the whole project in one sentence, and helps people understand what the main goal and aim of the project is.

## description

Your description is an extremely important aspect of your project. A well-crafted description allows you to show off your work to other developers as well as potential employers.

This is an important component of your project that many new developers often overlook.

The quality of a README desccription often differentiates a good project from a bad project. A good one takes advantage of the opportunity to explain and showcase:

    What your application does,
    Why you used the technologies you used,
    Some of the challenges you faced and features you hope to implement in the future.

A good README helps you stand out among the large crowd of developers who put their work on GitHub.

## Table of contents

If your README is very long, you might want to add a table of contents to make it easy for users to find what they need. It helps them navigate to different parts of the file.

## visuals

some screenshots

## usage

Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.
## how install

If your project is software or an app that needs installation, you should include the steps required to install your project. Provide a step-by-step description of how to get the development environment running.

## How to Use Your Project

Provide instructions and examples so users/contributors can use the project. This will make it easy for them in case they encounter a problem – they will always have a place of reference.

You can also include screenshots to show examples of the running project.

## List the License

This is the last section of most README. It lets other developers know what they can and cannot do with your project. If you need help choosing a license, use https://choosealicense.com/

🏆 The sections listed above are the minimum for a good README. But you might also want to consider adding the following sections.

## Include Tests

Go the extra mile and write tests for your application. Then provide code examples and how to run them.

## Intro

    What was your motivation?
    Why did you build this project?
    What problem does it solve?
    What did you learn?
    What makes your project stand out? If your project has a lot of features, consider adding a "Features" section and listing them here.

// dist
the dist folder and files are outcome of transpiling all files in the src folder using Rollup and yarn build command.

// rollup
Rollup uses Babel to transpile the code and it exports two format of JS dists one in CommonJS and one in ESJS.

// tests
usually after changing codebase, you should update the snapshot tests. Maybe I’ve forgotten to do that the last time I changed the code.
You can use yarn test:snapshot:update command to update snapshot tests (edited)

the snapshots folder is the outcome of yarn test command

// icons
for size and performance reasons, we add only the icons we want to use to the FontAwesome library
and we do that in theme/icons/solid.js

//theme
