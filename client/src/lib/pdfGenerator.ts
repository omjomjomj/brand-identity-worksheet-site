import jsPDF from 'jspdf';
import { FormData } from '@/contexts/FormContext';

export function generatePDF(formData: FormData) {
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - 2 * margin;
  let yPosition = margin;

  // Helper functions
  const addTitle = (text: string) => {
    pdf.setFontSize(18);
    pdf.setFont(undefined as any, 'bold');
    pdf.text(text, margin, yPosition);
    yPosition += 12;
  };

  const addSubtitle = (text: string) => {
    pdf.setFontSize(14);
    pdf.setFont(undefined as any, 'bold');
    pdf.text(text, margin, yPosition);
    yPosition += 8;
  };

  const addSectionTitle = (text: string) => {
    pdf.setFontSize(12);
    pdf.setFont(undefined as any, 'bold');
    pdf.setTextColor(41, 128, 185); // Blue color
    pdf.text(text, margin, yPosition);
    yPosition += 8;
    pdf.setTextColor(0, 0, 0);
  };

  const addLabel = (text: string) => {
    pdf.setFontSize(11);
    pdf.setFont(undefined as any, 'bold');
    pdf.text(text, margin, yPosition);
    yPosition += 6;
  };

  const addContent = (text: string, maxWidth = contentWidth) => {
    pdf.setFontSize(10);
    pdf.setFont(undefined as any, 'normal');
    const lines = pdf.splitTextToSize(text || '（未填寫）', maxWidth) as string[];
    pdf.text(lines, margin, yPosition);
    yPosition += lines.length * 5 + 2;
  };

  const addSpacing = (height = 4) => {
    yPosition += height;
  };

  const checkPageBreak = (minHeight = 30) => {
    if (yPosition + minHeight > pageHeight - margin) {
      pdf.addPage();
      yPosition = margin;
    }
  };

  // Header
  addTitle('蕉您來好康農場');
  pdf.setFontSize(10);
  pdf.setFont(undefined as any, 'normal');
  pdf.text('Good Deals & Joy Farm', margin, yPosition);
  yPosition += 8;
  pdf.setDrawColor(200, 200, 200);
  pdf.line(margin, yPosition, pageWidth - margin, yPosition);
  yPosition += 8;

  // Metadata
  pdf.setFontSize(9);
  pdf.setTextColor(128, 128, 128);
  pdf.text(`生成時間：${new Date().toLocaleString('zh-TW')}`, margin, yPosition);
  yPosition += 6;
  pdf.setTextColor(0, 0, 0);
  addSpacing(4);

  // ============ Worksheet 1 ============
  checkPageBreak(50);
  addSubtitle('工作單 1：品牌快照與痛點');
  addSpacing(2);

  checkPageBreak(30);
  addLabel('A. 品牌現狀與核心');
  addContent(formData.worksheet1_brandStatus);

  checkPageBreak(30);
  addLabel('B. 目標受眾 (Target Audience)');
  addContent(formData.worksheet1_targetAudience);

  checkPageBreak(30);
  addLabel('C. 競爭優勢與價值');
  addContent(formData.worksheet1_competitiveAdvantage);

  checkPageBreak(30);
  addLabel('D. 品牌個性關鍵字');
  const personalityText = formData.worksheet1_personalityKeywords.length > 0
    ? formData.worksheet1_personalityKeywords.join('、')
    : '（未選擇）';
  addContent(personalityText);

  // ============ Worksheet 2 ============
  checkPageBreak(50);
  addSubtitle('工作單 2：視覺風格三軸與關鍵字');
  addSpacing(2);

  checkPageBreak(30);
  addLabel('A. 視覺風格三軸');
  addContent(`色彩氛圍（冷調 1-10 暖調）：${formData.worksheet2_colorAxis || '（未選擇）'}`);
  addContent(`字體風格（傳統 1-10 現代）：${formData.worksheet2_typographyAxis || '（未選擇）'}`);
  addContent(`版面節奏（規則 1-10 自由）：${formData.worksheet2_layoutAxis || '（未選擇）'}`);

  checkPageBreak(30);
  addLabel('B. 視覺關鍵字');
  addContent(formData.worksheet2_visualKeywords);

  checkPageBreak(30);
  addLabel('C. 色彩系統');
  addContent(`主色：${formData.worksheet2_primaryColor || '（未填寫）'}`);
  addContent(`輔色：${formData.worksheet2_secondaryColor || '（未填寫）'}`);
  addContent(`強調色：${formData.worksheet2_accentColor || '（未填寫）'}`);

  checkPageBreak(30);
  addLabel('D. 字體系統');
  addContent(`標題字體：${formData.worksheet2_headingFont || '（未填寫）'}`);
  addContent(`正文字體：${formData.worksheet2_bodyFont || '（未填寫）'}`);

  // ============ Worksheet 3 ============
  checkPageBreak(50);
  addSubtitle('工作單 3：設計師簡報快照');
  addSpacing(2);

  checkPageBreak(30);
  addLabel('A. 核心概念與關鍵字 (Core Keywords)');
  addContent(formData.worksheet3_coreKeywords);

  checkPageBreak(30);
  addLabel('B. 品牌故事與主要溝通訊息 (Brand Story & Message)');
  addContent(formData.worksheet3_brandStory);

  checkPageBreak(30);
  addLabel('C. 視覺風格參考與偏好 (Visual References)');
  addContent(formData.worksheet3_visualReferences);

  checkPageBreak(30);
  addLabel('D. 設計產出優先順序 (Priorities)');
  addContent(`1. ${formData.worksheet3_priority1 || '（未填寫）'}`);
  addContent(`2. ${formData.worksheet3_priority2 || '（未填寫）'}`);
  addContent(`3. ${formData.worksheet3_priority3 || '（未填寫）'}`);

  checkPageBreak(30);
  addLabel('E. 限制條件與應用場景 (Constraints & Scenarios)');
  addContent(formData.worksheet3_constraints);

  // ============ Worksheet 4 ============
  checkPageBreak(50);
  addSubtitle('工作單 4（選用）：AI 提示詞小抄');
  addSpacing(2);

  // Prompt 1
  checkPageBreak(40);
  addSectionTitle('提示詞 1 — 提取視覺關鍵字');
  addSpacing(2);
  const prompt1 = `角色：你是品牌顧問與視覺策略師。
任務：閱讀以下品牌描述與痛點。
然後：
1) 提取 8-12 個繁體中文的視覺風格關鍵字。
2) 將它們分為 3 個維度：色彩氛圍、字體排版、圖像與版面。
3) 以條列式輸出。

輸入資料：
品牌描述：[在此貼上]
主要痛點：[在此貼上]`;
  addContent(prompt1, contentWidth);

  // Prompt 2
  checkPageBreak(40);
  addSectionTitle('提示詞 2 — 撰寫品牌視覺風格簡報');
  addSpacing(2);
  const prompt2 = `角色：你是資深品牌設計師。
任務：根據以下品牌描述、痛點與視覺關鍵字，撰寫一份 250-400 字的繁體中文品牌視覺風格簡報。使用非設計師也能理解的清晰、具體語言。

簡報段落結構：
1. 品牌整體感覺（2-3 句）
2. 色彩氛圍（主色、輔色與感受）
3. 字體與排版風格（字體感覺與版面節奏）
4. 圖像與照片風格（構圖、場景、拍攝感覺）

輸入資料：
品牌描述：[在此貼上]
痛點：[在此貼上]
視覺關鍵字：[在此貼上]`;
  addContent(prompt2, contentWidth);

  // Prompt 3
  checkPageBreak(40);
  addSectionTitle('提示詞 3 — 壓縮成一頁設計師快照');
  addSpacing(2);
  const prompt3 = `角色：你是品牌設計主管。
任務：將以下文字轉換成一頁式「設計師簡報快照」。使用簡短的條列式，保持實用性。

輸入資料：
輸入文字：[在此貼上你的簡報]`;
  addContent(prompt3, contentWidth);

  // Usage Tips
  checkPageBreak(40);
  addSectionTitle('使用提示');
  addSpacing(2);
  const tips = `1. 複製提示詞後，貼到 ChatGPT、Claude 或其他 AI 工具
2. 將 [在此貼上] 的佔位符號替換成你的品牌資訊
3. 檢視 AI 的輸出結果，根據需要進行編輯和調整
4. 將最終結果填入相應的工作單中`;
  addContent(tips, contentWidth);

  // Footer
  checkPageBreak(20);
  yPosition = pageHeight - margin - 10;
  pdf.setFontSize(8);
  pdf.setTextColor(128, 128, 128);
  pdf.text('本文件由蕉您來好康農場品牌識別工作單系統自動生成。', margin, yPosition);
  yPosition += 4;
  pdf.text('所有內容基於您在網站上的實際填寫。', margin, yPosition);

  // Save
  const fileName = `蕉您來好康農場-品牌識別工作單-${new Date().toISOString().split('T')[0]}.pdf`;
  pdf.save(fileName);
}
