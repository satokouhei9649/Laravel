// footer
 export default function Footer() {
    return(
    <footer>
        <h2 id="sns">公式SNS</h2>
        <ul>
            <a href="/" className="FooterIcon"><i className="fab fa-line fa-3x myline" data-fa-transform="grow-2" data-fa-mask="fas fa-circle fa-xs" ></i></a>
            <a href="/" className="twitter FooterIcon"><i className="fab fa-twitter fa-2x"></i></a>
            <a href="/" className="facebook FooterIcon"><i className="fab fa-facebook-f fa-2x"></i></a>
            <a href="/" className="instagram FooterIcon"><i className="fab fa-instagram fa-2x"></i></a>
        </ul>
        <h2 id="help">Help & Guide</h2>
        <li><i className="fas fa-phone-alt fa-fw"></i> お問合わせ</li>
        <li><i className="fas fa-user fa-fw"></i> 新規登録 / ログイン</li>
        <li><i className="fas fa-hand-paper fa-fw"></i> ご利用方法</li>
        <li><i className="fas fa-box fa-fw"></i> 商品について</li>
        <li><i className="fas fa-truck-moving fa-fw"></i> 配送情報</li>
    </footer>
    );
}
