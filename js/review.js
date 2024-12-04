const carouselData = [
  {
    text: `Ant Center đã giúp chúng tôi tối ưu xếp lịch dạy và quản lý công việc một cách hiệu quả. Bảng chấm công tự Động và tính năng đánh giá kết quả giảng dạy toàn diện đã giúp chúng tôi tiết kiệm thời gian và nâng cao hiệu xuất làm việc của giáo viên.`,
    image: "./img/BZEnglish.jpg",
    name: "Linh Đặng",
    role: "Founder & CEO - BZ English",
  },
  {
    text: `Ant Center đã thực sự làm thay đổi cách quản lý trung tâm đào tạo của chúng tôi. Với những tính năng toàn diện, chúng tôi có thể dễ dàng quản lý việc đăng ký học viên, lịch học tài liệu đào tạo. Phần mềm này đã tối ưu hóa quy trình làm việc của chúng tôi và cải thiện hiệu suất làm việc tổng thể.`,
    image: "./img/amslink.jpg",
    name: "Quỳnh Anh",
    role: "Founder & CEO - Amslink",
  },
  {
    text: `Chúng tôi rất hài lòng với phần mềm Ant Center. Giao diện thân thiện và các tính năng mạnh mẽ của nó đã đơn giản hóa các công việc quản lý của chúng tôi.`,
    image: "./img/AtSchool.jpg",
    name: "Tùng Đàm",
    role: "Founder & CEO - AtSchool",
  },
  {
    text: `Kể từ khi triển khai Ant Center, chúng tôi đã chứng kiến một sự thay đổi đáng kể trong hoạt động của MoyArt. Các tính năng mạnh mẽ của phần mềm này cho phép chúng tôi dễ dàng theo dõi tiến trình học tập của học viên, quản lý phân công giảng viên và tạo ra báo cáo chi tiết.`,
    image: "./img/MoyArt.jpg",
    name: "Võ Mai Thương",
    role: "Founder & CEO - MoyArt",
  },
  {
    text: `Chúng tôi đã tiết kiệm rất nhiều thời gian và công sức kể từ khi sử dụng Ant Center. Nhiều tính năng linh hoạt và dễ sử dụng giúp chúng tôi dễ dàng theo dõi học viên, quản lý lớp học và tạo lịch học một cách hiệu quả.`,
    image: "./img/BrainSTEM.jpg",
    name: "Ngân JP",
    role: "Founder & CEO - BrainSTEM",
  },
];

let currentIndex = 0;
let autoSlideInterval;

const commentElement = document.querySelector('.comment');
const carouselImagesContainer = document.querySelector('.carousel-images');
const reviewNameElement = document.querySelector('.review-name');
const reviewRoleElement = document.querySelector('.review-role');

// Hàm bắt đầu tự động chuyển ảnh
function startAutoSlide() {
  autoSlideInterval = setInterval(nextReview, 3000);
}

// Hàm dừng tự động chuyển ảnh
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Render hình ảnh và cập nhật trạng thái
function renderImages() {
  carouselImagesContainer.innerHTML = ''; // Xóa các ảnh cũ

  const totalImages = carouselData.length;

  
  for (let i = -2; i <= 2; i++) {
    const index = (currentIndex + i + totalImages) % totalImages; // Lấy index đúng
    const imgElement = document.createElement('img');
    imgElement.src = carouselData[index].image;
    imgElement.className = 'review-image';

    // Ảnh giữa sẽ có class "active"
    if (i === 0) {
      imgElement.classList.add('active');
    } else {
      imgElement.classList.add('inactive');
    }

    // Thêm sự kiện click vào từng ảnh
    imgElement.addEventListener('click', () => {
      currentIndex = index; // Cập nhật index khi click
      renderImages(); // Rerender lại ảnh và thông tin
      stopAutoSlide(); // Dừng tự động chuyển
      startAutoSlide(); // Khởi động lại tự động chuyển
    });

    carouselImagesContainer.appendChild(imgElement);
  }

  updateContent();
}

// Cập nhật nội dung review
function updateContent() {
  const currentData = carouselData[currentIndex];
  commentElement.textContent = currentData.text;
  reviewNameElement.textContent = currentData.name;
  reviewRoleElement.textContent = currentData.role;
}

// Chuyển sang ảnh tiếp theo
function nextReview() {
  currentIndex = (currentIndex + 1) % carouselData.length;
  renderImages();
}

// Chuyển sang ảnh trước đó
function prevReview() {
  currentIndex = (currentIndex - 1 + carouselData.length) % carouselData.length;
  renderImages();
}

// Lắng nghe sự kiện click của nút
document.querySelector('.next-review').addEventListener('click', () => {
  nextReview();
  stopAutoSlide(); // Dừng tự động chuyển
  startAutoSlide(); // Khởi động lại tự động chuyển
});

document.querySelector('.prev-review').addEventListener('click', () => {
  prevReview();
  stopAutoSlide(); // Dừng tự động chuyển
  startAutoSlide(); // Khởi động lại tự động chuyển
});

// Khởi tạo ảnh ban đầu
renderImages();

// Khởi động tự động chuyển ảnh
startAutoSlide();

