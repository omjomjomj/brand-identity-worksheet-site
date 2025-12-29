import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { useEffect } from "react";
import { useFormData } from "@/contexts/FormContext";

export default function Worksheet2() {
  const { formData, updateFormData } = useFormData();

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
                  在三軸上標記品牌位置（1-10 分），列出視覺關鍵字，並定義色彩與字體系統。
                </p>
              </div>
            </div>
          </Card>

          {/* Form Sections */}
          <div className="space-y-8">
            {/* A. Visual Style Axes */}
            <Card className="p-6">
              <div className="mb-4">
                <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                  A
                </div>
                <h3 className="text-2xl font-bold text-slate-900">視覺風格三軸</h3>
              </div>

              <div className="space-y-6">
                {/* Color Axis */}
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">
                    色彩氛圍：冷調 ← (1-10) → 暖調
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={formData.worksheet2_colorAxis || "5"}
                    onChange={(e) => updateFormData("worksheet2_colorAxis", e.target.value)}
                    className="w-full"
                  />
                  <div className="text-sm text-slate-500 mt-1">
                    目前選擇：{formData.worksheet2_colorAxis || "5"} / 10
                  </div>
                </div>

                {/* Typography Axis */}
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">
                    字體風格：傳統 ← (1-10) → 現代
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={formData.worksheet2_typographyAxis || "5"}
                    onChange={(e) => updateFormData("worksheet2_typographyAxis", e.target.value)}
                    className="w-full"
                  />
                  <div className="text-sm text-slate-500 mt-1">
                    目前選擇：{formData.worksheet2_typographyAxis || "5"} / 10
                  </div>
                </div>

                {/* Layout Axis */}
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">
                    版面節奏：規則 ← (1-10) → 自由
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={formData.worksheet2_layoutAxis || "5"}
                    onChange={(e) => updateFormData("worksheet2_layoutAxis", e.target.value)}
                    className="w-full"
                  />
                  <div className="text-sm text-slate-500 mt-1">
                    目前選擇：{formData.worksheet2_layoutAxis || "5"} / 10
                  </div>
                </div>
              </div>
            </Card>

            {/* B. Visual Keywords */}
            <Card className="p-6">
              <div className="mb-4">
                <div className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                  B
                </div>
                <h3 className="text-2xl font-bold text-slate-900">視覺關鍵字</h3>
              </div>
              <p className="text-slate-600 mb-4">請列出 8-12 個描述品牌視覺風格的關鍵字</p>
              <textarea
                value={formData.worksheet2_visualKeywords}
                onChange={(e) => updateFormData("worksheet2_visualKeywords", e.target.value)}
                className="w-full p-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-24"
                placeholder="例如：清新、自然、溫暖、有機、友善、親民、活力..."
              />
            </Card>

            {/* C. Color System */}
            <Card className="p-6">
              <div className="mb-4">
                <div className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                  C
                </div>
                <h3 className="text-2xl font-bold text-slate-900">色彩系統</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">主色</label>
                  <input
                    type="text"
                    value={formData.worksheet2_primaryColor}
                    onChange={(e) => updateFormData("worksheet2_primaryColor", e.target.value)}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="例如：#FFD700 (金黃色)"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">輔色</label>
                  <input
                    type="text"
                    value={formData.worksheet2_secondaryColor}
                    onChange={(e) => updateFormData("worksheet2_secondaryColor", e.target.value)}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="例如：#90EE90 (淺綠色)"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">強調色</label>
                  <input
                    type="text"
                    value={formData.worksheet2_accentColor}
                    onChange={(e) => updateFormData("worksheet2_accentColor", e.target.value)}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="例如：#FF6347 (番茄紅)"
                  />
                </div>
              </div>
            </Card>

            {/* D. Typography System */}
            <Card className="p-6">
              <div className="mb-4">
                <div className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                  D
                </div>
                <h3 className="text-2xl font-bold text-slate-900">字體系統</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">標題字體</label>
                  <input
                    type="text"
                    value={formData.worksheet2_headingFont}
                    onChange={(e) => updateFormData("worksheet2_headingFont", e.target.value)}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="例如：Noto Serif CJK SC Bold"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">正文字體</label>
                  <input
                    type="text"
                    value={formData.worksheet2_bodyFont}
                    onChange={(e) => updateFormData("worksheet2_bodyFont", e.target.value)}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="例如：Noto Sans Hans Regular"
                  />
                </div>
              </div>
            </Card>
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
                下一步 <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
