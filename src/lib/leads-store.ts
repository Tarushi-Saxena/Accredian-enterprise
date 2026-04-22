export type LeadPayload = {
  name: string;
  email: string;
  company: string;
  message?: string;
  createdAt: string;
};

const leads: LeadPayload[] = [];

export function saveLead(lead: LeadPayload) {
  leads.unshift(lead);
  return lead;
}

export function listLeads() {
  return [...leads];
}
