"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Search, ChevronDown, Filter, MapPin, FileText, Droplets } from "lucide-react"

export function FilterSidebar() {
  const [isSchemeLayersOpen, setIsSchemeLayersOpen] = useState(false)

  return (
    <div className="w-80 bg-sidebar border-r border-sidebar-border p-4 overflow-y-auto">
      <div className="space-y-6">
        {/* Search Section */}
        <div className="space-y-2">
          <Label htmlFor="search" className="text-sm font-medium">
            Search
          </Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input id="search" placeholder="Village name / Patta holder name" className="pl-10" />
          </div>
        </div>

        {/* Location Filters */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <Label className="text-sm font-medium">Location Filters</Label>
          </div>

          <div className="space-y-3">
            <div>
              <Label htmlFor="state" className="text-xs text-muted-foreground">
                State
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="odisha">Odisha</SelectItem>
                  <SelectItem value="telangana">Telangana</SelectItem>
                  <SelectItem value="chhattisgarh">Chhattisgarh</SelectItem>
                  <SelectItem value="jharkhand">Jharkhand</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="district" className="text-xs text-muted-foreground">
                District
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select District" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="koraput">Koraput</SelectItem>
                  <SelectItem value="rayagada">Rayagada</SelectItem>
                  <SelectItem value="kandhamal">Kandhamal</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="village" className="text-xs text-muted-foreground">
                Village
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Village" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="village1">Bandhugaon</SelectItem>
                  <SelectItem value="village2">Karlapat</SelectItem>
                  <SelectItem value="village3">Similiguda</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Claim Filters */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-primary" />
            <Label className="text-sm font-medium">Claim Filters</Label>
          </div>

          <div className="space-y-3">
            <div>
              <Label className="text-xs text-muted-foreground">Claim Type</Label>
              <div className="space-y-2 mt-1">
                <div className="flex items-center space-x-2">
                  <Checkbox id="ifr" />
                  <Label htmlFor="ifr" className="text-sm">
                    Individual Forest Rights (IFR)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="cr" />
                  <Label htmlFor="cr" className="text-sm">
                    Community Rights (CR)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="cfr" />
                  <Label htmlFor="cfr" className="text-sm">
                    Community Forest Rights (CFR)
                  </Label>
                </div>
              </div>
            </div>

            <div>
              <Label className="text-xs text-muted-foreground">Claim Status</Label>
              <div className="space-y-2 mt-1">
                <div className="flex items-center space-x-2">
                  <Checkbox id="pending" />
                  <Label htmlFor="pending" className="text-sm">
                    Pending
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="approved" />
                  <Label htmlFor="approved" className="text-sm">
                    Approved
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="rejected" />
                  <Label htmlFor="rejected" className="text-sm">
                    Rejected
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Asset Filters */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Droplets className="h-4 w-4 text-primary" />
            <Label className="text-sm font-medium">Assets</Label>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="agriculture" />
              <Label htmlFor="agriculture" className="text-sm">
                Agriculture
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="forest" />
              <Label htmlFor="forest" className="text-sm">
                Forest
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="water" />
              <Label htmlFor="water" className="text-sm">
                Water Bodies
              </Label>
            </div>
          </div>
        </div>

        {/* Schemes Layering */}
        <Collapsible open={isSchemeLayersOpen} onOpenChange={setIsSchemeLayersOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-0 h-auto">
              <span className="text-sm font-medium">Schemes Layering</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isSchemeLayersOpen ? "rotate-180" : ""}`} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2 mt-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="pmkisan" />
              <Label htmlFor="pmkisan" className="text-sm">
                PM-KISAN
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="jaljeevan" />
              <Label htmlFor="jaljeevan" className="text-sm">
                Jal Jeevan Mission
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="mgnrega" />
              <Label htmlFor="mgnrega" className="text-sm">
                MGNREGA
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="conservation" />
              <Label htmlFor="conservation" className="text-sm">
                Forest Conservation
              </Label>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Button className="w-full">
          <Filter className="mr-2 h-4 w-4" />
          Apply Filters
        </Button>
      </div>
    </div>
  )
}
