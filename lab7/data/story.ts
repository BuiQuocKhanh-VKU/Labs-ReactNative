// data/story.ts
export type StoryNode = {
  storyText: string;
  choice1: string;
  next1: number;
  choice2: string;
  next2: number;
};

export const storyData: StoryNode[] = [
  {
    storyText:
      "Bạn tỉnh dậy giữa khu rừng lạ. Sương mù dày đặc, xa xa là ánh sáng yếu ớt và tiếng thì thầm từ sâu trong rừng.",
    choice1: "Tiến về phía ánh sáng",
    next1: 1,
    choice2: "Đi theo tiếng thì thầm",
    next2: 2,
  },
  {
    storyText:
      "Bạn tới một tàn tích cổ với cánh cổng đá phủ đầy rêu. Trên cổng khắc những ký hiệu lạ.",
    choice1: "Tiến lại gần cổng đá",
    next1: 3,
    choice2: "Khám phá khu vực xung quanh tàn tích",
    next2: 4,
  },
  {
    storyText:
      "Tiếng thì thầm dẫn bạn đến một cây cổ thụ khổng lồ. Một con quạ đen nhìn bạn chăm chú.",
    choice1: "Nói chuyện với con quạ",
    next1: 5,
    choice2: "Phớt lờ nó và tiếp tục đi",
    next2: 6,
  },
  {
    storyText:
      "Chạm tay vào cổng đá, bạn cảm nhận được ma lực cổ xưa. Bên trong cánh cổng là lối đi tối đen.",
    choice1: "Bước qua cổng đá",
    next1: 7,
    choice2: "Rút tay lại, cảm thấy bất an",
    next2: 4,
  },
  {
    storyText:
      "Bạn phát hiện một hồ nước nhỏ trong vắt. Bề mặt hồ phản chiếu bầu trời đầy sao, dù hiện tại là giữa ban ngày.",
    choice1: "Nhìn sâu vào mặt hồ",
    next1: 8,
    choice2: "Bỏ qua và quay lại tàn tích",
    next2: 3,
  },
  {
    storyText:
      "Con quạ cất tiếng nói: \"Người lạc lối, rừng này đang hấp hối. Nếu muốn sống sót, hãy tin ta.\"",
    choice1: "Tin con quạ và đi theo nó",
    next1: 7,
    choice2: "Không tin và tự tìm đường",
    next2: 6,
  },
  {
    storyText:
      "Bạn đi mãi giữa sương mù, cây cối như lặp lại. Rừng bắt đầu xoay vòng quanh bạn.",
    choice1: "Gào lên cầu cứu",
    next1: 9,
    choice2: "Ngồi xuống, bình tĩnh cảm nhận xung quanh",
    next2: 8,
  },
  {
    storyText:
      "Bạn bước vào tâm rừng: một bệ đá cổ với viên tinh thể xanh lục đang phát sáng yếu ớt.",
    choice1: "Chạm vào viên tinh thể",
    next1: 10,
    choice2: "Quỳ xuống và lắng nghe nhịp đập của khu rừng",
    next2: 11,
  },
  {
    storyText:
      "Một giọng nói êm dịu vang lên trong đầu: \"Ngươi có sẵn sàng gánh lấy ký ức của khu rừng?\"",
    choice1: "Chấp nhận gánh lấy ký ức",
    next1: 11,
    choice2: "Từ chối và tìm đường thoát",
    next2: 9,
  },
  {
    storyText:
      "Sương mù nuốt chửng bạn. Thời gian trôi qua, bạn không bao giờ tìm được lối ra. Rừng ghi nhớ thêm một linh hồn lạc lối.",
    choice1: "Bắt đầu lại hành trình",
    next1: -1,
    choice2: "",
    next2: -1,
  },
  {
    storyText:
      "Năng lượng trào dâng. Bạn thấy mọi con đường, mọi ký ức của rừng. Nhưng sức mạnh đó cũng khóa bạn vĩnh viễn trong vai trò người canh gác mới.",
    choice1: "Chơi lại với lựa chọn khác",
    next1: -1,
    choice2: "",
    next2: -1,
  },
  {
    storyText:
      "Bạn lắng nghe nhịp đập của rừng. Tinh thể dần sáng hơn. Một cánh cổng ánh sáng mở ra, dẫn bạn ra khỏi rừng. Bạn rời đi, mang theo lời hứa sẽ quay lại bảo vệ nơi này.",
    choice1: "Trải nghiệm lại hành trình",
    next1: -1,
    choice2: "",
    next2: -1,
  },
];
