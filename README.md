# Real Estate Deal
This project provides a real estate deal with a modern UI built using Next.js and Ant Design.

## Live Demo

The latest stable version has been deployed to Firebase Hosting:
- [View Demo](https://deal-test-6e07e.web.app/)

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library**: [Ant Design](https://ant.design/)
- **Styling**: SCSS Modules with BEM naming
- **Language**: TypeScript
- **Deployment**: Vercel

## Project Structure

```
/src
  /app                    # Next.js app router pages
  /components             # UI components
    /common               # Reusable UI components
      /key-value-item     # Key-value display component
      /section-title      # Section headers
    /deal-overview        # Deal analysis components
      /components         # Sub-components for deal overview
  /hooks                  # Custom React hooks
  /lib                    # Core library code and utilities
  /types                  # TypeScript type definitions
  /utils                  # Utility functions and mock data
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Sergey-eu/deal.git

# Navigate to project directory
cd deal

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Start development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
# Build the application
npm run build
# or
yarn build

# Start production server
npm run start
# or
yarn start
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
