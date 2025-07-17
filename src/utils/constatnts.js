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

export const RECENTORDERS=[
  {
    id:1,
    productName:"Product 1",
    orderStatus:"Pending",
    orderTotal:"$100",
    channel:"Amazon",
    customerName:"John Doe",
    deliveryDate:"2021-01-01",

  },
  {
    id:2,
    productName:"Product 2",
    orderStatus:"Pending",
    orderTotal:"$100",
    channel:"Amazon",
    customerName:"John Doe",
    deliveryDate:"2021-01-01",
  },
  {
    id:3,
    productName:"Product 3",
    orderStatus:"Pending",
    orderTotal:"$100",
    channel:"Amazon",
    customerName:"John Doe",
    deliveryDate:"2021-01-01",
  },
  {
    id:4,
    productName:"Product 4",
    orderStatus:"Delivered",
    orderTotal:"$100",
    channel:"Amazon",
    customerName:"John Doe",
    deliveryDate:"2021-01-01",
  },
  {
    id:5,
    productName:"Product 5",
    orderStatus:"Cancelled",
    orderTotal:"$100",
    channel:"Flipkart",
    customerName:"John Doe",
    deliveryDate:"2021-01-01",
  },
  {
    id:6,
    productName:"Product 6",
    orderStatus:"Pending",
    orderTotal:"$100",
    channel:"Flipkart",
    customerName:"John Doe",
    deliveryDate:"2021-01-01",
  },
  {
    id:7,
    productName:"Product 7",
    orderStatus:"Pending",
    orderTotal:"$100",
    channel:"Flipkart",
    customerName:"John Doe",
    deliveryDate:"2021-01-01",
  },
  {
    id:8,
    productName:"Product 8",
    orderStatus:"Pending",
    orderTotal:"$100",
    channel:"meesho",
    customerName:"John Doe",
    deliveryDate:"2021-01-01",
  },
]


export const BARCHARTDATA = [
  {
    title: "Revenue",
    months: [
      { month: "January", value: 12000 },
      { month: "February", value: 15000 },
      { month: "March", value: 17000 },
      { month: "April", value: 14000 },
      { month: "May", value: 16000 },
      { month: "June", value: 18000 },
      { month: "July", value: 20000 },
      { month: "August", value: 19000 },
      { month: "September", value: 17500 },
      { month: "October", value: 18500 },
      { month: "November", value: 21000 },
      { month: "December", value: 23000 }
    ]
  },
  {
    title: "Orders",
    months: [
      { month: "January", value: 320 },
      { month: "February", value: 410 },
      { month: "March", value: 380 },
      { month: "April", value: 450 },
      { month: "May", value: 420 },
      { month: "June", value: 460 },
      { month: "July", value: 500 },
      { month: "August", value: 480 },
      { month: "September", value: 470 },
      { month: "October", value: 510 },
      { month: "November", value: 530 },
      { month: "December", value: 550 }
    ]
  },
  {
    title: "Customers",
    months: [
      { month: "January", value: 100 },
      { month: "February", value: 130 },
      { month: "March", value: 120 },
      { month: "April", value: 140 },
      { month: "May", value: 135 },
      { month: "June", value: 150 },
      { month: "July", value: 160 },
      { month: "August", value: 155 },
      { month: "September", value: 145 },
      { month: "October", value: 170 },
      { month: "November", value: 180 },
      { month: "December", value: 190 }
    ]
  }
];
