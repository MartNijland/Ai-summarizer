const Hero = () => {
  return (
    <header className="w-full flex justify-center flex-col items-center">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <div className="logo_text">News <span className="purple_gradient">Summarizer</span></div>
            <button
                type="button"
                className="black_btn"
                onClick={() => {
                    window.open('https://github.com/martnijland')
                }}
            >
                GitHub
            </button>
        </nav>

        <h1 className="head_text">
            Nieuwsartikelen samenvatten met <br className="max-md:hidden"/>
            <span className="purple_gradient">OpenAI GPT-4</span>
        </h1>
        <h2 className="desc">Wij begrijpen dat in de snelle wereld van vandaag je tijd kostbaar is.
        Daarom hebben we <span className="purple_gradient">NewsSummarizer</span> gemaakt om u direct nieuwsoverzichten te bieden, waardoor u tijd bespaart en u op de hoogte blijft. </h2> 
    </header>
  )
}

export default Hero