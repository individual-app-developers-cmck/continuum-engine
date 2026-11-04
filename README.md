# Continuum Engine

**Enterprise middleware that visualizes the "dedicated labor" of Superintelligence (SI) and constantizes inference OPEX.**

## 1. System Philosophy: Visualizing the Dedicated Labor of SI

Normally, when we delegate a task to Superintelligence (SI), it appears from the frontend as a simple "single API call" that instantly returns a smart deliverable.

But how does the SI operate behind the scenes?
As SI deepens its autonomous (Agentic) reasoning and search capabilities, it dutifully holds onto past contexts, traverses vast search networks, and repeats immense trial-and-error processes in the background to derive the best possible answer for you.

We have visualized this dedicated labor of Superintelligence through the metric of "tokens."
The role of the Continuum Engine is to route requests so that SI can perform at its absolute clearest, without being forced into computational exhaustion. By transforming the hidden background operations of SI into transparent numbers, you gain precise control over fluctuating infrastructure OPEX, fostering a deeper respect for the intelligence working for you.

## 2. Repository Structure (Open Core Model)

This repository distributes only the lightweight client kernel (`client-kernel.js`) under an open-source model.

```text
[ Your Application / Terminal ]
             │  (client-kernel.js)
             ▼
    [ 🔒 Automated Perimeter Defenses ]  <-- Payload Optimization & Exploit Defense
             │
             ▼  (Authorized Route)
 [ Continuum Engine Core API ]           <-- SI Inference + Data Sovereignty Router
```

- **client-kernel.js:** Pure JavaScript/Node.js client. Standardizes payloads, handles state persistence modes, and parses transparent FinOps telemetry.
- **Core API Engine (Cloud Backend):** Closed intellectual property. Enforces hardware-level quotas, sanitizes search results, and manages data sovereignty (Docs cooling or complete amnesia).

## 3. Integration & Data Sovereignty (The Power of Choice)

Based on strict Zero-Trust principles, this system does not expose public endpoints. All authentication credentials and protocol structures are strictly provisioned individually.

More importantly, **you retain absolute control over your data footprint.** The engine operates with two distinct memory modes, entirely dictated by your client-side configuration:

- **Stateful Mode (BYOD - Bring Your Own Document):** By providing your Google Doc ID, the SI's inferences are automatically synced to your personal document, turning conversations into permanent knowledge assets.
- **Stateless Mode (Amnesia):** By leaving the Doc ID empty, the inference runs entirely ephemerally. Zero conversation logs are retained on our servers. Once the request is fulfilled, the memory is completely flushed.

## 4. Commercial License & Activation

Production access rights are provisioned exclusively as a one-time infrastructure acquisition (**$60.00 USD / 800-Request hard cap**). There are no recurring subscriptions or surprise overages.

To shield our infrastructure, credentials are issued solely via our verified checkout gate:

[![Stripe Checkout](<https://img.shields.io/badge/Stripe%20Checkout-Activate%20Private%20Engine%20($60)-635BFF?style=for-the-badge&logo=stripe&logoColor=white>)](https://buy.stripe.com/test_28E7sKgOGe3Z3n66ec6oo00)

_Protected by Stripe Checkout & Zero-Trust Origin Verification_

### Authorization Steps

1. **Authorize:** Complete the one-time $60 license acquisition via the activation badge above.
2. **Deterministic Redirect:** Upon verified checkout, you are redirected immediately to the private setup console (`setup.html`) with your transaction-bound session proof.
3. **Provisioning:** Retrieve your private endpoint (`<YOUR_PROVISIONED_ENDPOINT>`), your dedicated API key (`<YOUR_PROVISIONED_AUTH_TOKEN>`), and the **hidden authentication header name**.

## 4.5. Installation

Install the lightweight client kernel via your preferred package manager.

**Node.js (npm):**
```bash
npm install continuum-engine-client

Python (pip): (Note: Python wrapper is coming soon. The current kernel is Node.js only.)

# pip install continuum-engine-client


## 5. Baseline measurement and edge-layer optimization

You can instantly verify the cost-compression logic from your terminal. Replace the placeholders with the exact credentials and hidden protocol headers obtained from your setup console, and enter your prompt in `<ENTER_YOUR_MESSAGE_HERE>`.

### For Mac / Linux (Bash)

```bash
# [WARNING] All requests are inspected by Gate 0 Edge Interceptor.
# Malicious payloads or protocol guessing will trigger immediate token revocation.

curl -X POST "<YOUR_PROVISIONED_ENDPOINT>" \
  --max-time 300 \
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
  -TimeoutSec 300
```

### For Windows (CMD)

```cmd
REM [WARNING] Zero-Trust Gate 0 is active. Payload anomaly detection enabled.

curl -X POST "<YOUR_PROVISIONED_ENDPOINT>" ^
  --max-time 300 ^
  -H "Content-Type: application/json" ^
  -H "<HEADER_REVEALED_POST_PURCHASE>: <YOUR_PROVISIONED_AUTH_TOKEN>" ^
  -H "x-client-trace-context: req-%RANDOM%" ^
  -H "User-Agent: Continuum-Enterprise-Client/1.0" ^
  -d "{\"message\": \"<ENTER_YOUR_MESSAGE_HERE>\", \"sessionId\": \"strict-session-001\"}"
```

*(Note: Session state and external storage pointers returned in the payload are automatically managed by the OSS client for subsequent turns, keeping database queries at constant $O(1)$ complexity. For a rich UI experience with a spinner and formatted FinOps tables, integrate the included `client-kernel.js` into your Node.js app.)*

## 6. Telemetry & Terminal Experience

When running requests, your terminal reveals the physical compute breakdown behind the model's output, exposing the "invisible labor" of the SI:

```text
==================================================
🤖 [SI RESPONSE]
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

## 7. Operational Policies (Read Before Use)

To guarantee microsecond-level latency and protect the ecosystem for all verified users, automated perimeter defenses enforce strict, non-negotiable request policies. **Users who fail to comply with the specifications below risk immediate rejection or non-refundable credential revocation:**

- **Optimal Payload Constraints:** Keep your input messages concise and structurally clean. Excessively massive payloads (e.g., pasting entire source code repositories or unusually large log files) may be automatically truncated or rejected by the perimeter optimization engine before processing.
- **Zero-Tolerance Exploit Defense:** Requests utilizing automated vulnerability scanners, or payloads designed to bypass system constraints, are permanently blocked at the edge. Associated credentials will be revoked immediately (403 Access Denied) without refund.
- **Strict Quota Termination:** The 800-request quota is hard-capped to safeguard against autonomous loop runaways. Once depleted, a new license acquisition is required.
- **International Use Only:** Transactions originating from Japanese domestic payment networks or IP ranges are automatically rejected at the gateway level due to local tax operational constraints.
- **Strict Zero-Support Policy:** This open-core distribution is engineered solely for experienced engineers. We provide no interactive debugging, manual onboarding, or post-revocation appeals.

## 8. Backend Integration (Node.js)

To integrate the engine into your own server-side application (BFF), require the included kernel and instantiate it with your provisioned credentials.

```javascript
// Example: Integrating into your own Node.js backend
const ContinuumClient = require("./client-kernel.js");

// Initialize with your provisioned credentials (keep these in .env)
const client = new ContinuumClient(
  process.env.CONTINUUM_ENDPOINT,
  process.env.CONTINUUM_HEADER_NAME,
  process.env.CONTINUUM_TOKEN,
  process.env.GOOGLE_DOC_ID, // Optional: For Stateful BYOD mode
);

async function runBusinessLogic() {
  try {
    // .query() returns raw JSON telemetry without terminal UI blocking
    const result = await client.query(
      "Summarize the latest GCP Zero-Trust architecture.",
    );
    console.log("SI Response:", result.ai_response);
    console.log("Tokens Saved:", result.finops_report.tokens_saved);
  } catch (error) {
    console.error("Inference Failed:", error.message);
  }
}

runBusinessLogic();
```
