// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Queue and Status Management - SurfaceGate Desk
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, CircleUserRound, ListFilter, Plus, Search, Settings } from "lucide-react";


export type QueueAndStatusManagementSurfacegateDeskActionId = "create-ticket-1" | "button-2-2" | "button-3-3" | "filter-my-teams-4" | "update-status-5" | "take-ticket-6" | "update-7" | "update-status-8" | "review-9" | "operations-1" | "editor-2" | "queues-3" | "workload-4" | "insights-5" | "settings-6" | "help-7";

export interface QueueAndStatusManagementSurfacegateDeskProps {
  actions?: Partial<Record<QueueAndStatusManagementSurfacegateDeskActionId, () => void>>;
}

export function QueueAndStatusManagementSurfacegateDesk({ actions }: QueueAndStatusManagementSurfacegateDeskProps) {
  return (
    <>
      {/* SideNavBar Component */}
      <nav className="bg-surface-container-low w-[240px] h-screen border-r border-outline-variant flex flex-col h-full py-4 flex-shrink-0 z-20">
      {/* Header */}
      <div className="px-4 mb-6 flex items-center space-x-3">
      <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-sm border border-outline-variant overflow-hidden">
      <img alt="User Profile" className="w-full h-full object-cover" data-alt="A small, circular avatar portrait of a professional male with a neutral expression. The image is brightly lit, suitable for a corporate software dashboard context. The color palette is natural and clear." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwwqMWdEJP6C88gE0oNRB_F28exkhqzE0fc25jcBuIo_N6h291Fv6BvCMZDTO0qCDisGsbx9J2DNyEuXxImmmVIKAR4PNYwpLwpHsioTMU5_L9oqwMmQ21XpcI5L5R6rhVjCx4e0HQWSkmuB0CcicB9v1d6fTFi7_-u1IrSWjPYrXAfUfSEKRkQ-Kg2k8SVJK1IaIt4tR0XfLMRiB2ZngwQSe-JFkTyQY9aM29CHfna2PYmWDrQi8Zxlkfb0KqCk3yGULlx4x5t2k" />
      </div>
      <div>
      <div className="font-headline-md text-headline-md font-bold text-on-surface">SurfaceGate</div>
      <div className="font-label-sm text-label-sm text-secondary">Service Desk</div>
      </div>
      </div>
      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto px-2 space-y-1">
      <a className="flex items-center space-x-3 px-3 py-2 rounded-DEFAULT text-on-secondary-container hover:bg-surface-container-high transition-colors duration-150 font-label-md text-label-md group" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <Circle className="text-secondary group-hover:text-on-surface transition-colors" aria-hidden={true} focusable="false" />
      <span>Operations</span>
      </a>
      <a className="flex items-center space-x-3 px-3 py-2 rounded-DEFAULT text-on-secondary-container hover:bg-surface-container-high transition-colors duration-150 font-label-md text-label-md group" href="#" data-action-id="editor-2" onClick={actions?.["editor-2"]}>
      <Circle className="text-secondary group-hover:text-on-surface transition-colors" aria-hidden={true} focusable="false" />
      <span>Editor</span>
      </a>
      {/* Active Tab: Queues */}
      <a className="flex items-center space-x-3 px-3 py-2 text-primary border-l-2 border-primary bg-surface transition-colors duration-150 font-label-md text-label-md" href="#" data-action-id="queues-3" onClick={actions?.["queues-3"]}>
      <Circle style={{fontVariationSettings: "'FILL' 1"}} className="text-primary" aria-hidden={true} focusable="false" />
      <span className="font-bold">Queues</span>
      </a>
      <a className="flex items-center space-x-3 px-3 py-2 rounded-DEFAULT text-on-secondary-container hover:bg-surface-container-high transition-colors duration-150 font-label-md text-label-md group" href="#" data-action-id="workload-4" onClick={actions?.["workload-4"]}>
      <Circle className="text-secondary group-hover:text-on-surface transition-colors" aria-hidden={true} focusable="false" />
      <span>Workload</span>
      </a>
      <a className="flex items-center space-x-3 px-3 py-2 rounded-DEFAULT text-on-secondary-container hover:bg-surface-container-high transition-colors duration-150 font-label-md text-label-md group" href="#" data-action-id="insights-5" onClick={actions?.["insights-5"]}>
      <Circle className="text-secondary group-hover:text-on-surface transition-colors" aria-hidden={true} focusable="false" />
      <span>Insights</span>
      </a>
      </div>
      {/* Footer Navigation */}
      <div className="px-2 pt-4 border-t border-outline-variant space-y-1">
      <a className="flex items-center space-x-3 px-3 py-2 rounded-DEFAULT text-on-secondary-container hover:bg-surface-container-high transition-colors duration-150 font-label-md text-label-md group" href="#" data-action-id="settings-6" onClick={actions?.["settings-6"]}>
      <Settings className="text-secondary group-hover:text-on-surface transition-colors" aria-hidden={true} focusable="false" />
      <span>Settings</span>
      </a>
      <a className="flex items-center space-x-3 px-3 py-2 rounded-DEFAULT text-on-secondary-container hover:bg-surface-container-high transition-colors duration-150 font-label-md text-label-md group" href="#" data-action-id="help-7" onClick={actions?.["help-7"]}>
      <Circle className="text-secondary group-hover:text-on-surface transition-colors" aria-hidden={true} focusable="false" />
      <span>Help</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden min-w-0">
      {/* TopNavBar Component */}
      <header className="bg-surface w-full h-[56px] border-b border-outline-variant flex justify-between items-center px-margin-desktop flex-shrink-0 z-10">
      {/* Left: Brand / Search context */}
      <div className="flex items-center space-x-6 w-1/3">
      <div className="font-headline-md text-headline-md text-primary font-bold hidden md:block">SurfaceGate Desk</div>
      {/* Search Bar */}
      <div className="relative w-full max-w-xs flex items-center">
      <Search className="absolute left-2 text-outline text-sm" aria-hidden={true} focusable="false" />
      <input className="w-full pl-8 pr-3 py-1.5 bg-surface-container-low border border-outline-variant rounded-DEFAULT font-body-sm text-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-on-surface placeholder-secondary" placeholder="Search tickets, IPs, or assets..." type="text" />
      </div>
      </div>
      {/* Right: Actions */}
      <div className="flex items-center space-x-2">
      <button className="bg-primary text-on-primary px-4 py-1.5 rounded-DEFAULT font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-colors shadow-sm flex items-center space-x-1" type="button" data-action-id="create-ticket-1" onClick={actions?.["create-ticket-1"]}>
      <Plus className="text-[16px]" aria-hidden={true} focusable="false" />
      <span>Create Ticket</span>
      </button>
      <div className="w-px h-6 bg-outline-variant mx-2"></div>
      <button aria-label="Notifications" className="w-8 h-8 flex items-center justify-center rounded-DEFAULT text-secondary hover:bg-surface-container-low transition-colors" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="Account" className="w-8 h-8 flex items-center justify-center rounded-DEFAULT text-secondary hover:bg-surface-container-low transition-colors" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Workspace (Kanban Board) */}
      <div className="flex-1 flex flex-col p-margin-desktop overflow-hidden bg-background">
      {/* View Header */}
      <div className="flex justify-between items-end mb-6 flex-shrink-0">
      <div>
      <h1 className="font-headline-lg text-headline-lg text-on-surface">Queue and Status Management</h1>
      <p className="font-body-sm text-body-sm text-secondary mt-1">Manage active workstreams across SLA tiers and operational states.</p>
      </div>
      <div className="flex space-x-2">
      <button className="bg-surface border border-outline-variant text-on-secondary-container px-3 py-1.5 rounded-DEFAULT font-label-md text-label-md hover:bg-surface-container-low transition-colors flex items-center space-x-1" type="button" data-action-id="filter-my-teams-4" onClick={actions?.["filter-my-teams-4"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" />
      <span>Filter: My Teams</span>
      </button>
      </div>
      </div>
      {/* Kanban Board Container */}
      <div className="flex-1 flex overflow-x-auto pb-4 items-start space-x-6">
      {/* LANE: TRIAGE */}
      <div className="w-[340px] flex-shrink-0 flex flex-col max-h-full rounded-lg bg-surface border border-outline-variant">
      <div className="p-3 border-b border-outline-variant flex justify-between items-center bg-surface-container-low rounded-t-lg">
      <h2 className="font-label-md text-label-md text-on-surface font-semibold flex items-center">
      <span className="w-2 h-2 rounded-full bg-tertiary-container mr-2"></span>
                                  TRIAGE
                              </h2>
      <span className="bg-surface-variant text-on-surface px-2 py-0.5 rounded-full font-label-sm text-label-sm border border-outline-variant">3</span>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-surface">
      {/* Card 1 */}
      <div className="bg-surface border border-outline-variant hover:border-outline rounded-DEFAULT p-3 hover:bg-surface-bright transition-colors shadow-sm group">
      <div className="flex justify-between items-start mb-2">
      <span className="font-label-sm text-label-sm text-secondary">#SG-4092</span>
      <span className="bg-error-container text-on-error-container px-2 py-0.5 rounded-DEFAULT font-label-sm text-[10px] uppercase font-bold tracking-wider border border-error-container">P1 - Critical</span>
      </div>
      <h3 className="font-headline-md text-body-md font-semibold text-on-surface mb-3 leading-snug">Database sync failure on secondary cluster region EU-West</h3>
      <div className="flex justify-between items-end">
      <div className="flex flex-col space-y-1">
      <div className="flex items-center text-secondary font-label-sm text-label-sm">
      <Circle className="text-[14px] mr-1" aria-hidden={true} focusable="false" />
                                              SLA breach in 45m
                                          </div>
      </div>
      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="text-primary hover:text-on-primary-fixed-variant font-label-md text-label-md transition-colors" type="button" data-action-id="update-status-5" onClick={actions?.["update-status-5"]}>Update Status</button>
      </div>
      </div>
      </div>
      {/* Card 2 */}
      <div className="bg-surface border border-outline-variant hover:border-outline rounded-DEFAULT p-3 hover:bg-surface-bright transition-colors shadow-sm group border-l-2 border-l-secondary">
      <div className="flex justify-between items-start mb-2">
      <span className="font-label-sm text-label-sm text-secondary">#SG-4095</span>
      <span className="bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded-DEFAULT font-label-sm text-[10px] uppercase font-bold tracking-wider">P3 - Normal</span>
      </div>
      <h3 className="font-headline-md text-body-md font-semibold text-on-surface mb-3 leading-snug">User access request: VPN provisioning for external contractor</h3>
      <div className="flex justify-between items-end">
      <div className="flex flex-col space-y-1">
      <div className="flex items-center text-on-surface font-label-sm text-label-sm">
      <Circle className="text-[14px] mr-1 text-outline" aria-hidden={true} focusable="false" />
                                              Unassigned
                                          </div>
      </div>
      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="text-primary hover:text-on-primary-fixed-variant font-label-md text-label-md transition-colors" type="button" data-action-id="take-ticket-6" onClick={actions?.["take-ticket-6"]}>Take Ticket</button>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* LANE: ACTIVE */}
      <div className="w-[340px] flex-shrink-0 flex flex-col max-h-full rounded-lg bg-surface border border-outline-variant shadow-sm relative">
      {/* Elevation accent for focus */}
      <div className="absolute -inset-[1px] border-2 border-primary rounded-lg pointer-events-none opacity-20"></div>
      <div className="p-3 border-b border-outline-variant flex justify-between items-center bg-surface-container-low rounded-t-lg">
      <h2 className="font-label-md text-label-md text-on-surface font-semibold flex items-center">
      <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                                  ACTIVE
                              </h2>
      <span className="bg-primary-container text-on-primary-container px-2 py-0.5 rounded-full font-label-sm text-label-sm border border-primary-container">4</span>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-surface">
      {/* Card 3 */}
      <div className="bg-surface border border-outline-variant hover:border-outline rounded-DEFAULT p-3 hover:bg-surface-bright transition-colors shadow-sm group">
      <div className="flex justify-between items-start mb-2">
      <span className="font-label-sm text-label-sm text-secondary">#SG-4081</span>
      <span className="bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded-DEFAULT font-label-sm text-[10px] uppercase font-bold tracking-wider">P2 - High</span>
      </div>
      <h3 className="font-headline-md text-body-md font-semibold text-on-surface mb-3 leading-snug">API Gateway latency spikes during peak load (us-east)</h3>
      <div className="flex justify-between items-end">
      <div className="flex items-center">
      <div className="w-6 h-6 rounded-full bg-surface-variant overflow-hidden border border-outline-variant mr-2">
      <img alt="Assignee" className="w-full h-full object-cover" data-alt="A small circular avatar of a female software engineer. Bright corporate lighting, modern minimalist UI context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuATcsjQimUxc176yvPdh-y2WhVpjfFvc4w3MYIh8dvu_fV0lvFZt5LVrFeei8Fk5FvmjCYhfMmGpq0Jl7pI8qoVAfix0AhZyX3EYBzU7A0JOF0RvX9MolY9_VnsfE4NtlsRFKEZuZfP-RCG5XvPBLZrmXcFmn6A5_Te6P6C5LWb43eQ2DaEBqIj2HfJluVdPA0z_Rw6VRAdDdQfCWeD-f2ZNTvthXwK3BoZGggrVY8MR6E3Q-azBs9-Jv0c3T6M6eOttWefrq6y5mc" />
      </div>
      <span className="font-label-sm text-label-sm text-secondary">S. Jenkins</span>
      </div>
      <div className="flex items-center space-x-2">
      <button className="bg-surface-container-low text-on-surface px-2 py-1 border border-outline-variant rounded-DEFAULT font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" type="button" data-action-id="update-7" onClick={actions?.["update-7"]}>Update</button>
      </div>
      </div>
      </div>
      {/* Card 4 */}
      <div className="bg-surface border border-outline-variant hover:border-outline rounded-DEFAULT p-3 hover:bg-surface-bright transition-colors shadow-sm group">
      <div className="flex justify-between items-start mb-2">
      <span className="font-label-sm text-label-sm text-secondary">#SG-4077</span>
      <span className="bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded-DEFAULT font-label-sm text-[10px] uppercase font-bold tracking-wider">P3 - Normal</span>
      </div>
      <h3 className="font-headline-md text-body-md font-semibold text-on-surface mb-3 leading-snug">Update firewall rules for new staging environment</h3>
      <div className="flex justify-between items-end">
      <div className="flex items-center">
      <div className="w-6 h-6 rounded-full bg-surface-variant overflow-hidden border border-outline-variant mr-2">
      <img alt="Assignee" className="w-full h-full object-cover" data-alt="A small circular avatar of a male system administrator. Bright corporate lighting, modern minimalist UI context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVAnPZiIEk0rc0uLQ1W4UovULNvL31SAQSQGPMjKo0iGhOCYbz0Fa1k0QLMBQSXbnur9qfFC7kHtFDVaerENYdQnWoYIKw0RugFBXugHC56QjTLcaWhy0JfxdlVVM3D3SHVmZUBprPSaAUhatQkS9Cf8EMHiBmSTH6oDog6I-LKJ77OQbpnc0DjZ-tx5hpqUR5Xksa0fMJb6PtcvRCBIKJIY0ykG-qbyNLBSGp6EdjhVOvMObLHL8oPSHN9VgO_uaL0t4raItE-No" />
      </div>
      <span className="font-label-sm text-label-sm text-secondary">M. Ross</span>
      </div>
      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="text-primary hover:text-on-primary-fixed-variant font-label-md text-label-md transition-colors" type="button" data-action-id="update-status-8" onClick={actions?.["update-status-8"]}>Update Status</button>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* LANE: STALLED / BLOCKED */}
      <div className="w-[340px] flex-shrink-0 flex flex-col max-h-full rounded-lg bg-surface border border-outline-variant">
      <div className="p-3 border-b border-outline-variant flex justify-between items-center bg-surface-container-low rounded-t-lg">
      <h2 className="font-label-md text-label-md text-on-surface font-semibold flex items-center text-secondary">
      <span className="w-2 h-2 rounded-full bg-outline mr-2"></span>
                                  STALLED
                              </h2>
      <span className="bg-surface-variant text-on-surface px-2 py-0.5 rounded-full font-label-sm text-label-sm border border-outline-variant">2</span>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-surface opacity-90">
      {/* Card 5 (Blocked) */}
      <div className="bg-surface border-2 border-error-container rounded-DEFAULT p-3 shadow-sm relative overflow-hidden">
      {/* Blocked banner */}
      <div className="absolute top-0 left-0 w-1 h-full bg-error"></div>
      <div className="flex justify-between items-start mb-2 pl-2">
      <span className="font-label-sm text-label-sm text-secondary">#SG-4050</span>
      <span className="flex items-center bg-error/10 text-error px-2 py-0.5 rounded-DEFAULT font-label-sm text-[10px] uppercase font-bold tracking-wider">
      <Circle className="text-[12px] mr-1" aria-hidden={true} focusable="false" /> BLOCKED
                                      </span>
      </div>
      <h3 className="font-headline-md text-body-md font-semibold text-on-surface mb-3 leading-snug pl-2">Third-party vendor dependency for SSO integration module</h3>
      <div className="pl-2 mb-3">
      <div className="bg-surface-container-low p-2 rounded-DEFAULT text-body-sm font-body-sm text-secondary border border-outline-variant">
                                          Awaiting vendor patch deployment. Est ETA: Friday.
                                      </div>
      </div>
      <div className="flex justify-between items-end pl-2">
      <div className="flex items-center text-error font-label-sm text-label-sm">
      <Circle className="text-[14px] mr-1" aria-hidden={true} focusable="false" />
                                          Stalled 4 days
                                      </div>
      <button className="text-secondary hover:text-on-surface font-label-sm text-label-sm transition-colors" type="button" data-action-id="review-9" onClick={actions?.["review-9"]}>Review</button>
      </div>
      </div>
      </div>
      </div>
      {/* Add Lane Spacer */}
      <div className="w-4 flex-shrink-0"></div>
      </div>
      </div>
      </main>
    </>
  );
}
