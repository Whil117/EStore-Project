import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App | Whil</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bar">
        <div className="bar__home" >
        <div>
        <h1 className="bar__home-title">EStore</h1>
        </div>
          <div className="bar__home-links">
            <a href="#" className="bar__home-links-a">Home</a>
            <a href="#" className="bar__home-links-a">Products</a>
          </div>
        </div>
        <div className="bar__menu">

          <svg width="30" height="30" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 45H46M3 3H46H3ZM3 24H46H3Z" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </header>
      <div className="search">
        <label className="search__label">
          <input className="search__label-bar" ></input>
            <svg className="search__label-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 30L23.3891 23.3773L30 30ZM27.0526 14.5263C27.0526 17.8485 25.7329 21.0346 23.3838 23.3838C21.0346 25.7329 17.8485 27.0526 14.5263 27.0526C11.2041 27.0526 8.01801 25.7329 5.66887 23.3838C3.31973 21.0346 2 17.8485 2 14.5263C2 11.2041 3.31973 8.01801 5.66887 5.66887C8.01801 3.31973 11.2041 2 14.5263 2C17.8485 2 21.0346 3.31973 23.3838 5.66887C25.7329 8.01801 27.0526 11.2041 27.0526 14.5263V14.5263Z" stroke="#4ADA9D" stroke-width="4" stroke-linecap="round" />
            </svg>
        </label>
      </div>
    </div>
  )
}
