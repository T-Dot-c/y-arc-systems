import { Invoice, LedgerEntry } from '../../shared/types/erp.types';

const BASE_URL = 'http://localhost:3001/api/finance';

export const financeApi = {
  getInvoices: async (): Promise<Invoice[]> => {
    const response = await fetch(`${BASE_URL}/invoices`);
    if (!response.ok) throw new Error('Failed to fetch invoices');
    return response.json();
  },

  getLedger: async (): Promise<LedgerEntry[]> => {
    const response = await fetch(`${BASE_URL}/ledger`);
    if (!response.ok) throw new Error('Failed to fetch ledger');
    return response.json();
  },
};
