function Contact() {
    return (
        <div className="contact-page">
            <h1 className="page-title">Liên Hệ</h1>
            
            <div className="contact-container">
                <section className="contact-info">
                    <h2>Thông tin liên hệ</h2>
                    <div className="info-item">
                        <div>
                            <strong>Email</strong>
                            <p>nvandinh.dev@gmail.com</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div>
                            <strong>Điện thoại</strong>
                            <p>+84 123 456 789</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div>
                            <strong>Địa chỉ</strong>
                            <p>Hà Nội, Việt Nam</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div>
                            <strong>Website</strong>
                            <p>www.example.com</p>
                        </div>
                    </div>
                </section>

                <section className="contact-form">
                    <h2>Gửi tin nhắn</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Họ và tên</label>
                            <input type="text" id="name" placeholder="Nhập họ và tên" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Nhập email của bạn" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Chủ đề</label>
                            <input type="text" id="subject" placeholder="Nhập chủ đề" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Nội dung</label>
                            <textarea id="message" rows="5" placeholder="Nhập nội dung tin nhắn"></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Gửi tin nhắn</button>
                    </form>
                </section>
            </div>
        </div>
    );
}   
export default Contact;