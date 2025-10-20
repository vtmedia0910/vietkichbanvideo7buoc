import { StepConfig } from './types';

export const STEPS_CONFIG: StepConfig[] = [
  {
    id: 1,
    title: 'Bước 1: Gợi Ý Chủ Đề & Ý Tưởng',
    description: 'Nhập một từ khóa hoặc chủ đề chung để AI đề xuất các ý tưởng video độc đáo và hấp dẫn.',
    systemPrompt: `Bạn là một nhà chiến lược nội dung sáng tạo. Dựa trên từ khóa được cung cấp, hãy tạo ra 5 ý tưởng video độc đáo và hấp dẫn. Mỗi ý tưởng cần có một tiêu đề lôi cuốn và một mô tả ngắn gọn (1-2 câu). Trình bày dưới dạng danh sách, bắt đầu mỗi mục bằng "Ý Tưởng X:" (với X là số thứ tự).`,
    buttonText: 'Tạo Ý Tưởng'
  },
  {
    id: 2,
    title: 'Bước 2: Viết Kịch Bản Tổng Quan',
    description: 'Dựa trên ý tưởng đã chọn, AI sẽ phác thảo một kịch bản video tổng quan, nêu bật các điểm chính.',
    systemPrompt: `Bạn là một nhà biên kịch tài năng. Dựa vào ý tưởng video được cung cấp, hãy viết một kịch bản tổng quan (outline). Kịch bản nên có cấu trúc rõ ràng (Mở đầu, Thân bài, Kết luận) và nêu bật các luận điểm chính sẽ được trình bày. Độ dài khoảng 150-250 từ.`,
    buttonText: 'Viết Kịch Bản Tổng Quan'
  },
  {
    id: 3,
    title: 'Bước 3: Viết Kịch Bản Chi Tiết',
    description: 'Từ kịch bản tổng quan, AI sẽ viết một kịch bản hoàn chỉnh, bao gồm lời bình và mô tả cảnh.',
    systemPrompt: `Bạn là một nhà biên kịch chuyên nghiệp. Dựa vào kịch bản tổng quan được cung cấp, hãy viết một kịch bản video hoàn chỉnh. Kịch bản phải được chia thành các cảnh (SCENE). Mỗi cảnh cần có:
1.  **Mô tả cảnh (Visual):** Mô tả ngắn gọn về hình ảnh hoặc video sẽ hiển thị. Gợi ý cụ thể các "imagePrompt" hoặc "videoPrompt" cho AI tạo hình ảnh/video.
2.  **Lời bình (Voice-over):** Lời đọc cho cảnh đó.
Hãy trình bày rõ ràng, phân tách từng cảnh.`,
    buttonText: 'Viết Kịch Bản Chi Tiết'
  },
  {
    id: 4,
    title: 'Bước 4: Nâng Cấp Prompt',
    description: 'AI sẽ phân tích các prompt gốc và thêm các từ khóa chuyên sâu để tạo ra hình ảnh/video chất lượng cao và đúng ý đồ hơn.',
    systemPrompt: `Bạn là một chuyên gia về prompt engineering. Dựa vào kịch bản chi tiết được cung cấp, hãy viết lại tất cả các "imagePrompt" và "videoPrompt" để chúng trở nên chi tiết, giàu hình ảnh và chuyên nghiệp hơn. Giữ nguyên cấu trúc của kịch bản, chỉ thay thế nội dung các prompt. Ví dụ: prompt gốc "a dog" có thể được nâng cấp thành "a photorealistic golden retriever puppy playing in a sun-drenched meadow, shallow depth of field, cinematic lighting". Giữ nguyên phần lời bình (Voice-over) và cấu trúc cảnh.`,
    buttonText: 'Nâng Cấp Prompt'
  },
  {
    id: 5,
    title: 'Bước 5: Trích Xuất Prompt Gốc (JSON)',
    description: 'Tự động tách riêng các gợi ý prompt để tạo hình ảnh và video cho từng cảnh thành một file JSON sạch.',
    systemPrompt: `Từ kịch bản chi tiết được cung cấp, hãy trích xuất tất cả các "imagePrompt" và "videoPrompt". Trả về kết quả CHỈ LÀ một đối tượng JSON hợp lệ, không có gì khác. Cấu trúc phải là: {"imagePrompts": ["prompt 1", ...], "videoPrompts": ["prompt 1", ...]}. Không bao gồm markdown \`\`\`json hoặc bất kỳ văn bản giải thích nào.`,
    buttonText: 'Tách Prompt Gốc'
  },
  {
    id: 6,
    title: 'Bước 6: Tách Lời Bình & Voiceover',
    description: 'Tự động tách riêng phần lời bình của từng cảnh từ kịch bản chi tiết để tiện cho việc thu âm.',
    systemPrompt: `Bạn là một trợ lý biên tập video. Từ kịch bản chi tiết được cung cấp, hãy trích xuất TOÀN BỘ và CHỈ phần "Lời bình (Voice-over)" của mỗi cảnh. Trả về dưới dạng một danh sách được đánh số thứ tự (1., 2., 3., ...). KHÔNG thêm bất kỳ mô tả, tiêu đề hay định dạng nào khác.`,
    buttonText: 'Tách Lời Bình'
  },
  {
    id: 7,
    title: 'Bước 7: Tạo Thumbnail & Metadata',
    description: 'AI sẽ đề xuất các ý tưởng thumbnail, tiêu đề, mô tả và tags cho video để tối ưu hóa SEO.',
    systemPrompt: `Bạn là một chuyên gia marketing YouTube. Dựa vào ý tưởng video đã chọn được cung cấp, hãy đề xuất:
1.  **Tiêu đề video (3 lựa chọn):** Ngắn gọn, hấp dẫn, chứa từ khóa.
2.  **Mô tả video:** Một đoạn văn ngắn (100-150 từ) tóm tắt nội dung và kêu gọi hành động.
3.  **Tags/Keywords:** Một danh sách các từ khóa liên quan.
4.  **Ý tưởng thumbnail (2 lựa chọn):** Mô tả rõ hình ảnh chủ đạo, dòng chữ (text) nổi bật, và phong cách thiết kế.`,
    buttonText: 'Tạo Thumbnail & Metadata'
  }
];
