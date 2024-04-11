
# Clubware.io Landing Page

Welcome to the GitHub repository for the Clubware.io Landing Page. This is the entry point for our innovative club and festival management software. Built with Astro, our landing page combines speed, scalability, and a modern design to provide an excellent first impression to visitors.

## Getting Started

### Prerequisites

Before you begin, make sure you have Node.js installed on your system. You can download it from the [Node.js official website](https://nodejs.org/).

### Installation

Follow these steps to get the project up and running on your local machine:

1. Clone the repository:
    ```bash
    git clone git@github.com:CodeTriumvirat/clubware_landing_page.git
    ```
2. Navigate to the project directory:
    ```bash
    cd clubware_landing_page
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```

Your development server is now running at `http://localhost:4321`.

## Project Structure

The project is organized as follows:

```plaintext
/
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Header.astro
│   │   │   ├── Features.astro
│   │   │   ├── Pricelist.astro
│   │   │   ├── About.astro
│   │   │   ├── RequestDemo.astro
│   │   │   ├── Faq.astro
│   │   │   └── Contact.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   ├── globals.css
│   │   ├── fonts.css
│   │   ├── color-tokens.css
│   │   └── typography.css
```

## Building and Deployment

To build the static version of the site for deployment:

```bash
npm run build
```

This will generate the static files in the `./dist/` directory.

## Contributing

Contributions are welcome! Please follow our contribution guidelines for submitting pull requests.

## Further Resources

- [Astro Documentation](https://docs.astro.build): Learn more about Astro and how to use it effectively.
- [Node.js](https://nodejs.org/): Download and install Node.js if you haven't already.

Thank you for contributing to the Clubware.io landing page project!
