export interface HOUProgram {
  id: number;
  name: string;
  code: string;
  type: string;
  faculty: string;
  website: string;
  description: string;
  jobOpportunities: string;
  achievements: string;
  additionalInfo: string;
}

export const houPrograms: HOUProgram[] = [
  {
    id: 1,
    name: "Thiết kế Đồ họa",
    code: "7210403",
    type: "Chính quy",
    faculty: "Tạo dáng công nghiệp",
    website: "http://tdcn.hou.edu.vn/",
    description: "Thiết kế đồ họa là sự kết hợp giữa ý tưởng, sáng tạo, thẩm mỹ và công nghệ thông tin để tạo ra các thông điệp và tác phẩm nghệ thuật phục vụ các mục đích kinh doanh, thương mại, công nghiệp.",
    jobOpportunities: "Chuyên viên thiết kế tại công ty quảng cáo, thiết kế, truyền thông; Tự thành lập doanh nghiệp thiết kế; Giảng dạy và nghiên cứu.",
    achievements: "Hơn 98% sinh viên có việc làm ngay trong năm đầu tiên sau khi tốt nghiệp và làm đúng chuyên môn được đào tạo.",
    additionalInfo: "Khoa Tạo dáng công nghiệp có 30 năm kinh nghiệm đào tạo, với hơn 4000 cử nhân thiết kế và kiến trúc sư tốt nghiệp."
  },
  {
    id: 2,
    name: "Thiết kế Thời trang",
    code: "7210404",
    type: "Chính quy",
    faculty: "Tạo dáng công nghiệp",
    website: "http://tdcn.hou.edu.vn/",
    description: "Thiết kế Thời trang là một môn nghệ thuật ứng dụng, đòi hỏi sự sáng tạo không ngừng để tạo ra các kiểu dáng trang phục và phụ kiện phù hợp với văn hóa, xã hội và thời đại. Ngành học này trang bị cho sinh viên kiến thức lý thuyết và kỹ năng thực hành trong thiết kế, kết hợp giữa mỹ thuật, thương mại và các kỹ năng mềm.",
    jobOpportunities: "Làm việc tại các doanh nghiệp may, công ty thiết kế thời trang, cơ sở sản xuất may mặc; Thành lập doanh nghiệp riêng về thời trang; Giảng dạy và nghiên cứu tại các trường đại học, cao đẳng có đào tạo ngành thiết kế thời trang.",
    achievements: "Hơn 98% sinh viên có việc làm trong năm đầu tiên sau khi tốt nghiệp và làm đúng chuyên môn. Nhiều cựu sinh viên thành đạt, trở thành nhà thiết kế nổi tiếng như NTK Đỗ Ngọc Thành (Chic-Land), NTK Hà Duy (Á quân 'Ngôi sao thiết kế 2013'), và NTK Đỗ Thị Vân Anh (VanAnhScarlet).",
    additionalInfo: "Khoa Tạo dáng công nghiệp có 30 năm kinh nghiệm đào tạo, với hơn 4000 cử nhân thiết kế và kiến trúc sư tốt nghiệp. Các ngành đào tạo khác của khoa bao gồm Kiến trúc, Thiết kế Đồ họa và Thiết kế Nội thất."
  },
  {
    id: 3,
    name: "Ngôn ngữ Anh",
    code: "7220201",
    type: "Chính quy",
    faculty: "Tiếng Anh",
    website: "https://tienganh.hou.edu.vn/",
    description: "Ngành Ngôn ngữ Anh có nhiệm vụ đào tạo cử nhân tiếng Anh với đầy đủ kiến thức, kỹ năng cần thiết để làm việc hiệu quả trong các lĩnh vực sử dụng tiếng Anh. Cử nhân tốt nghiệp sẽ có khả năng biên phiên dịch, giảng dạy cũng như am hiểu văn hóa, xã hội các nước nói tiếng Anh.",
    jobOpportunities: "Cử nhân tốt nghiệp có thể làm việc trong các cơ quan nhà nước, doanh nghiệp, tổ chức quốc tế và các cơ sở giáo dục. Nhiều cựu sinh viên thành công trong các lĩnh vực biên phiên dịch, giảng dạy và nghiên cứu.",
    achievements: "Hơn 98% sinh viên tìm được việc làm trong năm đầu tiên sau khi tốt nghiệp. Nhiều cựu sinh viên đã trở thành những chuyên gia hàng đầu trong ngành, có đóng góp đáng kể cho lĩnh vực ngôn ngữ.",
    additionalInfo: "Khoa Tiếng Anh không chỉ chú trọng đào tạo kiến thức mà còn tổ chức nhiều hoạt động nghiên cứu khoa học và các hoạt động văn hóa, thể thao cho sinh viên. Sinh viên có cơ hội tham gia vào các câu lạc bộ và hoạt động ngoại khóa đa dạng."
  },
  {
    id: 4,
    name: "Ngôn ngữ Trung Quốc",
    code: "7220204",
    type: "Chính quy",
    faculty: "Tiếng Trung Quốc",
    website: "http://khoatiengtrung.hou.edu.vn/",
    description: "Ngành Ngôn ngữ Trung Quốc cung cấp cho sinh viên kiến thức về ngôn ngữ, văn hóa, văn học và đất nước học Trung Quốc. Sinh viên được đào tạo trong các lĩnh vực biên, phiên dịch và các kỹ năng giao tiếp chuyên nghiệp.",
    jobOpportunities: "Cử nhân Ngôn ngữ Trung Quốc có thể làm việc tại các cơ quan nhà nước, doanh nghiệp liên quan đến đối ngoại, truyền thông, giáo dục và du lịch. Cơ hội nghề nghiệp đa dạng từ biên phiên dịch, giảng dạy đến làm việc trong các tổ chức quốc tế.",
    achievements: "Hơn 98% sinh viên tốt nghiệp tìm được việc làm ngay năm đầu tiên và làm đúng chuyên môn. Nhiều cựu sinh viên thành công với các vị trí quan trọng trong ngành biên phiên dịch và giáo dục.",
    additionalInfo: "Khoa Tiếng Trung Quốc có chương trình 'Chinese Camp' tại Đại học Quảng Tây - Trung Quốc, tạo cơ hội trải nghiệm văn hóa. Sinh viên được khuyến khích tham gia các hoạt động nghiên cứu và các diễn đàn học thuật."
  },
  {
    id: 5,
    name: "Quản trị Kinh doanh",
    code: "7340101",
    type: "Chính quy",
    faculty: "Kinh tế",
    website: "http://kinhte.hou.edu.vn/",
    description: "Ngành Quản trị Kinh doanh được thiết kế dành cho những sinh viên năng động, có ý chí làm giàu bằng con đường chính đáng, với mục tiêu khai phá tiềm năng trong quản lý và tổ chức hoạt động sản xuất, kinh doanh. Chương trình đào tạo tập trung vào ứng dụng thực tiễn, chuẩn bị cho sinh viên những kiến thức vững vàng về kinh tế, quản trị doanh nghiệp.",
    jobOpportunities: "Cử nhân Quản trị Kinh doanh có thể làm việc trong nhiều lĩnh vực như bán hàng, quản trị nguồn nhân lực, marketing, tài chính và quản lý chuỗi cung ứng. Những vị trí công việc phổ biến bao gồm nhân viên kinh doanh, giám sát bán hàng, chuyên viên marketing, phân tích tài chính và quản lý dự án.",
    achievements: "Hơn 98% sinh viên tốt nghiệp có việc làm trong năm đầu tiên và đảm bảo làm đúng chuyên môn. Sinh viên ngành Quản trị Kinh doanh đã đạt giải Nhất tại cuộc thi HOU SV Startup 2023, tạo dấu ấn trong cộng đồng khởi nghiệp.",
    additionalInfo: "Ngành Quản trị Kinh doanh có nhiều hoạt động ngoại khóa và tọa đàm hướng nghiệp, giúp sinh viên mở rộng mạng lưới và phát triển kỹ năng cá nhân. Bạn có thể tham gia nhóm Zalo của ngành để được tư vấn và giải đáp thắc mắc."
  },
  {
    id: 6,
    name: "Thương mại điện tử",
    code: "7340122",
    type: "Chính quy",
    faculty: "Kinh tế",
    website: "http://kinhte.hou.edu.vn/",
    description: "Ngành Thương mại điện tử cung cấp cho sinh viên kiến thức, kỹ năng, năng lực tự chủ và trách nhiệm cần thiết để hình thành ý tưởng, thiết kế, triển khai và vận hành quá trình kinh doanh thông qua các phương tiện điện tử. Chương trình đào tạo được thiết kế theo hướng ứng dụng, trang bị cho người học các kiến thức nền tảng về kinh tế số, kiến thức chuyên sâu về thương mại điện tử.",
    jobOpportunities: "Sinh viên tốt nghiệp có thể đảm nhận các vị trí như: Chuyên viên/Quản lý Marketing - kinh doanh trực tuyến, Chuyên viên tư vấn và triển khai dự án TMĐT, Chuyên viên vận hành hệ thống TMĐT, Chuyên viên tại các cơ quan nhà nước, Giảng viên nhà nghiên cứu, Doanh nhân khởi nghiệp.",
    achievements: "Chương trình học kết hợp giữa kinh doanh và công nghệ thông tin. Cơ hội tham gia các buổi Job tour, hoạt động ngoại khóa và seminar. Tham gia các câu lạc bộ như CLB Logistics, CLB TMĐT, CLB truyền thông - sự kiện, Econ club.",
    additionalInfo: "Cung cấp kiến thức về kinh tế số và thương mại điện tử. Trang bị kỹ năng xây dựng và vận hành hệ thống kinh doanh trực tuyến. Phát triển tinh thần khởi nghiệp, tư duy đổi mới sáng tạo và năng lực số."
  },
  {
    id: 7,
    name: "Tài chính - Ngân hàng",
    code: "7340201",
    type: "Chính quy",
    faculty: "Tài chính - Ngân hàng",
    website: "http://fbf.hou.edu.vn/",
    description: "Ngành Tài chính - Ngân hàng là lĩnh vực liên quan đến các dịch vụ tài chính, lưu thông và vận hành tiền tệ. Chương trình đào tạo nhằm phát triển năng lực nghề nghiệp và kiến thức chuyên sâu trong các lĩnh vực như Ngân hàng, Tài chính bảo hiểm, và Phân tích tài chính, giúp sinh viên đáp ứng nhu cầu trong bối cảnh hội nhập quốc tế.",
    jobOpportunities: "Sinh viên tốt nghiệp có thể làm việc trong nhiều lĩnh vực như: Chuyên viên tín dụng ngân hàng, kế toán, kiểm toán, Nhân viên kinh doanh ngoại tệ và chuyên viên tài chính, Giảng viên ngành Tài chính - Ngân hàng.",
    achievements: "Phát triển năng lực nghề nghiệp vững vàng trong lĩnh vực Tài chính - Ngân hàng. Khuyến khích học tập, nghiên cứu và sáng tạo trong ngành. Tham gia giải quyết các vấn đề kinh tế - xã hội, hướng đến phát triển bền vững.",
    additionalInfo: "Ngành có nhiều hoạt động ngoại khóa và tọa đàm hướng nghiệp, hỗ trợ sinh viên mở rộng mạng lưới và phát triển kỹ năng cá nhân. Sinh viên được trang bị kiến thức về phân tích tài chính, đầu tư và các kỹ năng mềm cần thiết."
  },
  {
    id: 8,
    name: "Bảo hiểm",
    code: "7340204",
    type: "Chính quy",
    faculty: "Tài chính - Ngân hàng",
    website: "http://fbf.hou.edu.vn/",
    description: "Ngành Bảo hiểm ra đời trong nền kinh tế hội nhập, giúp con người an tâm hơn về mặt tinh thần và thể xác, giảm thiểu rủi ro trong cuộc sống và công việc. Ngành này đóng vai trò quan trọng trong ổn định kinh tế, kiềm chế lạm phát và cân đối nền kinh tế.",
    jobOpportunities: "Sinh viên tốt nghiệp có thể làm việc tại: Các công ty bảo hiểm gốc, công ty tái bảo hiểm, môi giới bảo hiểm, Các doanh nghiệp, tổ chức kinh tế - xã hội, Các cơ quan quản lý nhà nước về hoạt động bảo hiểm, Các cơ sở đào tạo và viện nghiên cứu, Thành lập công ty trong lĩnh vực phụ trợ bảo hiểm.",
    achievements: "Đào tạo người học có năng lực nghề nghiệp vững vàng, phù hợp với bối cảnh hội nhập quốc tế. Khuyến khích học tập, nghiên cứu và sáng tạo để phát triển sự nghiệp. Đóng góp vào giải quyết các vấn đề kinh tế - xã hội, hướng đến sự phát triển bền vững.",
    additionalInfo: "Sinh viên được trang bị kiến thức về bảo hiểm xã hội và thương mại, chính sách nhà nước, quản lý tài chính - kế toán, pháp luật bảo hiểm. Phát triển kỹ năng phân tích, tổng hợp, đánh giá và hoạch định chính sách liên quan đến bảo hiểm."
  },
  {
    id: 9,
    name: "Kế toán",
    code: "7340301",
    type: "Chính quy",
    faculty: "Kinh tế",
    website: "http://kinhte.hou.edu.vn/",
    description: "Ngành Kế toán trang bị cho sinh viên kiến thức, kỹ năng và năng lực để vận dụng thành thạo các nguyên tắc kế toán, luật, chuẩn mực kế toán Việt Nam và quốc tế, chế độ kế toán Việt Nam, phân tích tài chính trong điều kiện chuyển đổi số.",
    jobOpportunities: "Sinh viên tốt nghiệp có thể đảm nhận các vị trí như: Kế toán trưởng, Kế toán tổng hợp, Kế toán thanh toán, Kế toán công nợ, Kế toán tài sản cố định, Kế toán vật tư - sản phẩm - hàng hóa, Thủ quỹ, Kế toán thuế, Kiểm toán viên, Chuyên viên phân tích tài chính, Cán bộ giảng dạy và nghiên cứu.",
    achievements: "Sinh viên được tham gia cuộc thi 'Đấu trường Kế toán'. Chương trình đào tạo cung cấp kiến thức về các nguyên tắc kế toán cơ bản, luật và chuẩn mực kế toán Việt Nam và quốc tế. Sinh viên được tham quan doanh nghiệp (Job Tour) và tham gia các hoạt động ngoại khóa.",
    additionalInfo: "Chương trình đào tạo theo hướng ứng dụng, trang bị kiến thức về kế toán tài chính, kế toán quản trị, kiểm toán, thuế và phân tích tài chính. Sinh viên được thực hành trên các phần mềm kế toán và tham gia các câu lạc bộ chuyên môn."
  },
  {
    id: 10,
    name: "Luật",
    code: "7380101",
    type: "Chính quy",
    faculty: "Luật",
    website: "http://khoaluat.hou.edu.vn/",
    description: "Ngành Luật trang bị cho người học kiến thức cơ bản và toàn diện về pháp luật, các vấn đề chính trị, kinh tế, văn hoá, xã hội liên quan. Sinh viên nắm vững nền tảng lý luận và thực trạng pháp luật, phương pháp tư duy pháp lý, ý thức pháp luật, kĩ năng nghiên cứu và áp dụng pháp luật để giải quyết các vấn đề pháp lý phát sinh trong thực tiễn.",
    jobOpportunities: "Thành lập doanh nghiệp cung cấp dịch vụ pháp lý, làm việc trong hệ thống cơ quan nhà nước (Quốc hội, Hội đồng nhân dân, Chính phủ, các Bộ, Tòa án, Viện kiểm sát) với vai trò Thư ký Tòa án, Thẩm tra viên, Thẩm phán, Kiểm sát viên. Làm việc cho văn phòng luật, công ty luật, hành nghề luật sư độc lập, luật sư nội bộ doanh nghiệp, giảng dạy và nghiên cứu khoa học pháp lý.",
    achievements: "Chương trình đào tạo đổi mới theo hướng tăng cường kiến thức thực tiễn và thời gian thực tập tại các cơ quan nhà nước và doanh nghiệp. Đảm bảo sinh viên sau khi tốt nghiệp có thể thực hiện các công việc liên quan đến lĩnh vực pháp luật, góp phần nâng cao chất lượng nguồn nhân lực pháp luật.",
    additionalInfo: "Chương trình đào tạo đáp ứng nhu cầu phát triển của đất nước và hội nhập quốc tế. Sinh viên được trang bị kiến thức vững vàng về lý luận và thực tiễn pháp luật, phương pháp tư duy pháp lý và kỹ năng áp dụng pháp luật trong thực tiễn."
  },
  {
    id: 11,
    name: "Luật Kinh tế",
    code: "7380107",
    type: "Chính quy",
    faculty: "Luật",
    website: "http://khoaluat.hou.edu.vn/",
    description: "Ngành Luật Kinh tế trang bị cho sinh viên kiến thức cơ bản và toàn diện về pháp luật, các vấn đề chính trị, kinh tế, văn hoá, xã hội liên quan. Sinh viên nắm vững nền tảng lý luận và thực trạng pháp luật kinh tế, phương pháp tư duy pháp lý, ý thức pháp luật, kĩ năng nghiên cứu và áp dụng pháp luật để giải quyết các vấn đề pháp lý trong lĩnh vực kinh tế.",
    jobOpportunities: "Luật sư tại các văn phòng luật, công ty luật, cố vấn pháp lý cho doanh nghiệp, chuyên viên pháp chế tại các cơ quan nhà nước, tòa án, viện kiểm sát; Làm việc tại các ngân hàng, tổ chức tài chính, doanh nghiệp; Giảng dạy và nghiên cứu khoa học pháp lý.",
    achievements: "Chương trình đào tạo chú trọng thực tiễn và ứng dụng, tăng cường thời gian thực tập tại các cơ quan, doanh nghiệp. Đảm bảo sinh viên có khả năng giải quyết các vấn đề pháp lý phức tạp trong lĩnh vực kinh tế.",
    additionalInfo: "Ngành Luật Kinh tế có vai trò quan trọng trong nền kinh tế thị trường, đặc biệt trong bối cảnh hội nhập quốc tế. Sinh viên được trang bị kiến thức chuyên sâu về luật thương mại, luật doanh nghiệp, luật đầu tư và các quy định pháp lý liên quan đến hoạt động kinh tế."
  },
  {
    id: 12,
    name: "Luật Quốc tế",
    code: "7380108",
    type: "Chính quy",
    faculty: "Luật",
    website: "http://khoaluat.hou.edu.vn/",
    description: "Ngành Luật Quốc tế trang bị cho người học kiến thức cơ bản và toàn diện về pháp luật, các vấn đề chính trị, kinh tế, văn hoá, xã hội có liên quan. Sinh viên nắm vững nền tảng lý luận và thực trạng pháp luật quốc tế, phương pháp tư duy pháp lý, ý thức pháp luật, kĩ năng nghiên cứu, áp dụng pháp luật để giải quyết các vấn đề pháp lý trong các lĩnh vực của đời sống quốc tế.",
    jobOpportunities: "Thành lập doanh nghiệp cung cấp dịch vụ pháp lý, làm việc trong cơ quan nhà nước, sứ quán Việt Nam tại nước ngoài, công ty nước ngoài tại Việt Nam, cơ quan quốc tế. Làm việc cho văn phòng luật, công ty luật liên quan đến nhà đầu tư nước ngoài, hành nghề luật sư, công tác pháp chế trong doanh nghiệp xuất nhập khẩu, doanh nghiệp có vốn đầu tư nước ngoài, giảng dayy và nghiên cứu luật quốc tế.",
    achievements: "Chương trình đào tạo đổi mới theo hướng tăng cường kiến thức thực tiễn, tăng cường thời gian thực tập tại các cơ quan hành nghề luật và tổ chức quốc tế. Đào tạo sinh viên có khả năng giải quyết các vấn đề pháp lý trong lĩnh vực quốc tế.",
    additionalInfo: "Sinh viên được trang bị kiến thức chuyên sâu về pháp luật quốc tế, có cơ hội làm việc tại các tổ chức quốc tế, sứ quán và các doanh nghiệp có vốn đầu tư nước ngoài. Chương trình đào tạo phù hợp với xu hướng hội nhập quốc tế."
  },
  {
    id: 13,
    name: "Công nghệ Sinh học",
    code: "7420201",
    type: "Chính quy",
    faculty: "Viện Công nghệ Sinh học và Công nghệ Thực phẩm",
    website: "http://biotech.hou.edu.vn/",
    description: "Ngành Công nghệ Sinh học đào tạo kỹ sư chất lượng cao, có kiến thức toàn diện về kỹ thuật công nghệ tiên tiến, kỹ năng thực tiễn vững vàng và năng lực tự chủ, sáng tạo khởi nghiệp. Học phí thấp với cơ hội giành học bổng và thực tập tại các nước như Nhật Bản, Hàn Quốc, Israel.",
    jobOpportunities: "Công nghiệp thực phẩm (rượu bia, nước giải khát, chế biến thực phẩm), Y-dược (thực phẩm chức năng, vaccine, dược phẩm, xét nghiệm), Môi trường (xử lý chất thải, chế phẩm sinh học), Nông nghiệp (nhân giống cây trồng, thuốc trừ sâu, phân bón vi sinh), Sản xuất mỹ phẩm và kiểm định chất lượng.",
    achievements: "Giới thiệu nhiều cơ hội việc làm tại các tập đoàn lớn, cơ hội học tập nâng cao tại nước ngoài với học bổng giá trị. Đạt nhiều giải thưởng sinh viên nghiên cứu khoa học và khởi nghiệp. Thực tập tại doanh nghiệp uy tín với mức lương cạnh tranh.",
    additionalInfo: "Hệ thống phòng thí nghiệm hiện đại phục vụ nghiên cứu. Sinh viên được tham gia kiến tập, thực hành và đào tạo khởi nghiệp tại nước ngoài, cùng các hoạt động trải nghiệm văn hoá, giao lưu quốc tế và ngoại khóa đa dạng."
  },
  {
    id: 14,
    name: "Công nghệ Thông tin",
    code: "7480201",
    type: "Chính quy",
    faculty: "Công nghệ Thông tin",
    website: "http://www.fithou.edu.vn",
    description: "Công nghệ Thông tin (CNTT) là ngành học liên quan đến việc sử dụng máy tính, phần mềm, mạng và hệ thống dữ liệu để thu thập, xử lý, lưu trữ, bảo mật và truyền tải thông tin. Ngành cung cấp cho sinh viên nền tảng vững chắc về công nghệ phần mềm, mạng máy tính và an toàn hệ thống, hệ thống thông tin, trí tuệ nhân tạo.",
    jobOpportunities: "Phát triển phần mềm, Kiểm thử và đảm bảo chất lượng phần mềm, Hỗ trợ kỹ thuật, Phân tích nghiệp vụ và thiết kế hệ thống, Thiết lập và quản trị hệ thống mạng, Quản trị cơ sở dữ liệu, Phát triển hệ thống thông minh/trí tuệ nhân tạo, Nghiên cứu người dùng, Thiết kế sản phẩm kỹ thuật số, Đảm bảo an ninh mạng và an toàn hệ thống.",
    achievements: "Sinh viên được đào tạo với năng lực áp dụng nguyên tắc kỹ thuật, khoa học và toán học để mô hình hóa và thiết kế hệ thống CNTT. Có khả năng phân tích, thiết kế, triển khai và đánh giá hệ thống đáp ứng yêu cầu thực tiễn bằng các công cụ, kỹ thuật hiện đại.",
    additionalInfo: "Thời gian đào tạo: 3 - 4,5 năm. Bằng cấp: Cử nhân/Kỹ sư Công nghệ Thông tin. Hình thức đào tạo theo tín chỉ, sinh viên có thể lựa chọn thời gian học, giảng viên, tiến độ, chuyên ngành phù hợp với năng lực và nguyện vọng."
  },
  {
    id: 15,
    name: "Công nghệ Kỹ thuật Điện tử - Viễn thông",
    code: "7510302",
    type: "Chính quy",
    faculty: "Điện - Điện tử",
    website: "http://eef.hou.edu.vn/",
    description: "Ngành Công nghệ Kỹ thuật Điện tử - Viễn thông là lĩnh vực nghiên cứu, thiết kế và ứng dụng các hệ thống điện tử, viễn thông và công nghệ truyền thông hiện đại. Ngành đóng vai trò quan trọng trong sự phát triển của công nghiệp 4.0, thúc đẩy các lĩnh vực như trí tuệ nhân tạo (AI), Internet vạn vật (IoT), mạng truyền thông thế hệ mới (5G, 6G) và tự động hóa.",
    jobOpportunities: "Kỹ sư thiết kế và phát triển hệ thống viễn thông, Kỹ sư nghiên cứu và phát triển (R&D) tại các tập đoàn công nghệ, Chuyên gia thiết kế vi mạch, hệ thống nhúng, xử lý tín hiệu số, Kỹ sư mạng và bảo mật thông tin viễn thông, Giảng viên, nhà nghiên cứu. Mức thu nhập từ 10-20 triệu đồng/tháng cho sinh viên mới ra trường, có thể lên tới 50-100 triệu đồng/tháng cho các chuyên gia có kinh nghiệm.",
    achievements: "Ngành có ứng dụng rộng rãi trong công nghệ không dây và mạng viễn thông, trí tuệ nhân tạo và IoT, công nghệ điều khiển và tự động hóa, hệ thống nhúng và thiết kế vi mạch. Thị trường viễn thông toàn cầu được dự báo sẽ đạt hơn 3.5 nghìn tỷ USD vào năm 2026, với tốc độ tăng trưởng hàng năm trên 5.4%.",
    additionalInfo: "Chương trình đào tạo trang bị kiến thức về kỹ thuật mạch điện tử và hệ thống nhúng, hệ thống viễn thông và truyền dẫn không dây, thiết kế vi mạch (VLSI), xử lý tín hiệu số và thị giác máy tính, công nghệ truyền thông quang học và vệ tinh, ứng dụng AI trong viễn thông, mạng di động 4G/5G/6G và IoT."
  },
  {
    id: 16,
    name: "Công nghệ Kỹ thuật Điều khiển và Tự động hóa",
    code: "7510303",
    type: "Chính quy",
    faculty: "Điện - Điện tử",
    website: "http://eef.hou.edu.vn/",
    description: "Ngành Công nghệ Kỹ thuật Điều khiển và Tự động hóa là một trong những lĩnh vực mũi nhọn của cuộc Cách mạng công nghiệp 4.0, đóng vai trò quan trọng trong việc hiện đại hóa sản xuất và tối ưu hóa quy trình vận hành trong nhiều lĩnh vực khác nhau. Chương trình đào tạo tập trung vào nghiên cứu, thiết kế và ứng dụng các hệ thống điều khiển thông minh, robot công nghiệp, trí tuệ nhân tạo (AI) và Internet vạn vật (IoT).",
    jobOpportunities: "Kỹ sư tự động hóa và điều khiển quá trình tại các nhà máy sản xuất, Kỹ sư thiết kế hệ thống robot và AI trong sản xuất, Kỹ sư lập trình PLC, SCADA, IoT cho hệ thống điều khiển công nghiệp, Kỹ sư nghiên cứu và phát triển tại các tập đoàn công nghệ lớn, Chuyên gia tư vấn và triển khai giải pháp tự động hóa trong doanh nghiệp, Giảng viên, nhà nghiên cứu tại các trường đại học và viện nghiên cứu. Mức thu nhập trung bình từ 12-30 triệu đồng/tháng đối với sinh viên mới ra trường, có thể lên đến 50-100 triệu đồng/tháng cho chuyên gia có kinh nghiệm.",
    achievements: "Thị trường tự động hóa toàn cầu dự kiến đạt hơn 400 tỷ USD vào năm 2027, với mức tăng trưởng 8-10% mỗi năm. Tại Việt Nam, ngành công nghiệp tự động hóa đang phát triển mạnh mẽ nhờ sự đầu tư của các doanh nghiệp sản xuất lớn như Samsung, LG, Foxconn, Intel, VinFast. Ngành được ứng dụng rộng rãi trong công nghiệp sản xuất thông minh, robot công nghiệp và trí tuệ nhân tạo, hệ thống giao thông thông minh, tự động hóa trong tòa nhà thông minh, và công nghệ năng lượng tái tạo.",
    additionalInfo: "Sinh viên sẽ được trang bị kiến thức chuyên sâu về kỹ thuật điều khiển và tự động hóa quá trình sản xuất, hệ thống điều khiển thông minh và trí tuệ nhân tạo trong tự động hóa, lập trình PLC, SCADA, DCS cho hệ thống công nghiệp, robot công nghiệp và tự hành, thiết kế hệ thống nhúng và IoT trong điều khiển tự động, công nghệ điện tử, cảm biến và truyền động điện thông minh, mạng truyền thông công nghiệp và bảo mật hệ thống điều khiển."
  },
  {
    id: 17,
    name: "Công nghệ Thực phẩm",
    code: "7540101",
    type: "Chính quy",
    faculty: "Viện Công nghệ Sinh học và Công nghệ Thực phẩm",
    website: "http://biotech.hou.edu.vn",
    description: "Ngành Công nghệ Thực phẩm đào tạo kỹ sư chất lượng cao, có kiến thức toàn diện về kỹ thuật công nghệ tiên tiến, tay nghề thực tiễn vững vàng, có năng lực tự chủ trong công việc và sáng tạo khởi nghiệp. Học phí thấp, phù hợp với đa số người học, cơ hội giành học bổng tại nước ngoài (Nhật Bản, Hàn Quốc, Israel), thực tập và ứng tuyển vào các doanh nghiệp uy tín với mức lương cạnh tranh.",
    jobOpportunities: "Sản xuất tại các doanh nghiệp sản xuất cồn, rượu bia, nước giải khát, chế biến sữa, sản phẩm lên men, bánh kẹo, đường, chế phẩm tinh bột; Nghiên cứu, giảng dạy, tư vấn tại các trường cao đẳng, nghiên cứu ứng dụng, tư vấn chuyển giao công nghệ; Kiểm định - tham gia kiểm nghiệm, phân tích chất lượng thực phẩm; Kinh doanh và tư vấn kỹ thuật sản phẩm thực phẩm.",
    achievements: "Giới thiệu nhiều cơ hội việc làm cho sinh viên sau khi tốt nghiệp tại các tập đoàn lớn như CP Việt Nam, Bia Việt Á, Masan, Mondelez Kinh Đô, Vinamilk, TH True Milk. Giới thiệu nhiều cơ hội học tập nâng cao trình độ tại nước ngoài với các học bổng toàn phần tại Hàn Quốc, Nhật Bản, Israel. Có hoạt động sinh viên nghiên cứu khoa học và khởi nghiệp phong phú, đạt nhiều giải thưởng cao.",
    additionalInfo: "Hệ thống phòng thí nghiệm với thiết bị hiện đại. Sinh viên tham gia nhiều đợt kiến tập, thực hành trong suốt khóa học, đào tạo khởi nghiệp tại Israel và Nhật Bản, hoạt động trải nghiệm văn hoá và giao lưu quốc tế, hoạt động ngoại khóa đa dạng. Nghiên cứu và sản xuất các sản phẩm như nước mắm cá cơm, đông trùng hạ thảo, giấm táo mèo, chế phẩm probiotic."
  },
  {
    id: 18,
    name: "Kiến trúc",
    code: "7580101",
    type: "Chính quy",
    faculty: "Tạo dáng công nghiệp",
    website: "http://TDCN.hou.edu.vn/",
    description: "Ngành Kiến trúc là sự kết hợp giữa nghệ thuật và kỹ thuật, đóng vai trò quan trọng trong việc đưa cái đẹp vào mọi lĩnh vực của đời sống. Ngành này đặc biệt hấp dẫn đối với giới trẻ trong bối cảnh kinh tế, khoa học, kỹ thuật và nghệ thuật phát triển nhanh chóng. Trường Đại học Mở Hà Nội bắt đầu tuyển sinh ngành Kiến trúc từ năm 1995 và đã có 23 khóa sinh viên tốt nghiệp, với tổng số khoảng 1600 kiến trúc sư.",
    jobOpportunities: "Thiết kế kiến trúc dân dụng, công nghiệp và đô thị, tư vấn thiết kế và giám sát thi công công trình, quản lý dự án xây dựng, nghiên cứu và giảng dạy kiến trúc, kinh doanh và phát triển bất động sản, làm việc tại các cơ quan quản lý nhà nước về xây dựng và quy hoạch đô thị.",
    achievements: "Khoa đào tạo về lĩnh vực kiến trúc và mỹ thuật ứng dụng với 30 năm kinh nghiệm, đã có 25 khóa sinh viên tốt nghiệp với hơn 4000 cử nhân thiết kế và kiến trúc sư. Hơn 98% sinh viên có việc làm ngay trong năm đầu tiên sau khi tốt nghiệp và làm đúng chuyên môn được đào tạo. Trường nằm trong top 25 trường có tỷ lệ trên 60% sinh viên tốt nghiệp làm đúng ngành nghề.",
    additionalInfo: "Nhiều cựu sinh viên ngành Kiến trúc hiện đang nắm giữ các vị trí quan trọng trong xã hội như KTS Hoàng Hữu Thi (Chủ tịch HĐQT, Tổng giám đốc Công ty cổ phần Đầu tư Tân Minh), KTS Tô Hữu Dũng (Giám đốc CTCP tư vấn thiết kế 85 Design), cùng nhiều nhà thiết kế nổi tiếng khác. Chương trình đào tạo được thiết kế để bổ trợ kiến thức, thái độ và kỹ năng, giúp sinh viên tốt nghiệp có thể thích ứng nhanh chóng với công việc."
  },
  {
    id: 19,
    name: "Thiết kế Nội thất",
    code: "7580108",
    type: "Chính quy",
    faculty: "Tạo dáng công nghiệp",
    website: "http://tdcn.hou.edu.vn/",
    description: "Thiết kế nội thất là ngành học kết hợp giữa nghệ thuật, mỹ thuật và khoa học kỹ thuật. Ngành này tập trung vào việc tạo ra không gian sống, làm việc và thư giãn đẹp mắt, hài hòa và hiệu quả, đáp ứng nhu cầu vật chất và tinh thần của người sử dụng.",
    jobOpportunities: "Các công ty thiết kế nội thất, kiến trúc và xây dựng; Các công ty sản xuất, xuất khẩu đồ gỗ nội thất; Các công ty tư vấn dịch vụ nội thất và kiến trúc; Các tập đoàn lớn, công ty đa quốc gia về môi trường, quy hoạch kiến trúc; Các tổ chức chính phủ, sở quy hoạch, kiến trúc, tài nguyên môi trường; Các cơ sở đào tạo, trường đại học, cao đẳng, trung cấp chuyên nghiệp; Tự thành lập doanh nghiệp, công ty nội thất, thiết kế.",
    achievements: "Nhu cầu về trang trí nội thất ngày càng cao trong xã hội hiện đại. Cơ hội việc làm phong phú và mức lương hấp dẫn so với nhiều ngành nghề khác. Được tự do sáng tạo và tạo ra những tác phẩm nghệ thuật độc đáo. Khoa Tạo dáng công nghiệp có 30 năm kinh nghiệm đào tạo, với hơn 4000 cử nhân thiết kế và kiến trúc sư tốt nghiệp.",
    additionalInfo: "Sinh viên được trang bị kiến thức về phương pháp luận và thực hành thiết kế trang trí nội thất; kỹ năng kết hợp giữa thiết kế, truyền thông, mỹ thuật, thương mại và các kỹ năng mềm; nền tảng vững chắc giữa lý thuyết và thực hành; cơ hội thực tập để mở rộng khả năng thích ứng với môi trường làm việc chuyên nghiệp. Những gương mặt cựu sinh viên thành công bao gồm NTK Đỗ Ngọc Thành (Giám đốc thương hiệu Chic-Land), KTS Hoàng Hữu Thi (Chủ tịch HĐQT Tân Minh), KTS Tô Hữu Dũng (Giám đốc 85 Design), NTK Trung Quang Thành (Tổng giám đốc Tập đoàn Nhà Vàng), NTK Phạm Văn Minh (Giám đốc Kiến tạo vàng), NTK Trần Minh Hương (CTHĐQT Mỹ thuật và xây dựng Minh Hương), NTK La Hằng (Chủ thương hiệu áo dài La Hằng), NTK Hà Duy (Á quân 'Ngôi sao thiết kế 2013', Quán quân Cặp đôi hoàn hảo 2014), và NTK Đỗ Thị Vân Anh (Chủ thương hiệu VanAnhScarlet)."
  },
  {
    id: 20,
    name: "Quản trị Dịch vụ Du lịch và Lữ hành",
    code: "7810103",
    type: "Chính quy",
    faculty: "Du lịch",
    website: "http://fot.hou.edu.vn/",
    description: "Ngành Quản trị Dịch vụ Du lịch và Lữ hành là một ngành 'hot' trong bối cảnh du lịch Việt Nam ngày càng phát triển, đóng góp lớn vào sự phát triển kinh tế - xã hội của đất nước. Du lịch Việt Nam đã có sự tăng trưởng vượt bậc trong những năm gần đây, khẳng định vị thế là một trong những điểm đến hàng đầu thế giới. Năm 2024, Việt Nam được vinh danh là 'Điểm đến Di sản hàng đầu thế giới' lần thứ 6 và nhận được nhiều giải thưởng quan trọng từ Tổ chức Giải thưởng Du lịch Thế giới (WTA).",
    jobOpportunities: "Sinh viên tốt nghiệp có nhiều cơ hội làm việc trong ngành du lịch với các vị trí như: Hướng dẫn viên du lịch, Điều hành tour, Quản lý khách sạn và resort, Chuyên viên marketing du lịch, Chuyên viên tổ chức sự kiện du lịch, Nhân viên các công ty du lịch và lữ hành. Tỷ lệ có việc làm cao sau tốt nghiệp với nhiều sinh viên được doanh nghiệp du lịch đăng ký nhận làm nhân viên chính thức ngay sau khi tốt nghiệp.",
    achievements: "Khoa Du lịch được đánh giá cao về chất lượng đào tạo và là đối tác chiến lược của nhiều cơ quan quản lý Nhà nước và doanh nghiệp trong ngành. Theo Cục Du lịch Quốc gia Việt Nam, năm 2024, Việt Nam đón 17,5 triệu lượt khách quốc tế và 110 triệu lượt khách nội địa, với tổng thu từ khách du lịch đạt khoảng 840 nghìn tỷ đồng. Điểm thi hoặc xét tuyển đầu vào 'khả thi', hướng tới những học sinh có tiềm năng phát triển.",
    additionalInfo: "Chương trình học kết hợp lý thuyết và thực hành, thực tập tại doanh nghiệp, tương tự như mô hình đào tạo ở các nước du lịch phát triển. Sinh viên được tiếp xúc thường xuyên với môi trường thực tế thông qua các hoạt động tham quan, thực hành hướng dẫn tại điểm, thực địa, thực tập từ năm nhất đến khi ra trường. Trường đã xây dựng quan hệ hợp tác với nhiều khu di tích, doanh nghiệp lữ hành lớn tại Hà Nội. Môi trường đào tạo nghiêm túc & thân thiện với triết lý 'Dạy thật - Học thật - Kỷ cương, nề nếp nghiêm'. Học phí phù hợp theo quy định của Nhà nước đối với các trường công lập."
  },
  {
    id: 21,
    name: "Quản trị Khách sạn",
    code: "7810201",
    type: "Chính quy",
    faculty: "Du lịch",
    website: "http://fot.hou.edu.vn/",
    description: "Ngành Quản trị Khách sạn đang rất 'hot' do du lịch là ngành kinh tế mũi nhọn của Việt Nam. Du lịch Việt Nam tăng trưởng mạnh mẽ, được vinh danh là 'Điểm đến Di sản hàng đầu thế giới' năm 2024. Năm 2024, Việt Nam đón 17,5 triệu lượt khách quốc tế và 110 triệu lượt khách nội địa, với tổng thu đạt khoảng 840 nghìn tỷ đồng. Thị trường khách sạn đang phục hồi mạnh mẽ, tạo ra 'cơn khát' nhân lực chất lượng cao.",
    jobOpportunities: "Sinh viên tốt nghiệp có nhiều cơ hội làm việc trong ngành khách sạn với các vị trí như: Quản lý khách sạn và nhà hàng, Chuyên viên kinh doanh và marketing khách sạn, Lễ tân và phục vụ, Nhân viên các bộ phận khác trong khách sạn. Tỷ lệ việc làm cao với nhiều sinh viên được doanh nghiệp đăng ký nhận làm nhân viên chính thức ngay sau khi tốt nghiệp.",
    achievements: "Khoa Du lịch được đánh giá cao về chất lượng đào tạo và là đối tác chiến lược của nhiều cơ quan quản lý Nhà nước và doanh nghiệp trong ngành. Tỷ lệ sinh viên có việc làm cao sau tốt nghiệp với mức lương cạnh tranh.",
    additionalInfo: "Chương trình học kết hợp lý thuyết và thực hành, thực tập tại doanh nghiệp. Sinh viên được tiếp xúc thường xuyên với môi trường thực tế thông qua các hoạt động tham quan, thực hành tại khách sạn, thực tập từ năm nhất đến khi ra trường. Trường đã xây dựng quan hệ hợp tác với nhiều khách sạn, resort lớn tại Hà Nội và các tỉnh thành."
  }
];