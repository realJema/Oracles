# Oracles Nursery & Primary School Website

This is the official website for Oracles Nursery & Primary School, an initiative of the Essungue Ejuma Foundation. The website serves as a comprehensive platform for our school community, providing information about our educational programs, admissions, events, and foundation activities.

## About Us

Oracles Nursery & Primary School, located in Cameroon, is dedicated to providing quality education and fostering the development of young minds. Our school, supported by the Essungue Ejuma Foundation, focuses on delivering comprehensive education while maintaining strong ties with our local community.

## Features

- **School Information**: Detailed information about our educational approach and programs
- **Admissions**: Complete admissions process and requirements
- **Events & Activities**: Calendar of school events and extracurricular activities
- **Foundation**: Information about the Essungue Ejuma Foundation's mission and projects
- **Gallery**: Photo gallery showcasing school activities and events
- **Contact Information**: Easy access to contact details and location information

## Technology Stack

- **Frontend Framework**: Next.js 14
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Image Optimization**: Next.js Image Component
- **Icons**: Custom SVG icons
- **Development**: TypeScript

## Getting Started

### Prerequisites

- Node.js (v18.17 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd ejuma
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Environment Variables

Create a `.env.local` file in the root directory and add the following variables:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Project Structure

```
ejuma/
├── public/          # Static files (images, favicon)
├── src/
│   ├── app/        # Next.js app directory
│   │   ├── components/  # Reusable components
│   │   ├── contexts/   # React contexts
│   │   └── [routes]/   # Page routes
│   └── styles/     # Global styles
├── scripts/        # Utility scripts
└── package.json    # Project dependencies
```

## Development

### Code Style

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting

### Building for Production

```bash
npm run build
# or
yarn build
```

### Running Production Build

```bash
npm run start
# or
yarn start
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

- School Email: info@oraclesschool.com
- Foundation Email: contact@essungueejuma.org

## License

This project is proprietary and confidential. All rights reserved.

---

Built with ❤️ for Oracles Nursery & Primary School and the Essungue Ejuma Foundation
