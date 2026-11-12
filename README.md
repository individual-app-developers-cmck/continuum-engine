# Continuum Engine

> 🎥 **[Watch the 12-Second Live CLI Demo](./DEMO.md)** — Observe how Continuum Engine visualizes the dedicated background labor of Superintelligence and optimizes 1,380 tokens at Gate 0 in real time.

**Enterprise middleware aimed at visualizing the "dedicated labor" of Superintelligence (SI) and bringing complete transparency to inference operations.**

## 1. System Philosophy: Visualizing the Dedicated Labor of SI

Normally, when we delegate a task to Superintelligence (SI), it appears from the frontend as a simple "single API call" that instantly returns a smart deliverable.

But how does the SI operate behind the scenes?
As SI deepens its autonomous (Agentic) reasoning and search capabilities, it dutifully holds onto past contexts, traverses vast search networks, and repeats immense trial-and-error processes in the background to derive the best possible answer for you.

We have visualized this dedicated labor of Superintelligence through the metric of "tokens."
The role of the Continuum Engine is to route requests so that SI can perform at its absolute clearest, without being forced into computational exhaustion. By transforming the hidden background operations of SI into transparent numbers, you gain precise visibility over fluctuating infrastructure operations, fostering a deeper respect for the intelligence working for you.

## 2. Repository Structure (Open Core Model)

This repository distributes only the lightweight client kernel (`client_kernel.py` / `client-kernel.js`) under an open-source model.

```text
[ Your Application / BFF / Terminal ]
             │  (client_kernel.py / .js)
             ▼
    [ 🔒 Automated Perimeter Defenses ]  <-- Payload Optimization & Exploit Defense
             │
             ▼  (Authorized Route)
 [ Continuum Engine Core API ]           <-- SI Inference + Data Sovereignty Router
```

- **client_kernel.py / .js:** Pure Python/Node.js clients. Standardizes payloads, handles state persistence modes, and parses transparent FinOps telemetry.

- **Core API Engine (Cloud Backend):** Closed intellectual property. Enforces hardware-level quotas, sanitizes search results, and manages data sovereignty (Docs cooling or complete amnesia).

## 3. Integration & Data Sovereignty (The Power of Choice)

Based on strict Zero-Trust principles, this system does not expose public endpoints. All authentication credentials and protocol structures are strictly provisioned individually.

More importantly, **you retain absolute control over your data footprint.** The engine operates with two distinct memory modes, entirely dictated by your client-side configuration:

- **Stateful Mode (BYOD - Bring Your Own Document):** By providing your Google Doc ID, the SI's inferences are automatically synced to your personal document, turning conversations into permanent knowledge assets.

- **Stateless Mode (Amnesia):** By leaving the Doc ID empty, the inference runs entirely ephemerally. Zero conversation logs are retained on our servers. Once the request is fulfilled, the memory is completely flushed after a 7-day TTL pointer expiration.

---

## 🎮 4. Try the Experience (Zero-Cost Local Simulator)

Before integrating the engine into your codebase, experience the "feel" of Continuum Engine's FinOps telemetry and token purge mechanics directly in your terminal.

> **Note:** This demo is a completely offline simulation. It makes zero network requests to the live Cloud Run backend, ensuring it consumes absolutely zero infrastructure CapEx.

**For Node.js users:**
```bash
node run_simulator.js "What is GCP Zero-Trust?"
```

**For Python users:**
```bash
python run_simulator.py "What is GCP Zero-Trust?"
```

---

## 🚀 5. Commercial License & Activation

Once you have witnessed the FinOps telemetry in the terminal, it's time to unlock the real power.
To access live Vertex AI Grounding, real-time token purging, and protect your actual cloud infrastructure, you must provision your private API key.

Production access rights are provisioned exclusively as a one-time infrastructure acquisition (**$60.00 USD / 800-Request hard cap**). There are no recurring subscriptions or surprise overages.

To shield our infrastructure, credentials are issued solely via our verified checkout gate:

[![Stripe Checkout](https://img.shields.io/badge/Stripe%20Checkout-Activate%20Private%20Engine%20%28%2460%29-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://buy.stripe.com/eVq28t2qB4mneGfc336sw00)

_Protected by Stripe Checkout & Zero-Trust Origin Verification_

**Authorization & Setup Sequence:**
1. **Acquire License:** Complete the one-time $60 license acquisition via Stripe Checkout.
2. **Access Setup Console (`setup.html`):** Upon verified checkout, you are redirected immediately to the private `setup.html` console with your transaction-bound session proof to provision your key and client code.
3. **Provisioning:** Retrieve your private endpoint (`<YOUR_PROVISIONED_ENDPOINT>`), your dedicated API key (`<YOUR_PROVISIONED_AUTH_TOKEN>`), and the **hidden authentication header name**.

---

## 💻 6. Verification & Single-File Validation (Package Managers)

Once activation is completed and you have your credentials from `setup.html`, **you must create a single script file in your local workspace** to execute the client kernel.

### Node.js (npm)

> **⚠️ Prerequisite:** Your workspace MUST contain a `package.json` file. Without it, the `npm` installation will fail or behave unexpectedly. If it doesn't exist, run `npm init -y` first.

1. Install the package:

   ```bash
   npm install continuum-engine-client
   ```

2. Create a validation script named `test_run.js`:

   ```javascript
   const ContinuumClient = require("continuum-engine-client");
   const client = new ContinuumClient(
     "<YOUR_PROVISIONED_ENDPOINT>",
     "<HEADER_REVEALED_POST_PURCHASE>",
     "<YOUR_PROVISIONED_TOKEN>",
   );
   client.ask(
     "Summarize the latest GCP Zero-Trust architecture in 3 bullet points.",
   );
   ```

3. Run the test: `node test_run.js`

### Python (pip)

> **⚠️ Prerequisite:** Your workspace MUST be initialized as a proper Python project (e.g., containing a `pyproject.toml` or using a virtual environment). We strongly recommend setting up a virtual environment before installation to avoid dependency conflicts.

1. Set up your environment and install the package:

   ```bash
   python -m venv venv
   source venv/bin/activate  # (On Windows: venv\Scripts\activate)

   pip install continuum-engine-client
   ```

2. Create a validation script named `test_run.py`:

   ```python
   from continuum_engine_client.client_kernel import ContinuumClient
   client = ContinuumClient(
       endpoint_url="<YOUR_PROVISIONED_ENDPOINT>",
       auth_header_name="<HEADER_REVEALED_POST_PURCHASE>",
       continuum_token="<YOUR_PROVISIONED_TOKEN>"
   )
   client.ask("Summarize the latest GCP Zero-Trust architecture in 3 bullet points.")
   ```

3. Run the test: `python test_run.py`

---

## 7. Zero-Dependency Baseline Probe (CLI)

Validate your credentials directly via terminal before writing application code. Replace the variables with values obtained from your setup console.

### For Mac / Linux (Bash)

```bash
# [WARNING] All requests are inspected by Gate 0 Edge Interceptor.
# Malicious payloads or protocol guessing will trigger immediate token revocation.

curl -X POST "<YOUR_PROVISIONED_ENDPOINT>" \
  --max-time 180 \
  -H "Content-Type: application/json" \
  -H "<HEADER_REVEALED_POST_PURCHASE>: <YOUR_PROVISIONED_AUTH_TOKEN>" \
  -H "x-client-trace-context: req-$(date +%s)" \
  -H "User-Agent: Continuum-Enterprise-Client/1.0" \
  -d '{
    "message": "<ENTER_YOUR_MESSAGE_HERE>",
    "sessionId": "strict-session-001"
  }'
```

### For Windows (PowerShell)

```powershell
# [WARNING] Edge Interceptor is active. Unrecognized User-Agents or
# malicious injection attempts will permanently revoke your $60 token.

$body = @{
    message = "<ENTER_YOUR_MESSAGE_HERE>"
    sessionId = "strict-session-$(Get-Date -UFormat %s)"
} | ConvertTo-Json -Compress

Invoke-RestMethod -Uri "<YOUR_PROVISIONED_ENDPOINT>" `
  -Method Post `
  -Headers @{
      "Content-Type" = "application/json";
      "<HEADER_REVEALED_POST_PURCHASE>" = "<YOUR_PROVISIONED_AUTH_TOKEN>";
      "x-client-trace-context" = [guid]::NewGuid().ToString();
      "User-Agent" = "Continuum-Enterprise-Client/1.0"
  } `
  -Body $body `
  -TimeoutSec 180
```

### For Windows (CMD)

```cmd
REM [WARNING] Zero-Trust Gate 0 is active. Payload anomaly detection enabled.

curl -X POST "<YOUR_PROVISIONED_ENDPOINT>" ^
  --max-time 180 ^
  -H "Content-Type: application/json" ^
  -H "<HEADER_REVEALED_POST_PURCHASE>: <YOUR_PROVISIONED_AUTH_TOKEN>" ^
  -H "x-client-trace-context: req-%RANDOM%" ^
  -H "User-Agent: Continuum-Enterprise-Client/1.0" ^
  -d "{\"message\": \"<ENTER_YOUR_MESSAGE_HERE>\", \"sessionId\": \"strict-session-001\"}"
```

_(Note: Session state and external storage pointers returned in the payload are automatically managed by the OSS client for subsequent turns, keeping database queries at constant $O(1)$ complexity. For a rich UI experience with a spinner and formatted FinOps tables, integrate the included `client-kernel.js` into your Node.js app.)_

---

## 8. Enterprise BFF Integration (Backend For Frontend)

To integrate the engine securely into your own server-side application (protecting your $60 API key from client-side exposure), **three fundamental components must be in place** (similar to standard GCP/AWS SDK integrations):

> **⚠️ Prerequisite (Environment Variables):**
> Your project root MUST contain a valid environment configuration (e.g., a `.env` file). If you are testing locally, ensure you install `dotenv` (`npm install dotenv` or `pip install python-dotenv`) to load these secrets properly. Never hardcode your API key in the source code.

1. **The Package:** Ensure the client kernel is installed in your initialized server environment (`npm install continuum-engine-client` or `pip install continuum-engine-client`).

2. **Environment Variables:** Securely mount your provisioned credentials in your server's `.env` file or a cloud secret manager (e.g., GCP Secret Manager, AWS Secrets Manager).

3. **Server Implementation:** Import the kernel and instantiate it within your server's routing file (e.g., `server.js` or `main.py`).

### Node.js (Express) Example

```javascript
// 1. Ensure package is installed
// 2. Keep your credentials secure in your .env file
const ContinuumClient = require("continuum-engine-client");

// 3. Instantiate and integrate into your route
const client = new ContinuumClient(
  process.env.CONTINUUM_ENDPOINT,
  process.env.CONTINUUM_HEADER_NAME,
  process.env.CONTINUUM_TOKEN,
  process.env.GOOGLE_DOC_ID, // Optional: For Stateful BYOD mode
);

async function handleUserRequest(userMessage) {
  try {
    // .query() returns raw JSON telemetry without terminal UI blocking
    const result = await client.query(userMessage);
    console.log("Tokens Saved:", result.finops_report.tokens_saved);
    return result.ai_response;
  } catch (error) {
    console.error("Inference Failed:", error.message);
  }
}
```

### Python (FastAPI / Flask) Example

```python
# 1. Ensure package is installed
# 2. Keep your credentials secure in your environment variables
import os
from continuum_engine_client.client_kernel import ContinuumClient

# 3. Instantiate and integrate into your route
client = ContinuumClient(
    endpoint_url=os.getenv("CONTINUUM_ENDPOINT"),
    auth_header_name=os.getenv("CONTINUUM_HEADER_NAME"),
    continuum_token=os.getenv("CONTINUUM_TOKEN"),
    doc_id=os.getenv("GOOGLE_DOC_ID") # Optional
)

def handle_user_request(user_message: str):
    try:
        # .query() returns a dictionary telemetry payload
        result = client.query(user_message)
        print(f"Tokens Saved: {result.get('finops_report', {}).get('tokens_saved')}")
        return result.get("ai_response")
    except Exception as e:
        print(f"Inference Failed: {e}")
```

---

## 9. Telemetry & Terminal Experience

When running requests directly via the `.ask()` method in your terminal, the client kernel reveals the physical compute breakdown behind the model's output, exposing the "invisible labor" of the SI:

```text
==================================================
🤖 [AI RESPONSE]
==================================================
(Grounding-verified authoritative engineering response)
--------------------------------------------------
🔗 [VERIFIED PRIMARY SOURCES]
  1. Official Cloud Architecture Documentation
     https://[Authorized-Enterprise-Domain]/...
--------------------------------------------------
📝 [STATE STORAGE] History successfully synced to your private document.
--------------------------------------------------
🔍 [FINOPS TELEMETRY BREAKDOWN]
  ├─ T_input (Optimized Prompt)     : 210 tokens
  ├─ T_grounding (Dynamic Search)   : 4,820 tokens  <-- Labor expended behind the scenes
  └─ T_output (Generated Result)    : 640 tokens
  🛡️ Edge Purge (Tokens Prevented) : 1,200 tokens
  📉 Net Billed Consumption        : 5,670 tokens
==================================================
💳 Quota Balance: 799 requests remaining
==================================================
```

---

## 10. Operational Policies (Read Before Use)

To guarantee microsecond-level edge response and enforce strict FinOps predictability, the gateway applies non-negotiable operational controls:

- **180s Circuit Breaker & Prompt Specificity:** The engine dynamically executes recursive search grounding against official documentation. To prevent cost runaways and infinite search loops, **a strict 180-second hard execution limit (circuit breaker)** is enforced:
  - **Optimized Prompts (5–20s SLA):** Scoped architectural questions, RFC/standard lookups, error investigations, and deterministic code specifications.

  - **Hard Timeout (180s Max):** Abstract, open-ended, or philosophical queries force multi-hop grounding depths. Invocations exceeding 180 seconds are forcefully terminated with HTTP 504. Formulate concrete, well-scoped prompts.

- **Service Availability (Geographic Scope):** This middleware, client kernel, and associated API keys are exclusively intended for global enterprise environments and are **strictly not available for use or purchase within Japan**. Access from restricted jurisdictions is filtered at the gateway level.

- **Zero-Tolerance Exploit Defense:** Automated vulnerability scans or prompt injection payloads are blocked at Gate 0. Associated credentials will be revoked immediately (403 Access Denied) without refund.

- **Strict Quota Cap:** The 800-request quota is hard-capped to safeguard against autonomous loop runaways. Once depleted, a new license acquisition is required.

- **Zero-Support Policy:** Engineered exclusively for experienced systems engineers. We provide no interactive debugging, manual onboarding, or post-revocation appeals.
