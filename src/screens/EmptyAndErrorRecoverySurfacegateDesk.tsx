// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Empty and Error Recovery - SurfaceGate Desk
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ChevronRight, Circle, CircleUserRound, Menu, Plus, RefreshCw, Search, Settings } from "lucide-react";


export type EmptyAndErrorRecoverySurfacegateDeskActionId = "button-1-1" | "button-2-2" | "button-3-3" | "button-4-4" | "create-ticket-5" | "new-ticket-6" | "close-7" | "close-8" | "clear-filters-9" | "act-retry-load-10" | "act-create-record-11" | "operations-1" | "editor-2" | "queues-3" | "workload-4" | "insights-5" | "settings-6" | "support-7" | "view-sla-guidelines-8";

export interface EmptyAndErrorRecoverySurfacegateDeskProps {
  actions?: Partial<Record<EmptyAndErrorRecoverySurfacegateDeskActionId, () => void>>;
}

export function EmptyAndErrorRecoverySurfacegateDesk({ actions }: EmptyAndErrorRecoverySurfacegateDeskProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface-container-lowest border-b border-outline-variant fixed top-0 left-0 w-full z-50 flex items-center h-topbar-height px-gutter justify-between gap-4">
      <div className="flex items-center gap-4">
      <div className="md:hidden">
      <button className="p-2 rounded-DEFAULT hover:bg-surface-container text-on-surface-variant transition-colors" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="text-headline-lg font-headline-lg font-bold text-primary">
                      SurfaceGate Desk
                  </div>
      <div className="hidden md:flex relative w-64 ml-4">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]" aria-hidden={true} focusable="false" />
      <input className="w-full h-8 pl-10 pr-3 rounded-DEFAULT border border-outline-variant bg-surface-container-lowest text-body-sm font-body-sm focus:border-primary focus:ring-0 transition-colors" placeholder="Search tickets..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-2">
      <button className="p-2 rounded-DEFAULT hover:bg-surface-container text-on-surface-variant transition-colors" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="p-2 rounded-DEFAULT hover:bg-surface-container text-on-surface-variant transition-colors" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button className="p-2 rounded-DEFAULT hover:bg-surface-container text-on-surface-variant transition-colors" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      <button className="h-8 px-4 bg-primary text-on-primary rounded-DEFAULT text-body-sm font-body-sm font-medium hover:bg-primary-container transition-colors hidden md:block ml-2" type="button" data-action-id="create-ticket-5" onClick={actions?.["create-ticket-5"]}>
                      Create Ticket
                  </button>
      </div>
      </header>
      {/* SideNavBar */}
      <nav className="bg-surface-container border-r border-outline-variant fixed left-0 top-0 h-full w-sidebar-width z-40 flex flex-col py-4 px-2 pt-[calc(56px+16px)] hidden md:flex">
      <div className="flex flex-col gap-1 flex-grow">
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-highest transition-colors group" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <Circle className="text-[20px] group-hover:text-primary" aria-hidden={true} focusable="false" />
      <span className="text-body-sm font-body-sm">Operations</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-highest transition-colors group" href="#" data-action-id="editor-2" onClick={actions?.["editor-2"]}>
      <Circle className="text-[20px] group-hover:text-primary" aria-hidden={true} focusable="false" />
      <span className="text-body-sm font-body-sm">Editor</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT bg-secondary-container text-on-secondary-container border-l-4 border-primary scale-[0.98] duration-150" href="#" data-action-id="queues-3" onClick={actions?.["queues-3"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="text-body-sm font-body-sm font-medium">Queues</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-highest transition-colors group" href="#" data-action-id="workload-4" onClick={actions?.["workload-4"]}>
      <Circle className="text-[20px] group-hover:text-primary" aria-hidden={true} focusable="false" />
      <span className="text-body-sm font-body-sm">Workload</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-highest transition-colors group" href="#" data-action-id="insights-5" onClick={actions?.["insights-5"]}>
      <Circle className="text-[20px] group-hover:text-primary" aria-hidden={true} focusable="false" />
      <span className="text-body-sm font-body-sm">Insights</span>
      </a>
      </div>
      <div className="mt-auto flex flex-col gap-1 border-t border-outline-variant pt-4">
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-highest transition-colors group" href="#" data-action-id="settings-6" onClick={actions?.["settings-6"]}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="text-body-sm font-body-sm">Settings</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-highest transition-colors group" href="#" data-action-id="support-7" onClick={actions?.["support-7"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="text-body-sm font-body-sm">Support</span>
      </a>
      <div className="mt-4 px-3 flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-label-md">
                          AG
                      </div>
      <div className="flex flex-col">
      <span className="text-label-sm font-label-sm text-on-surface">Agent Profile</span>
      <span className="text-[10px] text-on-surface-variant">Service Desk</span>
      </div>
      </div>
      <button className="mt-4 mx-3 h-8 bg-primary text-on-primary rounded-DEFAULT text-body-sm font-body-sm font-medium hover:bg-primary-container transition-colors md:hidden" type="button" data-action-id="new-ticket-6" onClick={actions?.["new-ticket-6"]}>
                      New Ticket
                  </button>
      </div>
      </nav>
      {/* Main Workspace */}
      <main className="md:ml-sidebar-width pt-topbar-height h-screen flex flex-col p-margin-desktop overflow-y-auto">
      {/* Breadcrumbs / Context */}
      <div className="mb-6 flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant">
      <span>Queues</span>
      <ChevronRight className="text-[16px]" aria-hidden={true} focusable="false" />
      <span className="font-medium text-on-surface">High Priority SLA</span>
      </div>
      {/* Filter Bar (Mock) */}
      <div className="bg-surface-container-lowest border border-outline-variant p-2 rounded-DEFAULT mb-4 flex items-center gap-3">
      <div className="flex items-center gap-2 px-3 py-1 bg-surface-container rounded-DEFAULT border border-outline-variant">
      <span className="text-label-md font-label-md text-on-surface-variant">Status:</span>
      <span className="text-body-sm font-body-sm text-on-surface">Open</span>
      <button className="material-symbols-outlined text-[16px] text-on-surface-variant hover:text-on-surface ml-1" type="button" data-action-id="close-7" onClick={actions?.["close-7"]}>close</button>
      </div>
      <div className="flex items-center gap-2 px-3 py-1 bg-surface-container rounded-DEFAULT border border-outline-variant">
      <span className="text-label-md font-label-md text-on-surface-variant">Assignee:</span>
      <span className="text-body-sm font-body-sm text-on-surface">Me</span>
      <button className="material-symbols-outlined text-[16px] text-on-surface-variant hover:text-on-surface ml-1" type="button" data-action-id="close-8" onClick={actions?.["close-8"]}>close</button>
      </div>
      <div className="h-6 w-px bg-outline-variant mx-2"></div>
      <button className="text-body-sm font-body-sm text-primary hover:underline" type="button" data-action-id="clear-filters-9" onClick={actions?.["clear-filters-9"]}>Clear Filters</button>
      </div>
      {/* Empty State Container */}
      <div className="flex-grow flex items-center justify-center">
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-12 max-w-md w-full text-center shadow-sm">
      <div className="w-24 h-24 bg-surface-container-highest rounded-full flex items-center justify-center mx-auto mb-6">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-[48px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      <h2 className="text-headline-lg font-headline-lg text-on-surface mb-2">No tickets match your filters</h2>
      <p className="text-body-md font-body-md text-on-surface-variant mb-8 px-4">
                          There are currently no open tickets assigned to you in the High Priority SLA queue. Adjust your filters or wait for new assignments.
                      </p>
      <div className="flex flex-col gap-3">
      <button className="w-full h-10 bg-primary text-on-primary rounded-DEFAULT text-body-sm font-body-sm font-medium hover:bg-primary-container transition-colors flex items-center justify-center gap-2" type="button" data-action-id="act-retry-load-10" onClick={actions?.["act-retry-load-10"]}>
      <RefreshCw className="text-[18px]" aria-hidden={true} focusable="false" />
                              ACT_RETRY_LOAD
                          </button>
      <button className="w-full h-10 bg-surface-container-lowest border border-outline-variant text-on-surface-variant rounded-DEFAULT text-body-sm font-body-sm font-medium hover:bg-surface-container transition-colors flex items-center justify-center gap-2" type="button" data-action-id="act-create-record-11" onClick={actions?.["act-create-record-11"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                              ACT_CREATE_RECORD
                          </button>
      </div>
      <div className="mt-6 pt-6 border-t border-outline-variant">
      <p className="text-label-md font-label-md text-on-surface-variant mb-2">Need help?</p>
      <a className="text-body-sm font-body-sm text-primary hover:underline" href="#" data-action-id="view-sla-guidelines-8" onClick={actions?.["view-sla-guidelines-8"]}>View SLA Guidelines</a>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
