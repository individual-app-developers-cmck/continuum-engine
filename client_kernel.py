import time
import sys
import threading
import requests

class ContinuumClient:
    """
    ============================================================================
    Continuum Engine - OSS Client Kernel (client_kernel.py)
    ============================================================================
    Purpose: Middleware for safely and easily invoking the ASI-OPEX Engine's dedicated API.
    Developers can validate in the terminal (.ask) and integrate into their own systems (.query).
    """

    def __init__(self, endpoint_url: str, auth_header_name: str, continuum_token: str, doc_id: str = None):
        """
        Args:
            endpoint_url (str): Dedicated API endpoint URL issued post-purchase
            auth_header_name (str): Dedicated header name specified post-purchase (Zero-Trust)
            continuum_token (str): Dedicated access credential purchased for $60 (Continuum Token)
            doc_id (str, optional): Google Docs ID for external cooling (sync) of conversation history
        """
        self.endpoint_url = endpoint_url
        self.auth_header_name = auth_header_name
        self.continuum_token = continuum_token
        self.doc_id = doc_id
        self.session_id = f"session_{int(time.time() * 1000)}"

    def ask(self, message: str):
        """
        [Terminal Validation Method]
        """
        if not self.continuum_token or not self.auth_header_name:
            print("🚨 Error: Access credentials or header name are not configured.\n"
                  "👉 Please read the official documentation to learn how to obtain your credentials:\n"
                  "   https://pypi.org/project/continuum-engine-client\n", file=sys.stderr)
            return

        sys.stdout.write("\n⏳ ASI-OPEX Engine: Executing inference & cost purge...")
        sys.stdout.flush()

        spinner = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"]
        stop_spinner = False

        def spin():
            i = 0
            while not stop_spinner:
                sys.stdout.write(f"\r⏳ ASI-OPEX Engine: Executing inference & cost purge... {spinner[i]} ")
                sys.stdout.flush()
                i = (i + 1) % len(spinner)
                time.sleep(0.1)

        spinner_thread = threading.Thread(target=spin)
        spinner_thread.start()

        try:
            headers = {
                "Content-Type": "application/json",
                self.auth_header_name: self.continuum_token,
                "User-Agent": "Continuum-Enterprise-Client/1.0",
            }
            payload = {
                "message": message,
                "docId": self.doc_id,
                "sessionId": self.session_id,
            }

            response = requests.post(self.endpoint_url, headers=headers, json=payload)
            
            stop_spinner = True
            spinner_thread.join()

            sys.stdout.write("\r✅ Inference & Security Audit Completed!                                  \n")
            sys.stdout.flush()
            
            try:
                data = response.json()
            except requests.exceptions.JSONDecodeError:
                data = {}

            if not response.ok:
                error_msg = data.get("error", "Unknown Error")
                print(f"\n❌ API Error ({response.status_code}): {error_msg}", file=sys.stderr)
                return

            self._render_response(data)

        except requests.exceptions.RequestException as e:
            stop_spinner = True
            spinner_thread.join()
            print(f"\n❌ Network Communication Error: {e}", file=sys.stderr)

    def query(self, message: str) -> dict:
        """
        [System Integration Method]
        """
        if not self.continuum_token or not self.auth_header_name:
            raise ValueError(
                "🚨 Error: Access credentials or header name are not configured.\n"
                "👉 Please read the official documentation to learn how to obtain your credentials:\n"
                "   https://pypi.org/project/continuum-engine-client"
            )

        headers = {
            "Content-Type": "application/json",
            self.auth_header_name: self.continuum_token,
            "User-Agent": "Continuum-Enterprise-Client/1.0",
        }
        payload = {
            "message": message,
            "docId": self.doc_id,
            "sessionId": self.session_id,
        }

        response = requests.post(self.endpoint_url, headers=headers, json=payload)
        
        try:
            data = response.json()
        except requests.exceptions.JSONDecodeError:
             data = {}

        if not response.ok:
            error_msg = data.get("error", "Unknown Error")
            raise RuntimeError(f"API Error ({response.status_code}): {error_msg}")

        return data

    def _render_response(self, data: dict):
        """
        Internal Method: Terminal visualization logic for response data
        """
        ai_response = data.get("ai_response", "")
        source_urls = data.get("source_urls", [])
        remaining_requests = data.get("remaining_requests", "Unknown")
        finops_report = data.get("finops_report", {})
        doc_id = data.get("doc_id")

        print("\n==================================================")
        print("🤖 [AI RESPONSE]")
        print("==================================================")
        print(ai_response)
        print("--------------------------------------------------")

        if source_urls:
            print("🔗 [VERIFIED PRIMARY SOURCES]")
            for idx, src in enumerate(source_urls):
                title = src.get("title", "Unknown Title")
                uri = src.get("uri", "Unknown URI")
                print(f"  {idx + 1}. {title}\n     {uri}")
            print("--------------------------------------------------")

        if doc_id:
            print("📝 [STATE STORAGE] History successfully synced to your private document.")
            print("--------------------------------------------------")

        if finops_report and finops_report.get("breakdown"):
            br = finops_report["breakdown"]
            t_input_optimized = br.get("t_input_optimized", 0)
            t_grounding_dynamic = br.get("t_grounding_dynamic", 0)
            t_output_generated = br.get("t_output_generated", 0)
            tokens_saved = finops_report.get("tokens_saved", 0)
            billed_tokens = finops_report.get("billed_tokens", 0)
            
            print("🔍 [FINOPS TELEMETRY BREAKDOWN]")
            print(f"  ├─ T_input (Optimized Prompt)     : {t_input_optimized} tokens")
            print(f"  ├─ T_grounding (Dynamic Search)   : {t_grounding_dynamic} tokens")
            print(f"  └─ T_output (Generated Result)    : {t_output_generated} tokens")

            if tokens_saved > 0:
                print(f"  🛡️ Edge Purge (Tokens Prevented)  : {tokens_saved} tokens")
            
            print(f"  📉 Net Billed Consumption         : {billed_tokens} tokens")
            print("==================================================")

        print(f"💳 Quota Balance: {remaining_requests} requests remaining")
        print("==================================================\n")

