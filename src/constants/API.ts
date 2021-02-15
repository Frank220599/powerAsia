export enum API {
  // Inventory
  GET_INVENTORY_LIST = 'api/inventory',
  GET_INVENTORY = 'api/inventory/view',
  ADD_INVENTORY = 'api/inventory/create',

  // WriteOff
  GET_WRITE_OFF_LIST = 'api/writeoff',
  GET_WRITE_OFF = 'api/writeoff/view',
  ADD_WRITE_OFF = 'api/writeoff/create',

  // Agent
  GET_AGENT_LIST = 'api/agent',
  GET_AGENT = 'api/agent/view',
  ADD_AGENT = 'api/agent/create',

  // Posting
  GET_POSTING_LIST = 'api/coming',
  GET_POSTING = 'api/coming/view',
  ADD_POSTING = 'api/coming/create',

  // Stock
  GET_STOCK_LIST = 'api/stock',

  // Product
  GET_PRODUCT_LIST = 'api/product/list',

  // Handbooks
  GET_WRITE_OFF_TYPES = 'api/handbook?type=writeoff',
  GET_CURRENCIES = 'api/handbook?type=currency',
  GET_PAYMENT_TYPES = 'api/handbook?type=payment',
  GET_PRODUCTS = 'api/handbook?type=product',
  GET_MANAGERS = 'api/manager',
}
