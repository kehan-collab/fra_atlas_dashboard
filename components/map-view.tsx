"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Map, Layers, ZoomIn, ZoomOut, RotateCcw, MapPin, User, Calendar, TreePine } from "lucide-react"

export function MapView() {
  const [selectedFeature, setSelectedFeature] = useState<any>(null)
  const [showLayerPanel, setShowLayerPanel] = useState(true)

  const mockFeature = {
    villageName: "Bandhugaon",
    pattaHolder: "Ramesh Kumar Majhi",
    area: "2.5 hectares",
    claimStatus: "Approved",
    claimType: "IFR",
    assets: ["Agriculture", "Water Body"],
    submissionDate: "2023-08-15",
  }

  return (
    <div className="flex-1 relative bg-muted/30">
      {/* Map Container */}
      <div className="h-full w-full relative overflow-hidden">
        {/* Simulated Map Background */}
        <div
          className="h-full w-full bg-gradient-to-br from-green-100 via-green-50 to-blue-50 relative cursor-pointer"
          onClick={() => setSelectedFeature(mockFeature)}
        >
          {/* Simulated Map Features */}
          <div className="absolute inset-0">
            {/* Forest Areas */}
            <div className="absolute top-20 left-20 w-32 h-24 bg-green-200/60 rounded-lg border-2 border-green-400"></div>
            <div className="absolute top-40 right-32 w-28 h-20 bg-green-300/60 rounded-lg border-2 border-green-500"></div>

            {/* Village Boundaries */}
            <div className="absolute top-32 left-40 w-40 h-32 border-2 border-primary border-dashed bg-primary/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-6 w-6 text-primary mx-auto mb-1" />
                <span className="text-xs font-medium text-primary">Bandhugaon</span>
              </div>
            </div>

            {/* Water Bodies */}
            <div className="absolute bottom-32 left-24 w-20 h-16 bg-blue-200/80 rounded-full border-2 border-blue-400"></div>
            <div className="absolute bottom-20 right-20 w-24 h-12 bg-blue-300/80 rounded-lg border-2 border-blue-500"></div>

            {/* Roads */}
            <div className="absolute top-0 left-1/2 w-1 h-full bg-gray-400"></div>
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-400"></div>
          </div>

          {/* Map Overlay Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center text-muted-foreground">
              <Map className="h-16 w-16 mx-auto mb-4 opacity-20" />
              <p className="text-lg font-medium opacity-60">Interactive Map View</p>
              <p className="text-sm opacity-40">Click on features to view details</p>
            </div>
          </div>
        </div>

        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <Button size="sm" variant="secondary" className="h-10 w-10 p-0">
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="secondary" className="h-10 w-10 p-0">
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="secondary" className="h-10 w-10 p-0">
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>

        {/* Layer Toggle */}
        <div className="absolute top-4 left-4">
          <Button size="sm" variant="secondary" onClick={() => setShowLayerPanel(!showLayerPanel)}>
            <Layers className="h-4 w-4 mr-2" />
            Layers
          </Button>
        </div>

        {/* Layer Panel */}
        {showLayerPanel && (
          <Card className="absolute top-16 left-4 w-64 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Map Layers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="fra-claims" defaultChecked />
                <Label htmlFor="fra-claims" className="text-sm">
                  FRA Claims
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="village-boundaries" defaultChecked />
                <Label htmlFor="village-boundaries" className="text-sm">
                  Village Boundaries
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="assets" defaultChecked />
                <Label htmlFor="assets" className="text-sm">
                  Asset Mapping
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="infrastructure" />
                <Label htmlFor="infrastructure" className="text-sm">
                  Infrastructure
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="schemes" />
                <Label htmlFor="schemes" className="text-sm">
                  CSS Schemes
                </Label>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Feature Info Dialog */}
      <Dialog open={!!selectedFeature} onOpenChange={() => setSelectedFeature(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <TreePine className="h-5 w-5 text-primary" />
              Feature Information
            </DialogTitle>
          </DialogHeader>
          {selectedFeature && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs text-muted-foreground">Village Name</Label>
                  <p className="font-medium">{selectedFeature.villageName}</p>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">Area</Label>
                  <p className="font-medium">{selectedFeature.area}</p>
                </div>
              </div>

              <div>
                <Label className="text-xs text-muted-foreground">Patta Holder</Label>
                <div className="flex items-center gap-2 mt-1">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <p className="font-medium">{selectedFeature.pattaHolder}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs text-muted-foreground">Claim Status</Label>
                  <Badge
                    variant={selectedFeature.claimStatus === "Approved" ? "default" : "secondary"}
                    className="mt-1"
                  >
                    {selectedFeature.claimStatus}
                  </Badge>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">Claim Type</Label>
                  <Badge variant="outline" className="mt-1">
                    {selectedFeature.claimType}
                  </Badge>
                </div>
              </div>

              <div>
                <Label className="text-xs text-muted-foreground">Linked Assets</Label>
                <div className="flex gap-2 mt-1">
                  {selectedFeature.assets.map((asset: string) => (
                    <Badge key={asset} variant="secondary" className="text-xs">
                      {asset}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-xs text-muted-foreground">Submission Date</Label>
                <div className="flex items-center gap-2 mt-1">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <p className="text-sm">{selectedFeature.submissionDate}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
