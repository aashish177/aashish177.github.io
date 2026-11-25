// Case-study content for project showcase pages.
// Nothing here renders until a study is `published` (see docs/SHOWCASE.md).

export type Metric = {value: string; label: string};

export type Step = {
  id: string;
  name: string;
  detail: string;
  group?: "parallel";
};

export type Decision = {title: string; problem: string; choice: string};

export type ReplayEvent = {
  agent: string;
  // Seconds from the start of the run.
  at: number;
  summary: string;
  duration?: number;
  tokens?: number;
  cost?: number;
  details?: {label: string; items: string[]}[];
};

export type CaseStudy = {
  slug: string;
  published: boolean;
  name: string;
  tagline: string;
  summary: string;
  tags: string[];
  links: {demo?: string; repo: string};
  metrics: Metric[];
  problem: string[];
  pipeline: Step[];
  architecture: Step[];
  decisions: Decision[];
  results: {label: string; value: string}[];
  next: string[];
  replay: {sample: boolean; topic: string; events: ReplayEvent[]};
};

export const digitalScribe: CaseStudy = {
  slug: "digital-scribe",
  published: false,
  name: "Digital Scribe",
  tagline:
    "A multi-agent system that turns documents into cited, on-brand articles.",
  summary:
    "Eight LangGraph agents plan, research, write, edit and optimize an article from a knowledge base, then translate it and draft social posts. Every claim cites its source, and every step's time, tokens and cost are visible.",
  tags: ["LangGraph", "RAG", "Amazon Bedrock", "AWS Lambda", "DynamoDB", "CDK"],
  links: {
    // TODO: CloudFront URL once deployed.
    demo: undefined,
    repo: "https://github.com/aashish177/Digital-Scribe"
  },
  // TODO: replace with measured numbers from production runs.
  metrics: [
    {value: "8", label: "agents"},
    {value: "$—", label: "per article"},
    {value: "— s", label: "p90 run time"}
  ],
  problem: [
    "AI writing tools produce fluent text, but they invent facts and hide what each article cost to make.",
    "Digital Scribe grounds every claim in retrieved sources, cites them inline, and shows the work of each agent."
  ],
  pipeline: [
    {
      id: "planner",
      name: "Planner",
      detail:
        "Turns the topic into a brief: outline, keywords and 3–5 research queries."
    },
    {
      id: "researcher",
      name: "Researcher",
      detail:
        "Hybrid search (vector + BM25) with FlashRank reranking; numbers each source."
    },
    {
      id: "writer",
      name: "Writer",
      detail:
        "Drafts from the research, keeps [n] citations, invents no statistics."
    },
    {
      id: "editor",
      name: "Editor",
      detail: "Applies the style guide without changing facts or citations."
    },
    {
      id: "seo",
      name: "SEO",
      detail: "Writes the search title, description and slug."
    },
    {
      id: "translator",
      name: "Translator",
      detail: "Translates the article.",
      group: "parallel"
    },
    {
      id: "social_media",
      name: "Social",
      detail: "Drafts posts in each target language.",
      group: "parallel"
    },
    {
      id: "image_gen",
      name: "Image idea",
      detail: "Suggests a cover image concept.",
      group: "parallel"
    }
  ],
  // TODO: confirm against the deployed stack.
  architecture: [
    {
      id: "cdn",
      name: "CloudFront",
      detail: "Serves the frontend from S3 and routes /api to Lambda."
    },
    {
      id: "api",
      name: "Lambda",
      detail:
        "FastAPI with response streaming; Chroma index baked into the image."
    },
    {
      id: "state",
      name: "DynamoDB",
      detail: "Jobs, ordered run events, checkpoints and usage caps."
    },
    {
      id: "models",
      name: "Bedrock",
      detail: "Claude Haiku and Nova per agent, called with IAM, no API keys."
    },
    {
      id: "ops",
      name: "CloudWatch",
      detail: "Structured logs, per-run cost metrics, two alarms."
    },
    {
      id: "ci",
      name: "GitHub Actions",
      detail: "OIDC to AWS, tests, then cdk deploy."
    }
  ],
  decisions: [
    {
      title: "Durable runs",
      problem: "Runs lived in process memory, so a restart lost them.",
      choice:
        "TODO: checkpoints and a lease in DynamoDB so a crashed run resumes."
    },
    {
      title: "Grounded writing",
      problem: "The writer padded thin research with made-up numbers.",
      choice:
        "Numbered sources, required [n] citations, and a rule against unsourced figures."
    },
    {
      title: "Bounded cost",
      problem: "A public LLM endpoint can run up a bill.",
      choice:
        "TODO: per-agent model routing, daily caps, concurrency 3, a Budget action."
    },
    {
      title: "Bugs only real data found",
      problem: "Tests passed, but the first real runs broke.",
      choice:
        "numpy scores broke the checkpointer; the stream sent Python text, not JSON."
    }
  ],
  // TODO: fill from 50 measured production runs.
  results: [
    {label: "Cost per article", value: "TODO"},
    {label: "p50 / p90 run time", value: "TODO"},
    {label: "Cold-start share", value: "TODO"},
    {label: "AWS infrastructure per month", value: "TODO"}
  ],
  next: [
    "Upload your own documents, with file and page citations.",
    "Evals: faithfulness, citation checks, multi-agent vs single prompt.",
    "Sign-in with per-user quotas."
  ],
  // TODO: replace with a recorded real run (export from /api/v1/content/{id}).
  replay: {
    sample: true,
    topic: "How heat pumps cut home energy bills",
    events: [
      {
        agent: "planner",
        at: 0,
        duration: 3.2,
        tokens: 612,
        summary: "Brief · 6 sections · 5 queries",
        details: [
          {
            label: "Research queries",
            items: [
              "how heat pumps work",
              "heat pump efficiency COP",
              "heat pump vs gas furnace cost"
            ]
          }
        ]
      },
      {
        agent: "researcher",
        at: 3.2,
        duration: 6.8,
        tokens: 4180,
        summary: "9 chunks from 3 sources",
        details: [
          {
            label: "Top chunks",
            items: [
              "0.94 · Heat pump",
              "0.88 · Heat pump",
              "0.71 · Grid energy storage"
            ]
          }
        ]
      },
      {
        agent: "writer",
        at: 10,
        duration: 21.4,
        tokens: 3130,
        summary: "812 words"
      },
      {
        agent: "editor",
        at: 31.4,
        duration: 14.9,
        tokens: 2630,
        summary: "Polished the draft"
      },
      {
        agent: "seo",
        at: 46.3,
        duration: 9.7,
        tokens: 2650,
        summary: "/how-heat-pumps-cut-energy-bills"
      },
      {
        agent: "image_gen",
        at: 56,
        duration: 2.3,
        tokens: 280,
        summary: "Cover image concept"
      },
      {
        agent: "social_media",
        at: 56,
        duration: 4.1,
        tokens: 1460,
        summary: "linkedin, twitter"
      },
      {
        agent: "translator",
        at: 56,
        duration: 11.6,
        tokens: 2404,
        summary: "Nepali"
      }
    ]
  }
};

export const caseStudies: CaseStudy[] = [digitalScribe];

export type TerminalLine =
  | {kind: "cmd" | "info"; text: string}
  | {
      kind: "call";
      client: "python" | "node";
      server: "java" | "go";
      call: string;
      result: string;
      note: string;
      error?: boolean;
    };

export type TerminalReplayData = {
  slug: string;
  title: string;
  caption: string;
  // True until the lines are pasted from a real `docker compose up` run.
  sample: boolean;
  lines: TerminalLine[];
};

// Calls and results follow the client test cases and server code in
// github.com/aashish177/Polymath-RPC. Python prints the server's message,
// Node prints the operation; the Go server leaves message empty.
export const polymathReplay: TerminalReplayData = {
  slug: "polymath-rpc",
  title: "Polymath RPC",
  caption: "One calculator.proto, two servers, two clients, any pairing.",
  sample: true,
  lines: [
    {kind: "cmd", text: "docker compose up"},
    {
      kind: "info",
      text: "java-server :50051 · go-server :50052 · grpc-network"
    },
    {
      kind: "call",
      client: "python",
      server: "java",
      call: "Add(10.5, 5.2)",
      result: "15.7",
      note: '"10.50 + 5.20 = 15.70"'
    },
    {
      kind: "call",
      client: "node",
      server: "go",
      call: "Multiply(6.5, 3)",
      result: "19.5",
      note: "operation=multiplication"
    },
    {
      kind: "call",
      client: "python",
      server: "go",
      call: "Divide(20, 4)",
      result: "5.0",
      note: ""
    },
    {
      kind: "call",
      client: "node",
      server: "java",
      call: "Subtract(22.8, 5.3)",
      result: "17.5",
      note: "operation=subtraction"
    },
    {
      kind: "call",
      client: "python",
      server: "java",
      call: "Divide(10, 0)",
      result: "0.0",
      note: '"Error: Division by zero!"',
      error: true
    },
    {
      kind: "call",
      client: "node",
      server: "go",
      call: "Divide(12, 0)",
      result: "0",
      note: "operation=division_error",
      error: true
    },
    {kind: "info", text: "2 clients × 2 servers · 4 languages · 1 contract"}
  ]
};

export const terminalReplays: TerminalReplayData[] = [polymathReplay];
