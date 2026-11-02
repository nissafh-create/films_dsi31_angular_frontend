# Films Management Frontend

A modern Angular frontend application for managing films and genres, communicating with a Spring Boot REST API.

## Features

- **Film Management:** List, add, update, and delete films with details (duration, release date, description, genre).
- **Genre Management:** Manage genres using embedded component architecture (`@Input()` and `@Output()`).
- **Search & Filtering:**
  - Dynamic filter by genre (using Spring Data REST).
  - Search by film title using a custom pipe (`SearchFilterPipe`).
- **Authentication & Role-Based Access:**
  - Mock authentication service (`ADMIN` and `USER` roles).
  - Route guards (`filmGuard`) to protect administrative routes.
  - Contextual navbar and action controls based on login status and role.
  - Session persistence with `localStorage`.

## Tech Stack

- **Framework:** Angular 19+ (Standalone components, Zoneless change detection support)
- **UI:** Bootstrap 5
- **Communication:** Angular HttpClient (RxJS Observables) consuming Spring Boot REST & Spring Data REST APIs
- **Routing:** Angular Router with functional Route Guards

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Angular CLI
- Backend service running on `http://localhost:8080/films` (Spring Boot)

### Installation

```bash
git clone https://github.com/nissafh-create/films_dsi31_angular_frontend.git
cd films_dsi31_angular_frontend
npm install
```

### Running the App

```bash
ng serve
```

Navigate to `http://localhost:4200/`.

### Test Accounts

| Username | Password | Role |
| :--- | :--- | :--- |
| `admin` | `123` | ADMIN (Full CRUD, manage genres) |
| `nadhem` | `123` | USER (Read-only access, search) |

### Build

```bash
ng build
```
Build outputs are generated in the `dist/` directory.
