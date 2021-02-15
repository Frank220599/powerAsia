export type Agent = {
  id: number;
  company_name: string;
  name: string;
  code: string;
  phone: string;
  fax: string;
  address_fact: string;
  address_law: string;
  email: string;
  inn: string;
  status: number;
  date: string;
};

export type NewAgent = {
  type: string;
  name: string;
  code: string;
  fax: string;
  phone: string;
  email: string;
  inn: string;
  company_name: string;
  address_fact: string;
  address_law: string;
};

export type InitialState = {
  agents: Agent[];
  agent: Agent | null;
  addAgentModalIsVisible: boolean;
};
