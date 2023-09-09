# Home Assignment: **Build a Mini Page Builder**

The goal of the assignment is to build a mini Page Builder using React and TypeScript. The Page Builder should allow the users (marketers) to construct a webpage by assembling predefined components called Slices ([Prismic concept of Slices](https://prismic.io/docs/slice)) in a visual interface.

## Table of content

---

This README outlines the specific features you'll need to implement for this assignment, as well as the evaluation criteria we'll be using to assess your work. This way, we hope you have a clear understanding of our expectations. Furthermore, we require you to keep the existing npm scripts we included in your final submission.

If any part of this test is unclear, please don't hesitate to reach out. We're here to provide clarifications and answer your queries to ensure you have the best possible understanding of the assignment.

Upon completion of the assignment, please compress your project into a ZIP file, include your first and last name in the filename, and send it back to us for evaluation.

> ⚠️ Please do not share your work or this template publicly. This ensures each candidate has an equal opportunity to showcase > their skills during the evaluation process.

- [Instructions](#instructions)
  - [Data persistence](#data-persistence)
  - [Slices and Fields](#slices-and-fields)
  - [No Wasteful Renders](#no-wasteful-renders)
  - [Design](#design)
  - [User flow](#user-flow)
- [Evaluation Criteria](#evaluation-criteria)

## Instructions

---

> Create a page where it’s possible to add or remove slices with a dynamically generated form to edit the values of the slice fields.

On a single page, users should be able to add or remove slices and edit the field values.

### Data Persistence

A requirement of this assignment is to ensure **data persistence**. This means that, when the page is refreshed, the previous content shouldn't be lost. To accomplish this, **you must use the provided `fakeAPI` module in `./prismicLib` folder**. It's important to note that only valid data must be persisted. For instance, while a user can input anything into the "Number" field, only valid numbers should be persisted. If the app detects there is invalid data, it should show an error message under the field that it's invalid.

ℹ️ _E.g.: If a user wants to write `-1`, the user will first start to type `-` in the "Number" field. In that case, the persisted data should never be `-` since it's not a valid number._

Ensure your application is designed to run successfully on our machines, regardless of any data from previous assignments present.

### Slices and Fields

We want you to implement the following slices:

- "Hero" slice that contains one "Text" field
- "Article" slice that contains two "Text" fields and a "Color" field
- "Temperature" slice that contains a "Text" field and a "Number" field

Each field can be interpreted as follows:

- "Text" field as any valid string value
- "Color" field as any hexadecimal color value
- "Number" field as any valid negative or positive number value

It should be possible to add any number of slices to the page.

### Design

We provide you with the design of the main components of the Page Builder: [Prismic Figma - Home Assignment](https://www.figma.com/file/CEKu7s9hGpxhXrPo3o9t4j/Home-Assignment-1.1?type=design&node-id=1:3&mode=design&t=5NxDQrreA7CsyvFL-1)

- If you don't have a Figma account, you need to create a free one in order to inspect the design.
- If you never used Figma, click on the Dev Mode toggle (`</>`) at the top of the page or use the keyboard shortcut Shift+D. ([Figma Doc - Guide to Dev Mode](https://help.figma.com/hc/en-us/articles/15023124644247))
- The add icon (add.svg) from the "Available slices" design is on the "src/assets" folder.
- ⚠️ We require you to use handmade CSS (Sass, CSS-in-JS, ...) to implement each of the given Figma components and to **respect the design as closely as possible**. Please do not use CSS frameworks like Tailwind or Bootstrap for styling this specific part. ⚠️

### No Wasteful Renders

Performance matters, and so we invite you to demonstrate this through effective rendering practices in your assignment. To accomplish this, **you must use the provided `RenderCounter` component in `./prismicLib` folder**. This component, having no props, needs to be incorporated within each slice as it's designed in Figma. It should be on the right of the slice title replacing the `1` from the Design.

The requirement is simple yet challenging: When you edit a field inside a specific slice, the other slices should not re-render. This means the count of the `RenderCounter` component within those slices must not change.

### User flow

ℹ️ _E.g.: A user launches your project and sees a slice's selector:_

```
|-- Available slices --------------------------------------------|
|                    |                       |                   |
|       + Hero       |      + Article        |   + Temperature   |
|                    |                       |                   |
|----------------------------------------------------------------|

```

ℹ️ _E.g.: Then the user adds a "Hero" slice:_

```
|-- Hero slice • 1 ----------------------------------------------|
|                                                 - Remove slice |
|   Text Input                                                   |
|                                                                |
|----------------------------------------------------------------|
|-- Available slices --------------------------------------------|
|                    |                       |                   |
|       + Hero       |      + Article        |   + Temperature   |
|                    |                       |                   |
|----------------------------------------------------------------|

```

ℹ️ _E.g.: After that, the user adds a "Temperature" slice:_

```
|-- Hero slice • 1 ----------------------------------------------|
|                                                 - Remove slice |
|   Text Input                                                   |
|                                                                |
|----------------------------------------------------------------|
|-- Temperature slice • 1 ---------------------------------------|
|                                                 - Remove slice |
|   Text Input                                                   |
|                                                                |
|   Number Input                                                 |
|                                                                |
|----------------------------------------------------------------|
|-- Available slices --------------------------------------------|
|                    |                       |                   |
|       + Hero       |      + Article        |   + Temperature   |
|                    |                       |                   |
|----------------------------------------------------------------|

```

ℹ️ _E.g.: Finally, the user removes the "Hero" slice:_

```
|-- Temperature slice • 1 ---------------------------------------|
|                                                 - Remove slice |
|   Text Input                                                   |
|                                                                |
|   Number Input                                                 |
|                                                                |
|----------------------------------------------------------------|
|-- Available slices --------------------------------------------|
|                    |                       |                   |
|       + Hero       |      + Article        |   + Temperature   |
|                    |                       |                   |
|----------------------------------------------------------------|

```

## Evaluation Criteria

---

Replace the entry point of the React app, so that when we run `npm run dev`, we have direct access to the Page Builder.

Our main focus is React, TypeScript, and the following criteria. We are open to different tools and libraries as long as the final product meets the criteria. Feel free to replace or add any dependencies that you're comfortable with or that you believe would improve the project.

We **DO NOT** expect you to implement features that aren't indicated in this README. We want you to spend your time only on the Page Builder and not on extra features.

- **Code Quality**: Is the code well-structured, readable, and appropriately commented?
- **Functionality**: Does the Page Builder work as described? Are all of the requirements implemented?
- **Design and Usability**: Is the Page Builder interface intuitive and user-friendly? Do the pages exhibit design consistency, appropriate color schemes, effective typography, and well-structured content layout?
- **Styling**: Has the styling been implemented effectively? Are the given Figma components styled with handmade CSS (Sass, CSS-in-JS, ...)?
- **TypeScript**: Is TypeScript utilized effectively throughout the codebase to ensure type safety and readability?
- **State Management**: Does the code handle state changes smoothly, ensuring consistent and reliable interactions throughout the application?
- **Testing**: Are there comprehensive test suites to ensure the functionality and reliability of the code? Do the tests cover critical parts of the application? Your focus should be on effectively tackling the assignment challenges, rather than striving for test coverage.

> We understand that this assignment may require a substantial amount of time, however, we request that you limit your efforts to a maximum of five hours. We encourage you to prioritize the tasks you believe are most critical. This will provide us insight into your decision-making process and how you manage time constraints.
