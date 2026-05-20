// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Agent Workload - SurfaceGate Desk
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, CircleUserRound, Search, Settings } from "lucide-react";


export type AgentWorkloadSurfacegateDeskActionId = "create-ticket-1" | "button-2-2" | "button-3-3" | "ej-elena-jenkins-l2-specialist-over-capacity-act-4" | "mr-marcus-reed-l1-triage-at-capacity-active-load-5" | "sl-sarah-lin-l2-specialist-available-active-load-6" | "set-away-status-7" | "bulk-reassign-8" | "view-all-24-tickets-9" | "button-10-10" | "button-11-11" | "button-12-12" | "button-13-13" | "operations-1" | "editor-2" | "queues-3" | "workload-4" | "insights-5" | "settings-6" | "help-7";

export interface AgentWorkloadSurfacegateDeskProps {
  actions?: Partial<Record<AgentWorkloadSurfacegateDeskActionId, () => void>>;
}

export function AgentWorkloadSurfacegateDesk({ actions }: AgentWorkloadSurfacegateDeskProps) {
  return (
    <>
      <aside className="hidden md:flex flex-col w-[240px] h-screen bg-surface-container-low border-r border-outline-variant py-4 shrink-0">
      <div className="px-6 mb-6 flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-headline-md text-headline-md">S</div>
      <div>
      <h1 className="font-headline-md text-headline-md font-bold text-on-surface">SurfaceGate</h1>
      <div className="font-label-md text-label-md text-on-surface-variant">Service Desk</div>
      </div>
      </div>
      <nav className="flex-1 flex flex-col gap-1 px-3">
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-secondary-container hover:bg-surface-container-high transition-colors duration-150" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Operations</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-secondary-container hover:bg-surface-container-high transition-colors duration-150" href="#" data-action-id="editor-2" onClick={actions?.["editor-2"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Editor</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-secondary-container hover:bg-surface-container-high transition-colors duration-150" href="#" data-action-id="queues-3" onClick={actions?.["queues-3"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Queues</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-primary border-l-2 border-primary bg-surface transition-colors duration-150 font-bold" href="#" data-action-id="workload-4" onClick={actions?.["workload-4"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Workload</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-secondary-container hover:bg-surface-container-high transition-colors duration-150" href="#" data-action-id="insights-5" onClick={actions?.["insights-5"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      </nav>
      <div className="mt-auto flex flex-col gap-1 px-3">
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-secondary-container hover:bg-surface-container-high transition-colors duration-150" href="#" data-action-id="settings-6" onClick={actions?.["settings-6"]}>
      <Settings  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-secondary-container hover:bg-surface-container-high transition-colors duration-150" href="#" data-action-id="help-7" onClick={actions?.["help-7"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Help</span>
      </a>
      </div>
      </aside>
      <div className="flex-1 flex flex-col h-full overflow-hidden">
      <header className="flex justify-between items-center px-margin-desktop w-full h-[56px] bg-surface border-b border-outline-variant shrink-0">
      <div className="flex items-center w-[300px]">
      <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" aria-hidden={true} focusable="false" />
      <input className="w-full h-[32px] pl-10 pr-3 bg-surface-container-low border border-outline-variant rounded-DEFAULT font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Search SurfaceGate..." type="text" />
      </div>
      </div>
      <div className="font-headline-md text-headline-md text-primary font-bold hidden lg:block">
                      SurfaceGate Desk
                  </div>
      <div className="flex items-center gap-4">
      <button className="h-[32px] px-4 bg-primary text-on-primary rounded-DEFAULT font-label-md text-label-md hover:bg-primary-container transition-colors duration-200" type="button" data-action-id="create-ticket-1" onClick={actions?.["create-ticket-1"]}>
                          Create Ticket
                      </button>
      <div className="flex items-center gap-2 text-on-surface-variant">
      <button className="w-8 h-8 flex items-center justify-center rounded-DEFAULT hover:bg-surface-container-low transition-colors duration-200" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded-DEFAULT hover:bg-surface-container-low transition-colors duration-200" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </header>
      <main className="flex-1 flex overflow-hidden p-margin-desktop gap-gutter">
      <section className="w-[320px] shrink-0 flex flex-col bg-surface border border-outline-variant rounded-DEFAULT overflow-hidden">
      <div className="p-4 border-b border-outline-variant bg-surface-container-low">
      <h2 className="font-headline-md text-headline-md font-semibold text-on-surface mb-3">Agent Directory</h2>
      <div className="relative w-full">
      <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full h-[28px] pl-9 pr-3 bg-surface border border-outline-variant rounded-DEFAULT font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Filter agents..." type="text" />
      </div>
      </div>
      <div className="flex-1 overflow-y-auto">
      <button className="w-full flex flex-col p-4 border-b border-outline-variant text-left bg-surface-container-low border-l-2 !border-l-primary hover:bg-surface-container-high transition-colors" type="button" data-action-id="ej-elena-jenkins-l2-specialist-over-capacity-act-4" onClick={actions?.["ej-elena-jenkins-l2-specialist-over-capacity-act-4"]}>
      <div className="flex justify-between items-start mb-2 w-full">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-sm text-label-sm font-bold">EJ</div>
      <div>
      <div className="font-body-sm text-body-sm font-semibold text-on-surface">Elena Jenkins</div>
      <div className="font-label-sm text-label-sm text-on-surface-variant">L2 Specialist</div>
      </div>
      </div>
      <span className="inline-flex items-center px-1.5 py-0.5 bg-error text-on-error font-label-sm text-label-sm rounded-DEFAULT whitespace-nowrap">Over Capacity</span>
      </div>
      <div className="w-full">
      <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant mb-1">
      <span>Active Load</span>
      <span className="text-error font-bold">24 / 20</span>
      </div>
      <div className="w-full h-1.5 bg-surface-variant rounded-full overflow-hidden">
      <div className="h-full bg-error" style={{width: "100%"}}></div>
      </div>
      </div>
      </button>
      <button className="w-full flex flex-col p-4 border-b border-outline-variant text-left bg-surface hover:bg-surface-container-low transition-colors" type="button" data-action-id="mr-marcus-reed-l1-triage-at-capacity-active-load-5" onClick={actions?.["mr-marcus-reed-l1-triage-at-capacity-active-load-5"]}>
      <div className="flex justify-between items-start mb-2 w-full">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-label-sm text-label-sm font-bold">MR</div>
      <div>
      <div className="font-body-sm text-body-sm font-semibold text-on-surface">Marcus Reed</div>
      <div className="font-label-sm text-label-sm text-on-surface-variant">L1 Triage</div>
      </div>
      </div>
      <span className="inline-flex items-center px-1.5 py-0.5 bg-error-container text-on-error-container font-label-sm text-label-sm rounded-DEFAULT whitespace-nowrap">At Capacity</span>
      </div>
      <div className="w-full">
      <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant mb-1">
      <span>Active Load</span>
      <span>20 / 20</span>
      </div>
      <div className="w-full h-1.5 bg-surface-variant rounded-full overflow-hidden">
      <div className="h-full bg-tertiary" style={{width: "100%"}}></div>
      </div>
      </div>
      </button>
      <button className="w-full flex flex-col p-4 border-b border-outline-variant text-left bg-surface hover:bg-surface-container-low transition-colors" type="button" data-action-id="sl-sarah-lin-l2-specialist-available-active-load-6" onClick={actions?.["sl-sarah-lin-l2-specialist-available-active-load-6"]}>
      <div className="flex justify-between items-start mb-2 w-full">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-surface-dim text-on-surface flex items-center justify-center font-label-sm text-label-sm font-bold">SL</div>
      <div>
      <div className="font-body-sm text-body-sm font-semibold text-on-surface">Sarah Lin</div>
      <div className="font-label-sm text-label-sm text-on-surface-variant">L2 Specialist</div>
      </div>
      </div>
      <span className="inline-flex items-center px-1.5 py-0.5 bg-surface-variant text-on-surface-variant font-label-sm text-label-sm rounded-DEFAULT whitespace-nowrap">Available</span>
      </div>
      <div className="w-full">
      <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant mb-1">
      <span>Active Load</span>
      <span>12 / 20</span>
      </div>
      <div className="w-full h-1.5 bg-surface-variant rounded-full overflow-hidden">
      <div className="h-full bg-primary" style={{width: "60%"}}></div>
      </div>
      </div>
      </button>
      </div>
      </section>
      <section className="flex-1 flex flex-col overflow-hidden">
      <div className="flex justify-between items-end mb-6 shrink-0">
      <div>
      <div className="flex items-center gap-2 mb-1">
      <h1 className="font-headline-lg text-headline-lg font-bold text-on-surface">Elena Jenkins</h1>
      <span className="inline-flex items-center px-2 py-0.5 bg-error text-on-error font-label-sm text-label-sm rounded-DEFAULT">Over Capacity</span>
      </div>
      <div className="font-body-md text-body-md text-on-surface-variant">L2 Technical Support Specialist • 4 Critical Pending</div>
      </div>
      <div className="flex gap-3">
      <button className="h-[32px] px-4 bg-surface border border-outline text-on-surface rounded-DEFAULT font-label-md text-label-md hover:bg-surface-container-low transition-colors" type="button" data-action-id="set-away-status-7" onClick={actions?.["set-away-status-7"]}>
                                  Set Away Status
                              </button>
      <button className="h-[32px] px-4 bg-surface border border-outline text-on-surface rounded-DEFAULT font-label-md text-label-md hover:bg-surface-container-low transition-colors flex items-center gap-2" type="button" data-action-id="bulk-reassign-8" onClick={actions?.["bulk-reassign-8"]}>
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                                  Bulk Reassign
                              </button>
      </div>
      </div>
      <div className="grid grid-cols-4 gap-gutter mb-6 shrink-0">
      <div className="border border-outline-variant bg-surface p-4 rounded-DEFAULT flex flex-col justify-center">
      <div className="font-label-md text-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Total Open</div>
      <div className="font-headline-lg text-headline-lg text-primary font-bold">24</div>
      </div>
      <div className="border border-outline-variant bg-surface p-4 rounded-DEFAULT flex flex-col justify-center relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-error"></div>
      <div className="font-label-md text-label-md text-on-surface-variant mb-1 uppercase tracking-wider pl-1">Stale / Overdue</div>
      <div className="font-headline-lg text-headline-lg text-error font-bold pl-1">7</div>
      </div>
      <div className="border border-outline-variant bg-surface p-4 rounded-DEFAULT flex flex-col justify-center">
      <div className="font-label-md text-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Avg Resolution</div>
      <div className="font-headline-lg text-headline-lg text-on-surface font-bold">4.2<span className="text-body-sm font-normal text-on-surface-variant ml-1">hrs</span></div>
      </div>
      <div className="border border-outline-variant bg-surface p-4 rounded-DEFAULT flex flex-col justify-center">
      <div className="font-label-md text-label-md text-on-surface-variant mb-1 uppercase tracking-wider">CSAT Score</div>
      <div className="font-headline-lg text-headline-lg text-on-surface font-bold">94<span className="text-body-sm font-normal text-on-surface-variant ml-1">%</span></div>
      </div>
      </div>
      <div className="flex-1 flex flex-col bg-surface border border-outline-variant rounded-DEFAULT overflow-hidden">
      <div className="p-4 border-b border-outline-variant bg-surface-container-lowest flex justify-between items-center shrink-0">
      <h3 className="font-headline-md text-headline-md font-semibold text-on-surface">Action Required Tickets</h3>
      <button className="font-label-md text-label-md text-primary hover:underline" type="button" data-action-id="view-all-24-tickets-9" onClick={actions?.["view-all-24-tickets-9"]}>View All 24 Tickets</button>
      </div>
      <div className="flex-1 overflow-auto">
      <table className="w-full text-left border-collapse">
      <thead className="sticky top-0 bg-surface-container-low border-b border-outline-variant z-10">
      <tr>
      <th className="py-2 px-4 font-label-sm text-label-sm text-on-surface-variant font-semibold">Ticket ID</th>
      <th className="py-2 px-4 font-label-sm text-label-sm text-on-surface-variant font-semibold">Subject</th>
      <th className="py-2 px-4 font-label-sm text-label-sm text-on-surface-variant font-semibold">Status</th>
      <th className="py-2 px-4 font-label-sm text-label-sm text-on-surface-variant font-semibold">Age</th>
      <th className="py-2 px-4 font-label-sm text-label-sm text-on-surface-variant font-semibold text-right">Action</th>
      </tr>
      </thead>
      <tbody className="font-body-sm text-body-sm text-on-surface">
      <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors h-[40px]">
      <td className="py-2 px-4 font-mono text-secondary">#INC-8492</td>
      <td className="py-2 px-4 font-medium">Database connection timeout on primary cluster</td>
      <td className="py-2 px-4">
      <span className="inline-flex items-center px-2 py-0.5 bg-error-container text-on-error-container font-label-sm text-label-sm rounded-DEFAULT">Stale - Needs Update</span>
      </td>
      <td className="py-2 px-4 text-error font-medium">48 hrs</td>
      <td className="py-2 px-4 text-right">
      <button className="p-1 text-on-surface-variant hover:text-primary transition-colors" title="Reassign" type="button" data-action-id="button-10-10" onClick={actions?.["button-10-10"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors h-[40px]">
      <td className="py-2 px-4 font-mono text-secondary">#REQ-9011</td>
      <td className="py-2 px-4">Access provision for new vendor cohort</td>
      <td className="py-2 px-4">
      <span className="inline-flex items-center px-2 py-0.5 bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm rounded-DEFAULT">Blocked - Vendor</span>
      </td>
      <td className="py-2 px-4 text-tertiary font-medium">72 hrs</td>
      <td className="py-2 px-4 text-right">
      <button className="p-1 text-on-surface-variant hover:text-primary transition-colors" title="Reassign" type="button" data-action-id="button-11-11" onClick={actions?.["button-11-11"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors h-[40px] bg-error-container/20">
      <td className="py-2 px-4 font-mono text-secondary">#INC-9102</td>
      <td className="py-2 px-4 font-medium">Payment gateway API failing 500s</td>
      <td className="py-2 px-4">
      <span className="inline-flex items-center px-2 py-0.5 bg-error text-on-error font-label-sm text-label-sm rounded-DEFAULT">SLA Breached</span>
      </td>
      <td className="py-2 px-4 text-error font-bold">4 hrs</td>
      <td className="py-2 px-4 text-right">
      <button className="p-1 text-on-surface-variant hover:text-primary transition-colors" title="Reassign" type="button" data-action-id="button-12-12" onClick={actions?.["button-12-12"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors h-[40px]">
      <td className="py-2 px-4 font-mono text-secondary">#INC-9155</td>
      <td className="py-2 px-4">UI layout broken on legacy IE11 client</td>
      <td className="py-2 px-4">
      <span className="inline-flex items-center px-2 py-0.5 bg-surface-variant text-on-surface-variant font-label-sm text-label-sm rounded-DEFAULT">In Progress</span>
      </td>
      <td className="py-2 px-4 text-on-surface-variant">2 hrs</td>
      <td className="py-2 px-4 text-right">
      <button className="p-1 text-on-surface-variant hover:text-primary transition-colors" title="Reassign" type="button" data-action-id="button-13-13" onClick={actions?.["button-13-13"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      </section>
      </main>
      </div>
    </>
  );
}
