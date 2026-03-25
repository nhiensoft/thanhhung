export type TimelineItem = {
  period: string
  era: string
  description: string
  colorClass: string
}
export type BeautyCard = {
  title: string
  description: string
  image?: string
  region: string
  kind: string
}
export type VisualCard = {
  title: string
  description: string
  image?: string
}
export const navLinks = [
  'Lịch sử Phát triển',
  'Vẻ đẹp Phong cảnh',
  'Làng nghề Truyền thống',
  'Ẩm thực Đặc sản',
  'Giáo dục & HOU',
] as const
export const timelineItems: TimelineItem[] = [
  { period: '2879 TCN - 111 TCN', era: 'Thời kỳ Hùng Vương - Âu Lạc', description: 'Khởi nguồn văn minh Việt Nam với 18 đời Hùng Vương và Nhà nước Âu Lạc', colorClass: 'from-orange-400 to-amber-500' },
  { period: '40 - 43', era: 'Khởi nghĩa Hai Bà Trưng', description: 'Cuộc khởi nghĩa đầu tiên chống ngoại xâm, khẳng định tinh thần bất khuất dân tộc', colorClass: 'from-rose-500 to-pink-500' },
  { period: '542 - 548', era: 'Khởi nghĩa Lý Bí', description: 'Lý Bí lập nên nhà nước Vạn Xuân, khẳng định ý chí độc lập dân tộc', colorClass: 'from-violet-500 to-purple-600' },
  { period: '938 - 965', era: 'Nhà Ngô - Độc lập tự chủ', description: 'Ngô Quyền đánh bại Nam Hán, mở đầu thời kỳ độc lập lâu dài', colorClass: 'from-sky-500 to-cyan-500' },
  { period: '1009 - 1225', era: 'Triều đại Lý', description: 'Thời kỳ thịnh vượng, xây dựng Thăng Long, phát triển văn hóa Phật giáo', colorClass: 'from-indigo-500 to-blue-600' },
  { period: '1225 - 1400', era: 'Triều đại Trần', description: 'Đỉnh cao văn hóa, ba lần đánh thắng quân Mông - Nguyên', colorClass: 'from-emerald-500 to-green-600' },
  { period: '1858 - 1945', era: 'Thời kỳ Pháp thuộc', description: '90 năm đấu tranh chống thực dân Pháp, chuẩn bị cho cách mạng giải phóng dân tộc', colorClass: 'from-amber-500 to-orange-500' },
  { period: '1945 - 1975', era: 'Kháng chiến chống Pháp - Mỹ', description: 'Từ Cách mạng Tháng 8 đến thống nhất đất nước, hoàn thành độc lập dân tộc', colorClass: 'from-red-500 to-rose-600' },
  { period: '1976 - 2000', era: 'Việt Nam thống nhất', description: 'Xây dựng đất nước, đổi mới và hội nhập quốc tế, phát triển toàn diện', colorClass: 'from-teal-500 to-cyan-600' },
  { period: '2000 - Nay', era: 'Phát triển Khoa học Công nghệ', description: 'Bước tiến mạnh mẽ trong lĩnh vực khoa học, kỹ thuật và công nghệ hiện đại', colorClass: 'from-fuchsia-500 to-purple-600' },
]
export const beautyCards: BeautyCard[] = [
  { title: 'Vịnh Hạ Long', description: 'Di sản thiên nhiên thế giới với hàng nghìn đảo đá vôi kỳ vĩ nổi lên từ vùng biển xanh thẳm, tạo nên một bức tranh thiên nhiên tuyệt đẹp.', image: 'https://golden-lotus-hotel.s3.ap-southeast-1.amazonaws.com/uploads/2021/04/013d407166ec4fa56eb1e1f8cbe183b9/images1089892_1.jpg', region: 'Bắc Bộ', kind: 'Danh lam thắng cảnh' },
  { title: 'Phong Nha - Kẻ Bàng', description: 'Vườn quốc gia với hệ thống hang động lớn nhất thế giới, bao gồm hang Sơn Trà - hang động lớn nhất thế giới.', image: 'https://scov.gov.vn/upload/2005660/20210923/1fa5eec30003121e8bee5fc00e9de09c160327_DS_Phong_Nha_Ke_Bang_8_.jpg', region: 'Trung Bộ', kind: 'Danh lam thắng cảnh' },
  { title: 'Phố cổ Hội An', description: 'Thành phố cổ được bảo tồn nguyên vẹn với kiến trúc độc đáo pha trộn văn hóa Việt, Trung, Nhật và phương Tây.', image: 'https://mia.vn/media/uploads/blog-du-lich/pho-co-hoi-an-4-1722851828.jpg', region: 'Trung Bộ', kind: 'Danh lam thắng cảnh' },
  { title: 'Thánh địa Mỹ Sơn', description: 'Quần thể đền tháp Chăm cổ nhất và lớn nhất Việt Nam, là trung tâm tín ngưỡng Hindu của vương quốc Champa.', image: 'https://ik.imagekit.io/tvlk/blog/2023/09/thanh-dia-my-son-34.jpg?tr=q-70,c-at_max,w-500,h-300,dpr-2', region: 'Trung Bộ', kind: 'Di tích & Tôn giáo' },
  { title: 'Quần thể di tích cố đô Huế', description: 'Cố đô của triều đại Nguyễn với hoàng cung, lăng tẩm và chùa chiền mang đậm dấu ấn kiến trúc hoàng gia Việt Nam.', image: 'https://mia.vn/media/uploads/blog-du-lich/quan-the-di-tich-co-do-hue-02-1700926497.jpg', region: 'Trung Bộ', kind: 'Di tích & Tôn giáo' },
  { title: 'Hoàng thành Thăng Long', description: 'Di tích khảo cổ của kinh đô Thăng Long - trung tâm chính trị của Việt Nam trong hơn 1000 năm.', image: 'https://sovhtt.hanoi.gov.vn/wp-content/uploads/2017/02/1-44-600x387.jpg', region: 'Bắc Bộ', kind: 'Di tích & Tôn giáo' },
  { title: 'Thành nhà Hồ', description: 'Di tích UNESCO với kiến trúc thành quách bằng đá độc đáo, minh chứng cho kỹ thuật xây dựng tiên tiến của Việt Nam thế kỷ 14.', image: 'https://statics.vinpearl.com/thanh-nha-ho--2_1629195660.jpg', region: 'Toàn quốc', kind: 'Di tích & Tôn giáo' },
  { title: 'Văn Miếu - Quốc Tử Giám', description: 'Ngôi đền Khổng Tử đầu tiên và trường đại học đầu tiên của Việt Nam, biểu tượng của nền giáo dục truyền thống.', image: 'https://ohayo-onsen.com/wp-content/uploads/2024/05/van-mieu-quoc-tu-giam-1.webp', region: 'Bắc Bộ', kind: 'Di tích & Tôn giáo' },
  { title: 'Chùa Một Cột', description: 'Ngôi chùa độc đáo được xây trên một cột đá giữa hồ sen, biểu tượng của kiến trúc Phật giáo Việt Nam.', image: 'https://eggyolk.vn/wp-content/uploads/2024/05/kinh-nghiem-du-lich-chua-mot-cot.jpg', region: 'Bắc Bộ', kind: 'Di tích & Tôn giáo' },
  { title: 'Nhà thờ Đức Bà Sài Gòn', description: 'Nhà thờ Công giáo nổi tiếng với kiến trúc Gothic Pháp và đôi chuông tháp cao 60m, biểu tượng của TP.HCM.', image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXeUS0WP7sZd2gq2jegFUm-27ZTZO2oD8JprgOwRuS_Wlp292sdlEMhG6yP0RnqVrkKvAown7ntkCRVBR1FLQUFHjXJP6hyWFZSsNtwRctXtMt8ZMqe2XA6zOyq63QZgiR9bAveF6g?key=LZeycDAKzXmiztZ3X2dxgqaU', region: 'Nam Bộ', kind: 'Di tích & Tôn giáo' },
  { title: 'Tòa Thánh Cao Đài', description: 'Trụ sở chính của đạo Cao Đài - tôn giáo độc đáo của Việt Nam, với kiến trúc kết hợp Đông Tây độc đáo.', image: 'https://cdn.nhandan.vn/images/1ef398c4e2fb4bf07980a2ded785b3efd80f48eac5c47f218b4b22c7bcf3b65aaeacc308618cef2729d4c7f1b29ce06593e30150b6a64f9ea707465ba17fc04374b466b0f3fa15e0bc83f1a071867329409f7ab2e598c2a4426f2f96c296e876/z5305475159516-73d4c3ab165e4404e80d4c2dc4e6f769-7720.jpg', region: 'Nam Bộ', kind: 'Danh lam thắng cảnh' },
  { title: 'Núi Bà Đen', description: 'Ngọn núi cao nhất Nam Bộ với đền thờ Bà Đen linh thiêng, điểm hành hương nổi tiếng của người miền Nam.', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/nui-ba-den-new.jpg', region: 'Nam Bộ', kind: 'Danh lam thắng cảnh' },
  { title: 'Địa đạo Củ Chi', description: 'Hệ thống địa đạo dài 250km được đào trong thời kỳ kháng chiến, minh chứng cho tinh thần kiên cường của dân tộc.', image: 'https://lh5.googleusercontent.com/al_bHMp71-2sVR-TOPNXoUIA7McgCxvt0i2vtNZVXs0wFrfXpaB79gVQSHb-j43SvcEQlIMaO6W-1BZBNVHAuDOcxeiDZNdVZrtYXKOARV_dAu3f9iddFzuglRRO81_kqkL_B0IY5kGj5hHWNvD_SRQ', region: 'Nam Bộ', kind: 'Danh lam thắng cảnh' },
  { title: 'Chợ Bến Thành', description: 'Chợ truyền thống nổi tiếng với kiến trúc cổ điển và đồng hồ biểu tượng, trung tâm thương mại của Sài Gòn xưa.', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/3dcb2088-32d4-48b7-80b4-5051cf95b4aa.png', region: 'Nam Bộ', kind: 'Di tích & Tôn giáo' },
  { title: 'Đồng bằng sông Cửu Long', description: 'Vùng đất phù sa màu mỡ với hệ thống sông ngòi chằng chịt, vườn trái cây xanh mướt và đời sống sông nước đặc trưng.', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/mekong-delta-new.jpg', region: 'Nam Bộ', kind: 'Danh lam thắng cảnh' },
  { title: 'Ruộng bậc thang Sa Pa', description: 'Những thửa ruộng bậc thang uốn lượn trên sườn núi, tạo nên bức tranh thiên nhiên tuyệt đẹp của vùng cao Tây Bắc.', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/sapa-terraces-new.jpg', region: 'Bắc Bộ', kind: 'Danh lam thắng cảnh' },
  { title: 'Đỉnh Fansipan', description: 'Nóc nhà Đông Dương cao 3.143m với cảnh sắc núi non hùng vĩ và hệ sinh thái đa dạng quý hiếm.', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/fansipan-new.jpg', region: 'Bắc Bộ', kind: 'Danh lam thắng cảnh' },
  { title: 'Tam Cốc - Bích Động', description: 'Danh thắng với dòng sông Ngô Đồng uốn khúc qua ba hang động đá vôi, được mệnh danh là \'Hạ Long trên cạn\'.', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/tam-coc-new.jpg', region: 'Bắc Bộ', kind: 'Danh lam thắng cảnh' },
  { title: 'Quần thể danh thắng Tràng An', description: 'Di sản hỗn hợp văn hóa và thiên nhiên với hệ thống hang động, đền chùa và cảnh quan karst tuyệt đẹp.', image: 'https://tourghepdoan.com/wp-content/uploads/2023/01/R-40-1.jpg', region: 'Bắc Bộ', kind: 'Danh lam thắng cảnh' },
  { title: 'Cố đô Hoa Lư', description: 'Kinh đô đầu tiên của Việt Nam thời Đinh - Lê, nơi lưu giữ nhiều di tích lịch sử quan trọng của dân tộc.', image: 'https://cozynibi.com/Uploads/images/news/toan-canh-co-do-hoa-lu.jpg', region: 'Bắc Bộ', kind: 'Di tích & Tôn giáo' },
  { title: 'Cao nguyên đá Đồng Văn', description: 'Công viên địa chất toàn cầu với cảnh quan karst độc đáo và văn hóa dân tộc thiểu số đa dạng.', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/dong-van-karst-new.jpg', region: 'Bắc Bộ', kind: 'Danh lam thắng cảnh' },
  { title: 'Lăng Chủ tịch Hồ Chí Minh', description: 'Công trình thiêng liêng nơi an nghỉ của Chủ tịch Hồ Chí Minh, kiến trúc trang nghiêm tại trung tâm quảng trường Ba Đình lịch sử.', image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/L%C4%83ng_B%C3%A1c_-_NKS.jpg', region: 'Bắc Bộ', kind: 'Di tích & Tôn giáo' },
  { title: 'Nhà thờ Phát Diệm', description: 'Nhà thờ Công giáo độc đáo với kiến trúc kết hợp phong cách Tây và truyền thống Việt Nam, được xây bằng đá và gỗ quý.', image: 'https://images.bdatrip.com/2024/5/nha-tho-pd.jpg', region: 'Bắc Bộ', kind: 'Di tích & Tôn giáo' },
  { title: 'Đền Hùng', description: 'Quần thể đền thờ các Vua Hùng - tổ tiên dân tộc Việt Nam, nơi tổ chức lễ hội Đền Hùng hàng năm.', image: 'https://image.vietgoing.com/destination/large/vietgoing_roc2101114012.webp', region: 'Bắc Bộ', kind: 'Di tích & Tôn giáo' },
  { title: 'Chùa Thiên Mụ', description: 'Chùa cổ bên sông Hương với tháp Phước Duyên 7 tầng biểu tượng của cố đô Huế, nơi lưu giữ nhiều bảo vật Phật giáo.', image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/79000/79442-Thien-Mu-Pagoda.jpg', region: 'Trung Bộ', kind: 'Di tích & Tôn giáo' },
  { title: 'Chùa Bái Đính', description: 'Quần thể chùa lớn nhất Việt Nam với nhiều kỷ lục về tượng Phật, chuông đồng và hệ thống kiến trúc chùa hiện đại.', image: 'https://owa.bestprice.vn/images/destinations/uploads/chua-bai-dinh-5ff68d8fbfd04.jpg', region: 'Bắc Bộ', kind: 'Di tích & Tôn giáo' },
  { title: 'Phủ Dầy', description: 'Đền thờ Thánh Trang Trình Nguyễn Bỉnh Khiêm, nơi thờ cúng vị thánh nổi tiếng với tài tiên tri của dân tộc Việt Nam.', image: 'https://cdn.hoabinhevents.com/hbt/wp-content/uploads/2025/01/13133619/huong-dan-duong-di-den-phu-day-nam-dinh.jpg', region: 'Bắc Bộ', kind: 'Di tích & Tôn giáo' },
  { title: 'Đảo Phú Quốc', description: 'Đảo ngọc lớn nhất Việt Nam với bãi biển cát trắng tuyệt đẹp, rừng nguyên sinh và hệ sinh thái biển phong phú.', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/phu-quoc-new.jpg', region: 'Nam Bộ', kind: 'Danh lam thắng cảnh' },
  { title: 'Đà Lạt', description: 'Thành phố ngàn hoa với khí hậu mát mẻ quanh năm, kiến trúc Pháp cổ kính và những vườn hoa rực rỡ sắc màu.', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/da-lat-new.jpg', region: 'Trung Bộ', kind: 'Danh lam thắng cảnh' },
  { title: 'Vịnh Lăng Cô & Đèo Hải Vân', description: 'Danh thắng với vịnh biển tuyệt đẹp và con đèo hùng vĩ, nơi giao thoa giữa Bắc và Nam Trung Bộ.', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/vinh-lang-co-new.jpg', region: 'Trung Bộ', kind: 'Di tích & Tôn giáo' },
  { title: 'Hang Sơn Đoòng', description: 'Hang động tự nhiên lớn nhất thế giới với những khối nhũ đá khổng lồ và hệ sinh thái độc đáo bên trong.', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/hang-son-doong-new.jpg', region: 'Trung Bộ', kind: 'Danh lam thắng cảnh' },
  { title: 'Cù Lao Chàm', description: 'Khu dự trữ sinh quyển thế giới với hệ sinh thái biển đa dạng, rạn san hô và làng chài truyền thống.', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/cu-lao-cham-new.jpg', region: 'Trung Bộ', kind: 'Danh lam thắng cảnh' },
  { title: 'Thác Bản Giốc', description: 'Thác nước lớn nhất Việt Nam tại biên giới Việt-Trung với cảnh quan hùng vĩ và khí thế hoành tráng.', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/thac-ban-gioc-new.jpg', region: 'Toàn quốc', kind: 'Danh lam thắng cảnh' },
  { title: 'Công viên Ấn tượng Hội An', description: 'Công viên văn hóa hiện đại kết hợp công nghệ và nghệ thuật, tái hiện văn hóa Hội An qua các chương trình biểu diễn đa phương tiện đặc sắc.', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/cong-vien-an-tuong-hoi-an-new.jpg', region: 'Trung Bộ', kind: 'Danh lam thắng cảnh' },
  { title: 'Trung tâm Công nghệ FPT Complex', description: 'Khu phức hợp công nghệ hiện đại với kiến trúc đột phá, là biểu tượng của ngành công nghệ thông tin Việt Nam và trung tâm đào tạo nhân lực IT.', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/fpt-complex-new.jpg', region: 'Nam Bộ', kind: 'Kiến trúc hiện đại' },
  { title: 'Trung tâm Nghệ thuật Đương đại The Factory', description: 'Không gian nghệ thuật đương đại độc đáo được cải tạo từ nhà máy cũ, trở thành trung tâm sáng tạo và triển lãm nghệ thuật hiện đại của TP.HCM.', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/the-factory-new.jpg', region: 'Nam Bộ', kind: 'Kiến trúc hiện đại' },
  { title: 'Bảo tàng Quảng Ninh', description: 'Công trình kiến trúc hiện đại với thiết kế độc đáo lấy cảm hứng từ than đá - biểu tượng của Quảng Ninh, trưng bày lịch sử và văn hóa địa phương.', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/bao-tang-quang-ninh-new.jpg', region: 'Toàn quốc', kind: 'Kiến trúc hiện đại' },
  { title: 'Khách sạn InterContinental Danang Sun Peninsula Resort', description: 'Resort nghỉ dưỡng sang trọng với kiến trúc hiện đại hòa quyện với thiên nhiên, tọa lạc trên bán đảo Sơn Trà tuyệt đẹp.', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/intercontinental-danang-new.jpg', region: 'Toàn quốc', kind: 'Kiến trúc hiện đại' },
  { title: 'Cầu Vàng – Bà Nà Hills', description: 'Cây cầu bộ hành nổi tiếng thế giới với thiết kế độc đáo như được nâng đỡ bởi đôi bàn tay khổng lồ, trở thành biểu tượng du lịch Việt Nam.', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/cau-vang-ba-na-new.jpg', region: 'Trung Bộ', kind: 'Kiến trúc hiện đại' },
  { title: 'Landmark 81', description: 'Tòa nhà chọc trời cao nhất Việt Nam và Đông Nam Á với 81 tầng, biểu tượng của sự phát triển kinh tế và kiến trúc hiện đại của TP.HCM.', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/landmark-81-new.jpg', region: 'Nam Bộ', kind: 'Kiến trúc hiện đại' },
]
export const villageCards: VisualCard[] = [
  { title: 'Làng tranh Đông Hồ', description: 'Tranh dân gian truyền thống', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/4c76118c-dff8-42ad-a4c9-7682ec730f56.png' },
  { title: 'Làng nón Chuông', description: 'Nón lá thủ công cao cấp', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/lang-non-chuong.jpg' },
  { title: 'Làng mây tre Phú Vinh', description: 'Sản phẩm từ mây tre tự nhiên', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/b75c35e3-0453-4d94-8618-f2ebc5d406ef.png' },
  { title: 'Làng gỗ mỹ nghệ Kim Bồng', description: 'Tượng gỗ và nội thất cao cấp', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/lang-go-my-nghe-kim-bong.jpg' },
  { title: 'Làng lụa Vạn Phúc', description: 'Lụa tơ tằm truyền thống Việt Nam', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/a5dca47a-235e-4a1a-ad4b-e974f8352fdd.png' },
  { title: 'Làng hương Quang Phú Cầu', description: 'Hương trầm và đồ thờ cúng', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/692e39ba-e962-46d0-a9d2-cbb777d007ab.png' },
  { title: 'Làng đúc đồng Ngũ Xã', description: 'Đồ đồng và đồ thờ cúng', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/ac7884f4-c03f-4b4a-8613-dbd8acc4ebaf.png' },
  { title: 'Làng chiếu Cẩm Nê', description: 'Chiếu cói mịn truyền thống', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/lang-chieu-cam-ne.jpg' },
  { title: 'Làng bánh phu thê', description: 'Bánh cưới và bánh lễ', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/c2bbb0f7-3776-4316-8fc1-59d5b2a67f8b.png' },
  { title: 'Làng bạc Định Công', description: 'Trang sức và đồ thờ bằng bạc', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/20168891-8544-4347-9a6c-ff8940f10729.png' },
  { title: 'Làng nghề dát vàng Kiêu Kỵ', description: 'Nghệ thuật dát vàng thủ công', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/lang-dat-vang-kieu-ky.jpg' },
  { title: 'Làng thêu Quất Động', description: 'Thêu tay cao cấp và nghệ thuật', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/8714bfd3-f920-4676-b050-9fd94ddfe7a2.png' },
  { title: 'Làng giấy dó Yên Thái', description: 'Giấy dó thủ công từ cây dó', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/6d510070-0553-4549-80ca-8ad63127642a.png' },
  { title: 'Làng gốm Bát Tràng', description: 'Sản phẩm gốm sứ truyền thống và hiện đại', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/121f9ed5-ea83-4363-ae20-c8124715732b.png' },
  { title: 'Làng múa rối nước Đào Thục', description: 'Nghệ thuật múa rối nước cổ truyền', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/lang-roi-nuoc-dao-thuc.jpg' },
  { title: 'Làng làm giấy dó Đông Cao', description: 'Giấy dó từ vỏ cây dó cao', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/lang-giay-do-dong-cao.jpg' },
]
export const cuisineCards: VisualCard[] = [
  { title: 'Cà phê trứng', description: 'Hà Nội, những năm 1940', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/f85948ae-2604-4224-bf5d-7294ddf49cae.png' },
  { title: 'Bánh cuốn Thanh Trì', description: 'Thanh Trì, Hà Nội', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/71240ab8-9e69-4417-ada1-605f9c4252b9.png' },
  { title: 'Phở Hà Nội', description: 'Phố cổ Hà Nội, đầu thế kỷ 20', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/2324b9d0-b512-4736-8da9-b4e9ff0c5e58.png' },
  { title: 'Bánh mì Việt Nam', description: 'Việt Nam, thời Pháp thuộc', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/banh-mi-viet-nam-updated.jpg' },
  { title: 'Cốm làng Vòng', description: 'Làng Vòng, Từ Liêm, Hà Nội', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/03944033-e9af-4695-a7de-0fc7fbe92588.png' },
  { title: 'Bún chả', description: 'Hà Nội, thời Pháp thuộc', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/6f0249c2-e995-4e56-932a-86e8855722e2.png' },
  { title: 'Bún bò Huế', description: 'Huế, cố đô Việt Nam', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/bun-bo-hue.jpg' },
  { title: 'Bánh xèo (Nam Bộ)', description: 'Miền Nam Việt Nam', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/banh-xeo-nam-bo.jpg' },
  { title: 'Nem rán / Chả giò', description: 'Miền Bắc và Nam Việt Nam', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/nem-ran-cha-gio.jpg' },
  { title: 'Bánh chưng – Bánh tét', description: 'Truyền thống dân tộc Việt', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/banh-chung-banh-tet.jpg' },
  { title: 'Gỏi cuốn (miền Nam)', description: 'Miền Nam Việt Nam', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/goi-cuon-mien-nam.jpg' },
  { title: 'Cao lầu (Hội An)', description: 'Hội An, Quảng Nam', image: 'https://vn-hou-hung.lovable.app/lovable-uploads/cao-lau-hoi-an.webp' },
]
export const philosophyCards: Array<{ title: string; description: string; icon: string }> = [
  { title: 'Mở Cơ hội', description: 'Tạo cơ hội công bằng cho mọi người được tiếp cận giáo dục chất lượng cao và linh hoạt.', icon: 'Sparkles' },
  { title: 'Mở Trái tim', description: 'Lan tỏa giá trị nhân văn, nuôi dưỡng lòng nhân ái và tinh thần cống hiến cộng đồng.', icon: 'Heart' },
  { title: 'Mở Trí tuệ', description: 'Khơi nguồn sáng tạo, phát triển tư duy phản biện và tinh thần học tập suốt đời.', icon: 'Brain' },
  { title: 'Mở Tầm nhìn', description: 'Mở rộng nhận thức, thích ứng xu hướng mới, sẵn sàng hội nhập toàn cầu.', icon: 'Eye' },
  { title: 'Mở Tương lai', description: 'Đồng hành để người học kiến tạo sự nghiệp bền vững và đóng góp cho đất nước.', icon: 'Rocket' },
]
export const houHighlights: Array<{ title: string; description: string }> = [
  { title: 'Giáo dục vì Việt Nam', description: 'Tại HOU, chúng tôi không chỉ truyền tải kiến thức mà còn nuôi dưỡng tâm hồn Việt, trang bị cho bạn hành trang vững chắc để tự tin kiến tạo tương lai cho bản thân và cho quê hương.' },
  { title: 'Cộng đồng và Kết nối', description: 'Bạn sẽ được hòa mình vào một môi trường học tập đầy cảm hứng, nơi mỗi sinh viên đều là một \'đại sứ\' của lòng yêu nước, cùng nhau lan tỏa những giá trị tốt đẹp ra cộng đồng.' },
  { title: 'Đổi mới và Phát triển', description: 'Chúng tôi tin rằng, mỗi thành tựu khoa học, mỗi ý tưởng sáng tạo từ HOU đều là viên gạch xây dựng nên một Việt Nam hiện đại, phồn vinh hơn.' },
]
export const programs = [
  'Thiết kế Đồ họa',
  'Thiết kế Thời trang',
  'Ngôn ngữ Anh',
  'Ngôn ngữ Trung Quốc',
  'Quản trị Kinh doanh',
  'Thương mại điện tử',
  'Tài chính - Ngân hàng',
  'Bảo hiểm',
  'Kế toán',
  'Luật',
  'Luật Kinh tế',
  'Luật Quốc tế',
  'Công nghệ Sinh học',
  'Công nghệ Thông tin',
  'Công nghệ Kỹ thuật Điện tử - Viễn thông',
  'Công nghệ Kỹ thuật Điều khiển và Tự động hóa',
  'Công nghệ Thực phẩm',
  'Kiến trúc',
  'Thiết kế Nội thất',
  'Quản trị Dịch vụ Du lịch và Lữ hành',
  'Quản trị Khách sạn',
] as const
export const recruitmentLinks = [
  'https://tuyensinh.hou.edu.vn/tintucchitiet/BT471/',
  'https://tuyensinh.hou.edu.vn/tintucchitiet/BT472/',
  'https://tuyensinh.hou.edu.vn/tintucchitiet/BT473/',
  'https://tuyensinh.hou.edu.vn/tintucchitiet/BT475/',
  'https://tuyensinh.hou.edu.vn/tintucchitiet/BT476/',
  'https://tuyensinh.hou.edu.vn/tintucchitiet/BT477/',
  'https://tuyensinh.hou.edu.vn/tintucchitiet/BT478/',
  'https://tuyensinh.hou.edu.vn/tintucchitiet/BT479/',
  'https://tuyensinh.hou.edu.vn/tintucchitiet/BT480/',
  'https://tuyensinh.hou.edu.vn/tintucchitiet/BT481/',
  'https://tuyensinh.hou.edu.vn/tintucchitiet/BT482/',
  'https://tuyensinh.hou.edu.vn/tintucchitiet/BT483/',
  'https://tuyensinh.hou.edu.vn/tintucchitiet/BT484/',
  'https://tuyensinh.hou.edu.vn/tintucchitiet/BT485/',
  'https://tuyensinh.hou.edu.vn/tintucchitiet/BT486/',
  'https://tuyensinh.hou.edu.vn/tintucchitiet/BT487/',
  'https://tuyensinh.hou.edu.vn/tintucchitiet/BT488/',
  'https://tuyensinh.hou.edu.vn/tintucchitiet/BT489/',
  'https://tuyensinh.hou.edu.vn/tintucchitiet/BT490/',
  'https://tuyensinh.hou.edu.vn/tintucchitiet/BT491/',
  'https://tuyensinh.hou.edu.vn/tintucchitiet/BT492/',
] as const
export const extractedMeta = {
  pageTitle: 'Hou cùng Việt Nam',
  sourceUrl: 'https://vn-hou-hung.lovable.app/',
  counts: {
    links: 21,
    images: 69,
    sections: 7,
  },
} as const
