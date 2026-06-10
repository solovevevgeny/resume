

function Info({text, link}) {

    return (
        <section className="sect">
                <div className="container">
                    <div className="card shadow">
                        {text} <a target="_blank" href={link}>Подробнее</a>
                    </div>
                </div>
        </section>
    )

}

export default Info;