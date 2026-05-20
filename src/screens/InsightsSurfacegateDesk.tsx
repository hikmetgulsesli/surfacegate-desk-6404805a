// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights - SurfaceGate Desk
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowUp, Circle, CircleUserRound, Download, Plus, Search, Settings, TriangleAlert } from "lucide-react";


export type InsightsSurfacegateDeskActionId = "create-ticket-1" | "button-2-2" | "button-3-3" | "export-summary-4" | "create-report-5" | "operations-1" | "editor-2" | "queues-3" | "workload-4" | "insights-5" | "settings-6" | "help-7";

export interface InsightsSurfacegateDeskProps {
  actions?: Partial<Record<InsightsSurfacegateDeskActionId, () => void>>;
}

export function InsightsSurfacegateDesk({ actions }: InsightsSurfacegateDeskProps) {
  return (
    <>
      {/* SideNavBar Shell */}
      <nav className="bg-surface-container-low w-[sidebar-width] h-screen border-r border-outline-variant flex flex-col py-4 flex-shrink-0 z-20">
      {/* Brand Header */}
      <div className="px-margin-desktop mb-8 flex items-center gap-3">
      <div className="w-8 h-8 rounded-DEFAULT bg-primary flex items-center justify-center text-on-primary">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col">
      <span className="font-headline-md text-headline-md font-bold text-on-surface leading-tight">SurfaceGate</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight uppercase tracking-wider">Service Desk</span>
      </div>
      </div>
      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto flex flex-col gap-1 px-3">
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-secondary-container hover:bg-surface-container-high transition-colors duration-150 group" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <Circle className="text-[20px] group-hover:text-on-surface transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md group-hover:text-on-surface transition-colors">Operations</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-secondary-container hover:bg-surface-container-high transition-colors duration-150 group" href="#" data-action-id="editor-2" onClick={actions?.["editor-2"]}>
      <Circle className="text-[20px] group-hover:text-on-surface transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md group-hover:text-on-surface transition-colors">Editor</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-secondary-container hover:bg-surface-container-high transition-colors duration-150 group" href="#" data-action-id="queues-3" onClick={actions?.["queues-3"]}>
      <Circle className="text-[20px] group-hover:text-on-surface transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md group-hover:text-on-surface transition-colors">Queues</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-secondary-container hover:bg-surface-container-high transition-colors duration-150 group" href="#" data-action-id="workload-4" onClick={actions?.["workload-4"]}>
      <Circle className="text-[20px] group-hover:text-on-surface transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md group-hover:text-on-surface transition-colors">Workload</span>
      </a>
      {/* Active State Navigation */}
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-primary border-l-2 border-primary bg-surface transition-colors duration-150 relative -ml-3 pl-6 w-[calc(100%+12px)] shadow-sm" href="#" data-action-id="insights-5" onClick={actions?.["insights-5"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      </div>
      {/* Footer Links */}
      <div className="px-3 pt-4 border-t border-outline-variant/30 flex flex-col gap-1 mt-auto">
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-secondary-container hover:bg-surface-container-high transition-colors duration-150 group" href="#" data-action-id="settings-6" onClick={actions?.["settings-6"]}>
      <Settings className="text-[20px] group-hover:text-on-surface transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md group-hover:text-on-surface transition-colors">Settings</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-secondary-container hover:bg-surface-container-high transition-colors duration-150 group" href="#" data-action-id="help-7" onClick={actions?.["help-7"]}>
      <Circle className="text-[20px] group-hover:text-on-surface transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md group-hover:text-on-surface transition-colors">Help</span>
      </a>
      </div>
      </nav>
      {/* Main Content Canvas Shell */}
      <div className="flex-1 flex flex-col min-w-0 bg-background relative">
      {/* TopNavBar Shell */}
      <header className="bg-surface w-full h-[topbar-height] border-b border-outline-variant flex justify-between items-center px-margin-desktop flex-shrink-0 z-10">
      {/* Search Bar (on_left configuration) */}
      <div className="flex-1 flex items-center max-w-md">
      <div className="relative w-full group">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px] group-focus-within:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <input className="w-full h-[32px] bg-surface-container-low border border-outline-variant rounded-DEFAULT pl-10 pr-4 font-body-sm text-body-sm text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Search insights..." type="text" />
      </div>
      </div>
      {/* Trailing Actions */}
      <div className="flex items-center gap-4">
      <button className="h-[32px] px-4 bg-primary text-on-primary font-label-md text-label-md rounded-DEFAULT hover:bg-surface-tint transition-colors flex items-center gap-2 shadow-sm" type="button" data-action-id="create-ticket-1" onClick={actions?.["create-ticket-1"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                          Create Ticket
                      </button>
      <div className="h-6 w-px bg-outline-variant mx-2"></div>
      <div className="flex items-center gap-2 text-on-surface-variant">
      <button className="w-8 h-8 flex items-center justify-center rounded-DEFAULT hover:bg-surface-container-high transition-colors relative text-on-secondary-container hover:text-on-surface" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full ring-2 ring-surface"></span>
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded-DEFAULT hover:bg-surface-container-high transition-colors text-on-secondary-container hover:text-on-surface" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </header>
      {/* Main Scrollable Area */}
      <main className="flex-1 overflow-y-auto p-margin-desktop bg-background">
      <div className="max-w-7xl mx-auto flex flex-col gap-gutter">
      {/* Page Header */}
      <div className="flex justify-between items-end mb-2">
      <div>
      <h1 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">Insights - SurfaceGate Desk</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Useful summaries, trends, and status signals derived from Ticket data.</p>
      </div>
      <button className="h-[32px] px-4 bg-surface border border-outline-variant text-secondary font-label-md text-label-md rounded-DEFAULT hover:bg-surface-container-low transition-colors flex items-center gap-2" type="button" data-action-id="export-summary-4" onClick={actions?.["export-summary-4"]}>
      <Download className="text-[18px]" aria-hidden={true} focusable="false" />
                              Export Summary
                          </button>
      </div>
      {/* Bento Grid Container */}
      <div className="grid grid-cols-12 gap-gutter">
      {/* Top Row: Small Metric Cards (Flat, 1px border) */}
      {/* Metric: Avg Response */}
      <div className="col-span-4 bg-surface border border-outline-variant rounded-DEFAULT p-cell-padding-h flex flex-col justify-between min-h-[104px]">
      <div className="flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Avg. Response Time</span>
      <Circle className="text-outline text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline gap-2 mt-2">
      <span className="font-headline-lg text-headline-lg text-primary">1.4 hrs</span>
      <span className="font-label-sm text-label-sm text-on-secondary-container flex items-center bg-surface-container-low px-1.5 py-0.5 rounded-DEFAULT">
      <ArrowDown className="text-[14px] leading-none mr-0.5" aria-hidden={true} focusable="false" />
                                      12% vs last wk
                                  </span>
      </div>
      </div>
      {/* Metric: Resolution Rate */}
      <div className="col-span-4 bg-surface border border-outline-variant rounded-DEFAULT p-cell-padding-h flex flex-col justify-between min-h-[104px]">
      <div className="flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Resolution Rate</span>
      <Circle className="text-outline text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline gap-2 mt-2">
      <span className="font-headline-lg text-headline-lg text-primary">94.2%</span>
      <span className="font-label-sm text-label-sm text-on-secondary-container flex items-center bg-surface-container-low px-1.5 py-0.5 rounded-DEFAULT">
      <ArrowUp className="text-[14px] leading-none mr-0.5" aria-hidden={true} focusable="false" />
                                      2% vs last wk
                                  </span>
      </div>
      </div>
      {/* Metric: Volume Trend */}
      <div className="col-span-4 bg-surface border border-outline-variant rounded-DEFAULT p-cell-padding-h flex flex-col justify-between min-h-[104px]">
      <div className="flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Volume Trend</span>
      <Circle className="text-outline text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline gap-2 mt-2">
      <span className="font-headline-lg text-headline-lg text-primary">842</span>
      <span className="font-label-sm text-label-sm text-on-secondary-container flex items-center bg-surface-container-low px-1.5 py-0.5 rounded-DEFAULT">
                                      Total active
                                  </span>
      </div>
      {/* Mini sparkline representation */}
      <div className="w-full h-1 flex gap-1 mt-3">
      <div className="h-full bg-primary-fixed-dim flex-1 rounded-full"></div>
      <div className="h-full bg-primary-fixed-dim flex-1 rounded-full"></div>
      <div className="h-full bg-primary flex-1 rounded-full opacity-60"></div>
      <div className="h-full bg-primary flex-1 rounded-full"></div>
      <div className="h-full bg-primary flex-1 rounded-full opacity-80"></div>
      </div>
      </div>
      {/* Middle Row */}
      {/* State Distribution Chart (Spans 8) */}
      <div className="col-span-8 bg-surface border border-outline-variant rounded-DEFAULT p-margin-desktop flex flex-col min-h-[320px]">
      <h2 className="font-headline-md text-headline-md text-on-surface mb-6 border-b border-outline-variant pb-3">State Distribution</h2>
      <div className="flex-1 flex flex-col justify-center gap-6">
      {/* Bar 1 */}
      <div className="w-full">
      <div className="flex justify-between font-body-sm text-body-sm mb-2 text-on-surface-variant">
      <span>Open</span>
      <span className="font-label-md text-label-md text-on-surface">342</span>
      </div>
      <div className="w-full h-3 bg-surface-container-low rounded-DEFAULT overflow-hidden">
      <div className="h-full bg-primary rounded-DEFAULT" style={{width: "65%"}}></div>
      </div>
      </div>
      {/* Bar 2 */}
      <div className="w-full">
      <div className="flex justify-between font-body-sm text-body-sm mb-2 text-on-surface-variant">
      <span>Pending Vendor</span>
      <span className="font-label-md text-label-md text-on-surface">128</span>
      </div>
      <div className="w-full h-3 bg-surface-container-low rounded-DEFAULT overflow-hidden">
      <div className="h-full bg-secondary rounded-DEFAULT opacity-80" style={{width: "25%"}}></div>
      </div>
      </div>
      {/* Bar 3 */}
      <div className="w-full">
      <div className="flex justify-between font-body-sm text-body-sm mb-2 text-on-surface-variant">
      <span>Awaiting User Info</span>
      <span className="font-label-md text-label-md text-on-surface">84</span>
      </div>
      <div className="w-full h-3 bg-surface-container-low rounded-DEFAULT overflow-hidden">
      <div className="h-full bg-secondary-fixed-dim rounded-DEFAULT" style={{width: "15%"}}></div>
      </div>
      </div>
      {/* Bar 4 */}
      <div className="w-full">
      <div className="flex justify-between font-body-sm text-body-sm mb-2 text-on-surface-variant">
      <span>In Progress</span>
      <span className="font-label-md text-label-md text-on-surface">288</span>
      </div>
      <div className="w-full h-3 bg-surface-container-low rounded-DEFAULT overflow-hidden">
      <div className="h-full bg-tertiary-fixed-dim rounded-DEFAULT" style={{width: "45%"}}></div>
      </div>
      </div>
      </div>
      </div>
      {/* Actionable Follow-up Hints (Spans 4) */}
      <div className="col-span-4 bg-surface border border-outline-variant rounded-DEFAULT flex flex-col min-h-[320px] overflow-hidden">
      <div className="p-4 border-b border-outline-variant bg-surface-bright">
      <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
      <Circle className="text-tertiary" aria-hidden={true} focusable="false" />
                                      Follow-up Hints
                                  </h2>
      </div>
      <div className="p-4 flex flex-col gap-3 flex-1 overflow-y-auto">
      {/* High Priority Hint */}
      <div className="p-3 bg-error-container border-l-2 border-error rounded-r-DEFAULT flex flex-col gap-1 cursor-pointer hover:bg-error-container/80 transition-colors">
      <div className="flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-error-container font-semibold">SLA Breach Warning</span>
      <TriangleAlert className="text-[16px] text-error" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-body-sm text-body-sm text-on-error-container">3 tickets need SLA attention immediately in Queue Alpha.</span>
      </div>
      {/* Medium Priority Hint */}
      <div className="p-3 bg-surface-container-low border-l-2 border-primary rounded-r-DEFAULT flex flex-col gap-1 cursor-pointer hover:bg-surface-container-high transition-colors">
      <div className="flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-surface font-semibold">Stale Tickets</span>
      <Circle className="text-[16px] text-primary" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">12 tickets unassigned for &gt; 24 hours.</span>
      </div>
      {/* Low Priority Hint */}
      <div className="p-3 bg-surface-container-lowest border border-outline-variant rounded-DEFAULT flex flex-col gap-1 cursor-pointer hover:bg-surface-container-lowest/80 transition-colors">
      <div className="flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-secondary-container">Volume Spike Alert</span>
      <Circle className="text-[16px] text-secondary" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Network issues queue has 20% higher intake today.</span>
      </div>
      </div>
      </div>
      {/* Bottom Row: Saved Reports Empty State (Spans 12) */}
      <div className="col-span-12 bg-surface border border-outline-variant border-dashed rounded-DEFAULT flex flex-col items-center justify-center py-16 px-4">
      <div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center mb-4 text-outline">
      <Circle className="text-[32px]" aria-hidden={true} focusable="false" />
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-2">No Saved Reports Yet</h3>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-md text-center mb-6">Create customized views of your insights and save them here for quick access during daily standups or weekly reviews.</p>
      <button className="h-[40px] px-6 bg-surface border border-outline-variant text-on-surface font-label-md text-label-md rounded-DEFAULT hover:bg-surface-container-low transition-colors flex items-center gap-2" type="button" data-action-id="create-report-5" onClick={actions?.["create-report-5"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
                                  Create Report
                              </button>
      </div>
      </div> {/* End Bento Grid */}
      </div>
      </main>
      </div>
    </>
  );
}
