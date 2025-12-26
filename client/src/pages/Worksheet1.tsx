import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { useEffect } from "react";

export default function Worksheet1() {
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
                <p className="text-sm text-slate-500">工作單 1 - 品牌快照與痛點</p>
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
              識別落地｜工作單 1：品牌快照與痛點
            </h2>
            <p className="text-lg text-slate-600">
              透過系統化的問題，深入理解您的品牌現狀、目標受眾、競爭優勢與品牌個性。
            </p>
          </div>

          {/* Instructions Card */}
          <Card className="mb-12 bg-blue-50 border-blue-200 p-6">
            <div className="flex gap-4">
              <div className="text-blue-600 text-2xl">💡</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">填寫說明</h3>
                <p className="text-slate-700">
                  請用簡短、具體的詞句填寫所有空格。如果還沒有品牌名稱，可以先取一個工作暱稱（暫定名）。每個答案請控制在 1-2 行內。
                </p>
              </div>
            </div>
          </Card>

          {/* Form Sections */}
          <div className="space-y-12">
            {/* Section A */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  A
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    品牌現狀與核心
                  </h3>
                  <p className="text-slate-600">
                    主要產品／服務是什麼？目前處於什麼階段？
                  </p>
                </div>
              </div>
              <div className="space-y-4 ml-16">
                <input
                  type="text"
                  placeholder="請輸入您的答案..."
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="請輸入您的答案..."
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Section B */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-orange-600 text-white flex items-center justify-center font-bold text-lg">
                  B
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    目標受眾 (Target Audience)
                  </h3>
                  <p className="text-slate-600">
                    最想吸引的客戶是誰？（年齡、職業、生活方式）
                  </p>
                </div>
              </div>
              <div className="space-y-4 ml-16">
                <input
                  type="text"
                  placeholder="請輸入您的答案..."
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="請輸入您的答案..."
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Section C */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-green-600 text-white flex items-center justify-center font-bold text-lg">
                  C
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    競爭優勢與價值
                  </h3>
                  <p className="text-slate-600">
                    為什麼客戶會選擇我們而不是別人？最核心的特色是？
                  </p>
                </div>
              </div>
              <div className="space-y-4 ml-16">
                <input
                  type="text"
                  placeholder="請輸入您的答案..."
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="請輸入您的答案..."
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
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
                    品牌個性關鍵字
                  </h3>
                  <p className="text-slate-600">
                    請勾選 3-5 個符合品牌未來形象的形容詞：
                  </p>
                </div>
              </div>
              <div className="ml-16 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "專業信頼 (Professional)",
                  "親切友善 (Friendly)",
                  "高端精緻 (Luxury)",
                  "經濟實惠 (Affordable)",
                  "創新前衛 (Innovative)",
                  "經典傳統 (Classic)",
                  "簡約現代 (Minimalist)",
                  "溫暖親民 (Warm)",
                ].map((keyword) => (
                  <label key={keyword} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-slate-700">{keyword}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-16 pt-12 border-t border-slate-200">
            <Link href="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" /> 返回首頁
              </Button>
            </Link>
            <Link href="/worksheet/2">
              <Button className="gap-2">
                下一步：工作單 2 <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
