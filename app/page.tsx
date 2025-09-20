import { Header } from "@/components/header"
import { FilterSidebar } from "@/components/filter-sidebar"
import { MapView } from "@/components/map-view"
import { AnalyticsSidebar } from "@/components/analytics-sidebar"
import { BottomSection } from "@/components/bottom-section"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex h-[calc(100vh-4rem)]">
        <FilterSidebar />
        <MapView />
        <AnalyticsSidebar />
      </div>
      <BottomSection />
    </div>
  )
}
