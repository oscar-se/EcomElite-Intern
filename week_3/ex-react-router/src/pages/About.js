function About() {
    return (
        <div className="about-page">
            <h1 className="page-title">Về Chúng Tôi</h1>
            
            <section className="about-section">
                <h2>Giới thiệu</h2>
                <p>
                    Đây là ứng dụng demo được xây dựng bằng <strong>React</strong> và <strong>React Router DOM</strong>, 
                    nhằm mục đích học tập và thực hành các khái niệm cơ bản về Single Page Application (SPA).
                </p>
            </section>

            <section className="about-section">
                <h2>Tính năng</h2>
                <ul className="feature-list">
                    <li>Hiển thị danh sách người dùng</li>
                    <li>Xem chi tiết từng người dùng</li>
                    <li>Điều hướng mượt mà với React Router</li>
                </ul>
            </section>

            <section className="about-section">
                <h2>Mục đích học tập</h2>
                <p>
                    Dự án này là bài tập trong chương trình <strong>EcomElite Intern - Week 3</strong>, 
                    tập trung vào việc học và áp dụng React Router để xây dựng ứng dụng multi-page.
                </p>
            </section>
        </div>
    );
}

export default About;