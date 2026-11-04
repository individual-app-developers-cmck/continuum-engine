// client-kernel.js
/**
 * ============================================================================
 * Continuum Engine - OSS Client Kernel (client-kernel.js)
 * ============================================================================
 * Purpose: Middleware for safely and easily invoking the ASI-OPEX Engine's dedicated API.
 * Developers can validate in the terminal (.ask) and integrate into their own systems (.query).
 */
class ContinuumClient {
  /**
   * @param {string} endpointUrl - Dedicated API endpoint URL issued post-purchase
   * @param {string} authHeaderName - Dedicated header name specified post-purchase (Zero-Trust)
   * @param {string} continuumToken - Dedicated access credential purchased for $60 (Continuum Token)
   * @param {string} docId - (Optional) Google Docs ID for external cooling (sync) of conversation history
   */
  constructor(endpointUrl, authHeaderName, continuumToken, docId = null) {
    this.endpointUrl = endpointUrl;
    this.authHeaderName = authHeaderName;
    this.continuumToken = continuumToken;
    this.docId = docId;
    this.sessionId = `session_${Date.now()}`;
  }

  /**
   * [Terminal Validation Method]
   */
  async ask(message) {
    if (!this.continuumToken || !this.authHeaderName) {
      console.error(
        "🚨 Error: Access credentials or header name are not configured.\n" +
        "👉 Please read the official documentation to learn how to obtain your credentials:\n" +
        "   https://www.npmjs.com/package/continuum-engine-client\n"
      );
      return;
    }

    process.stdout.write(
      "\n⏳ ASI-OPEX Engine: Executing inference & cost purge..."
    );
    const spinner = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
    let i = 0;
    const interval = setInterval(() => {
      process.stdout.write(
        `\r⏳ ASI-OPEX Engine: Executing inference & cost purge... ${spinner[i]} `
      );
      i = (i + 1) % spinner.length;
    }, 100);

    try {
      const response = await fetch(this.endpointUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          [this.authHeaderName]: this.continuumToken,
        },
        body: JSON.stringify({
          message: message,
          docId: this.docId,
          sessionId: this.sessionId,
        }),
      });

      clearInterval(interval);
      process.stdout.write(
        "\r✅ Inference & Security Audit Completed!                                  \n"
      );

      const data = await response.json();
      if (!response.ok) {
        console.error(
          `\n❌ API Error (${response.status}): ${data.error || "Unknown Error"}`
        );
        return;
      }

      this._renderResponse(data);
    } catch (error) {
      clearInterval(interval);
      console.error("\n❌ Network Communication Error:", error.message);
    }
  }

  /**
   * [System Integration Method]
   */
  async query(message) {
    if (!this.continuumToken || !this.authHeaderName) {
      throw new Error(
        "🚨 Error: Access credentials or header name are not configured.\n" +
        "👉 Please read the official documentation to learn how to obtain your credentials:\n" +
        "   https://www.npmjs.com/package/continuum-engine-client"
      );
    }
    const response = await fetch(this.endpointUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        [this.authHeaderName]: this.continuumToken,
      },
      body: JSON.stringify({
        message: message,
        docId: this.docId,
        sessionId: this.sessionId,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(
        `API Error (${response.status}): ${data.error || "Unknown Error"}`
      );
    }

    return data;
  }

  /**
   * Internal Method: Terminal visualization logic for response data
   */
  _renderResponse(data) {
    const {
      ai_response,
      source_urls,
      remaining_requests,
      finops_report,
      doc_id,
    } = data;

    console.log("\n==================================================");
    console.log("🤖 [AI RESPONSE]");
    console.log("==================================================");
    console.log(ai_response);
    console.log("--------------------------------------------------");

    if (source_urls && source_urls.length > 0) {
      console.log("🔗 [VERIFIED PRIMARY SOURCES]");
      source_urls.forEach((src, idx) => {
        console.log(`  ${idx + 1}. ${src.title}\n     ${src.uri}`);
      });
      console.log("--------------------------------------------------");
    }

    if (doc_id) {
      console.log(
        `📝 [STATE STORAGE] History successfully synced to your private document.`
      );
      console.log("--------------------------------------------------");
    }

    if (finops_report && finops_report.breakdown) {
      const br = finops_report.breakdown;
      console.log("🔍 [FINOPS TELEMETRY BREAKDOWN]");
      console.log(
        `  ├─ T_input (Optimized Prompt)     : ${br.t_input_optimized} tokens`
      );
      console.log(
        `  ├─ T_grounding (Dynamic Search)   : ${br.t_grounding_dynamic} tokens`
      );
      console.log(
        `  └─ T_output (Generated Result)    : ${br.t_output_generated} tokens`
      );

      if (finops_report.tokens_saved > 0) {
        console.log(
          `  🛡️ Edge Purge (Tokens Prevented)  : ${finops_report.tokens_saved} tokens`
        );
      }
      console.log(
        `  📉 Net Billed Consumption         : ${finops_report.billed_tokens} tokens`
      );
      console.log("==================================================");
    }

    console.log(`💳 Quota Balance: ${remaining_requests} requests remaining`);
    console.log("==================================================\n");
  }
}

// Export as Node.js module
module.exports = ContinuumClient;
