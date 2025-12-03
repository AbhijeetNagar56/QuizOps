export default function Footer() {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content grid-rows-1 justify-items-center py-20">
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <nav>
                <h6 className="footer-title">Social</h6>
                <a className="link link-hover">Twitter</a>
                <a className="link link-hover">Instagram</a>
                <a className="link link-hover">Facebook</a>
            </nav>
            <nav>
                <h6 className="footer-title">Explore</h6>
                <a className="link link-hover">AI model</a>
                <a className="link link-hover">Security</a>
                <a className="link link-hover">Pricing</a>
            </nav>
        </footer>
    );
}
