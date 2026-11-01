// client-kernel.js
/**
 * ============================================================================
 * Continuum Engine - OSS Client Kernel (client-kernel.js)
 * ============================================================================
 * 目的: ASI-OPEX Engineの専用APIを安全かつ簡単に呼び出すためのミドルウェア。
 * 開発者はターミナルでの検証(.ask)と、自社システムへの組み込み(.query)を両立できます。
 */
class ContinuumClient {
  /**
   * @param {string} endpointUrl - 決済後に発行された専用APIエンドポイントURL
   * @param {string} continuumToken - $60で購入した専用アクセス資格 (Continuum Token)
   * @param {string} docId - (任意) 会話履歴の外部冷却（同期）先となるGoogle Docs ID
   */
  constructor(endpointUrl, continuumToken, docId = null) {
    this.endpointUrl = endpointUrl;
    this.continuumToken = continuumToken; // 変数名を統一
    this.docId = docId;
    this.sessionId = `session_${Date.now()}`;
  }

  /**
   * 【デモ・ターミナル検証用メソッド】
   * AIへメッセージを送信し、結果と「トークンの歪み」レポートをターミナルに美しく描画します。
   * @param {string} message - 送信するテキスト
   */
  async ask(message) {
    if (!this.continuumToken) {
      console.error("🚨 エラー: Continuum Tokenが設定されていません。");
      return;
    }
    
    process.stdout.write("\n⏳ ASI-OPEX Engine 推論および原価パージ実行中...");
    const spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
    let i = 0;
    const interval = setInterval(() => {
      process.stdout.write(`\r⏳ ASI-OPEX Engine 推論および原価パージ実行中... ${spinner[i]} `);
      i = (i + 1) % spinner.length;
    }, 100);

    try {
      const response = await fetch(this.endpointUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // ※ソースコード上はシステム要件としてヘッダー名を指定
          "x-api-key": this.continuumToken 
        },
        body: JSON.stringify({
          message: message,
          docId: this.docId,
          sessionId: this.sessionId
        })
      });
      
      clearInterval(interval);
      process.stdout.write("\r✅ 推論およびセキュリティ検閲完了！                                  \n");
      
      const data = await response.json();
      if (!response.ok) {
        console.error(`\n❌ APIエラー (${response.status}): ${data.error || "不明なエラー"}`);
        return;
      }
      
      this._renderResponse(data);
    } catch (error) {
      clearInterval(interval);
      console.error("\n❌ ネットワーク通信エラー:", error.message);
    }
  }

  /**
   * 【システム組み込み専用メソッド】
   * AIへメッセージを送信し、純粋なレスポンスデータ（JSON）を返します。
   */
  async query(message) {
    if (!this.continuumToken) {
      throw new Error("🚨 エラー: Continuum Tokenが設定されていません。");
    }

    const response = await fetch(this.endpointUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.continuumToken
      },
      body: JSON.stringify({
        message: message,
        docId: this.docId,
        sessionId: this.sessionId
      })
    });
    
    const data = await response.json();
    if (!response.ok) {
      throw new Error(`APIエラー (${response.status}): ${data.error || "不明なエラー"}`);
    }
    
    return data;
  }

  /**
   * 内部メソッド: レスポンスデータのターミナル可視化ロジック
   */
  _renderResponse(data) {
    const { ai_response, source_urls, remaining_requests, finops_report, doc_id } = data;
    
    console.log("\n==================================================");
    console.log("🤖 【AI 応答】");
    console.log("==================================================");
    console.log(ai_response);
    console.log("--------------------------------------------------");
    
    if (source_urls && source_urls.length > 0) {
      console.log("🔗 【参考リンク（エンタープライズ品質検閲済）】");
      source_urls.forEach((src, idx) => {
        console.log(`  ${idx + 1}. ${src.title}\n     ${src.uri}`);
      });
      console.log("--------------------------------------------------");
    }
    
    if (doc_id) {
      console.log(`📝 【同期完了】 記憶の外部冷却としてGoogle Docsへ履歴を退避しました。`);
      console.log("--------------------------------------------------");
    }
    if (finops_report && finops_report.breakdown) {
      const br = finops_report.breakdown;
      console.log("🔍 【トークンの歪み・原価可視化レポート】");
      console.log(`  ├─ T_input (最適化済入力) : ${br.t_input_optimized} トークン`);
      console.log(`  ├─ T_grounding (隠れ原価) : ${br.t_grounding_dynamic} トークン`);
      console.log(`  └─ T_output (生成結果)    : ${br.t_output_generated} トークン`);
      
      if (finops_report.tokens_saved > 0) {
        console.log(`  🛡️ エッジ物理遮断 (節約)  : ${finops_report.tokens_saved} トークン`);
      }
      console.log(`  📉 実際のAPI課金対象      : ${finops_report.billed_tokens} トークン`);
      console.log("==================================================");
    }
    
    // 表示をContinuum Tokenの残弾に変更
    console.log(`💳 Continuum Token 残弾: 残り ${remaining_requests} 回`);
    console.log("==================================================\n");
  }
}

// Node.jsモジュールとしてエクスポート
module.exports = ContinuumClient;
