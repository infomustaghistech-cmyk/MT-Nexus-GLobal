// src/data/softwareProjects.js
// Verified data for software development and API integration projects

export const softwareProjects = [
  {
    id: 'curevirtual',
    slug: 'curevirtual',
    name: 'CureVirtual',
    title: 'CureVirtual – Custom Healthcare Portal & Management Platform',
    category: 'Custom Software Development',
    categoryShort: 'Software Development',
    status: 'Completed / Production',
    isUpcoming: false,
    subtitle:
      'Responsive multi-role digital platform engineered for streamlined patient care coordination and administrative workflows.',
    tagline: 'Custom Software Platform with Modular UI Architecture',
    clientNotice:
      'Verified custom software development project focusing on responsive frontend engineering, role-based workflows, and intuitive dashboard systems.',
    heroMetric: { label: 'UI Load Time', value: '< 850ms' },
    heroSecondaryMetric: { label: 'Platform Coverage', value: 'Desktop + Tablet + Mobile' },
    summary:
      'A custom web application built to facilitate seamless coordination between patients and healthcare providers. Engineered with high-performance React components, responsive layouts, modular state handling, and secure role-tailored views.',
    
    businessChallenge:
      'Healthcare and wellness organizations frequently struggle with fragmented patient scheduling, cumbersome intake workflows, and disconnected administrative portals. Users needed a unified, responsive interface where patients could easily browse available consultation slots, submit validated intake information, and track upcoming appointments, while staff required a clean operational view to manage daily schedules without cognitive overload.',
    
    technicalSolution:
      'Architected a component-driven Single Page Application using React and modern CSS systems. Implemented strict client-side validation schemas to ensure clean form submissions, structured state management to avoid unnecessary re-renders during calendar interactions, and created a responsive dashboard layout optimized for both clinical desktop monitors and handheld tablet devices.',
    
    contributions: [
      {
        title: 'Frontend Architecture & State Strategy',
        description:
          'Structured modular, reusable React components with optimized memoization and state scoping to guarantee smooth interactions during appointment scheduling.',
      },
      {
        title: 'Role-Based Dashboard Engineering',
        description:
          'Designed separate operational views for patients (onboarding, appointments, profile) and practitioners (daily roster, patient intake notes, schedule manager).',
      },
      {
        title: 'Form Validation & Input Sanitization',
        description:
          'Constructed accessible, high-integrity form controls with real-time validation to eliminate submission errors and protect user inputs.',
      },
      {
        title: 'Cross-Device Responsive Experience',
        description:
          'Fine-tuned breakpoints and responsive touch targets ensuring medical staff on tablets and patients on smartphones enjoy an equally intuitive experience.',
      },
    ],

    keyFunctionalities: [
      'Multi-tier role-based portal navigation (Patient & Provider perspectives)',
      'Interactive appointment booking calendar with real-time slot availability',
      'Structured patient intake forms with client-side field validation',
      'Consultation status tracker with dynamic status indicators (Scheduled, Active, Concluded)',
      'Secure session state handling and protected navigational routing',
      'Comprehensive profile and historical appointment log viewer',
    ],

    techStack: [
      { name: 'React.js', role: 'Core UI Framework', category: 'Frontend' },
      { name: 'Tailwind CSS', role: 'Utility Styling & Design System', category: 'Styling' },
      { name: 'Framer Motion', role: 'Fluid Layout & Transition Animations', category: 'Animation' },
      { name: 'Vite', role: 'High-Speed Build Tooling & HMR', category: 'Build' },
      { name: 'RESTful APIs', role: 'Backend Data Contract & Serialization', category: 'Data' },
      { name: 'JWT Auth', role: 'Role-Based Session State Tokenization', category: 'Security' },
    ],

    architectureHighlights: [
      {
        title: 'Atomic Component Hierarchy',
        detail: 'Separation of presentational atoms, composite forms, and container views for maintainability.',
      },
      {
        title: 'Sub-Second Render Cycle',
        detail: 'Zero heavy third-party UI libraries; bespoke lightweight components ensuring fast rendering.',
      },
      {
        title: 'WCAG Accessibility Standards',
        detail: 'High contrast color ratios, focus states, and screen-reader accessible form labels.',
      },
    ],

    results: [
      { metric: 'Sub-Second', description: 'Average initial page render across all device viewports' },
      { metric: '100%', description: 'Mobile and tablet responsiveness across standard resolutions' },
      { metric: 'Zero', description: 'Unvalidated intake submission errors due to strict schema guards' },
    ],
  },

  {
    id: 'fleet-telematics-api',
    slug: 'fleet-telematics-api',
    name: 'Fleet Telematics API Integrations',
    title: 'Fleet Telematics API Integrations – Geotab & Samsara Middleware',
    category: 'Fleet Technology / API Integration',
    categoryShort: 'API Integration',
    status: 'Completed / Enterprise Integration',
    isUpcoming: false,
    subtitle:
      'Bi-directional telematics data integration bridging Geotab and Samsara platform APIs with enterprise logistics systems.',
    tagline: 'High-Volume Telematics Pipeline & Schema Normalization',
    clientNotice:
      'Third-party platform integration engineering. Geotab and Samsara are registered trademarks of their respective owners. Integrations were engineered using official public and partner APIs to connect vehicle telematics streams with third-party logistics systems.',
    heroMetric: { label: 'API Protocols', value: 'JSON-RPC + REST Webhooks' },
    heroSecondaryMetric: { label: 'Data Latency', value: 'Near Real-Time Sync' },
    summary:
      'Engineered an enterprise data integration middleware that interfaces directly with Geotab (MyGeotab API) and Samsara Developer APIs. The integration unifies heterogeneous GPS coordinates, engine hours, diagnostic trouble codes (DTC), and driver duty status into a standardized, queryable data lake for logistics operators.',

    businessChallenge:
      'Fleet operating companies frequently manage mixed hardware deployments, with some vehicles utilizing Geotab GO units and others running Samsara IoT gateways. Operating two disconnected telematics dashboards created data silos, doubled dispatcher workload, and prevented unified fleet analytics. A centralized integration service was required to ingest high-frequency telematics without hitting rate limits or overwhelming database write capacities.',

    technicalSolution:
      'Designed and deployed an event-driven integration service featuring token-aware authentication workers, rate-limited polling loops for Geotab GetFeed endpoints, and secure webhook listener endpoints for Samsara event streaming. Built an intermediate Canonical Telematics Schema (CTS) that normalizes divergent vendor payloads into unified records (vehicle ID, timestamp, lat/lng, speed, odometer, fault code) before routing to enterprise dashboards.',

    contributions: [
      {
        title: 'Geotab API Engine (JSON-RPC 2.0)',
        description:
          'Implemented MyGeotab API client with automatic session token caching, credential lifecycle renewal, and incremental GetFeed polling for LogRecord and DeviceStatusInfo.',
      },
      {
        title: 'Samsara Real-Time Webhook Pipeline',
        description:
          'Built signature-verified webhook receivers ingesting live Samsara vehicle telematics, geofence enter/exit triggers, and Hours of Service (HOS) driver duty updates.',
      },
      {
        title: 'Canonical Telematics Normalization Layer',
        description:
          'Engineered a TypeScript data normalization engine that standardizes varying timestamp formats, GPS coordinate precision, speed units, and SAE J1939 fault codes.',
      },
      {
        title: 'Queueing & Backpressure Architecture',
        description:
          'Configured Redis-backed buffer queues with exponential backoff retries to absorb vehicle burst spikes and shield downstream database instances.',
      },
    ],

    keyFunctionalities: [
      'Dual-provider telematics ingestion supporting both Geotab JSON-RPC & Samsara REST',
      'Automated credential renewal and token refresh without service interruption',
      'High-throughput GPS telemetry normalization into standardized geospatial points',
      'Diagnostic Trouble Code (DTC / Check Engine) aggregation and severity classification',
      'Rate-limit mitigation with intelligent batch scheduling and exponential backoff',
      'Dead-letter queue (DLQ) mechanism for unparseable or corrupted hardware packets',
    ],

    techStack: [
      { name: 'Geotab API (JSON-RPC)', role: 'Telematics Telemetry Ingestion', category: 'Integration' },
      { name: 'Samsara Developer API', role: 'REST & Webhook Telemetry Stream', category: 'Integration' },
      { name: 'Node.js & TypeScript', role: 'Middleware Core & Transformation Engine', category: 'Backend' },
      { name: 'Redis / BullMQ', role: 'In-Memory Telemetry Queue & Rate Limiter', category: 'Queue' },
      { name: 'PostgreSQL', role: 'Relational Telematics Data Store', category: 'Database' },
      { name: 'Docker', role: 'Isolated Containerized Microservice', category: 'DevOps' },
    ],

    architectureHighlights: [
      {
        title: 'Canonical Telematics Data Model',
        detail: 'Unified internal schema abstracting vendor-specific telematics formats into one coherent contract.',
      },
      {
        title: 'Rate-Limit Adaptive Throttling',
        detail: 'Dynamic request spacing complying strictly with Geotab call limits to prevent 429 status locks.',
      },
      {
        title: 'Idempotent Telemetry Deduplication',
        detail: 'Hardware message UUID hashing ensuring repeated GPS pings are not stored twice.',
      },
    ],

    results: [
      { metric: 'Single Pipeline', description: 'Unified fleet data from both Geotab and Samsara into one platform' },
      { metric: '99.9%', description: 'Telemetry packet processing reliability with automated queue retries' },
      { metric: 'Zero 429s', description: 'Rate limit errors eliminated via predictive request batching' },
    ],
  },

  {
    id: 'pos-talabat-integration',
    slug: 'pos-talabat-integration',
    name: 'POS & Talabat Integration',
    title: 'POS & Talabat Integration – Automated Delivery Order Bridge',
    category: 'POS Systems / Delivery Platform Integration',
    categoryShort: 'POS & Delivery Integration',
    status: 'Completed / Production Integration',
    isUpcoming: false,
    subtitle:
      'Real-time order synchronization middleware connecting in-store Point of Sale systems directly with the Talabat on-demand delivery ecosystem.',
    tagline: 'Automated Kitchen Dispatch & Live Order State Lifecycle',
    clientNotice:
      'Integration engineering connecting commercial POS systems to Talabat delivery APIs. Talabat is a registered trademark of its respective owner. Work delivered via standard partner APIs and secure webhook infrastructure.',
    heroMetric: { label: 'Order Sync Delay', value: '< 1.5 Seconds' },
    heroSecondaryMetric: { label: 'Manual Re-Entry', value: '100% Eliminated' },
    summary:
      'Developed a reliable integration service linking brick-and-mortar Point of Sale (POS) terminals with the Talabat food and grocery delivery network. Inbound orders from Talabat are intercepted via webhooks, parsed, validated, and directly injected into the kitchen management queue, while live preparation milestones are reported back to Talabat.',

    businessChallenge:
      'Hospitality and retail businesses receiving Talabat delivery orders previously had to manually transcribe customer items, special preparation instructions, and modifier choices from a separate tablet into their counter POS. This manual re-entry resulted in severe kitchen bottlenecks, delayed customer dispatches, kitchen order discrepancies, and costly missed orders during rush hours.',

    technicalSolution:
      'Created a lightweight Node.js integration bridge that acts as a secure webhook gateway. Upon receiving order payloads from Talabat, the bridge cryptographically validates the webhook signature, maps menu items and modifier IDs against the POS database, formats the thermal ticket for kitchen printing, and dispatches real-time order acknowledgment events back to Talabat.',

    contributions: [
      {
        title: 'Secure Webhook Gateway & Ingestion',
        description:
          'Constructed a hardened HTTPS listener validating Talabat HMAC-SHA256 signatures and confirming request origin integrity.',
      },
      {
        title: 'Menu & Modifier Payload Transformation',
        description:
          'Engineered a JSON transformation parser converting multi-nested Talabat delivery line items, modifier groups, and cooking notes into native POS table records.',
      },
      {
        title: 'Bi-Directional Order State Handshake',
        description:
          'Implemented reciprocal API calls that notify Talabat when the order is Accepted, In Preparation, Ready for Courier Pickup, or Dispatched.',
      },
      {
        title: 'Network Resilience & Local Buffer',
        description:
          'Built an offline store-and-forward buffer ensuring orders are never lost during temporary local internet drops, auto-syncing upon reconnection.',
      },
    ],

    keyFunctionalities: [
      'Real-time Talabat order ingestion with sub-2-second POS injection',
      'Automated kitchen ticket printing and Kitchen Display System (KDS) alerts',
      'Menu item mapping and modifier customizer conversion',
      'Bi-directional status synchronization (Accepted, Kitchen Prep, Ready, Handed Over)',
      'Idempotent order receipt ensuring zero duplicate order printing',
      'Store-and-forward offline buffer for local internet failover protection',
    ],

    techStack: [
      { name: 'Talabat Developer API', role: 'Inbound Webhook & Status Callback Endpoint', category: 'Integration' },
      { name: 'Node.js & Express', role: 'Lightweight Ingestion Gateway Service', category: 'Backend' },
      { name: 'WebSocket / Local TCP', role: 'Direct POS Terminal & Thermal Printer Bridge', category: 'Networking' },
      { name: 'SQLite / JSON Cache', role: 'Local Store-and-Forward Failover Buffer', category: 'Storage' },
      { name: 'HMAC-SHA256', role: 'Webhook Cryptographic Signature Verification', category: 'Security' },
      { name: 'RESTful Architecture', role: 'Outbound Milestone Callback Dispatch', category: 'API' },
    ],

    architectureHighlights: [
      {
        title: 'Zero-Touch Order Pipeline',
        detail: 'End-to-end automation from customer tap on Talabat to physical paper ticket in the kitchen.',
      },
      {
        title: 'Failover Store-and-Forward',
        detail: 'Orders received during in-store network fluctuations are held safely in local memory and re-queued.',
      },
      {
        title: 'Strict Idempotency Guard',
        detail: 'Order reference hash verification preventing double billing or duplicate kitchen preparations.',
      },
    ],

    results: [
      { metric: '< 2s', description: 'Average time between customer order and physical kitchen ticket print' },
      { metric: '0%', description: 'Manual re-entry errors during rush periods' },
      { metric: '100%', description: 'Order status visibility synchronized directly back to delivery riders' },
    ],
  },

  {
    id: 'transpopilot',
    slug: 'transpopilot',
    name: 'TranspoPilot',
    title: 'TranspoPilot – Unified Fleet Operations & Autonomous Dispatch Platform',
    category: 'Fleet Management / SaaS Platform',
    categoryShort: 'Fleet SaaS Platform',
    status: 'Upcoming Project',
    isUpcoming: true,
    subtitle:
      'Next-generation cloud-native fleet operations SaaS platform in active development to unify dispatch, tracking, and predictive maintenance.',
    tagline: 'Upcoming Cloud SaaS for Connected Logistics Operations',
    clientNotice:
      'Upcoming proprietary SaaS platform currently in active architecture and engineering phase. Planned for private beta onboarding in 2026/2027.',
    heroMetric: { label: 'Platform Status', value: 'In Active Engineering' },
    heroSecondaryMetric: { label: 'Target Rollout', value: 'Private Beta 2026/2027' },
    summary:
      'TranspoPilot is an upcoming enterprise SaaS solution designed to eliminate the complexity of modern fleet operations. By centralizing vehicle telemetry, automated dispatch assignment, predictive maintenance scheduling, and driver compliance into a single responsive operational cockpit, TranspoPilot aims to empower logistics teams with intelligent, real-time command.',

    businessChallenge:
      'Modern logistics operators are overwhelmed by disjointed point solutions — one tool for GPS tracking, another for fuel records, spreadsheets for maintenance schedules, and phone calls for driver dispatch. This fragmentation leads to empty miles, unplanned vehicle breakdowns, regulatory compliance fines, and spiraling operational overhead. The industry needs a single unified operational cockpit designed from the ground up for modern fleets.',

    technicalSolution:
      'Architecting a multi-tenant, cloud-native microservice system. The platform pairs a real-time reactive frontend cockpit (built with Next.js/React and WebGL geospatial rendering) with a high-throughput event streaming backbone. TranspoPilot is designed with hardware-agnostic ingestion pipelines, allowing fleets to connect existing ELD and OBD-II devices seamlessly.',

    contributions: [
      {
        title: 'System Architecture & Domain Design',
        description:
          'Spearheading the comprehensive system architecture, database schema design, and microservice boundary definitions for high-concurrency fleet data.',
      },
      {
        title: 'Operational Cockpit UI/UX Prototyping',
        description:
          'Prototyping an ultra-responsive dark-mode dispatch dashboard with interactive map layers, live vehicle telemetry cards, and multi-monitor support.',
      },
      {
        title: 'Hardware-Agnostic Ingestion Protocol',
        description:
          'Defining standard telematics adapter interfaces to support future integration with multiple GPS and telematics hardware providers.',
      },
      {
        title: 'Predictive Maintenance Rules Engine',
        description:
          'Designing algorithmic alert rules that calculate vehicle service needs based on real-time engine hours, mileage, and historical DTC trends.',
      },
    ],

    keyFunctionalities: [
      'Unified multi-asset fleet tracking cockpit with high-frequency map updates',
      'Automated dispatch optimization matching cargo requirements with nearest active vehicle',
      'Predictive maintenance scheduler tracking engine health, tires, and oil service intervals',
      'Driver Hours of Service (HOS) & electronic logging compliance monitoring',
      'Fuel consumption and emissions efficiency analytics dashboard',
      'Multi-tenant role architecture with isolated tenant data and customizable permission trees',
    ],

    techStack: [
      { name: 'React / Next.js', role: 'Real-Time Operational Cockpit UI', category: 'Frontend' },
      { name: 'Node.js & Go', role: 'High-Concurrency Ingestion & Microservices', category: 'Backend' },
      { name: 'PostgreSQL + TimescaleDB', role: 'Relational & Time-Series Telemetry Storage', category: 'Database' },
      { name: 'Redis & Kafka', role: 'High-Throughput Event Streaming & Caching', category: 'Streaming' },
      { name: 'Tailwind CSS', role: 'Bespoke Dark Cockpit Design System', category: 'Styling' },
      { name: 'Docker & Kubernetes', role: 'Cloud-Native Container Orchestration', category: 'DevOps' },
    ],

    architectureHighlights: [
      {
        title: 'Time-Series Telemetry Engine',
        detail: 'Purpose-built database storage optimized for millions of vehicle coordinate pings over time.',
      },
      {
        title: 'Real-Time Geospatial Map Layers',
        detail: 'Vector-tile rendering displaying hundreds of active vehicles smoothly without browser lag.',
      },
      {
        title: 'Multi-Tenant Data Isolation',
        detail: 'Enterprise-grade row-level security and schema isolation safeguarding carrier proprietary data.',
      },
    ],

    roadmap: [
      {
        phase: 'Phase 1 – Completed',
        title: 'Architecture & Ingestion Specs',
        description: 'Completed core data domain modeling, API contracts, and telematics normalization schemas.',
        status: 'Done',
      },
      {
        phase: 'Phase 2 – Current Focus',
        title: 'Cockpit Dashboard & Dispatch Engine',
        description: 'Actively building the reactive dispatch interface, live map canvas, and vehicle state engine.',
        status: 'In Progress',
      },
      {
        phase: 'Phase 3 – Upcoming',
        title: 'Predictive Analytics & Mobile Companion',
        description: 'Integration of maintenance alert algorithms and driver mobile responsive web view.',
        status: 'Planned',
      },
      {
        phase: 'Phase 4 – Upcoming',
        title: 'Closed Beta & Customer Onboarding',
        description: 'Private pilot program with selected logistics fleet operators.',
        status: 'Planned',
      },
    ],
  },
];

export const getSoftwareProjectBySlug = (slug) => {
  return softwareProjects.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
};

