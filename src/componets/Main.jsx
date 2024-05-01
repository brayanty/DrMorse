

function Main() {
    return (
    <main className="main">
        <section className="main_container">
            <article className="main_whats">
                <figure className="main_whats-img">
                    <img src="./Img" alt="" />
                </figure>
                <div className="main_whats-text">
                    <h4 className="title-2">¿Sabias que?</h4>
                    <p className="paragraph-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quaerat, eveniet perferendis omnis quibusdam a esse molestiae autem magni repellendus soluta fuga vitae deleniti error officiis natus voluptatum voluptates dolorem!</p>
                </div>
            </article>
        </section>
        <aside className="section-aside">
            <nav className="aside_social-nav">
                <ul className="social-nav">
                    <li className="nav-items">
                        <a className="nav-item" href="#">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className="nav-items">
                        <a className="nav-item" href="#">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className="nav-items">
                        <a className="nav-item" href="#">
                            <FontAwesomeIcon icon="fa-brands fa-facebook" />
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    </main>
    )
}


export default Main;