// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ticket Operations - SurfaceGate Desk
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ChevronLeft, ChevronRight, Circle, CircleUserRound, EllipsisVertical, ListFilter, Search, Settings } from "lucide-react";


export type TicketOperationsSurfacegateDeskActionId = "create-ticket-1" | "button-2-2" | "button-3-3" | "filter-4" | "sort-priority-5" | "button-6-6" | "button-7-7" | "retry-connection-8" | "button-9-9" | "button-10-10" | "add-note-11" | "resolve-12" | "operations-1" | "editor-2" | "queues-3" | "workload-4" | "insights-5" | "settings-6" | "help-7";

export interface TicketOperationsSurfacegateDeskProps {
  actions?: Partial<Record<TicketOperationsSurfacegateDeskActionId, () => void>>;
}

export function TicketOperationsSurfacegateDesk({ actions }: TicketOperationsSurfacegateDeskProps) {
  return (
    <>
      {/* SideNavBar Component */}
      <nav className="hidden md:flex flex-col h-screen py-4 w-[240px] bg-surface-container-low border-r border-outline-variant shrink-0 z-20">
      {/* Header */}
      <div className="px-6 mb-8 flex items-center gap-3">
      <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-on-primary">
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-headline-md text-headline-md font-bold text-on-surface leading-tight">SurfaceGate</div>
      <div className="font-label-md text-label-md text-on-secondary-container leading-tight">Service Desk</div>
      </div>
      </div>
      {/* Navigation Tabs */}
      <div className="flex-1 flex flex-col gap-1 px-3">
      {/* Active Tab: Operations */}
      <a className="flex items-center gap-3 px-3 py-2 text-primary border-l-2 border-primary bg-surface transition-colors duration-150" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md uppercase">Operations</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 text-on-secondary-container hover:bg-surface-container-high transition-colors duration-150 border-l-2 border-transparent" href="#" data-action-id="editor-2" onClick={actions?.["editor-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md uppercase">Editor</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 text-on-secondary-container hover:bg-surface-container-high transition-colors duration-150 border-l-2 border-transparent" href="#" data-action-id="queues-3" onClick={actions?.["queues-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md uppercase">Queues</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 text-on-secondary-container hover:bg-surface-container-high transition-colors duration-150 border-l-2 border-transparent" href="#" data-action-id="workload-4" onClick={actions?.["workload-4"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md uppercase">Workload</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 text-on-secondary-container hover:bg-surface-container-high transition-colors duration-150 border-l-2 border-transparent" href="#" data-action-id="insights-5" onClick={actions?.["insights-5"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md uppercase">Insights</span>
      </a>
      </div>
      {/* Footer Tabs */}
      <div className="flex flex-col gap-1 px-3 mt-auto pt-4 border-t border-outline-variant">
      <a className="flex items-center gap-3 px-3 py-2 text-on-secondary-container hover:bg-surface-container-high transition-colors duration-150 border-l-2 border-transparent" href="#" data-action-id="settings-6" onClick={actions?.["settings-6"]}>
      <Settings aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md uppercase">Settings</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 text-on-secondary-container hover:bg-surface-container-high transition-colors duration-150 border-l-2 border-transparent" href="#" data-action-id="help-7" onClick={actions?.["help-7"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md uppercase">Help</span>
      </a>
      </div>
      </nav>
      {/* Main Workspace */}
      <div className="flex flex-col flex-1 min-w-0 bg-surface z-10">
      {/* TopNavBar Component */}
      <header className="w-full h-[56px] flex justify-between items-center px-margin-desktop bg-surface border-b border-outline-variant shrink-0">
      {/* Left: Search Area */}
      <div className="flex items-center gap-4 flex-1">
      <div className="font-headline-md text-headline-md text-primary font-bold md:hidden">SurfaceGate Desk</div>
      <div className="hidden md:flex items-center relative max-w-md w-full">
      <Search className="absolute left-2 text-outline text-[20px]" aria-hidden={true} focusable="false" />
      <input className="w-full h-[32px] pl-9 pr-3 bg-surface-container-low border border-outline-variant rounded text-body-sm font-body-sm text-on-surface focus:border-primary focus:ring-0 transition-colors" placeholder="Search tickets, customers, or internal docs..." type="text" />
      </div>
      </div>
      {/* Right: Actions */}
      <div className="flex items-center gap-4">
      <button className="h-[32px] px-4 bg-primary text-on-primary rounded font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-colors" type="button" data-action-id="create-ticket-1" onClick={actions?.["create-ticket-1"]}>
                          Create Ticket
                      </button>
      <div className="flex items-center gap-2 text-on-surface-variant">
      <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-low rounded transition-colors duration-200" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-low rounded transition-colors duration-200" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </header>
      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden">
      {/* Left Side: Data View */}
      <div className="flex-1 flex flex-col min-w-0 bg-surface">
      {/* Page Header & Metrics */}
      <div className="p-margin-desktop pb-0 shrink-0">
      <h1 className="font-headline-lg text-headline-lg text-on-surface mb-6">Ticket Operations</h1>
      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-6">
      <div className="p-4 border border-outline-variant rounded bg-surface">
      <div className="font-label-md text-label-md text-secondary uppercase mb-1">Total Open</div>
      <div className="font-headline-lg text-headline-lg text-primary">3,240</div>
      </div>
      <div className="p-4 border border-outline-variant rounded bg-surface">
      <div className="font-label-md text-label-md text-secondary uppercase mb-1">Unassigned</div>
      <div className="font-headline-lg text-headline-lg text-tertiary">142</div>
      </div>
      <div className="p-4 border border-outline-variant rounded bg-surface">
      <div className="font-label-md text-label-md text-error uppercase mb-1">SLA Breached</div>
      <div className="font-headline-lg text-headline-lg text-error">28</div>
      </div>
      <div className="p-4 border border-outline-variant rounded bg-surface">
      <div className="font-label-md text-label-md text-secondary uppercase mb-1">Avg Resolution</div>
      <div className="font-headline-lg text-headline-lg text-primary">4h 12m</div>
      </div>
      </div>
      {/* Toolbar */}
      <div className="flex items-center justify-between py-3 border-b border-outline-variant">
      <div className="flex items-center gap-2">
      <button className="h-[32px] px-3 bg-surface-container-lowest border border-outline-variant text-secondary font-label-md text-label-md rounded hover:bg-surface-container-low flex items-center gap-2" type="button" data-action-id="filter-4" onClick={actions?.["filter-4"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" />
                                      Filter
                                  </button>
      <button className="h-[32px] px-3 bg-surface border border-transparent text-secondary font-label-md text-label-md rounded hover:bg-surface-container-low flex items-center gap-2" type="button" data-action-id="sort-priority-5" onClick={actions?.["sort-priority-5"]}>
      <Circle className="text-[16px]" aria-hidden={true} focusable="false" />
                                      Sort: Priority
                                  </button>
      </div>
      <div className="flex items-center gap-2 text-label-md font-label-md text-secondary">
      <span>Showing 1-50 of 3,240</span>
      <div className="flex gap-1 ml-2">
      <button className="w-6 h-6 flex items-center justify-center hover:bg-surface-container-low rounded disabled:opacity-50" type="button" data-action-id="button-6-6" onClick={actions?.["button-6-6"]}><ChevronLeft className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      <button className="w-6 h-6 flex items-center justify-center hover:bg-surface-container-low rounded" type="button" data-action-id="button-7-7" onClick={actions?.["button-7-7"]}><ChevronRight className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      </div>
      </div>
      {/* Ticket Table Area */}
      <div className="flex-1 overflow-auto relative">
      <table className="w-full text-left border-collapse min-w-[800px]">
      <thead className="sticky top-0 bg-surface-container-low z-10 border-b border-outline-variant shadow-[0_1px_0_theme(colors.outline-variant)]">
      <tr>
      <th className="py-2 px-4 font-label-md text-label-md text-secondary uppercase w-24">ID</th>
      <th className="py-2 px-4 font-label-md text-label-md text-secondary uppercase">Subject</th>
      <th className="py-2 px-4 font-label-md text-label-md text-secondary uppercase w-28">Status</th>
      <th className="py-2 px-4 font-label-md text-label-md text-secondary uppercase w-32">Priority</th>
      <th className="py-2 px-4 font-label-md text-label-md text-secondary uppercase w-40">Agent</th>
      <th className="py-2 px-4 font-label-md text-label-md text-secondary uppercase w-32">Updated</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-outline-variant">
      {/* Active Row Simulation */}
      <tr className="hover:bg-surface-container-low bg-surface-container-lowest transition-colors cursor-pointer border-l-2 border-l-primary">
      <td className="py-cell-padding-v px-4 font-body-sm text-body-sm text-secondary">#INC-9824</td>
      <td className="py-cell-padding-v px-4 font-body-sm text-body-sm text-on-surface font-medium truncate max-w-[300px]">Database latency affecting main cluster rendering queries</td>
      <td className="py-cell-padding-v px-4">
      <span className="inline-flex items-center px-2 py-0.5 rounded-sm font-label-sm text-label-sm bg-primary/10 text-primary">Open</span>
      </td>
      <td className="py-cell-padding-v px-4">
      <span className="inline-flex items-center px-2 py-0.5 rounded-sm font-label-sm text-label-sm bg-error text-on-error uppercase tracking-wider">Critical</span>
      </td>
      <td className="py-cell-padding-v px-4 font-body-sm text-body-sm text-secondary flex items-center gap-2">
      <div className="w-5 h-5 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center text-[10px] font-bold">AS</div>
                                          Alex Smith
                                      </td>
      <td className="py-cell-padding-v px-4 font-body-sm text-body-sm text-secondary">10m ago</td>
      </tr>
      {/* Standard Rows */}
      <tr className="hover:bg-surface-container-low transition-colors cursor-pointer border-l-2 border-l-transparent">
      <td className="py-cell-padding-v px-4 font-body-sm text-body-sm text-secondary">#REQ-9823</td>
      <td className="py-cell-padding-v px-4 font-body-sm text-body-sm text-on-surface truncate max-w-[300px]">Access request for new employee portal deployment pipeline</td>
      <td className="py-cell-padding-v px-4">
      <span className="inline-flex items-center px-2 py-0.5 rounded-sm font-label-sm text-label-sm bg-surface-variant text-on-surface-variant">Pending</span>
      </td>
      <td className="py-cell-padding-v px-4">
      <span className="inline-flex items-center px-2 py-0.5 rounded-sm font-label-sm text-label-sm bg-tertiary/10 text-tertiary">High</span>
      </td>
      <td className="py-cell-padding-v px-4 font-body-sm text-body-sm text-secondary">Unassigned</td>
      <td className="py-cell-padding-v px-4 font-body-sm text-body-sm text-secondary">25m ago</td>
      </tr>
      <tr className="hover:bg-surface-container-low transition-colors cursor-pointer border-l-2 border-l-transparent">
      <td className="py-cell-padding-v px-4 font-body-sm text-body-sm text-secondary">#INC-9822</td>
      <td className="py-cell-padding-v px-4 font-body-sm text-body-sm text-on-surface truncate max-w-[300px]">SSO Login failures reported across EMEA region</td>
      <td className="py-cell-padding-v px-4">
      <span className="inline-flex items-center px-2 py-0.5 rounded-sm font-label-sm text-label-sm bg-primary/10 text-primary">Open</span>
      </td>
      <td className="py-cell-padding-v px-4">
      <span className="inline-flex items-center px-2 py-0.5 rounded-sm font-label-sm text-label-sm bg-tertiary/10 text-tertiary">High</span>
      </td>
      <td className="py-cell-padding-v px-4 font-body-sm text-body-sm text-secondary flex items-center gap-2">
      <div className="w-5 h-5 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center text-[10px] font-bold">JD</div>
                                          Jane Doe
                                      </td>
      <td className="py-cell-padding-v px-4 font-body-sm text-body-sm text-secondary">1h ago</td>
      </tr>
      <tr className="hover:bg-surface-container-low transition-colors cursor-pointer border-l-2 border-l-transparent">
      <td className="py-cell-padding-v px-4 font-body-sm text-body-sm text-secondary">#REQ-9821</td>
      <td className="py-cell-padding-v px-4 font-body-sm text-body-sm text-on-surface truncate max-w-[300px]">Upgrade license tier for marketing team accounts</td>
      <td className="py-cell-padding-v px-4">
      <span className="inline-flex items-center px-2 py-0.5 rounded-sm font-label-sm text-label-sm bg-surface-variant text-on-surface-variant">Resolved</span>
      </td>
      <td className="py-cell-padding-v px-4">
      <span className="inline-flex items-center px-2 py-0.5 rounded-sm font-label-sm text-label-sm bg-secondary/10 text-secondary">Low</span>
      </td>
      <td className="py-cell-padding-v px-4 font-body-sm text-body-sm text-secondary flex items-center gap-2">
      <div className="w-5 h-5 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center text-[10px] font-bold">MK</div>
                                          Mike Ross
                                      </td>
      <td className="py-cell-padding-v px-4 font-body-sm text-body-sm text-secondary">3h ago</td>
      </tr>
      </tbody>
      </table>
      {/* Error State at Bottom */}
      <div className="py-8 px-4 flex flex-col items-center justify-center border-t border-outline-variant bg-surface-container-lowest">
      <Circle className="text-[32px] text-outline mb-2" aria-hidden={true} focusable="false" />
      <p className="font-body-sm text-body-sm text-secondary mb-3">Failed to load older records</p>
      <button className="h-[32px] px-4 bg-surface-container-lowest border border-outline-variant text-secondary font-label-md text-label-md rounded hover:bg-surface-container-low transition-colors" type="button" data-action-id="retry-connection-8" onClick={actions?.["retry-connection-8"]}>
                                  Retry Connection
                              </button>
      </div>
      </div>
      </div>
      {/* Right Side: Preview Pane */}
      <aside className="hidden lg:flex flex-col w-[360px] border-l border-outline-variant bg-surface-container-lowest shrink-0 overflow-y-auto">
      {/* Preview Header */}
      <div className="p-5 border-b border-outline-variant sticky top-0 bg-surface-container-lowest z-10">
      <div className="flex items-center justify-between mb-3">
      <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase">#INC-9824</span>
      <div className="flex gap-1">
      <button className="w-8 h-8 flex items-center justify-center text-secondary hover:bg-surface-container-low rounded" type="button" data-action-id="button-9-9" onClick={actions?.["button-9-9"]}><Circle className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      <button className="w-8 h-8 flex items-center justify-center text-secondary hover:bg-surface-container-low rounded" type="button" data-action-id="button-10-10" onClick={actions?.["button-10-10"]}><EllipsisVertical className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      <h2 className="font-headline-md text-headline-md text-on-surface mb-4 leading-snug">Database latency affecting main cluster rendering queries</h2>
      <div className="flex flex-wrap gap-2 mb-4">
      <span className="inline-flex items-center px-2 py-0.5 rounded-sm font-label-sm text-label-sm bg-error text-on-error uppercase tracking-wider">Critical Priority</span>
      <span className="inline-flex items-center px-2 py-0.5 rounded-sm font-label-sm text-label-sm bg-primary/10 text-primary">Open</span>
      <span className="inline-flex items-center px-2 py-0.5 rounded-sm font-label-sm text-label-sm bg-surface-variant text-on-surface-variant">Infrastructure</span>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-outline-variant">
      <div>
      <div className="font-label-sm text-label-sm text-secondary uppercase mb-1">Assignee</div>
      <div className="font-body-sm text-body-sm text-on-surface flex items-center gap-2">
      <div className="w-4 h-4 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center text-[8px] font-bold">AS</div>
                                      Alex Smith
                                  </div>
      </div>
      <div>
      <div className="font-label-sm text-label-sm text-secondary uppercase mb-1">Reporter</div>
      <div className="font-body-sm text-body-sm text-on-surface">System Monitor</div>
      </div>
      </div>
      </div>
      {/* Preview Body */}
      <div className="p-5 flex-1">
      <div className="mb-6">
      <h3 className="font-label-md text-label-md text-on-surface uppercase mb-2 border-b border-outline-variant pb-1">Description</h3>
      <p className="font-body-sm text-body-sm text-secondary whitespace-pre-wrap leading-relaxed">Automated alert triggered at 08:42 UTC. Read latency on primary db-cluster-01 exceeded 500ms threshold for 3 consecutive polling intervals. Connections are queueing resulting in delayed UI rendering for approximately 15% of active sessions in the US-East region.</p>
      </div>
      <div>
      <h3 className="font-label-md text-label-md text-on-surface uppercase mb-3 border-b border-outline-variant pb-1">Recent Activity</h3>
      <div className="relative pl-4 border-l border-outline-variant space-y-4 ml-2">
      <div className="relative">
      <div className="absolute w-2 h-2 rounded-full bg-primary -left-[21px] top-1.5 border-2 border-surface-container-lowest"></div>
      <div className="font-label-sm text-label-sm text-secondary mb-0.5">10m ago • Alex Smith</div>
      <div className="font-body-sm text-body-sm text-on-surface">Status changed to <span className="font-medium">In Progress</span>. Investigating query logs on node 3.</div>
      </div>
      <div className="relative">
      <div className="absolute w-2 h-2 rounded-full bg-outline-variant -left-[21px] top-1.5 border-2 border-surface-container-lowest"></div>
      <div className="font-label-sm text-label-sm text-secondary mb-0.5">15m ago • System</div>
      <div className="font-body-sm text-body-sm text-on-surface">Ticket automatically routed to Database Ops queue based on alert tags.</div>
      </div>
      </div>
      </div>
      </div>
      {/* Preview Footer Actions */}
      <div className="p-4 border-t border-outline-variant bg-surface sticky bottom-0">
      <div className="flex gap-2">
      <button className="flex-1 h-[32px] bg-primary text-on-primary rounded font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-colors" type="button" data-action-id="add-note-11" onClick={actions?.["add-note-11"]}>Add Note</button>
      <button className="flex-1 h-[32px] bg-surface-container-lowest border border-outline-variant text-secondary font-label-md text-label-md rounded hover:bg-surface-container-low transition-colors" type="button" data-action-id="resolve-12" onClick={actions?.["resolve-12"]}>Resolve</button>
      </div>
      </div>
      </aside>
      </main>
      </div>
    </>
  );
}
