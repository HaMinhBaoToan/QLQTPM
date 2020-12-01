Models sẽ chứa code tương tác với database.
Controller chứa logic của ứng dụng xử lý các request từ client và response trả về.
Router giải quyết việc điều hướng.

body-parser: Để giải quyết những HTTP POST request trong express.js từ version 4 trở lên, chúng ta cần mudule middleware body-parser. Body parser trích xuất toàn bộ phần body của request gửi đến và hiển thị chúng trên req.body
mongoose: là một thư viện ODM (Object Data Modeling) cho MongDB và Node.js, được sẻ dụng để chuyển các object (đối tượng) trong code thành những biểu diễn của những object này trong MongoDB.
morgan: là mộtn công cụ logging tuyệt vời khi làm việc với HTTP server trong Node.js, là một middleware cho phép chúng ta dễ dàng log những request, error ra console.