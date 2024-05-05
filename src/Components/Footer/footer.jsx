import '/src/Components/Footer/footer.css';

const footer = () => {
    return (
        <div>
            <hr id="hr" />
            <div id="footer">
                <div className="phone">
                    <h2>Phone</h2>
                    <p>8493037519</p>
                </div>
                <div className="email">
                    <h2>Email</h2>
                    <p>mayasirmir02@gmail.com</p>
                </div>
                <div className="follow-me">
                    <h2>Follow me</h2>
                    <a href="https://www.linkedin.com/in/mir-mayasir-505005210/">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.instagram.com/mir.mayasir/">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
                <div className="copy-right">
                    <p>All rights reserved</p>
                    <p className="para">By Mayasir</p>
                </div>
            </div>
        </div>
    );
}

export default footer;
