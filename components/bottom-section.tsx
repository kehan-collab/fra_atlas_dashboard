import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, FileText, AlertTriangle, CheckCircle, Globe, Calendar } from "lucide-react"

const recentActivities = [
  {
    id: 1,
    type: "claim_submitted",
    message: "New IFR claim submitted for Bandhugaon village",
    timestamp: "2 hours ago",
    status: "new",
  },
  {
    id: 2,
    type: "claim_approved",
    message: "CFR claim approved for Karlapat village - 3.2 hectares",
    timestamp: "4 hours ago",
    status: "approved",
  },
  {
    id: 3,
    type: "digitization",
    message: "Asset mapping completed for Similiguda village",
    timestamp: "6 hours ago",
    status: "completed",
  },
  {
    id: 4,
    type: "alert",
    message: "Pending verification required for 12 claims in Rayagada district",
    timestamp: "1 day ago",
    status: "alert",
  },
]

const languages = [
  { code: "en", name: "English", active: true },
  { code: "hi", name: "हिंदी", active: false },
  { code: "or", name: "ଓଡ଼ିଆ", active: false },
  { code: "te", name: "తెలుగు", active: false },
]

export function BottomSection() {
  return (
    <div className="border-t border-border bg-card">
      <div className="flex items-center justify-between p-4">
        {/* Activity Timeline */}
        <Card className="flex-1 mr-4">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-32 overflow-y-auto">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <div className="mt-1">
                    {activity.type === "claim_submitted" && <FileText className="h-3 w-3 text-blue-600" />}
                    {activity.type === "claim_approved" && <CheckCircle className="h-3 w-3 text-green-600" />}
                    {activity.type === "digitization" && <CheckCircle className="h-3 w-3 text-primary" />}
                    {activity.type === "alert" && <AlertTriangle className="h-3 w-3 text-amber-600" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-foreground">{activity.message}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {activity.timestamp}
                      </span>
                      <Badge
                        variant={
                          activity.status === "approved"
                            ? "default"
                            : activity.status === "alert"
                              ? "destructive"
                              : "secondary"
                        }
                        className="text-xs"
                      >
                        {activity.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Language Toggle */}
        <Card className="w-64">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              Language / भाषा
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lang) => (
                <Button key={lang.code} variant={lang.active ? "default" : "outline"} size="sm" className="text-xs h-8">
                  {lang.name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
