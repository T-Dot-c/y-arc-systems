# Project Restructuring: Page-Based Organization

The goal is to improve code organization by grouping pages and their related components into specific folders within `src/pages`. This clarifies ownership and makes it easier to manage page-specific logic.

## User Review Required

> [!IMPORTANT]
> This change involves moving almost every file in the `src/components` and `src/pages` directories. I will need to update every import statement in the project.

## Proposed Changes

### 1. Separate Shared Components
Move components used across multiple pages or as part of the core layout to `src/components/shared`.

- `Navbar.tsx`
- `Footer.tsx`
- `CursorGlow.tsx`
- `ScrollToTop.tsx`
- `FloatingActions.tsx`

### 2. Page-Specific Folders in `src/pages`
For each page, create a directory containing the page component itself and a `components` sub-directory for its specific parts.

#### [Home] `src/pages/Home`
- `Home.tsx`
- `components/Hero.tsx`
- `components/Introduction.tsx`
- `components/Expertise.tsx`
- `components/Industries.tsx`
- `components/Benefits.tsx`
- `components/WhyUs.tsx`
- `components/EnterpriseSolution.tsx`
- `components/Clients.tsx`

#### [Blog] `src/pages/Blog`
- `Blog.tsx`
- `components/Hero.tsx` (renamed from `Blog-Hero.tsx`)
- `components/Featured.tsx` (renamed from `Blog-Featured.tsx`)
- `components/PageHeader.tsx` (renamed from `BlogPageHeader.tsx`)
- `components/LegacyFeatured.tsx` (renamed from `BlogLegacyFeatured.tsx`)
- `components/FilterBar.tsx` (renamed from `BlogFilterBar.tsx`)
- `components/PostsGrid.tsx` (renamed from `BlogPostsGrid.tsx`)
- `components/CTA.tsx` (renamed from `BlogCTA.tsx`)

#### [Case Studies] `src/pages/CaseStudies`
- `CaseStudies.tsx`
- `components/Hero.tsx`
- `components/Grid.tsx`
- `components/Newsletter.tsx`
- `components/CareersCTA.tsx`
- `components/ExecutiveInsightsCTA.tsx`

... and similarly for `OurClients`, `OurStory`, `SoftwareDevelopment`, `Testimonials`, `WebSolutions`, and `ERPSystem`.

### 3. Update Imports
Update all imports in:
- `App.tsx`
- All moved Page components
- All moved Page-specific components

## Verification Plan

### Automated Tests
- Run `npm run lint` or `tsc --noEmit` to ensure there are no broken import statements.

### Manual Verification
- Verify that the development server (`npm run dev`) still renders the site correctly.
