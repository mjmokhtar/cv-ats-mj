# CV ATS — Muhammad Jumi'at Mokhtar

A responsive, printable, and ATS-oriented online résumé for **Muhammad Jumi'at Mokhtar**, an Embedded Systems and IoT Engineer based in Jakarta, Indonesia.

The application presents professional experience, education, technical skills, and selected projects in a clean single-page layout. Resume content is maintained from one TypeScript data source and is also exposed through a GraphQL endpoint.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GraphQL](https://img.shields.io/badge/GraphQL-Apollo-E10098?logo=graphql&logoColor=white)](https://www.apollographql.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## Live Website

**[cv-ats.mjmokhtar.cloud](https://cv-ats.mjmokhtar.cloud)**

## Overview

This project serves two related purposes:

- A public online CV and project portfolio.
- A print-optimized résumé that can be saved as PDF and submitted with job applications.

The visible CV and GraphQL response both use the same source:

```text
src/data/resume-data.tsx
```

Updating this file changes the profile, work experience, education, skills, projects, contact links, and metadata-derived page content.

## Features

- Responsive single-page CV layout
- Structured About, Experience, Education, Skills, and Projects sections
- Print-specific styling for clean PDF output
- ATS-oriented semantic text and section hierarchy
- Centralized, strongly typed resume content
- Social, email, location, portfolio, and project links
- Command menu for keyboard-friendly navigation
- GraphQL API with schema introspection
- Dynamic page title and description from resume data
- Open Graph metadata for link previews
- Vercel Analytics integration
- Custom avatar, icons, and project cards
- Deployment support for Next.js hosting platforms
- PM2 configuration for self-hosted VPS deployment

## ATS and Print Design

The CV uses a simple content hierarchy and print-specific CSS to keep the exported document readable:

- Conventional headings such as **Work Experience**, **Education**, and **Skills**
- Text-based experience and project descriptions
- Compact skill badges with printable text
- Contact information shown as text in print mode
- Decorative navigation controls hidden while printing
- Project section moved to a new printed page when appropriate
- Responsive web layout constrained to a résumé-friendly width

> No visual design can guarantee acceptance by every Applicant Tracking System. Always inspect the generated PDF and test text selection before submitting it.

## Technology Stack

| Technology | Purpose |
| --- | --- |
| Next.js 16 | Application framework and App Router |
| React 19 | UI rendering |
| TypeScript 5 | Typed application and resume data |
| Tailwind CSS | Styling and print utilities |
| Radix UI | Accessible UI primitives |
| Lucide React | Interface icons |
| cmdk | Command menu |
| Apollo Server | GraphQL server |
| TypeGraphQL | GraphQL schema and resolver definitions |
| Vercel Analytics | Page analytics |
| PM2 | Optional VPS process management |

## Project Structure

```text
.
├── public
│   └── ...                         # Static public assets
├── src
│   ├── apollo
│   │   ├── resolvers.ts            # GraphQL query resolver
│   │   └── type-defs.ts            # Resume GraphQL object types
│   ├── app
│   │   ├── graphql
│   │   │   └── route.ts            # GET/POST GraphQL endpoint
│   │   ├── globals.css             # Global and print styles
│   │   ├── layout.tsx              # Root layout and social metadata
│   │   └── page.tsx                # Main CV page
│   ├── components
│   │   ├── command-menu.tsx        # Keyboard command navigation
│   │   ├── project-card.tsx        # Project display cards
│   │   ├── icons                   # Social icons
│   │   └── ui                      # Shared UI primitives
│   ├── data
│   │   └── resume-data.tsx         # Main CV content
│   └── images
│       └── logos                   # Project and company logo components
├── ecosystem.config.js             # PM2 production configuration
├── next.config.js
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 20.9 or newer
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/mjmokhtar/cv-ats-mj.git
cd cv-ats-mj
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Start the compiled production server |
| `npm run lint` | Run the configured Next.js lint command |

## Editing the CV

Open:

```text
src/data/resume-data.tsx
```

The exported `RESUME_DATA` object contains:

```ts
export const RESUME_DATA = {
  name: "...",
  initials: "...",
  location: "...",
  about: "...",
  summary: "...",
  avatarUrl: "...",
  personalWebsiteUrl: "...",
  contact: {
    email: "...",
    social: []
  },
  education: [],
  work: [],
  skills: [],
  projects: []
} as const;
```

### Add work experience

```tsx
{
  company: "Company Name",
  link: "https://example.com",
  badges: ["Office"],
  title: "Embedded Systems Engineer",
  logo: ConsultlyLogo,
  start: "2026",
  end: null,
  description: "Describe responsibilities, technologies, and measurable outcomes."
}
```

### Add a project

```tsx
{
  title: "Project Name",
  techStack: ["ESP32", "C++", "MQTT"],
  description: "Explain the problem, implementation, and measurable result.",
  logo: MonitoLogo,
  link: {
    label: "Project",
    href: "https://example.com"
  }
}
```

Use an empty or omitted link only when the project should not be clickable.

## Printing or Saving as PDF

1. Open the deployed or local CV in a desktop browser.
2. Press `Ctrl+P` on Windows/Linux or `Cmd+P` on macOS.
3. Select **Save as PDF**.
4. Use A4 paper size.
5. Disable browser headers and footers.
6. Check every page before saving.

After exporting, verify that:

- The text can be selected and copied.
- Contact information is visible.
- Sections are not clipped.
- Links remain clickable when supported by the browser.
- Important keywords appear as real text rather than images.

## GraphQL API

The application exposes its resume data through:

```text
GET  /graphql
POST /graphql
```

In local development:

```text
http://localhost:3000/graphql
```

Example query:

```graphql
query Resume {
  me {
    name
    location
    about
    summary
    skills
    education {
      school
      degree
      start
      end
    }
    work {
      company
      title
      start
      end
      description
    }
    projects {
      title
      techStack
      description
      link {
        label
        href
      }
    }
  }
}
```

Schema introspection and Apollo's local landing page are enabled.

## Deployment

### Vercel

1. Import the repository into Vercel.
2. Keep the detected Next.js settings.
3. Deploy.
4. Connect a custom domain if needed.

The current application does not require environment variables.

### VPS with PM2

Build the application:

```bash
npm install
npm run build
```

Install PM2 if it is not already available:

```bash
npm install --global pm2
```

Start the application using the included configuration:

```bash
pm2 start ecosystem.config.js
pm2 save
```

The PM2 configuration runs the Next.js server as `web-cv` on port `8081`. Place Nginx, Caddy, or another reverse proxy in front of that port for HTTPS and the public domain.

## SEO and Social Preview

Site metadata is configured in:

```text
src/app/layout.tsx
```

Update the following values when changing the owner or domain:

- Page title
- Description
- `metadataBase`
- Open Graph URL
- Open Graph image

Page-specific title and description values are also generated from `RESUME_DATA` in `src/app/page.tsx`.

## Privacy Notes

The values in `resume-data.tsx` are rendered publicly and are available through the GraphQL endpoint. Do not place private phone numbers, addresses, credentials, private project details, or other confidential information in that file.

## Attribution

This project is adapted from the open-source CV created by **Bartosz Jarocki**:

- [cv.jarocki.me](https://cv.jarocki.me/)
- [Bartosz Jarocki on GitHub](https://github.com/BartoszJarocki)
- kode ini adalah copy paste dari https://cv.jarocki.me/

The original copyright notice is retained in the repository's MIT License.

## Contributing

Issues and pull requests are welcome. Before submitting a change:

1. Create a dedicated branch.
2. Run `npm run build`.
3. Check the desktop and mobile layouts.
4. Print the page and inspect the PDF result.
5. Test the `/graphql` query when changing the schema or resume data.

## License

Distributed under the [MIT License](LICENSE).

Original copyright © 2023 Bartosz Jarocki.
