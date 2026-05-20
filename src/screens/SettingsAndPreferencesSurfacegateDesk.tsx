// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Settings and Preferences - SurfaceGate Desk
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, CircleUserRound, Home, ListFilter, Menu, Pencil, Plus, Save, Settings, Trash2, TriangleAlert, X } from "lucide-react";


export type SettingsAndPreferencesSurfacegateDeskActionId = "button-1-1" | "button-2-2" | "button-3-3" | "button-4-4" | "new-ticket-5" | "act-retry-load-6" | "act-save-preferences-7" | "button-8-8" | "new-filter-9" | "button-10-10" | "button-11-11" | "button-12-12" | "button-13-13" | "reset-to-factory-defaults-14" | "operations-1" | "editor-2" | "queues-3" | "workload-4" | "insights-5" | "settings-6" | "support-7";

export interface SettingsAndPreferencesSurfacegateDeskProps {
  actions?: Partial<Record<SettingsAndPreferencesSurfacegateDeskActionId, () => void>>;
}

export function SettingsAndPreferencesSurfacegateDesk({ actions }: SettingsAndPreferencesSurfacegateDeskProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface-container-lowest border-b border-outline-variant fixed top-0 left-0 w-full z-50 flex items-center h-topbar-height px-gutter justify-between gap-4">
      <div className="flex items-center gap-4">
      {/* Mobile Menu Toggle (hidden on desktop) */}
      <button className="md:hidden p-2 text-on-surface-variant hover:bg-surface-container transition-colors rounded" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      <h1 className="text-headline-lg font-headline-lg font-bold text-primary tracking-tight">SurfaceGate Desk</h1>
      </div>
      <div className="flex items-center gap-2">
      <button className="p-2 text-on-surface-variant hover:bg-surface-container transition-colors rounded-full relative" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
      </button>
      <button className="p-2 text-on-surface-variant hover:bg-surface-container transition-colors rounded-full" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button className="p-2 text-on-surface-variant hover:bg-surface-container transition-colors rounded-full ml-2" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* SideNavBar */}
      <nav className="bg-surface-container border-r border-outline-variant fixed left-0 top-0 h-full w-sidebar-width z-40 flex flex-col py-4 px-2 hidden md:flex pt-[72px]">
      <div className="px-3 mb-6">
      <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold">
                          AG
                      </div>
      <div>
      <div className="text-label-md font-label-md text-on-surface-variant">Agent Profile</div>
      <div className="text-headline-md font-headline-md font-black text-on-surface">SurfaceGate</div>
      <div className="text-label-sm font-label-sm text-outline">Service Desk</div>
      </div>
      </div>
      <button className="w-full bg-primary text-on-primary h-10 rounded text-label-md font-label-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2" type="button" data-action-id="new-ticket-5" onClick={actions?.["new-ticket-5"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                      New Ticket
                  </button>
      </div>
      <div className="flex-1 overflow-y-auto">
      <ul className="space-y-1">
      <li>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:bg-surface-container-high transition-colors text-label-md font-label-md" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
                              Operations
                          </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:bg-surface-container-high transition-colors text-label-md font-label-md" href="#" data-action-id="editor-2" onClick={actions?.["editor-2"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
                              Editor
                          </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:bg-surface-container-high transition-colors text-label-md font-label-md" href="#" data-action-id="queues-3" onClick={actions?.["queues-3"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
                              Queues
                          </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:bg-surface-container-high transition-colors text-label-md font-label-md" href="#" data-action-id="workload-4" onClick={actions?.["workload-4"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
                              Workload
                          </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:bg-surface-container-high transition-colors text-label-md font-label-md" href="#" data-action-id="insights-5" onClick={actions?.["insights-5"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
                              Insights
                          </a>
      </li>
      </ul>
      </div>
      <div className="mt-auto pt-4 border-t border-outline-variant">
      <ul className="space-y-1">
      <li>
      <a className="flex items-center gap-3 px-3 py-2 rounded bg-secondary-container text-on-secondary-container border-l-4 border-primary scale-[0.98] duration-150 text-label-md font-label-md" href="#" data-action-id="settings-6" onClick={actions?.["settings-6"]}>
      <Settings  style={{fontVariationSettings: "'FILL' 1"}} className="text-[20px]" aria-hidden={true} focusable="false" />
                              Settings
                          </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:bg-surface-container-high transition-colors text-label-md font-label-md" href="#" data-action-id="support-7" onClick={actions?.["support-7"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
                              Support
                          </a>
      </li>
      </ul>
      </div>
      </nav>
      {/* Main Content */}
      <main className="flex-1 ml-0 md:ml-sidebar-width pt-topbar-height px-gutter md:px-margin-desktop py-6">
      {/* Header & Success Message */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
      <h2 className="text-headline-lg font-headline-lg text-on-surface">Settings &amp; Preferences</h2>
      <p className="text-body-md font-body-md text-on-surface-variant mt-1">Manage your workspace configuration and view defaults.</p>
      </div>
      <div className="flex items-center gap-3">
      <button className="h-10 px-4 bg-surface-container-lowest border border-outline-variant text-on-surface-variant rounded text-label-md font-label-md hover:bg-surface-container transition-colors" type="button" data-action-id="act-retry-load-6" onClick={actions?.["act-retry-load-6"]}>
                          ACT_RETRY_LOAD
                      </button>
      <button className="h-10 px-4 bg-primary text-on-primary rounded text-label-md font-label-md hover:opacity-90 transition-opacity flex items-center gap-2" type="button" data-action-id="act-save-preferences-7" onClick={actions?.["act-save-preferences-7"]}>
      <Save className="text-[18px]" aria-hidden={true} focusable="false" />
                          ACT_SAVE_PREFERENCES
                      </button>
      </div>
      </div>
      {/* Success Indicator (Hidden by default, shown for demonstration) */}
      <div className="max-w-4xl mx-auto mb-6 bg-surface-container-lowest border border-[#10B981] rounded p-4 flex items-center gap-3">
      <Circle className="text-[#10B981]" aria-hidden={true} focusable="false" />
      <span className="text-body-md font-body-md text-on-surface">Preferences saved successfully.</span>
      <button className="ml-auto text-outline hover:text-on-surface" type="button" data-action-id="button-8-8" onClick={actions?.["button-8-8"]}>
      <X className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="max-w-4xl mx-auto space-y-6">
      {/* Section: Default Views */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded p-6">
      <div className="mb-5 border-b border-outline-variant pb-4">
      <h3 className="text-headline-md font-headline-md text-on-surface flex items-center gap-2">
      <Home className="text-outline" aria-hidden={true} focusable="false" />
                              Default Views
                          </h3>
      <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">Set the landing page you see when you log in.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <label className="flex flex-col gap-2 p-4 border border-outline-variant rounded cursor-pointer hover:bg-surface-container-low transition-colors relative">
      <input checked={true} className="absolute top-4 right-4 text-primary focus:ring-primary h-4 w-4 border-outline-variant" name="default_view" type="radio" />
      <Circle className="text-primary text-[24px]" aria-hidden={true} focusable="false" />
      <span className="text-label-md font-label-md text-on-surface">Operations</span>
      <span className="text-body-sm font-body-sm text-on-surface-variant">Active ticket monitoring</span>
      </label>
      <label className="flex flex-col gap-2 p-4 border border-outline-variant rounded cursor-pointer hover:bg-surface-container-low transition-colors relative">
      <input className="absolute top-4 right-4 text-primary focus:ring-primary h-4 w-4 border-outline-variant" name="default_view" type="radio" />
      <Circle className="text-outline text-[24px]" aria-hidden={true} focusable="false" />
      <span className="text-label-md font-label-md text-on-surface">Queues</span>
      <span className="text-body-sm font-body-sm text-on-surface-variant">Team inbox overview</span>
      </label>
      <label className="flex flex-col gap-2 p-4 border border-outline-variant rounded cursor-pointer hover:bg-surface-container-low transition-colors relative">
      <input className="absolute top-4 right-4 text-primary focus:ring-primary h-4 w-4 border-outline-variant" name="default_view" type="radio" />
      <Circle className="text-outline text-[24px]" aria-hidden={true} focusable="false" />
      <span className="text-label-md font-label-md text-on-surface">Workload</span>
      <span className="text-body-sm font-body-sm text-on-surface-variant">Resource allocation</span>
      </label>
      </div>
      </section>
      {/* Section: Workflow Preferences */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded p-6">
      <div className="mb-5 border-b border-outline-variant pb-4">
      <h3 className="text-headline-md font-headline-md text-on-surface flex items-center gap-2">
      <Circle className="text-outline" aria-hidden={true} focusable="false" />
                              Workflow Preferences
                          </h3>
      <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">Customize how data is displayed and when you are alerted.</p>
      </div>
      <div className="space-y-6">
      {/* Density */}
      <div>
      <label className="text-label-md font-label-md text-on-surface block mb-2">Data Table Density</label>
      <div className="flex items-center gap-4">
      <label className="flex items-center gap-2 cursor-pointer">
      <input className="text-primary focus:ring-primary h-4 w-4 border-outline-variant" name="density" type="radio" />
      <span className="text-body-md font-body-md text-on-surface">Relaxed</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
      <input checked={true} className="text-primary focus:ring-primary h-4 w-4 border-outline-variant" name="density" type="radio" />
      <span className="text-body-md font-body-md text-on-surface">Compact (Recommended)</span>
      </label>
      </div>
      </div>
      <div className="border-t border-outline-variant pt-6">
      <div className="flex items-center justify-between mb-4">
      <div>
      <div className="text-label-md font-label-md text-on-surface">In-App Notifications</div>
      <div className="text-body-sm font-body-sm text-on-surface-variant">Receive toast alerts for SLA breaches.</div>
      </div>
      <div className="relative inline-block w-9 align-middle select-none transition duration-200 ease-in">
      <input checked={true} className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer" id="toggle1" name="toggle" type="checkbox" />
      <label className="toggle-label block overflow-hidden h-5 rounded-full bg-surface-variant cursor-pointer" htmlFor="toggle1"></label>
      </div>
      </div>
      <div className="flex items-center justify-between">
      <div>
      <div className="text-label-md font-label-md text-on-surface">Email Summaries</div>
      <div className="text-body-sm font-body-sm text-on-surface-variant">Daily digest of unassigned high-priority tickets.</div>
      </div>
      <div className="relative inline-block w-9 align-middle select-none transition duration-200 ease-in">
      <input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer" id="toggle2" name="toggle" type="checkbox" />
      <label className="toggle-label block overflow-hidden h-5 rounded-full bg-surface-variant cursor-pointer" htmlFor="toggle2"></label>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Section: Saved Filters */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded p-6">
      <div className="mb-5 border-b border-outline-variant pb-4 flex justify-between items-center">
      <div>
      <h3 className="text-headline-md font-headline-md text-on-surface flex items-center gap-2">
      <ListFilter className="text-outline" aria-hidden={true} focusable="false" />
                                  Saved Filters
                              </h3>
      <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">Manage your custom queue views.</p>
      </div>
      <button className="text-primary text-label-md font-label-md hover:underline flex items-center gap-1" type="button" data-action-id="new-filter-9" onClick={actions?.["new-filter-9"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                              New Filter
                          </button>
      </div>
      <div className="border border-outline-variant rounded overflow-hidden">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-surface border-b border-outline-variant">
      <th className="p-cell-padding-v px-cell-padding-h text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Filter Name</th>
      <th className="p-cell-padding-v px-cell-padding-h text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Criteria Summary</th>
      <th className="p-cell-padding-v px-cell-padding-h text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
      </tr>
      </thead>
      <tbody className="text-body-sm font-body-sm">
      <tr className="border-b border-outline-variant hover:bg-surface-bright transition-colors group">
      <td className="p-cell-padding-v px-cell-padding-h font-medium text-on-surface border-l-2 border-transparent">Critical Unassigned</td>
      <td className="p-cell-padding-v px-cell-padding-h text-on-surface-variant">Priority: High AND Status: Open AND Assignee: None</td>
      <td className="p-cell-padding-v px-cell-padding-h text-right">
      <button className="text-outline hover:text-primary p-1" type="button" data-action-id="button-10-10" onClick={actions?.["button-10-10"]}><Pencil className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      <button className="text-outline hover:text-error p-1" type="button" data-action-id="button-11-11" onClick={actions?.["button-11-11"]}><Trash2 className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </td>
      </tr>
      <tr className="hover:bg-surface-bright transition-colors group">
      <td className="p-cell-padding-v px-cell-padding-h font-medium text-on-surface border-l-2 border-transparent">My VIP Tickets</td>
      <td className="p-cell-padding-v px-cell-padding-h text-on-surface-variant">Assignee: Me AND Customer Tier: Enterprise</td>
      <td className="p-cell-padding-v px-cell-padding-h text-right">
      <button className="text-outline hover:text-primary p-1" type="button" data-action-id="button-12-12" onClick={actions?.["button-12-12"]}><Pencil className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      <button className="text-outline hover:text-error p-1" type="button" data-action-id="button-13-13" onClick={actions?.["button-13-13"]}><Trash2 className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </section>
      {/* Section: Reset Controls */}
      <section className="bg-[#FFF5F5] border border-[#FECACA] rounded p-6">
      <div className="flex items-start gap-4">
      <TriangleAlert className="text-[#DC2626] mt-1" aria-hidden={true} focusable="false" />
      <div>
      <h3 className="text-headline-md font-headline-md text-[#991B1B]">Reset Controls</h3>
      <p className="text-body-sm font-body-sm text-[#7F1D1D] mt-1 mb-4">Restore all settings to their factory defaults. This action cannot be undone and will remove all custom saved filters.</p>
      <button className="h-8 px-3 border border-[#DC2626] text-[#DC2626] rounded text-label-md font-label-md hover:bg-[#FEE2E2] transition-colors" type="button" data-action-id="reset-to-factory-defaults-14" onClick={actions?.["reset-to-factory-defaults-14"]}>
                                   Reset to Factory Defaults
                               </button>
      </div>
      </div>
      </section>
      </div>
      </main>
    </>
  );
}
