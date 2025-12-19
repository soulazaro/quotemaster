// Entidades baseadas no Dicionário de Dados

export interface User {
  id: number;
  name: string;
  email: string;
  passwordHash: string; // Na prática, seria hash real. Aqui simularemos.
}

export interface Client {
  id: number;
  name: string; // nome_razao
  document: string; // cpf_cnpj
  email: string;
  phones: string[]; // Lista de telefones
}

export interface Product {
  id: number;
  description: string; // descricao
  price: number; // valor_unitario
}

export interface QuoteItem {
  id: string; // UUID para controle de lista
  productId: number;
  productName: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface Quote {
  id: number;
  clientId: number;
  clientName: string;
  userId: number; // Vendedor
  date: string; // ISO Date
  validUntil: string; // ISO Date (+15 dias)
  items: QuoteItem[];
  subtotal: number; // Soma dos itens
  discount: number; // Valor do desconto
  total: number; // Final (Subtotal - Desconto)
}
