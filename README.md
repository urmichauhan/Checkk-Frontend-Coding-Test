# FrontendSantaInc

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## About App

Single‑page Angular 21 app with a fixed green sidebar and main content area for Santa’s “Delivery list” tool.

Uses Angular’s standalone setup (bootstrapApplication + provideRouter) and a typed Routes array for navigation between Toys Factory, Delivery, Legal, and Disconnect.

Sidebar links use routerLink and routerLinkActive (with exact: true) so the active section is highlighted automatically.

Delivery screen shows a static table of children; “naughty” rows are red and hidden on mobile, plus a decorative dotted column and pagination line to match the mockups.

Layout is responsive with Tailwind utilities and custom CSS: full sidebar and large script font title on desktop, pine‑branch image on large screens, and a top bar with burger + slide‑in menu on mobile.