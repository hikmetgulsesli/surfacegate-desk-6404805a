// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ticket Editor - SurfaceGate Desk
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, CircleUserRound, Plus, Search, Settings, Trash2, X } from "lucide-react";


export type TicketEditorSurfacegateDeskActionId = "create-ticket-1" | "button-2-2" | "button-3-3" | "cancel-4" | "save-changes-5" | "recover-draft-6" | "discard-ticket-7" | "operations-1" | "editor-2" | "queues-3" | "workload-4" | "insights-5" | "settings-6" | "help-7";

export interface TicketEditorSurfacegateDeskProps {
  actions?: Partial<Record<TicketEditorSurfacegateDeskActionId, () => void>>;
}

export function TicketEditorSurfacegateDesk({ actions }: TicketEditorSurfacegateDeskProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col h-full py-4 bg-surface-container-low dark:bg-on-surface w-[240px] border-r border-outline-variant dark:border-outline shrink-0">
      {/* Header */}
      <div className="px-4 mb-6 flex items-center gap-3">
      <div className="w-8 h-8 rounded bg-primary text-on-primary flex items-center justify-center font-headline-md font-bold">
                      S
                  </div>
      <div>
      <div className="font-headline-md text-headline-md font-bold text-on-surface">SurfaceGate</div>
      <div className="font-label-md text-label-md text-on-surface-variant">Service Desk</div>
      </div>
      </div>
      {/* Main Tabs */}
      <div className="flex flex-col gap-1 px-2 flex-1">
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-secondary-container dark:text-surface-variant font-label-md text-label-md hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors duration-150" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                      Operations
                  </a>
      {/* Active Tab: Editor */}
      <a className="flex items-center gap-3 px-3 py-2 rounded text-primary dark:text-primary-fixed-dim border-l-2 border-primary bg-surface dark:bg-surface-container-highest font-label-md text-label-md hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors duration-150" href="#" data-action-id="editor-2" onClick={actions?.["editor-2"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-[18px]" aria-hidden={true} focusable="false" />
                      Editor
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-secondary-container dark:text-surface-variant font-label-md text-label-md hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors duration-150" href="#" data-action-id="queues-3" onClick={actions?.["queues-3"]}>
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                      Queues
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-secondary-container dark:text-surface-variant font-label-md text-label-md hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors duration-150" href="#" data-action-id="workload-4" onClick={actions?.["workload-4"]}>
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                      Workload
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-secondary-container dark:text-surface-variant font-label-md text-label-md hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors duration-150" href="#" data-action-id="insights-5" onClick={actions?.["insights-5"]}>
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                      Insights
                  </a>
      </div>
      {/* Footer Tabs */}
      <div className="flex flex-col gap-1 px-2 mt-auto">
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-secondary-container dark:text-surface-variant font-label-md text-label-md hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors duration-150" href="#" data-action-id="settings-6" onClick={actions?.["settings-6"]}>
      <Settings className="text-[18px]" aria-hidden={true} focusable="false" />
                      Settings
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-secondary-container dark:text-surface-variant font-label-md text-label-md hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors duration-150" href="#" data-action-id="help-7" onClick={actions?.["help-7"]}>
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                      Help
                  </a>
      </div>
      </nav>
      {/* Main Workspace */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden bg-background">
      {/* TopNavBar */}
      <header className="w-full h-[56px] border-b border-outline-variant dark:border-outline bg-surface dark:bg-on-surface flex justify-between items-center px-margin-desktop shrink-0 transition-colors duration-200">
      {/* Left: Search */}
      <div className="flex items-center gap-4 flex-1">
      <div className="relative w-64 hidden sm:block">
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full pl-8 pr-3 py-1.5 bg-surface-container-low border border-outline-variant rounded text-on-surface font-body-sm text-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200" placeholder="Search..." type="text" />
      </div>
      </div>
      {/* Right: Actions & Profile */}
      <div className="flex items-center gap-3">
      <button className="bg-primary text-on-primary font-label-md text-label-md h-8 px-4 rounded hover:bg-on-primary-fixed-variant transition-colors duration-200 flex items-center gap-2" type="button" data-action-id="create-ticket-1" onClick={actions?.["create-ticket-1"]}>
      <Plus className="text-[16px]" aria-hidden={true} focusable="false" />
                          Create Ticket
                      </button>
      <div className="w-px h-6 bg-outline-variant mx-1"></div>
      <button className="w-8 h-8 rounded flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors duration-200" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="w-8 h-8 rounded flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors duration-200" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Editor Canvas */}
      <main className="flex-1 overflow-y-auto p-margin-desktop bg-background">
      <div className="max-w-6xl mx-auto flex flex-col gap-gutter">
      {/* Editor Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline-variant">
      <div className="flex items-center gap-3">
      <h1 className="font-headline-lg text-headline-lg text-on-surface">Ticket Editor</h1>
      <span className="px-2 py-1 bg-tertiary-container text-on-tertiary-container rounded font-label-sm text-label-sm flex items-center gap-1 border border-tertiary/20">
      <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                                  Unsaved changes
                              </span>
      </div>
      <div className="flex items-center gap-3">
      <button className="h-10 px-4 bg-surface-container-lowest border border-outline-variant text-on-surface-variant font-label-md text-label-md rounded hover:bg-surface-container-low hover:text-on-surface transition-colors" type="button" data-action-id="cancel-4" onClick={actions?.["cancel-4"]}>
                                  Cancel
                              </button>
      <button className="h-10 px-6 bg-primary text-on-primary font-label-md text-label-md rounded hover:bg-primary-container transition-colors shadow-sm" type="button" data-action-id="save-changes-5" onClick={actions?.["save-changes-5"]}>
                                  Save Changes
                              </button>
      </div>
      </div>
      {/* Form Layout (Asymmetric Bento style) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mt-2">
      {/* Left Column: Primary Content */}
      <div className="lg:col-span-8 flex flex-col gap-gutter">
      {/* Main Fields Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-6 flex flex-col gap-6 relative overflow-hidden">
      {/* Subtle decorative left border accent for active area */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary"></div>
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md text-on-surface flex items-center gap-1" htmlFor="ticket-title">
                                          Ticket Title <span aria-label="Required" className="text-error">*</span>
      </label>
      <input className="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant rounded text-on-surface font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors placeholder:text-on-surface-variant/50" id="ticket-title" placeholder="Enter a descriptive title" type="text" value="System outage reported in US-East region" />
      </div>
      <div className="flex flex-col gap-1.5">
      <div className="flex justify-between items-end">
      <label className="font-label-md text-label-md text-on-surface flex items-center gap-1" htmlFor="ticket-description">
                                              Description <span aria-label="Required" className="text-error">*</span>
      </label>
      <span className="font-label-sm text-label-sm text-error flex items-center gap-1">
      <Circle className="text-[14px]" aria-hidden={true} focusable="false" />
                                              Validation Error
                                          </span>
      </div>
      {/* Invalid state styling */}
      <textarea className="w-full px-3 py-2 bg-error-container/10 border-error rounded text-on-surface font-body-md text-body-md focus:border-error focus:ring-1 focus:ring-error focus:outline-none transition-colors resize-y" id="ticket-description" rows={12}>Crash.</textarea>
      <p className="font-body-sm text-body-sm text-error mt-1 flex items-center gap-1">
                                          Description is too short. Please provide at least 20 characters detailing the issue.
                                      </p>
      </div>
      {/* Attachments Area (Optional representation) */}
      <div className="border border-dashed border-outline-variant rounded p-4 flex flex-col items-center justify-center gap-2 bg-surface-container-low/50 cursor-pointer hover:bg-surface-container-low transition-colors">
      <Circle className="text-outline text-[24px]" aria-hidden={true} focusable="false" />
      <div className="font-body-sm text-body-sm text-on-surface-variant">Drag and drop files here, or click to select files</div>
      <div className="font-label-sm text-label-sm text-outline">Optional</div>
      </div>
      </div>
      </div>
      {/* Right Column: Metadata & Settings */}
      <div className="lg:col-span-4 flex flex-col gap-gutter">
      {/* Properties Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-5 flex flex-col gap-5">
      <h3 className="font-headline-md text-headline-md text-on-surface border-b border-outline-variant pb-2">Properties</h3>
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="category">Category</label>
      <div className="relative">
      <select className="w-full px-3 py-2 bg-surface border border-outline-variant rounded text-on-surface font-body-md text-body-md appearance-none focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" id="category">
      <option value="">Select Category</option>
      <option selected={true} value="infrastructure">Infrastructure</option>
      <option value="software">Software Bug</option>
      <option value="access">Access Request</option>
      <option value="hardware">Hardware Issue</option>
      </select>
      <Circle className="absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="priority">Priority</label>
      <div className="relative">
      <select className="w-full px-3 py-2 bg-surface border border-outline-variant rounded text-on-surface font-body-md text-body-md appearance-none focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" id="priority">
      <option value="p1">P1 - Critical</option>
      <option selected={true} value="p2">P2 - High</option>
      <option value="p3">P3 - Medium</option>
      <option value="p4">P4 - Low</option>
      </select>
      <Circle className="absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="assignee">Assignee</label>
      <div className="relative flex items-center border border-outline-variant rounded bg-surface px-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-colors">
      <div className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-sm text-label-sm shrink-0">
                                              JD
                                          </div>
      <input className="w-full px-2 py-2 bg-transparent border-none text-on-surface font-body-md text-body-md focus:outline-none focus:ring-0" id="assignee" type="text" value="John Doe" />
      <X className="text-on-surface-variant text-[18px] cursor-pointer hover:text-on-surface" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      {/* Secondary Actions Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-4 flex flex-col gap-3">
      <button className="w-full h-8 flex items-center justify-center gap-2 text-primary font-label-md text-label-md hover:bg-surface-container-low rounded transition-colors" type="button" data-action-id="recover-draft-6" onClick={actions?.["recover-draft-6"]}>
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                                      Recover Draft
                                  </button>
      <button className="w-full h-8 flex items-center justify-center gap-2 text-error font-label-md text-label-md hover:bg-error-container/20 rounded transition-colors" type="button" data-action-id="discard-ticket-7" onClick={actions?.["discard-ticket-7"]}>
      <Trash2 className="text-[18px]" aria-hidden={true} focusable="false" />
                                      Discard Ticket
                                  </button>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
