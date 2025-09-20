# 🌲 AI-Powered FRA Atlas & Decision Support System

A comprehensive dashboard for Forest Rights Act (FRA) management, featuring interactive mapping, analytics, and AI-powered decision support for forest officers and administrators.

![Next.js](https://img.shields.io/badge/Next.js-14.2.16-black)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-orange)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 Features

### 🗺️ Interactive Map View

- **Real-time FRA Claims Mapping** - Visualize individual forest rights, community rights, and community forest rights
- **Village Boundaries & Assets** - Display agricultural land, forest areas, and water bodies
- **Click-to-Explore** - Interactive features with detailed claim information
- **Layer Management** - Toggle different map layers for better visualization

### 📊 Analytics Dashboard

- **FRA Statistics** - Total claims, approval rates, and performance metrics
- **Interactive Charts** - Pie charts for claim types and bar charts for monthly trends
- **Real-time Progress Tracking** - Visual progress indicators for approval processes
- **Quick Stats** - At-a-glance overview of approved and pending claims

### 🔍 Advanced Filtering

- **Location-based Filters** - State, district, and village-level filtering
- **Claim Type Filters** - IFR, CR, and CFR claim categorization
- **Status-based Filtering** - Pending, approved, and rejected claim status
- **Asset Mapping** - Filter by agriculture, forest, and water body assets
- **Scheme Layering** - PM-KISAN, Jal Jeevan Mission, MGNREGA integration

### 🤖 AI Decision Support

- **Smart Recommendations** - AI-powered suggestions for claim prioritization
- **Eligibility Assessment** - Automatic evaluation of scheme eligibility
- **Risk Analysis** - Identification of high-priority areas requiring attention
- **Policy Alignment** - Recommendations based on government schemes and policies

### 🌐 Multi-language Support

- **Local Language Support** - Hindi, Odia, Telugu, and English
- **Accessibility** - Designed for forest officers across different regions
- **Cultural Adaptation** - UI elements adapted for local contexts

## 🛠️ Technology Stack

- **Frontend Framework**: Next.js 14.2.16 with App Router
- **UI Library**: React 18 with TypeScript
- **Styling**: Tailwind CSS 4.1.9 with custom design system
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React for consistent iconography
- **Components**: Radix UI primitives for accessibility
- **State Management**: React hooks and context
- **Build Tool**: Next.js built-in bundler

## 📦 Installation

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/YOUR_USERNAME/fra-atlas-dashboard.git
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

## 🌟 Features in Detail

### Interactive Mapping

- **Geospatial Visualization**: Real-time rendering of FRA claims
- **Feature Selection**: Click-to-view detailed claim information
- **Layer Control**: Toggle different data layers for analysis
- **Zoom & Pan**: Intuitive map navigation controls

### Analytics & Reporting

- **Performance Metrics**: Track approval rates and processing times
- **Trend Analysis**: Historical data visualization
- **Comparative Analysis**: District and village-level comparisons
- **Export Functionality**: Generate reports for stakeholders

### AI-Powered Insights

- **Predictive Analytics**: Forecast claim approval likelihood
- **Resource Optimization**: Suggest optimal resource allocation
- **Risk Assessment**: Identify potential bottlenecks
- **Policy Compliance**: Ensure adherence to FRA guidelines

## 🤝 Contributing

We welcome contributions to improve the FRA Atlas Dashboard! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m "Add your feature description"
   ```
5. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Create a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Forest Rights Act Implementation** - Supporting forest communities across India
- **Open Source Community** - For the amazing tools and libraries
- **Forest Officers** - For their valuable feedback and requirements
- **Development Team** - For their dedication and expertise

## 📞 Support

For support, email support@fra-atlas.gov.in or create an issue in this repository.

## 🔮 Roadmap

### Phase 1 (Current)

- ✅ Basic dashboard functionality
- ✅ Interactive mapping
- ✅ Analytics and reporting

### Phase 2 (Upcoming)

- 🔄 Mobile application
- 🔄 Offline capability
- 🔄 Advanced AI features

### Phase 3 (Future)

- 📋 Integration with government databases
- 📋 Real-time data synchronization
- 📋 Advanced analytics and ML models

---

**Built with ❤️ for Forest Rights and Community Empowerment**

_This dashboard is designed to streamline FRA claim processing and support forest officers in making informed decisions for the benefit of forest-dwelling communities._
