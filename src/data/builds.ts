export interface ClientBuild {
  id: string;
  client: string;
  title: string;
  category: 'AI Customer Ops' | 'Lead Gen & Scraping' | 'Financial Automation' | 'Conversational AI' | 'Data Pipelines' | 'Systems Integration' | 'AI Integration';
  flow: string[];
  businessBottleneck: string;
  theFlow: string;
  steps: string[];
  progress: string;
}

export const CLIENT_BUILDS: ClientBuild[] = [
  {
    id: 'wheres-my-protein',
    client: 'Pure Health',
    title: 'The "Where\'s My Protein?" Auto-Resolver',
    category: 'AI Customer Ops',
    flow: ['Incoming Ticket', 'GPT-4 Classifier', 'Shopify/WMS API', 'Refund/Reship Dispatch'],
    businessBottleneck: 'A major sports nutrition brand faced thousands of "where is my order" support tickets weekly, causing a 4-day backlog and high support-staff fatigue.',
    theFlow: 'Customer queries are parsed for context, matched with shipping API states, evaluated by an LLM for intent, and automatically resolved via logistics actions.',
    steps: [
      'Ingest: Webhook fires on Zendesk ticket creation.',
      'Analyze: GPT-4o extracts the order number and evaluates customer sentiment.',
      'Query: Shopify and Shipping API lookup the real-time fulfillment status.',
      'Resolve: If lost in transit, triggers auto-refund or dispatches a replacement order.'
    ],
    progress: 'Reduced average resolution time from 42 hours to 90 seconds. Fully automated 72% of delivery disputes without human agent touch.'
  },
  {
    id: 'subscription-churn',
    client: 'Pure Health',
    title: 'The Subscription Churn Preventer',
    category: 'Data Pipelines',
    flow: ['Cancellation Intent', 'Make.com Router', 'Dynamic Offer DB', 'Reactivation Webhook'],
    businessBottleneck: 'A health supplement brand was losing 15% of recurring subscribers monthly due to generic cancellation flows and poor retention offers.',
    theFlow: 'Intercepts cancellation requests, profiles the user\'s past purchase history, and generates a hyper-personalized retention offer instantly to prevent churn.',
    steps: [
      'Intercept: User clicks "Cancel Subscription".',
      'Profile: Fetches Customer Lifetime Value (CLV) and past product preferences.',
      'Generate: LLM creates a personalized discount or product swap offer.',
      'Execute: Applies the offer automatically via Stripe API if accepted.'
    ],
    progress: 'Saved 28% of at-risk subscribers, recovering over $120,000 in Annual Recurring Revenue (ARR).'
  },
  {
    id: 'vip-booking',
    client: 'Touch of Class',
    title: 'The VIP Measurement Reminder & Booking Flow',
    category: 'Conversational AI',
    flow: ['CRM Trigger', 'Twilio SMS Agent', 'Calendly API', 'Tailor Confirmation'],
    businessBottleneck: 'High-end bespoke tailoring service struggled to manually follow up with VIP clients for seasonal refits, leading to missed revenue opportunities.',
    theFlow: 'Tracks client purchase dates, triggers an AI SMS agent to check in after 6 months, and schedules an in-person measurement booking autonomously.',
    steps: [
      'Track: CRM flags VIP clients 6 months post-purchase.',
      'Outreach: AI SMS agent sends a personalized check-in text.',
      'Converse: Bot handles scheduling logistics and answers basic tailoring queries.',
      'Book: Injects confirmed appointments into the master tailor\'s calendar.'
    ],
    progress: 'Increased return customer booking rate by 45%. Saved the concierge team 20 hours a week.'
  },
  {
    id: 'hipaa-triage',
    client: 'St. Catherine’s Wellness Retreat',
    title: 'The HIPAA-Compliant Pre-Arrival Triage',
    category: 'AI Customer Ops',
    flow: ['Secure Intake Form', 'Data Sanitizer', 'EHR System Sync', 'Nurse Notification'],
    businessBottleneck: 'Intake nurses spent hours manually typing patient health histories from paper forms into the secure database before arrival.',
    theFlow: 'Patients complete a secure digital form; a HIPAA-compliant processing pipeline sanitizes the data, formats it into standard medical coding, and syncs directly to the EHR.',
    steps: [
      'Collect: Patient submits secure digital intake form.',
      'Sanitize: Pipeline scrubs PII while extracting core medical conditions.',
      'Format: Converts plain text into ICD-10 medical codes.',
      'Sync: Pushes structured data directly into the Electronic Health Record (EHR).'
    ],
    progress: 'Eliminated 100% of manual data entry errors. Saved 45 minutes of nursing administrative time per patient.'
  },
  {
    id: 'sentiment-defense',
    client: 'Reignite Public Affairs',
    title: 'The Viral Sentiment Defense System',
    category: 'Data Pipelines',
    flow: ['Social Scraper', 'Sentiment LLM', 'Alert Router', 'Crisis Dashboard'],
    businessBottleneck: 'PR agency could not track fast-moving viral controversies for their political clients fast enough to issue early counter-statements.',
    theFlow: 'Scrapes targeted keywords across X (Twitter), Reddit, and TikTok, evaluates sentiment shifts in real-time, and triggers instant alerts for negative spikes.',
    steps: [
      'Scrape: Headless browsers monitor specific brand/client keywords 24/7.',
      'Evaluate: LLM scores sentiment polarity (positive, neutral, extremely negative).',
      'Detect: Identifies sudden spikes in negative sentiment velocity.',
      'Alert: Pushes high-priority SMS and Slack warnings to PR managers.'
    ],
    progress: 'Reduced crisis detection latency from 6 hours to 12 minutes, allowing immediate PR response deployment.'
  },
  {
    id: 'ecommerce-sync',
    client: 'Interra Networks',
    title: 'The E-Commerce Sync Mesh',
    category: 'Systems Integration',
    flow: ['Shopify Event', 'Make.com Routing', 'Airtable Operational Hub', 'ERP Inventory Update'],
    businessBottleneck: 'Retail brand struggled to synchronize inventory levels and custom order flags across Shopify, retail physical locations, and a legacy warehouse ERP system.',
    theFlow: 'Captures live retail transactions and inventory modifications, sanitizes data formatting, distributes updates to Airtable for team visibility, and updates stock amounts in the warehouse ERP.',
    steps: [
      'Capture: Shopify webhooks fire for order placements, cancellations, and returns.',
      'Format: Make.com scenario parses customer order notes and cleans special characters.',
      'Mirror: Synchronizes records in Airtable custom dashboard for operations.',
      'Update: Updates database units via legacy SOAP API of the warehouse software.'
    ],
    progress: 'Eliminated stockout oversells entirely. Sync latency dropped from 2 hours to less than 15 seconds.'
  },
  {
    id: 'medical-scribe',
    client: 'Acme Health Partners',
    title: 'Voice-to-CRM Medical Scribe',
    category: 'AI Integration',
    flow: ['Doctor Voice Memo', 'Whisper Transcription', 'LLM SOAP Formatter', 'EHR Record Push'],
    businessBottleneck: 'Doctors spent an average of 2 hours at the end of their shifts manually typing patient interaction logs into Electronic Health Records (EHR).',
    theFlow: 'Medical practitioners record a quick voice memo on their mobile devices, Whisper converts it to text, and a medical-grade LLM formats it into a standard SOAP note, updating the patient\'s record.',
    steps: [
      'Record: Doctor uploads audio file directly through a lightweight web interface.',
      'Transcribe: Whisper API transcribes the clinical narrative.',
      'Format: GPT-4 organizes transcription into Subjective, Objective, Assessment, and Plan.',
      'Upload: Injects the formatted JSON data into the clinic\'s secure medical database.'
    ],
    progress: 'Saved doctors 1.5 hours daily. Increased notation detail depth by 35%.'
  },
  {
    id: 'pricing-scout',
    client: 'Global Retail Corp',
    title: 'Automated Competitor Pricing Scout',
    category: 'Data Pipelines',
    flow: ['Competitor List', 'Playwright Scraper', 'Delta Analyzer', 'Slack Price Alert'],
    businessBottleneck: 'Retail team manually checked competitor pricing pages daily, often lagging behind price drops and losing sales conversions.',
    theFlow: 'Spawns headless Playwright browsers at scheduled times, extracts product price tables from competitor URLs, matches SKU items, identifies differences, and issues Slack warnings.',
    steps: [
      'Schedule: Cron script triggers daily runs.',
      'Execute: Playwright scripts bypass Cloudflare protections to scrape competitor stores.',
      'Analyze: Calculates price variances and isolates aggressive discounting.',
      'Alert: Pushes reports to Slack with recommended adjustment values.'
    ],
    progress: 'Allowed automatic pricing adjustments, maintaining competitive ranking and raising gross margin by 2.4%.'
  },
  {
    id: 'resume-screener',
    client: 'TechFlow Solutions',
    title: 'Smart Recruiting Resume Screener',
    category: 'AI Customer Ops',
    flow: ['Applicant PDF', 'ATS Ingest', 'LLM Assessment Node', 'Calendly Link Outbound'],
    businessBottleneck: 'Tech startup received 800+ applications per open position, overwhelming their HR coordinator and delaying first interviews.',
    theFlow: 'Ingests resumes from standard Applicant Tracking Systems, compares qualifications against dynamic role profiles, scores applicants, and emails interview invites to high-scoring candidates.',
    steps: [
      'Receive: ATS triggers webhook with resume document attachment.',
      'Extract: PDF Parser extracts structured text (work history, tech stack, skills).',
      'Evaluate: LLM evaluates skills against specific rubric, ignoring demographic indicators.',
      'Invite: Sends an automated, highly personalized email inviting top-tier fits to book a call.'
    ],
    progress: 'Decreased recruiter screening time by 90% and shortened time-to-hire by 12 days.'
  },
  {
    id: 'bank-statement-broker',
    client: 'Crestwood Financial',
    title: 'The PDF-to-Excel Bank Statement Broker',
    category: 'Financial Automation',
    flow: ['Bank PDF Upload', 'AWS Textract', 'Python Compiler', 'Clean XLSX Output'],
    businessBottleneck: 'Accounting firms received scanned bank statements from clients, requiring interns to manually transcribe thousands of line items into Excel spreadsheets for audits.',
    theFlow: 'Processes scanned PDFs using OCR, sorts transaction entries, normalizes data formatting, and outputs a formatted spreadsheet.',
    steps: [
      'Upload: Accountants upload statement packages via secure Portal.',
      'Process: AWS Textract extracts tabular layout coordinates and cell text.',
      'Compile: Python scripts clean raw text, resolving character errors.',
      'Build: Formats sheets with transaction categorization and outputs downloadable XLSX.'
    ],
    progress: 'Normalized over 50,000 transactions with 100% exact math matching. Reduced turnaround time for client onboarding from 5 days to 5 minutes.'
  },
  {
    id: 'knowledge-curator',
    client: 'CloudScale Inc',
    title: 'Autonomous Knowledge-Base Curator',
    category: 'AI Integration',
    flow: ['Slack Answer', 'Knowledge Scorer', 'Vector DB Update', 'GitDocs Pull Request'],
    businessBottleneck: 'Support teams answered the same technical questions repeatedly in Slack, while internal documentation remained outdated and incomplete.',
    theFlow: 'Identifies detailed technical answers given by senior staff on Slack, generates structured documentation articles, updates vector databases, and files PRs to public docs.',
    steps: [
      'Monitor: Slack app listens for specific emojis (e.g., :book:) on responses.',
      'Draft: LLM digests thread context and compiles a clean markdown Q&A article.',
      'Embed: Generates vector embeddings for semantic search in support bots.',
      'PR: Automatically opens a Pull Request on GitHub to update docs repository.'
    ],
    progress: 'Auto-generated 140+ high-quality documentation pages directly from organic workspace discussions.'
  },
  {
    id: 'infrastructure-monitor',
    client: 'Apex Outbound',
    title: 'Cold Email Infrastructure Monitor',
    category: 'Lead Gen & Scraping',
    flow: ['50+ Outbound Domains', 'Blacklist Checker', 'DNS TXT Validator', 'Slack Alert'],
    businessBottleneck: 'Business development agency was sending emails from blacklisted domains, causing deliverability rates to crash before they noticed the issue.',
    theFlow: 'Automatically inspects 50+ secondary domains for blacklistings, DNS records validity (SPF, DKIM, DMARC), and inbox health, sending immediate alerts on failure.',
    steps: [
      'Inspect: Daily API scripts check domain listings against MXToolbox and Spamhaus.',
      'Validate: Direct DNS queries assert the presence of valid DKIM/SPF keys.',
      'Test: Verifies SMTP authentication is active on all workspace accounts.',
      'Notify: Sends critical details on Slack with specific resolution scripts.'
    ],
    progress: 'Achieved sustained 98% email deliverability by capturing domain warnings 48 hours before impact.'
  },
  {
    id: 'newsletter-pipeline',
    client: 'MetricGrowth SaaS',
    title: 'High-Volume Newsletter Dispatch Pipeline',
    category: 'Data Pipelines',
    flow: ['Stripe Customer', 'Segment Event Collector', 'Customer.io Trigger', 'Personalized HTML Mail'],
    businessBottleneck: 'SaaS company struggled to deliver real-time, cohort-specific customer engagement emails based on product usage telemetry data.',
    theFlow: 'Directs product event telemetry into Segment, categorizes customers into cohorts based on feature thresholds, updates Customer.io attributes, and triggers personalized HTML emails.',
    steps: [
      'Track: Telemetry framework reports user interactions via Segment API.',
      'Process: BigQuery updates hourly user status classifications.',
      'Sync: Updates profile properties in outbound marketing databases.',
      'Fire: Injects transactional mail template tailored to user\'s exact workspace statistics.'
    ],
    progress: 'Automated delivery of 1.2M custom-tailored user milestone summaries monthly. Boosted user activation metrics by 18.5%.'
  }
];
