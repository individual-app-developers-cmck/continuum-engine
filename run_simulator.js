// run_simulator.js
// ============================================================================
// Continuum Engine - Local FinOps Simulator (Demo Trial)
// ============================================================================
// ⚠️ This is a simulated DEMO. No actual cloud infrastructure is consumed.
// To protect the backend, the live endpoint is strictly provisioned post-activation.

// ユーザーが入力した質問を取得（なければデフォルト）
const demoMessage =
  process.argv.slice(2).join(" ") ||
  "Summarize the GCP Zero-Trust architecture in 3 bullet points.";

console.log("\n🚀 Welcome to the Continuum Engine Local Simulator");
console.log("------------------------------------------------------------");
console.log(`Processing request: "${demoMessage}"\n`);

process.stdout.write("⏳ ASI-OPEX Engine: Executing inference & cost purge...");

const spinner = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
let i = 0;
const interval = setInterval(() => {
  process.stdout.write(
    `\r⏳ ASI-OPEX Engine: Executing inference & cost purge... ${spinner[i]} `,
  );
  i = (i + 1) % spinner.length;
}, 100);

// 推論の重さを演出する疑似遅延 (2.5秒)
setTimeout(() => {
  clearInterval(interval);
  process.stdout.write(
    "\r✅ Inference & Security Audit Completed!                                  \n",
  );

  console.log("\n==================================================");
  console.log("🤖 [AI RESPONSE - SIMULATED]");
  console.log("==================================================");
  console.log(
    `(This is a simulated offline response for your query: "${demoMessage}")\n`,
  );
  console.log(
    "Zero-Trust architectures dictate that no implicit trust is granted based solely on network location. The Continuum Engine enforces this at Gate 0.\n\n(※ The production engine dynamically fetches live architectural facts via Vertex AI Grounding.)",
  );

  console.log("--------------------------------------------------");
  console.log("🔗 [VERIFIED PRIMARY SOURCES]");
  console.log(
    "  1. Google Cloud: BeyondCorp Enterprise Overview\n     (URI masked in Demo Mode)",
  );

  console.log("--------------------------------------------------");
  console.log(
    "📝 [STATE STORAGE] History successfully synced to your private document. (Simulated)",
  );

  console.log("--------------------------------------------------");
  console.log("🔍 [FINOPS TELEMETRY BREAKDOWN]");
  console.log("  ├─ T_input (Optimized Prompt)     : 142 tokens");
  console.log(
    "  ├─ T_grounding (Dynamic Search)   : 4,850 tokens  <-- Invisible infrastructure labor",
  );
  console.log("  └─ T_output (Generated Result)    : 320 tokens");
  console.log(
    "  🛡️ Edge Purge (Tokens Prevented)  : 1,200 tokens  <-- Shielded by Gate 0",
  );
  console.log("  📉 Net Billed Consumption         : 5,312 tokens");
  console.log("==================================================");
  console.log("💳 Quota Balance: ∞ (Demo Mode)");
  console.log("==================================================\n");

  // ========================================================================
  // 💸 URLを書かずにローカルのHTMLへ誘導する安全なCTA
  // ========================================================================
  console.log("💡 [END OF DEMO]");
  console.log("To unlock live grounding and protect your real infrastructure,");
  console.log("you must provision your private API key and endpoint.");
  console.log(
    "👉 Please open 'setup.html' in your web browser to activate your production environment.\n",
  );
}, 2500);
