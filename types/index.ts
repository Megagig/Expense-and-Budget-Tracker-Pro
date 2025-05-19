import { UserRole } from '@prisma/client';

export interface Transaction {
  id: string;
  text: string;
  amount: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

export interface UserWithTransactions {
  id: string;
  email: string;
  name?: string;
  image?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
  transactions: Transaction[];
}

export interface Budget {
  id: string;
  name: string;
  amount: number;
  spent: number;
  category: string;
  period: 'weekly' | 'monthly' | 'yearly';
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface DashboardStats {
  totalBalance: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  budgetUsedPercentage: number;
}