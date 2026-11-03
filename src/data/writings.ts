export interface Writing {
  slug: string
  title: string
  excerpt: string
  body: string
  date: string
  tags: string[]
}

export const WRITINGS: Writing[] = [
  {
    slug: 'the-number-you-didnt-measure',
    title: "The Number You Didn't Measure Is the Outage",
    excerpt:
      'Average latency is a press release. p95 is a customer. TTFT, ITL, and a held-out eval are how you find out whether an agent is working or performing. I have spent the last two years learning that lesson the expensive way.',
    body: `Average latency is a press release. p95 is a customer. I learned that building partner APIs at ODStudio, where 10,000 events a day at “99.9% uptime” still felt broken if the tail of the distribution sat in a retry storm. We reported sub-200ms p95. The number that actually changed the product was the one we almost did not log: how long a failed integration sat in a customer’s queue before a human noticed.

I am finishing an M.S. in Computer Science at NYU. The courses have names like distributed systems and large-scale design. The useful habit they encode is older than any of those titles. If you cannot say what you measured, you did not ship a system. You shipped a story.

Coding agents made the problem worse, then clearer. I built a harness profiler that sits on Claude Code, Codex, and a few custom loops, and writes down every model call and every tool call on Harbor tasks. Time to first token. Inter-token latency. Throughput. Parallel subagents versus a single long-horizon trace. The leaderboard number ("this model is smarter") did not survive contact with those traces. A reasoning model that thinks beautifully and then calls the wrong tool for eight minutes is not smart. It is slow in a costume.

The same pattern showed up in an agentic research pipeline I shipped in 2025. Playwright to fetch, tool calling to structure, schema validation on the way out. We did not celebrate the demo. We held out a set of pages the agent had never seen and required citations that actually resolved. Accuracy stayed above 90% only after retries, backoff, and a check that the quote existed on the page. Without that eval, I would have shipped a very confident liar.

Measurement is not dashboards. Dashboards are what you show people who do not want to be in the traces. Measurement is the contract: which quantile, on which path, under which load, with which failure injected. At NYU I built FastAPI and React boards for lab machines so students could see uptime and latency without filing a ticket. The board was useful because the health checks were honest. A green box that cannot go red is decoration.

Modern AI culture has a measurement problem dressed up as a model problem. Teams swap vendors the way they used to swap ORMs. They do it because they never instrumented the work the model was hired to do. I would rather keep a slightly worse model whose TTFT I trust than a frontier checkpoint whose tail I have never seen.

If you want a practical test: pick the last agent you deployed and name the metric that would have caught its last silent failure. If you cannot name it, that is the work.`,
    date: 'November 2, 2026',
    tags: ['measurement', 'ai', 'systems'],
  },
  {
    slug: 'agents-fail-at-tools',
    title: 'Agents Do Not Fail at Reasoning. They Fail at Tools.',
    excerpt:
      'The impressive part of an LLM is the paragraph. The production part is the function call. Schema-validated JSON, retries, idempotency keys, and a human-readable error are not extras. They are the product.',
    body: `The impressive part of an LLM is the paragraph. The production part is the function call.

At ODStudio I cut manual support work by about 60% with agent workflows that called tools, retried, and returned structured JSON. Nobody thanked the model. They thanked the fact that a partner integration no longer died in a screenshot of a 429. The agent was allowed to be wrong in language. It was not allowed to be sloppy in the API.

I keep seeing the opposite bet: bigger context, more “reasoning,” a longer chain of thought, as if the universe were a reading-comprehension exam. Real work is a sequence of tools with side effects. Book the ticket. Write the file. Post the webhook. Validate the schema. If any of those steps is a vibe, you do not have an agent. You have a chat window with privileges.

The research pipeline I built in 2025 was deliberately boring on this point. Plan the query. Fetch with a headless browser. Extract against a schema. Verify the citation. Retry with backoff when the page lies. Tool calling is not a feature flag. It is the control plane. Structured output is how you stop the model from inventing a field named \`confidence\` that means nothing to the next service.

A code-review agent taught me the same lesson in a different room. Pair static analysis with an LLM that can actually open the file. Put it in GitHub Actions so it runs where the work already lives. Automate the 70% of comments that are style, import order, and the security footgun you have already written a rule for. Leave judgment to people. The model that cannot call a tool cannot participate in that split. It can only lecture.

There is a fashion right now for “computer use” and sprawling harnesses. I have instrumented some of them. The traces are educational. Parallel subagents look like speed until you watch them fight over the same file. A long-horizon loop looks like autonomy until the 14th tool call is a hallucinated path. Measure tool success rate the way you measure p95. If the tool layer is sloppy, more intelligence is just a more expensive way to be wrong.

I want to work on the unglamorous side of this: APIs that agents can call without drama, eval harnesses that punish invented JSON, onboarding docs that a customer’s engineer can use at 11 p.m. Deployed engineering is mostly that. The model is the easy part to swap. The tools are the company.`,
    date: 'October 28, 2026',
    tags: ['ai', 'agents', 'integrations'],
  },
  {
    slug: 'four-hours-to-ninety-minutes',
    title: 'Four Hours to Ninety Minutes',
    excerpt:
      'Incident response is not a hero story. It is a function of whether your logs are a narrative or a landfill. At Softcons we took a four-hour hunt to ninety minutes by making triage a Python job, then walking the actual path with Wireshark.',
    body: `Incident response is not a hero story. It is a function of whether your logs are a narrative or a landfill.

At Softcons I spent a winter as a cybersecurity analyst. Twenty-plus penetration tests against OWASP Top 10. SQLi, XSS, IDOR, the usual greatest hits, except they were not hits until someone could reproduce them on a timeline a stakeholder would fund. The number I still quote is not “we found vulns.” It is four hours to ninety minutes. That is what automated log triage in Python on Linux bought us. The rest was walking the path: Nmap to see the door, Wireshark to see what actually went through it, then firewall rules that matched the story instead of a default-deny fantasy.

People talk about cybersecurity as a vibe: zero trust, shift left, assume breach. Those slogans are fine. They do not page you. What pages you is a missing field in an auth log, a rate-limit that was never attached to a tenant, a replay that only happens when two threads share a socket. Later, on the blockchain desk, I watched the same physics in a different costume. A multithreaded C++ engine on EVM mempool streams. Deterministic interfaces. Python replay that could reproduce a race before a customer did. Adversarial inputs as a release gate, not a blog post.

I hold a CCNA and a Palo Alto PCNSE. The useful part of those papers is not the badge on LinkedIn. It is the muscle memory that a packet has a direction, a policy has an exception, and “the firewall is fine” is a sentence that has never closed an incident by itself.

Modern stacks make this worse by hiding the packet. Kubernetes, sidecars, service meshes, LLM gateways. Each layer is another place for a request to change identity. An agent with tool access is a new principal. If you cannot answer who called what, with which token, against which schema, you are not doing AI security. You are doing hope.

The influence of modern tech on security is not that attackers got smarter. It is that defenders got more tools that produce more logs that nobody reads. I would rather a short, structured trail and a ninety-minute loop than a lakehouse of JSON and a war room. Measure mean time to understand, not mean time to open a dashboard.

If your IR runbook starts with “check Slack,” you do not have a runbook. You have a group chat.`,
    date: 'October 21, 2026',
    tags: ['cybersecurity', 'measurement', 'ops'],
  },
  {
    slug: 'leaderboards-are-not-work',
    title: 'Leaderboards Are Not Work',
    excerpt:
      'SWE-bench is a useful gym. It is not your backlog. I have logged TTFT, ITL, and tool traces across reasoning models and parallel subagents. The model that wins the board is rarely the one I would leave on a customer integration overnight.',
    body: `SWE-bench is a useful gym. It is not your backlog.

I have been living in coding-agent traces: Claude Code, Codex, custom harnesses, Harbor tasks, vLLM in the middle, every model call and tool call written down. Time to first token. Inter-token latency. Throughput under parallel subagents. Long-horizon tool use that looks like a movie until you watch the 11th call miss a file that exists.

The industry talks as if a new checkpoint is a new product. It is not. A product is a loop you can measure on the work you already needed done. That is why I care about eval harnesses more than arena scores. A held-out set. A schema. A citation that resolves. A p95 that includes the tool, not just the tokens. When I put an LLM on pull requests, the metric was not “comments generated.” It was review cycle time, and whether the team left the GitHub Action on.

There is a quiet scandal in AI measurement. We optimize what is easy to grade. Human preference. Short prompts. Synthetic bugs with a single patch. Production is the opposite: ambiguous tickets, partial context, a partner API that returns a 207 with a lie in the body. A deployed engineer lives in that gap. Onboarding a customer is an evaluation. A POC that dies in their VPC is a failed eval, even if the demo was clean on your laptop.

I published a small paper in 2025, “Prompt, Persist, Publish,” on generative AI as a learning accelerator in bioinformatics. The claim was deliberately modest. If you cannot persist the prompt, the result, and the next action, you are not learning. You are chatting. The same sentence applies to agents in production. Persist the trace. Publish the metric. Then decide whether to swap the model.

The influence of modern tech here is cultural. We started treating intelligence as a leaderboard because leaderboards travel well on the internet. Work does not. Work is local: this repo, this SLA, this on-call. I will take a slightly worse model whose failure modes I have named over a frontier one whose tail latency I have to discover in a customer’s standup.

Name the task. Name the quantile. Name the tool. If a vendor cannot sit in that sentence, they are selling a vibe.`,
    date: 'October 14, 2026',
    tags: ['ai', 'measurement', 'evals'],
  },
  {
    slug: 'the-integration-is-the-product',
    title: 'The Integration Is the Product',
    excerpt:
      'Customers do not buy your architecture diagram. They buy a request that succeeds twice the same way. Idempotency keys, backoff, and an error they can read have closed more deals than any model I have wrapped.',
    body: `Customers do not buy your architecture diagram. They buy a request that succeeds twice the same way.

I call myself a deployed engineer because that is the job I keep choosing. Sit in the customer’s stack. Run the POC. Read the request logs. Ship the client with retries, exponential backoff, idempotency keys, and rate-limit handling so the next intern does not have to invent them. At ODStudio that dropped integration turnaround from multi-day cycles to hours. The “AI” later sat on top of that. It could not have sat on a pile of 500s.

HowdyDoo was the same lesson with worse lighting. 5,000 users, 25 live events, me as the technical point of contact from discovery to the door. You can have an LLM recommender and a beautiful booking flow. If access validation fails at 8:02 p.m., you do not have a platform. You have a line of people staring at you. We automated booking, ticketing, and access after shadowing operators, not after imagining them. Planning time dropped about 40%. That number is not a model. It is a workflow we were willing to watch.

Tatva was earlier and smaller and maybe more honest. REST services, dashboards, route math that cut cost ~25% and latency ~18% across fifty logistics routes. Ninety percent adoption in three months because we did onboarding in the room, every week. Influence of modern tech, for me, is not that software ate the world. It is that software only sticks when someone sits with the person who will be blamed when it fails.

I care about OpenAPI, pagination, consistent error semantics, and docs that show the failed case first. That is unfashionable next to agents. It is also why agents work. An agent is an aggressive intern. Give it a sloppy API and it will be aggressively wrong, forever, at token prices.

The next decade of “AI products” will be decided by people who can debug a webhook at a customer’s firewall and then explain, without theater, what to measure next. I want to be one of those people.`,
    date: 'October 6, 2026',
    tags: ['integrations', 'systems', 'customers'],
  },
  {
    slug: 'replay-is-a-security-primitive',
    title: 'Replay Is a Security Primitive',
    excerpt:
      'If you cannot replay it, you cannot trust it. That is true of a mempool engine, a pentest, and an agent trace. Determinism is not a performance trick. It is how you keep the future from being a rumor.',
    body: `If you cannot replay it, you cannot trust it.

On the blockchain desk at Softcons I built Python capture and stress harnesses around a C++ transaction engine. Multithreaded. Deterministic on purpose. We replayed mempool streams until a race showed up in our lab instead of a client’s. Critical-path time dropped about 30% after profiling, which was nice. The actual product was an interface a downstream integrator could debug twice and get the same story.

Security people already know this in other clothes. A pentest that cannot be reproduced is a ghost story. A packet capture you did not keep is an opinion. When we traced attack paths and then tightened firewall rules, the sequence mattered: observe, replay, change, observe again. Skip the replay and you have a superstition with a ticket number.

Agents need the same primitive and almost never get it. A tool-calling loop that cannot be re-run with the same tool results is not a system. It is a seance. That is why I log model and tool calls in the harness profiler. Not to make pretty flame graphs. To make Tuesday’s failure happen again on Wednesday, on purpose, with the KV cache and the TTFT in view.

Modern tech has made non-determinism feel like a feature. LLMs sample. Distributed systems retry. Clients rebase. The cultural move is to shrug and ship. I think the adult move is to isolate the non-determinism, name it, and keep a replay around it. Structured outputs. Idempotency keys. Seeded evals. PCAP files. Harbor traces.

Cybersecurity, measurement, and AI meet at that sentence. An agent with production credentials and no replay is a privileged process you cannot interrogate. That is not the future. That is an incident with a nicer UI.`,
    date: 'September 29, 2026',
    tags: ['cybersecurity', 'systems', 'ai'],
  },
  {
    slug: 'machines-that-change-the-room',
    title: 'Machines That Change the Room',
    excerpt:
      'Software does not stay in the repo. It changes who waits, who gets graded, who gets paged, and who gets through the door. I have watched that at a logistics desk, a live event, a university lab, and in a pull request.',
    body: `Software does not stay in the repo. It changes who waits, who gets graded, who gets paged, and who gets through the door.

At Tatva, a routing change was not an algorithm demo. It was a distributor who stopped leaving at 4 a.m. because the batch made sense. At HowdyDoo, a failed access check was not a 401. It was a person at a gate. At NYU, an autograder that cut manual grading in half was not a script. It was a teaching assistant who got a Sunday back, and a student who got feedback before the next lecture. When I put monitoring on lab machines, the point was not Grafana. It was that a failure had a timestamp before someone walked into the room and shrugged.

AI accelerates all of that, which is the part of the discourse that is true. It also concentrates it. A tool-calling agent that triages support, reviews code, or extracts a web page is making a small institutional decision every time it fires. Who gets the good comment. Which partner error is “retry” versus “page a human.” Which citation counts as knowledge. If you do not measure those decisions, you have automated a bias and called it throughput.

Cybersecurity is the adult supervision we pretend is optional. A CCNA does not make you wise. A PCNSE does not either. What they encode is that packets and identities are political. They decide who is inside. An LLM with tool access is inside. Treat it that way: least privilege, audit trail, replay, a kill switch that is not buried in a vendor’s status page.

I care about poker, F1, and swimming because they are honest about measurement. The lap exists. The lap time exists. The DNF exists. Tech culture keeps trying to replace those with vibes: “it feels faster,” “the model is so much better now.” Feelings are data. They are not the only data.

The influence of modern tech, as I have lived it, is not that we will all be replaced. It is that more of the room will be decided by systems whose tail latency, whose tool errors, and whose logs we never learned to read. I want to be the person who reads them, on-site, in the customer’s stack, before the room changes in a way nobody intended.

That is the work. Everything else is a demo.`,
    date: 'September 18, 2026',
    tags: ['technology', 'ai', 'cybersecurity'],
  },
  {
    slug: 'prompt-persist-publish',
    title: 'Prompt, Persist, Publish',
    excerpt:
      'A 2025 paper on generative AI as a learning accelerator in bioinformatics. The title is the method. If the prompt dies in a chat, the learning dies with it. Persist the artifact. Publish the next step. Then measure whether anyone got faster.',
    body: `In 2025 I published “Prompt, Persist, Publish: Generative AI as a Learning Accelerator, a Bioinformatics Use Case.” The title is doing more work than the subtitle. Prompting is cheap. Persistence is the habit. Publishing is the test.

We evaluated prompting strategies with actual data collection, not screenshots of a lucky session. The question was not “can the model explain BLAST.” It was whether a learner could get to a reproducible next step faster, with the prompt and the output sitting somewhere a future self could find. If you cannot show the trail, you did not accelerate learning. You accelerated forgetting.

That paper sits next to the rest of my work more neatly than it first appears. Autograders at NYU persist a test harness so grading is not a mood. Integration clients persist idempotency keys so a retry is not a double charge. Agent traces persist tool calls so a failure is not a ghost. Security captures persist packets so an incident is not folklore.

Generative AI is a multiplier on whatever loop you already have. If the loop is “ask, smile, close the tab,” you will multiply noise. If the loop is “ask, write it down, ship a check, measure the check,” you will multiply craft. I am not interested in arguing whether models are intelligent. I am interested in whether the people using them get a shorter path to a true artifact.

Modern tech will keep selling the prompt. I will keep asking where it was saved, who can replay it, and what number moved after it shipped. That is the only review I know how to run.`,
    date: '2025',
    tags: ['research', 'ai', 'measurement'],
  },
]

export function getWriting(slug: string) {
  return WRITINGS.find((w) => w.slug === slug)
}
