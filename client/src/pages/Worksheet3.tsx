import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { useEffect } from "react";
import { useFormData } from "@/contexts/FormContext";

export default function Worksheet3() {
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
                  簡潔、具體地描述品牌核心、故事、視覺參考、優先順序和限制條件。讓設計師一目瞭然。
                </p>
              </div>
            </div>
          </Card>

          {/* Form Sections */}
          <div className="space-y-8">
            {/* A. Core Keywords */}
            <Card className="p-6">
              <div className="mb-4">
                <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                  A
                </div>
                <h3 className="text-2xl font-bold text-slate-900">核心概念與關鍵字</h3>
                <p className="text-sm text-slate-500 mt-1">(Core Keywords)</p>
              </div>
              <textarea
                value={formData.worksheet3_coreKeywords}
                onChange={(e) => updateFormData("worksheet3_coreKeywords", e.target.value)}
                className="w-full p-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-20"
                placeholder="例如：新鮮、友善、有機、永續、在地、活力..."
              />
            </Card>

            {/* B. Brand Story */}
            <Card className="p-6">
              <div className="mb-4">
                <div className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                  B
                </div>
                <h3 className="text-2xl font-bold text-slate-900">品牌故事與主要溝通訊息</h3>
                <p className="text-sm text-slate-500 mt-1">(Brand Story & Message)</p>
              </div>
              <textarea
                value={formData.worksheet3_brandStory}
                onChange={(e) => updateFormData("worksheet3_brandStory", e.target.value)}
                className="w-full p-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-24"
                placeholder="例如：我們與在地小農合作，提供 100% 有機香蕉。透過直送模式，確保消費者吃到最新鮮的水果..."
              />
            </Card>

            {/* C. Visual References */}
            <Card className="p-6">
              <div className="mb-4">
                <div className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                  C
                </div>
                <h3 className="text-2xl font-bold text-slate-900">視覺風格參考與偏好</h3>
                <p className="text-sm text-slate-500 mt-1">(Visual References)</p>
              </div>
              <textarea
                value={formData.worksheet3_visualReferences}
                onChange={(e) => updateFormData("worksheet3_visualReferences", e.target.value)}
                className="w-full p-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 min-h-24"
                placeholder="例如：參考品牌 A、B、C 的風格；偏好手繪插圖；使用暖色調..."
              />
            </Card>

            {/* D. Priorities */}
            <Card className="p-6">
              <div className="mb-4">
                <div className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                  D
                </div>
                <h3 className="text-2xl font-bold text-slate-900">設計產出優先順序</h3>
                <p className="text-sm text-slate-500 mt-1">(Priorities)</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">1. 最優先</label>
                  <input
                    type="text"
                    value={formData.worksheet3_priority1}
                    onChange={(e) => updateFormData("worksheet3_priority1", e.target.value)}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="例如：Logo 設計"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">2. 次優先</label>
                  <input
                    type="text"
                    value={formData.worksheet3_priority2}
                    onChange={(e) => updateFormData("worksheet3_priority2", e.target.value)}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="例如：包裝設計"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">3. 其他</label>
                  <input
                    type="text"
                    value={formData.worksheet3_priority3}
                    onChange={(e) => updateFormData("worksheet3_priority3", e.target.value)}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="例如：網站設計、社群媒體素材"
                  />
                </div>
              </div>
            </Card>

            {/* E. Constraints */}
            <Card className="p-6">
              <div className="mb-4">
                <div className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                  E
                </div>
                <h3 className="text-2xl font-bold text-slate-900">限制條件與應用場景</h3>
                <p className="text-sm text-slate-500 mt-1">(Constraints & Scenarios)</p>
              </div>
              <textarea
                value={formData.worksheet3_constraints}
                onChange={(e) => updateFormData("worksheet3_constraints", e.target.value)}
                className="w-full p-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 min-h-24"
                placeholder="例如：預算有限，需要簡化設計；需要在小螢幕上清晰顯示；需要支持黑白列印..."
              />
            </Card>
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
                下一步 <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
