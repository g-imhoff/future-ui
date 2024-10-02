# Future UI

A customizable, component-based UI kit built using **ReactJS** and **TailwindCSS**. This project contains a variety of reusable components (like alerts, buttons, dropdowns, accordions, etc.), designed for easy integration and customization. It also includes several testing components to aid in faster development.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [Accordion](#accordion)
  - [Alert](#alert)
  - [AutoComplete](#autocomplete)
  - [Button](#button)
  - [Command Display](#command-display)
  - [Divider](#divider)
  - [DropDown](#dropdown)
- [Testing](#testing)
- [Contributing](#contributing)

## Introduction

This project provides a set of highly customizable components intended to be used in **ReactJS** applications, styled with **TailwindCSS**. Initially built with **NextJS**, the project has been refactored to focus purely on frontend development with **ReactJS**.

## Features

- **Reusable Components**: Includes a variety of UI components such as buttons, alerts, dropdowns, accordions, and more.
- **TailwindCSS Integration**: Leverages TailwindCSS for quick, efficient styling.
- **Component Testing**: Includes prebuilt testing components to quickly validate component behavior during development.
- **Customizable**: Every component is flexible and can be modified with props like color, shadow, and size.
  
## Installation

### Prerequisites

- **Node.js** (v14.x or higher)
- **npm** or **yarn**

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    ```
2. Navigate to the project folder:
    ```bash
    cd your-repository-name
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
    or with Yarn:
    ```bash
    yarn install
    ```

4. Start the development server:
    ```bash
    npm start
    ```
    or with Yarn:
    ```bash
    yarn start
    ```

## Usage

After installing the dependencies, you can use the components in your project by importing them directly from the `components` directory.

Example for using the **Button** component:

```jsx
import Button from './components/button/Button';

function App() {
  return (
    <Button color="primary" size="md">
      Click Me
    </Button>
  );
}

export default App;
```

## Components

### Accordion

- **Description**: A wrapper component that contains multiple `AccordionItems`.
- **Props**:
  - `color`, `radius`, `shadow` (from `ColoredComponentsProps`).

### Alert

- **Description**: Displays alerts like success, warning, or error messages.
- **Props**:
  - `type`: Defines the type of alert (`success`, `warning`, `error`).
  - `text`: Alert message.

### AutoComplete

- **Description**: A search bar with auto-suggestion dropdown.
- **Props**:
  - `items`: List of items to display.
  - `onSelect`: Callback when an item is selected.

### Button

- **Description**: A highly customizable button component.
- **Props**:
  - `color`: Defines the button's color.
  - `size`: Defines the button's size (`sm`, `md`, `lg`).
  - `variant`: Defines the button's variant (`solid`, `outline`).

### Command Display

- **Description**: Displays command-related data in a styled box.

### Divider

- **Description**: A simple divider to separate sections.
- **Props**:
  - `orientation`: Defines the divider's direction (`horizontal`, `vertical`).

### DropDown

- **Description**: A dropdown component with items that can be selected.
- **Props**:
  - `items`: List of items to show.
  - `onSelect`: Callback when an item is clicked.

## Testing

A set of testing components are provided to help in development, located in the `extras/test` directory. Each component mirrors the actual components but is intended for testing their behavior.

Example:

```jsx
import TestButton from './extras/test/TestButton';

function App() {
  return (
    <div>
      <TestButton />
    </div>
  );
}

export default App;
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-branch
    ```
3. Commit your changes:
    ```bash
    git commit -m 'Add new feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature-branch
    ```
5. Open a pull request.
