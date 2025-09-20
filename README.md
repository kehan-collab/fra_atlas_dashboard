# 🌲 FRA Atlas Dashboard - UI Prototype

A **UI prototype/demo** for a Forest Rights Act (FRA) Atlas & Decision Support System. This is a frontend-only implementation showcasing the interface design and user experience for forest officers and administrators. **This is not a fully functional system** - it demonstrates the UI/UX design and layout for potential future development.


## 🛠️ Technology Stack

- **Frontend Framework**: Next.js 14.2.16 with App Router
- **UI Library**: React 18 with TypeScript
- **Styling**: Tailwind CSS 4.1.9 with custom design system
- **Charts**: Recharts for data visualization (static data only)
- **Icons**: Lucide React for consistent iconography
- **Components**: Radix UI primitives for accessibility
- **State Management**: React hooks and context (local state only)
- **Build Tool**: Next.js built-in bundler

> 📝 **Important**: This is a frontend-only prototype. No backend services, databases, or APIs are implemented.

## 📦 Installation

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/kehan-collab/fra_atlas_dashboard.git
   cd fra-atlas-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

```
fra_atlas_dashboard/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   ├── loading.tsx        # Loading UI
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── analytics-sidebar.tsx
│   ├── filter-sidebar.tsx
│   ├── header.tsx
│   ├── map-view.tsx
│   └── bottom-section.tsx
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
├── styles/               # Additional stylesheets
└── package.json          # Dependencies and scripts
```

## 🎯 Key Components

### Analytics Sidebar (`components/analytics-sidebar.tsx`)

- Displays FRA statistics and approval rates
- Interactive pie charts for claim type distribution
- Monthly trend analysis with bar charts
- AI decision support recommendations

### Map View (`components/map-view.tsx`)

- Interactive map with clickable features
- Layer management for different data types
- Feature information dialog
- Map controls (zoom, rotate, layers)

### Filter Sidebar (`components/filter-sidebar.tsx`)

- Location-based filtering (state, district, village)
- Claim type and status filters
- Asset-based filtering
- Scheme layering options

### Header (`components/header.tsx`)

- Application branding and navigation
- User profile dropdown
- System access controls

### Bottom Section (`components/bottom-section.tsx`)

- Recent activity timeline
- Multi-language support
- System status indicators

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=http://localhost:3000/api
# Add other configuration as needed
```

### Customization

- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Components**: Customize UI components in `components/ui/`
- **Styling**: Update global styles in `app/globals.css`

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:

- **Desktop** (1920x1080 and above)
- **Tablet** (768px - 1024px)
- **Mobile** (320px - 767px)

## 🌟 UI Features in Detail (Prototype Only)

### Interactive Mapping (Mock Interface)

- **Simulated Geospatial Visualization**: Static rendering of sample FRA claims
- **Demo Feature Selection**: Click-to-view sample claim information
- **UI Layer Control**: Toggle interface for different data layers (non-functional)
- **Mock Navigation**: Simulated zoom & pan controls (UI only)

### Analytics & Reporting (Static Data)

- **Sample Performance Metrics**: Mock approval rates and processing times
- **Static Trend Analysis**: Demo historical data visualization
- **UI Comparative Analysis**: Interface for district and village-level comparisons
- **Export UI**: Mock interface for report generation (non-functional)

### AI-Powered Insights (Demo Interface)

- **Mock Predictive Analytics**: Sample forecast displays
- **UI Resource Optimization**: Interface for resource allocation suggestions
- **Static Risk Assessment**: Demo identification of potential bottlenecks
- **Policy Compliance UI**: Sample adherence displays
