"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { FileText, CheckCircle, Clock, Lightbulb, Droplets, Wheat, Shield } from "lucide-react"

const claimData = [
  { name: "IFR", value: 45, color: "#4b8a3d" },
  { name: "CR", value: 30, color: "#d9c8a3" },
  { name: "CFR", value: 25, color: "#6b7280" },
]

const statusData = [
  { name: "Jan", approved: 12, pending: 8 },
  { name: "Feb", approved: 15, pending: 6 },
  { name: "Mar", approved: 18, pending: 9 },
  { name: "Apr", approved: 22, pending: 7 },
]

export function AnalyticsSidebar() {
  return (
    <div className="w-80 bg-sidebar border-l border-sidebar-border p-4 overflow-y-auto">
      <div className="space-y-6">
        {/* FRA Statistics */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" />
              FRA Statistics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1,247</div>
                <div className="text-xs text-muted-foreground">Total Claims</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">892</div>
                <div className="text-xs text-muted-foreground">Approved</div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Approval Rate</span>
                <span className="font-medium">71.5%</span>
              </div>
              <Progress value={71.5} className="h-2" />
            </div>

            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={claimData} cx="50%" cy="50%" innerRadius={25} outerRadius={50} dataKey="value">
                    {claimData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="flex justify-center gap-4 text-xs">
              {claimData.map((item) => (
                <div key={item.name} className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Decision Support */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-primary" />
              AI Decision Support
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-start gap-2">
                <Wheat className="h-4 w-4 text-green-600 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-green-800">PM-KISAN Eligible</div>
                  <div className="text-xs text-green-600 mt-1">Village has 85% agricultural land coverage</div>
                  <Badge variant="secondary" className="mt-2 text-xs">
                    High Priority
                  </Badge>
                </div>
              </div>
            </div>

            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start gap-2">
                <Droplets className="h-4 w-4 text-blue-600 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-blue-800">Water Infrastructure</div>
                  <div className="text-xs text-blue-600 mt-1">Low water index → Prioritize Jal Jeevan Mission</div>
                  <Badge variant="secondary" className="mt-2 text-xs">
                    Medium Priority
                  </Badge>
                </div>
              </div>
            </div>

            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-start gap-2">
                <Shield className="h-4 w-4 text-amber-600 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-amber-800">Conservation Scheme</div>
                  <div className="text-xs text-amber-600 mt-1">
                    High forest cover → Eligible for conservation funding
                  </div>
                  <Badge variant="secondary" className="mt-2 text-xs">
                    Low Priority
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Trends */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Monthly Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={statusData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Bar dataKey="approved" fill="#4b8a3d" />
                  <Bar dataKey="pending" fill="#d9c8a3" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 text-xs mt-2">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#4b8a3d]" />
                <span>Approved</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#d9c8a3]" />
                <span>Pending</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="p-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <div>
                <div className="text-lg font-bold">892</div>
                <div className="text-xs text-muted-foreground">Approved</div>
              </div>
            </div>
          </Card>

          <Card className="p-3">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-amber-600" />
              <div>
                <div className="text-lg font-bold">285</div>
                <div className="text-xs text-muted-foreground">Pending</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
