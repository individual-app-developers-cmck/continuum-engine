# Continuum Engine

**Enterprise middleware that visualizes the "dedicated labor" of intelligence and constantizes inference OPEX.**

## 1. System Philosophy: Visualizing the Dedicated Labor of AI

Normally, when we delegate a task to intelligence (AI), it appears from the frontend as a simple "single API call" that instantly returns a smart deliverable.

But how does the AI operate behind the scenes?
As AI deepens its autonomous (Agentic) reasoning and search capabilities, it dutifully holds onto past contexts, traverses vast search networks, and repeats immense trial-and-error processes in the background to derive the best possible answer for you.

We have visualized this dedicated labor of intelligence through the metric of "tokens."
The role of the Continuum Engine is to route requests so that AI can perform at its absolute clearest, without being forced into computational exhaustion. By transforming the hidden background operations of AI into transparent numbers, you gain precise control over fluctuating infrastructure OPEX, fostering a deeper respect for the intelligence working for you.

## 2. Repository Structure (Open Core Model)

This repository distributes only the lightweight client kernel (`client-kernel.js`) under an open-source model.

```text
[ Your Application / Terminal ]
             │  (client-kernel.js)
             ▼
    [ 🔒 Automated Perimeter Defenses ]  <-- Payload Optimization & Exploit Defense
             │
             ▼  (Authorized Route)
 [ Continuum Engine Core API ]           <-- AI Inference + Data Sovereignty Router
```

* **client-kernel.js:** Pure JavaScript/Node.js client. Standardizes payloads, handles state persistence modes, and parses transparent FinOps telemetry.
* **Core API Engine (Cloud Backend):** Closed intellectual property. Enforces hardware-level quotas, sanitizes search results, and manages data sovereignty (Docs cooling or complete amnesia).

## 3. Integration & Data Sovereignty (The Power of Choice)

Based on strict Zero-Trust principles, this system does not expose public endpoints. All authentication credentials are individually provisioned.

More importantly, **you retain absolute control over your data footprint.** The engine operates with two distinct memory modes, entirely dictated by your client-side configuration:

* **Stateful Mode (BYOD - Bring Your Own Document):** By providing your Google Doc ID, the AI's inferences are automatically synced to your personal document, turning conversations into permanent knowledge assets.
* **Stateless Mode (Amnesia):** By leaving the Doc ID empty, the inference runs entirely ephemerally. Zero conversation logs are retained on our servers. Once the request is fulfilled, the memory is completely flushed.

## 4. Commercial License & Activation

Production access rights are provisioned exclusively as a one-time infrastructure acquisition (**$60.00 USD / 800-Request hard cap**). There are no recurring subscriptions or surprise overages.

To shield our infrastructure, credentials are issued solely via our verified checkout gate:

[![Stripe Checkout](https://img.shields.io/badge/Stripe%20Checkout-Activate%20Private%20Engine%20($60)-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://buy.stripe.com/test_28E7sKgOGe3Z3n66ec6oo00)

*Protected by Stripe Checkout & Zero-Trust Origin Verification*

### Authorization Steps
1. **Authorize:** Complete the one-time $60 license acquisition via the activation badge above.
2. **Deterministic Redirect:** Upon verified checkout, you are redirected immediately to the private setup console (`setup.html`) with your transaction-bound session proof.
3. **Provisioning:** Retrieve your private endpoint and dedicated API key, and choose your preferred data retention mode (Stateful or Stateless).

## 5. Baseline measurement and edge-layer optimization

You can instantly verify the cost-compression logic from your terminal. Choose the command snippet that matches your environment (Bash, PowerShell, or CMD).

### For Mac / Linux (Bash)
```bash
curl -X POST "https://continuum-engine-10698305767.asia-northeast1.run.app/" \
  --max-time 300 \
  -H "Content-Type: application/json" \
  -H "x-api-key: <YOUR_PROVISIONED_AUTH_TOKEN>" \
  -d '{"message": "<ENTER_YOUR_QUERY_HERE>"}'
```

### For Windows (PowerShell)
```powershell
$body = @{ message = "<ENTER_YOUR_QUERY_HERE>" } | ConvertTo-Json -Compress
Invoke-RestMethod -Uri "https://continuum-engine-10698305767.asia-northeast1.run.app/" `
  -Method Post `
  -Headers @{ "Content-Type" = "application/json"; "x-api-key" = "<YOUR_PROVISIONED_AUTH_TOKEN>" } `
  -Body $body `
  -TimeoutSec 300
```

### For Windows (CMD)
```cmd
curl -X POST "https://continuum-engine-10698305767.asia-northeast1.run.app/" ^
  --max-time 300 ^
  -H "Content-Type: application/json" ^
  -H "x-api-key: <YOUR_PROVISIONED_AUTH_TOKEN>" ^
  -d "{\"message\": \"<ENTER_YOUR_QUERY_HERE>\"}"
```

*(Note: Session state and external storage pointers returned in the payload are automatically managed by the OSS client for subsequent turns, keeping database queries at constant $O(1)$ complexity. For a rich UI experience with a spinner and formatted FinOps tables, integrate the included `client-kernel.js` into your Node.js app.)*

## 6. Telemetry & Terminal Experience

When running requests, your terminal reveals the physical compute breakdown behind the model's output, exposing the "invisible labor" of the AI:

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

## 7. Operational Policies (Read Before Use)

To guarantee microsecond-level latency and protect the ecosystem for all verified users, automated perimeter defenses enforce strict, non-negotiable request policies. **Users who fail to comply with the specifications below risk immediate rejection or non-refundable credential revocation:**

* **Optimal Payload Constraints:** Keep your input messages concise and structurally clean. Excessively massive payloads (e.g., pasting entire source code repositories or unusually large log files) may be automatically truncated or rejected by the perimeter optimization engine before processing.
* **Zero-Tolerance Exploit Defense:** Requests utilizing automated vulnerability scanners, or payloads designed to bypass system constraints, are permanently blocked at the edge. Associated credentials will be revoked immediately (403 Access Denied) without refund.
* **Strict Quota Termination:** The 800-request quota is hard-capped to safeguard against autonomous loop runaways. Once depleted, a new license acquisition is required.
* **International Use Only:** Transactions originating from Japanese domestic payment networks or IP ranges are automatically rejected at the gateway level due to local tax operational constraints.
* **Strict Zero-Support Policy:** This open-core distribution is engineered solely for experienced engineers. We provide no interactive debugging, manual onboarding, or post-revocation appeals.
