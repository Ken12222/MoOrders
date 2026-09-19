/**
 * All landing page copy lives here so you can edit text without touching
 * any components. Search for "TODO" to find things you need to fill in.
 */

export const brand = {
  name: 'MoOrders',
  tagline: 'AI order taking on WhatsApp, connected to your backend.',
}

/** TODO: point these at your real pages (booking page, sign-up, login, docs). */
export const links = {
  demo: '#',
  signup: '#',
  login: '#',
  docs: '#',
  dashboard: '#',
}

export const announcement = {
  text: 'Now live: AI order capture for WhatsApp Business',
  cta: 'See how it works',
  href: '#how-it-works',
}

export const nav = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#get-started' }, // TODO: link to a pricing page when you have one
]

export const hero = {
  title: 'Too Many Orders? Let AI Process them.',
  lead: 'Manage Inventory and Let AI take the orders, confirm every detail, and send it straight to your Dashboard.',
  primaryCta: 'Book a demo',
  secondaryCta: 'Watch it work',
  trust: [
    'Works with your WhatsApp number',
    'Orders reach your dashboard in seconds',
  ],
}

/**
 * The hero demo conversation. `at` is the animation stage where the message
 * appears (see TIMELINE in HeroDemo.jsx).
 */
export const demo = {
  shopName: 'Sunny Side Bakery',
  shopStatus: 'Order assistant',
  screenReaderSummary:
    'Example: a customer orders two sourdough loaves and a box of croissants on WhatsApp. MoOrders asks about delivery, confirms the total, and sends the finished order to the backend.',
  messages: [
    { from: 'customer', at: 1, time: '10:41', text: 'Hi! Can I get 2 sourdough loaves and a box of croissants for Friday?' },
    { from: 'ai', at: 3, time: '10:41', text: 'Hi Sam! That’s 2 sourdough loaves (GH¢9 each) and 1 croissant box (GH¢14). Pickup or delivery?' },
    { from: 'customer', at: 4, time: '10:42', text: 'Delivery please. 14 Palm Street' },
    { from: 'ai', at: 6, time: '10:42', text: 'Delivery is GH¢4, so your total is GH¢36 for Friday. Shall I confirm?' },
    { from: 'customer', at: 7, time: '10:42', text: 'Yes please 🙏' },
    { from: 'ai', at: 9, time: '10:43', text: 'Order confirmed! We’ll message you when it’s on the way.' },
  ],
  order: {
    customer: 'Sam · +1 555 0142',
    items: [
      { qty: 2, name: 'Sourdough loaf', price: 'GH¢18.00' },
      { qty: 1, name: 'Croissant box', price: 'GH¢14.00' },
    ],
    delivery: 'Fri · 14 Palm Street',
    total: 'GH¢36.00',
  },
}

/**
 * TODO: these numbers are placeholders. Replace them with real figures from
 * your product before launch, or delete the ones you can't back up.
 */
export const stats = [
  { icon: 'timer', value: '< 5 sec', label: 'Average first reply' },
  { icon: 'moon', value: '24/7', label: 'Orders taken, even after hours' },
  { icon: 'badge', value: '98%', label: 'Orders captured correctly' },
  { icon: 'languages', value: '30+', label: 'Languages understood' },
]

export const ai = {
  id: 'how-it-works',
  title: 'An order taker that never misses a message',
  body: 'MoOrders reads text and voice notes the way customers actually write them. It asks for anything that’s missing, checks your catalog, and confirms every detail before an order goes anywhere.',
  points: [
    { icon: 'mic', text: 'Understands text, voice notes, and slang' },
    { icon: 'package', text: 'Checks stock and prices as it chats' },
    { icon: 'users', text: 'Hands over to your team when needed' },
  ],
  voice: {
    duration: '0:08',
    transcriptLabel: 'Transcribed by AI',
    transcript: '“Hey, can I get 3 chocolate croissants and a lemon tart for 5pm?”',
  },
  matched: {
    title: 'Matched to your catalog',
    rows: [
      { name: 'Chocolate croissant', qty: '× 3', stock: 'In stock', tone: 'ok' },
      { name: 'Lemon tart', qty: '× 1', stock: '2 left', tone: 'low' },
    ],
  },
  rules: {
    title: '+ New order rule',
    items: [
      { icon: 'shield', label: 'Confirm before sending', on: true },
      { icon: 'users', label: 'Hand over large orders', on: false },
    ],
  },
}

export const pipeline = {
  id: 'backend',
  title: 'From chat to backend, automatically',
  lead: 'Every order follows the same path, so nothing gets lost between a customer’s message and your fulfillment system.',
  heading: 'Send orders where you need them',
  body: 'The moment a customer confirms, MoOrders sends the order to your backend as clean, structured data.',
  listTitle: 'Every order includes',
  list: [
    'Customer name and WhatsApp number',
    'Items, quantities, and totals',
    'Delivery details and notes',
  ],
  diagramLabel:
    'Flow diagram: a new WhatsApp message arrives, AI confirms the order with the customer, and the finished order is sent to your backend.',
  nodes: {
    start: { title: 'New message', chips: ['Text', 'Voice note'], joiner: 'or' },
    confirm: { title: 'AI confirms the order', chip: 'status: "confirmed"' },
    send: { title: 'Sent to your backend', chip: 'POST /orders' },
  },
}

export const cards = {
  id: 'features',
  items: [
    {
      tag: 'Whatsapp Integration',
      title: 'Plug with your existing WhatsApp Number',
      body: 'No need to change your number or use a new one. MoOrders works with your existing WhatsApp number, so you can keep the same contact with your customers.',
      // cta: 'Read the API docs',
      // href: links.docs,
    },
    {
      tag: 'Order dashboard',
      title: 'Every order in one place',
      body: 'Watch WhatsApp orders arrive in real time with the customer, the items, and the full chat behind them. Search, edit, or fix an order in one click.',
      // cta: 'See the dashboard',
      // href: links.dashboard,
    },
  ],
}

export const closing = {
  id: 'get-started',
  title: 'Start taking orders on WhatsApp today',
  body: 'Connect your WhatsApp Business number, add your catalog, and let MoOrders handle the conversations. Confirmed orders land in your backend, ready to fulfill.',
  cta: 'Get Started',
  note: 'No credit card required.',
}

export const footer = {
  columns: [
    {
      title: 'Product',
      links: [
        { label: 'How it works', href: '#how-it-works' },
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#get-started' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Getting started', href: '#' },
        { label: 'Contact us', href: '#' },
        { label: 'Book a demo', href: '#' },
      ],
    },
    // {
    //   title: 'Resources',
    //   links: [
    //     { label: 'Blog', href: '#' },
    //     { label: 'Guides', href: '#' },
    //     { label: 'API docs', href: '#' },
    //     { label: 'Community', href: '#' },
    //     { label: 'Changelog', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Company',
    //   id: 'company',
    //   links: [
    //     { label: 'About us', href: '#' },
    //     { label: 'Careers', href: '#' },
    //     { label: 'Press', href: '#' },
    //   ],
    // },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
}
