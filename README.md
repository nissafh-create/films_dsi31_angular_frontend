# Films Management Frontend (Angular)

A modern Angular frontend application for managing films and genres, communicating with a Spring Boot REST API and a dedicated Users & Authentication Microservice.

- **Films Backend Repository:** https://github.com/nissafh-create/films_dsi31
- **Users Microservice (Auth & JWT) Repository:** https://github.com/nissafh-create/films_dsi31-users-microservice

---

## Features

- **Film Management:** List, add, update, and delete films with details (duration, release date, description, genre).
- **Genre Management:** Manage genres using embedded component architecture (`@Input()` and `@Output()`).
- **Search & Filtering:**
  - Dynamic filter by genre (using Spring Data REST).
  - Search by film title using a custom pipe (`SearchFilterPipe`).
- **Authentication & Security:**
  - JWT Authentication via Users Microservice (`http://localhost:8081/users`).
  - User registration and email verification code flow.
  - HTTP Interceptor (`tokenInterceptor`) to automatically attach JWT bearer token to outgoing requests.
  - Route guards (`filmGuard`) to protect administrative routes based on decoded JWT roles (`ADMIN`).
  - Contextual navbar and action controls based on login status and role.

---

## Tech Stack

- **Framework:** Angular 19+ (Standalone components)
- **Security:** `@auth0/angular-jwt` for token decoding and expiration handling
- **Notifications:** `ngx-toastr` & `ngx-toastr/animations`
- **UI:** Bootstrap 5 & Bootstrap Icons
- **Communication:** Angular HttpClient (RxJS Observables) consuming Spring Boot REST APIs
- **Routing:** Angular Router with functional Route Guards

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended) & Angular CLI
- **Users Microservice** running on `http://localhost:8081/users`
- **Films Backend** running on `http://localhost:8080/films`

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

---

## Build

```bash
ng build
```
Build outputs are generated in the `dist/` directory.
