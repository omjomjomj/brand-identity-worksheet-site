import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { useEffect } from "react";

export default function Worksheet3() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                <p className="text-sm text-slate-500">工作單 3 - 設計師簡報快照</p>
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
              識別落地｜工作單 3：設計師簡報快照
            </h2>
            <p className="text-lg text-slate-600">
              將品牌策略濃縮成一頁式簡報，供設計師快速理解與參考。
            </p>
          </div>

          {/* Instructions Card */}
          <Card className="mb-12 bg-blue-50 border-blue-200 p-6">
            <div className="flex gap-4">
              <div className="text-green-600 text-2xl">📋</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">填寫說明</h3>
                <p className="text-slate-700">
                  保持簡潔：這是一頁式簡報。使用淺白的語言，避免沒有舉例的模糊詞彙。這份簡報應該可以直接分享給設計師或團隊成員。
                </p>
              </div>
            </div>
          </Card>

          {/* Form Sections */}
          <div className="space-y-12">
            {/* Section A */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-green-600 text-white flex items-center justify-center font-bold text-lg">
                  A
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    核心概念與關鍵字
                  </h3>
                  <p className="text-slate-600">(Core Keywords)</p>
                </div>
              </div>
              <div className="ml-16 space-y-4">
                {[1, 2, 3].map((i) => (
                  <textarea
                    key={i}
                    placeholder={`關鍵字 ${i}...`}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    rows={2}
                  />
                ))}
              </div>
            </div>

            {/* Section B */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  B
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    品牌故事與主要溝通訊息
                  </h3>
                  <p className="text-slate-600">(Brand Story & Message)</p>
                </div>
              </div>
              <div className="ml-16 space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <textarea
                    key={i}
                    placeholder={`訊息 ${i}...`}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows={2}
                  />
                ))}
              </div>
            </div>

            {/* Section C */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-orange-600 text-white flex items-center justify-center font-bold text-lg">
                  C
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    視覺風格參考與偏好
                  </h3>
                  <p className="text-slate-600">(Visual References)</p>
                </div>
              </div>
              <div className="ml-16 space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <textarea
                    key={i}
                    placeholder={`視覺參考 ${i}...`}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                    rows={2}
                  />
                ))}
              </div>
            </div>

            {/* Section D */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
                  D
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    設計產出優先順序
                  </h3>
                  <p className="text-slate-600">(Priorities)</p>
                </div>
              </div>
              <div className="ml-16 space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-lg font-bold text-slate-600 pt-2 w-8">
                      {i}.
                    </span>
                    <textarea
                      placeholder={`優先順序 ${i}...`}
                      className="flex-1 px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                      rows={2}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Section E */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold text-lg">
                  E
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    限制條件與應用場景
                  </h3>
                  <p className="text-slate-600">(Constraints & Scenarios)</p>
                </div>
              </div>
              <div className="ml-16 space-y-4">
                {[1, 2, 3].map((i) => (
                  <textarea
                    key={i}
                    placeholder={`限制條件 ${i}...`}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                    rows={2}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-16 pt-12 border-t border-slate-200">
            <Link href="/worksheet/2">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" /> 上一步
              </Button>
            </Link>
            <Link href="/worksheet/4">
              <Button className="gap-2">
                下一步：工作單 4 <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
