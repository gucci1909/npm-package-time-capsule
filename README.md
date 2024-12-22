# react-time-capsule

`react-time-capsule` is a lightweight and flexible React library that enables developers to save, restore, and manage snapshots of application states. This can be especially useful for undo/redo functionality, debugging, or tracking state changes over time.

## Features

- Save snapshots of the current application state.
- Restore a previous snapshot of the state.
- Delete unwanted snapshots.
- Built with a simple and intuitive API for ease of use.

---

# Key Dependencies

The package uses the following tools and configurations for its build process:

## Rollup

Rollup is used for bundling the package efficiently. It is configured to handle both ES and CommonJS formats, ensuring compatibility with a wide range of environments.

### Example Rollup Plugins Used:

- **@rollup/plugin-node-resolve**: Resolves Node.js modules for bundling.
- **@rollup/plugin-commonjs**: Converts CommonJS modules to ES modules for seamless integration.
- **rollup-plugin-typescript2**: Handles TypeScript transpilation during the build process.
- **rollup-plugin-peer-deps-external**: Marks peer dependencies as external to avoid bundling them.

---

## TypeScript

The package is written in TypeScript to ensure type safety and provide compatibility with TypeScript-based projects. It also generates type definitions (`.d.ts`) for ease of use.

---

## Babel

Babel is used in conjunction with Rollup for transpilation. This ensures compatibility with older browsers and environments, expanding the usability of the package.

---

## Installation

To install the package, use npm or yarn:

```bash
npm install react-time-capsule
# or
yarn add react-time-capsule
