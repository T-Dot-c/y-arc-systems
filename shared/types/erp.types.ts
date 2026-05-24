export interface Invoice {
  id: string;
  amount: number;
  status: 'pending' | 'paid' | 'overdue';
  dueDate: string;
}

export interface LedgerEntry {
  id: string;
  accountId: string;
  description: string;
  debit?: number;
  credit?: number;
  timestamp: string;
}

export interface PayrollEntry {
  employeeId: string;
  baseSalary: number;
  deductions: number;
  netPay: number;
}
