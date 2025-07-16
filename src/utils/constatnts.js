export const CONTACT_OWNER = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+0987654321",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "+1122334455",
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob.brown@example.com",
    phone: "+2233445566",
  },
];

export const COUNTRY_CODES = [
  { flag: "US", code: "+1", name: "United States" },
  { flag: "UK", code: "+44", name: "United Kingdom" },
  { flag: "IN", code: "+91", name: "India" },
  { flag: "JP", code: "+81", name: "Japan" },
  { flag: "DE", code: "+49", name: "Germany" },
];

import Dashboard from "../components/Dashboard";

export const TABS = [
  { id: "dashboard", label: "Dashboard", component: Dashboard },
  { id: "orders", label: "Orders", component: Dashboard },
  { id: "address", label: "Address", component: Dashboard },
  { id: "notes", label: "Notes", component: Dashboard },
  { id: "tasks", label: "Tasks", component: Dashboard },
  { id: "contacts", label: "Contacts", component: Dashboard },
  { id: "credit history", label: "Credit History", component: Dashboard },
];

export const DASHBOARD_CONTENT = [
  {
    title: "Total Orders",
    total: 120,
    currentMonthOrders: 30,
  },

  {
    title: "Total Customers",

    total: 300,
    newCustomers: 15,
  },
  {
    title: "Total Revenue",
    total: 50000,
    currentMonthRevenue: 12000,
  },
  {
    title: "Pending Orders",
    total: 45,
    currentMonthPending: 75,
  },
  {
    title: "Pending Returns",

    total: 150,
    currentMonthReturns: 20,
  },
  {
    title: "Total Credit History",
    total: 20,
    currentMonthCreditHistory: 5,
  },
];

export const ORDERSTATUS = [
  {
    id: 1,
    status: "New",
    count: 50,
  },
  {
    id: 2,
    status: "Pending",
    count: 30,
  },
  {
    id: 3,
    status: "Dispatched",
    count: 20,
  },
  {
    id: 4,
    status: "Delivered",
    count: 100,
  },
  {
    id: 5,
    status: "Cancelled",
    count: 10,
  },
];
