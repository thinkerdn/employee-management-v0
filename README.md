# Employee Management System

A comprehensive employee management system built with modern technologies.

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript and Tailwind CSS
- **Backend**: Express.js with TypeScript
- **Database**: MySQL 8.0
- **ORM**: Prisma
- **API**: tRPC for type-safe communication
- **Containerization**: Docker and Docker Compose

## Features

- ✅ Full CRUD operations for employee management
- ✅ Real-time search functionality
- ✅ Responsive UI with Tailwind CSS
- ✅ Type-safe API with tRPC
- ✅ Database migrations with Prisma
- ✅ Dockerized application stack
- ✅ Professional UI with modal forms

## Project Structure

```
employee-management-v0/
├── backend/                 # Express.js API server
│   ├── src/
│   │   ├── routers/        # tRPC routers
│   │   ├── db.ts           # Prisma client
│   │   ├── server.ts       # Express server
│   │   └── trpc.ts         # tRPC configuration
│   ├── prisma/
│   │   └── schema.prisma   # Database schema
│   ├── Dockerfile
│   └── package.json
├── frontend/               # Next.js frontend
│   ├── src/
│   │   ├── app/           # App router pages
│   │   └── utils/         # Utilities (tRPC client)
│   ├── Dockerfile
│   └── package.json
└── docker-compose.yml     # Docker orchestration
```

## Getting Started

### Prerequisites

- Docker and Docker Compose installed
- Node.js 18+ (for local development)

### Running with Docker (Recommended)

1. Clone the repository and navigate to the project directory:
   ```bash
   cd employee-management-v0
   ```

2. Start all services with Docker Compose:
   ```bash
   docker-compose up --build
   ```

3. Wait for all services to start. The application will be available at:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - MySQL Database: localhost:3306

### Running Locally (Development)

#### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database (make sure MySQL is running):
   ```bash
   npm run db:push
   npm run db:generate
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

#### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Database Schema

The system uses a single `Employee` model with the following fields:

- `id`: Auto-incrementing primary key
- `firstName`: Employee's first name
- `lastName`: Employee's last name
- `email`: Unique email address
- `phone`: Optional phone number
- `department`: Department name
- `position`: Job position
- `salary`: Salary amount (decimal)
- `hireDate`: Date of hire (auto-set)
- `isActive`: Employment status (default: true)
- `createdAt`: Record creation timestamp
- `updatedAt`: Record update timestamp

## API Endpoints

The tRPC API provides the following procedures:

- `employee.getAll`: Get all employees
- `employee.getById`: Get employee by ID
- `employee.create`: Create new employee
- `employee.update`: Update existing employee
- `employee.delete`: Delete employee
- `employee.search`: Search employees by query

## Environment Variables

### Backend (.env)
```
DATABASE_URL="mysql://root:password@localhost:3306/employee_management"
PORT=3001
NODE_ENV=development
```

### Frontend
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## Docker Commands

```bash
# Start all services
docker-compose up --build

# Start in detached mode
docker-compose up -d --build

# Stop all services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild specific service
docker-compose build backend
docker-compose build frontend

# Remove all containers and volumes
docker-compose down -v
```

## Development Commands

### Backend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:migrate   # Run database migrations
npm run db:studio    # Open Prisma Studio
```

### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.
