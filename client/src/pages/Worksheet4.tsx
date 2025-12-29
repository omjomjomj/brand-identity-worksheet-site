import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Copy, BookOpen, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { useFormData } from "@/contexts/FormContext";
import { generatePDF } from "@/lib/pdfGenerator";

export default function Worksheet4() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { formData } = useFormData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownloadPDF = () => {
    generatePDF(formData);
  };

  const prompts = [
    {
      id: "prompt-1",
      title: "提示詞 1 — 提取視覺關鍵字",
      content: `角色：你是品牌顧問與視覺策略師。
任務：閱讀以下品牌描述與痛點。
然後：
1) 提取 8-12 個繁體中文的視覺風格關鍵字。
2) 將它們分為 3 個維度：色彩氛圍、字體排版、圖像與版面。
3) 以條列式輸出。

輸入資料：
品牌描述：[在此貼上]
主要痛點：[在此貼上]`,
    },
    {
      id: "prompt-2",
      title: "提示詞 2 — 撰寫品牌視覺風格簡報",
      content: `角色：你是資深品牌設計師。
任務：根據以下品牌描述、痛點與視覺關鍵字，撰寫一份 250-400 字的繁體中文品牌視覺風格簡報。使用非設計師也能理解的清晰、具體語言。

簡報段落結構：
1. 品牌整體感覺（2-3 句）
2. 色彩氛圍（主色、輔色與感受）
3. 字體與排版風格（字體感覺與版面節奏）
4. 圖像與照片風格（構圖、場景、拍攝感覺）

輸入資料：
品牌描述：[在此貼上]
痛點：[在此貼上]
視覺關鍵字：[在此貼上]`,
    },
    {
      id: "prompt-3",
      title: "提示詞 3 — 壓縮成一頁設計師快照",
      content: `角色：你是品牌設計主管。
任務：將以下文字轉換成一頁式「設計師簡報快照」。使用簡短的條列式，保持實用性。

輸入資料：
輸入文字：[在此貼上你的簡報]`,
    },
  ];

  const copyToClipboard = (id: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" /> 返回首頁
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="蕉您來好康農場 Logo" className="w-10 h-10 object-contain" />
              <div>
                <h1 className="text-xl font-bold text-slate-900">蕉您來好康農場</h1>
                <p className="text-sm text-slate-500">工作單 4 - AI 提示詞小抵</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              識別落地｜工作單 4（選用）：AI 提示詞小抄
            </h2>
            <p className="text-lg text-slate-600">
              使用 AI 工具輔助品牌策略制定的提示詞範本。複製並貼上，將佔位符號替換成你自己的文字。
            </p>
          </div>

          {/* Instructions Card */}
          <Card className="mb-12 bg-yellow-50 border-yellow-200 p-6">
            <div className="flex gap-4">
              <div className="text-purple-600 text-2xl">⚡</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">使用說明</h3>
                <p className="text-slate-700">
                  複製並貼上以下提示詞。將佔位符號替換成你自己的文字。
                </p>
                <p className="text-slate-700 font-semibold mt-2">
                  ⚠️ 務必檢視並編輯 AI 的輸出結果——不要盲目接受。
                </p>
              </div>
            </div>
          </Card>

          {/* Prompts */}
          <div className="space-y-8">
            {prompts.map((prompt, index) => (
              <Card key={prompt.id} className="overflow-hidden border-slate-200">
                {/* Header */}
                <div className="bg-slate-100 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {prompt.title}
                    </h3>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-2"
                    onClick={() => copyToClipboard(prompt.id, prompt.content)}
                  >
                    <Copy className="w-4 h-4" />
                    {copiedId === prompt.id ? "已複製" : "複製"}
                  </Button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <pre className="bg-slate-50 rounded-lg p-4 overflow-x-auto text-sm leading-relaxed text-slate-700 font-mono whitespace-pre-wrap break-words">
                    {prompt.content}
                  </pre>
                </div>
              </Card>
            ))}
          </div>

          {/* Tips Section */}
          <Card className="mt-12 bg-blue-50 border-blue-200 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">💡 使用提示</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">1.</span>
                <span>
                  複製提示詞後，貼到 ChatGPT、Claude 或其他 AI 工具
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">2.</span>
                <span>
                  將 [在此貼上] 的佔位符號替換成你的品牌資訊
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">3.</span>
                <span>
                  檢視 AI 的輸出結果，根據需要進行編輯和調整
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">4.</span>
                <span>
                  將最終結果填入相應的工作單中
                </span>
              </li>
            </ul>
          </Card>

          {/* PDF Export Section */}
          <Card className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 p-8">
            <div className="flex items-start gap-4">
              <div className="text-yellow-600 text-3xl">📥</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  匯出工作單內容
                </h3>
                <p className="text-slate-700 mb-6">
                  將您在所有工作單中填寫的內容匯出為文本文件，方便您保存、列印或分享給團隊成員。
                </p>
                <Button
                  size="lg"
                  onClick={handleDownloadPDF}
                  className="gap-2 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
                >
                  <Download className="w-5 h-5" />
                  下載工作單 (PDF)
                </Button>
              </div>
            </div>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-16 pt-12 border-t border-slate-200">
            <Link href="/worksheet/3">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" /> 上一步
              </Button>
            </Link>
            <Link href="/">
              <Button className="gap-2">
                返回首頁
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
