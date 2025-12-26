import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";

export default function Worksheet2() {
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
                <p className="text-sm text-slate-500">工作單 2 - 視覺風格三軸與關鍵字</p>
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
              識別落地｜工作單 2：視覺風格三軸與關鍵字
            </h2>
            <p className="text-lg text-slate-600">
              定義品牌視覺風格的三個核心維度：色彩、字體、元素與版面。
            </p>
          </div>

          {/* Instructions Card */}
          <Card className="mb-12 bg-green-50 border-green-200 p-6">
            <div className="flex gap-4">
              <div className="text-orange-600 text-2xl">🎨</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">填寫說明</h3>
                <p className="text-slate-700">
                  在三軸上標記您的品牌位置，選擇視覺關鍵字，並定義色彩與字體系統。
                </p>
              </div>
            </div>
          </Card>

          {/* Form Sections */}
          <div className="space-y-12">
            {/* Section A: Axes */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-orange-600 text-white flex items-center justify-center font-bold text-lg">
                  A
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    視覺風格三軸
                  </h3>
                  <p className="text-slate-600">
                    在以下三個維度上標記您的品牌位置
                  </p>
                </div>
              </div>

              <div className="ml-16 space-y-8">
                {[
                  { label: "色彩氛圍", left: "冷調", right: "暖調" },
                  { label: "字體風格", left: "傳統", right: "現代" },
                  { label: "版面節奏", left: "規則", right: "自由" },
                ].map((axis) => (
                  <div key={axis.label}>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      {axis.label}
                    </label>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-slate-600 w-12">{axis.left}</span>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        defaultValue="50"
                        className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="text-xs text-slate-600 w-12 text-right">
                        {axis.right}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section B: Keywords */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  B
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    視覺關鍵字
                  </h3>
                  <p className="text-slate-600">
                    列出 8-12 個描述品牌視覺風格的關鍵字
                  </p>
                </div>
              </div>

              <div className="ml-16 space-y-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-slate-500 font-semibold w-8">{i}.</span>
                    <input
                      type="text"
                      placeholder={`關鍵字 ${i}...`}
                      className="flex-1 px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                ))}
              </div>

              <div className="ml-16 mt-6 pt-6 border-t border-slate-200">
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  最終決定：品牌視覺風格核心詞彙
                </label>
                <input
                  type="text"
                  placeholder="例：簡約現代、溫暖親民、專業信賴..."
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent font-semibold"
                />
              </div>
            </div>

            {/* Section C: Colors */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-green-600 text-white flex items-center justify-center font-bold text-lg">
                  C
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    色彩系統
                  </h3>
                  <p className="text-slate-600">
                    定義主色、輔色與強調色
                  </p>
                </div>
              </div>

              <div className="ml-16 space-y-6">
                {[
                  { label: "主色", desc: "品牌主要顏色" },
                  { label: "輔色", desc: "配合主色的顏色" },
                  { label: "強調色", desc: "用於重點的顏色" },
                ].map((color) => (
                  <div key={color.label} className="flex items-start gap-4">
                    <div className="pt-3">
                      <div className="w-12 h-12 rounded-lg border-2 border-slate-300 bg-white cursor-pointer hover:border-slate-400 transition-colors" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-semibold text-slate-700 mb-1">
                        {color.label}
                      </label>
                      <p className="text-xs text-slate-600 mb-2">{color.desc}</p>
                      <input
                        type="text"
                        placeholder="顏色名稱或 HEX 碼..."
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section D: Typography */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
                  D
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    字體系統
                  </h3>
                  <p className="text-slate-600">
                    選擇標題與正文字體
                  </p>
                </div>
              </div>

              <div className="ml-16 space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    標題字體
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {["Serif", "Sans-serif", "Display", "Geometric"].map((font) => (
                      <label key={font} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="heading-font"
                          className="w-4 h-4 text-purple-600"
                        />
                        <span className="text-slate-700">{font}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    正文字體
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {["Serif", "Sans-serif", "Monospace", "Humanist"].map((font) => (
                      <label key={font} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="body-font"
                          className="w-4 h-4 text-purple-600"
                        />
                        <span className="text-slate-700">{font}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-16 pt-12 border-t border-slate-200">
            <Link href="/worksheet/1">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" /> 上一步
              </Button>
            </Link>
            <Link href="/worksheet/3">
              <Button className="gap-2">
                下一步：工作單 3 <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
