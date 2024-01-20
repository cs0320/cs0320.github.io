import '../App.css';

function InfoBits() {
  return (
    <div>
        <section className="w-full bg-gray-900 pt-7 pb-7 md:pt-20 md:pb-24 font-mono">
    <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

        {/* <!-- Image --> */}
        <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img src="https://i.ibb.co/G2J8yLK/bubbble.gif" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " ></img>
        </div>

        {/* <!-- Content --> */}
        <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 className="m-0 text-xl font-semibold text-gray-100 leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                Embrace the future of digital art
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-300 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
            Tap into the limitless realm of AI-generated art without ever leaving your iMessage conversation.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-sky-500 rounded-full"><span className="text-sm font-bold">✓</span></span> All your generated art in one place
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-sky-500 rounded-full"><span className="text-sm font-bold">✓</span></span> Share your prompts
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-sky-500 rounded-full"><span className="text-sm font-bold">✓</span></span> Choose from 4 high quality images
                </li>
            </ul>
        </div>
        {/* <!-- End  Content --> */}
    </div>
</section>

{/* <!-- Section 6 --> */}
<section id='inquiries' className="box-border py-8 leading-7 text-gray-900 bg-gray-900 border-0 border-gray-200 border-solid sm:py-12 md:py-16 pt:6 pb:0 font-mono">
    <div className="box-border max-w-6xl px-4 pb-0 mx-auto border-solid sm:px-6 md:px-6">
        <div className="flex flex-col items-center leading-7 text-center text-gray-900 pb:0" >
            <h2 className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-gray-200 border-solid sm:text-4xl md:text-5xl">
                Business Inquiries
            </h2>
            <p className="box-border mt-4 text-2xl leading-normal text-gray-300 border-solid">
                Have a model you'd like to use? We'd love to set you up with a personalized extension.
            </p>
            {/* add a button here  */}
            <a href="#_" className="flex items-center w-full px-6 py-3 lg:mt-10 mb-0 text-lg text-white bg-sky-600 rounded-md sm:mb-0 hover:bg-sky-400 sm:w-auto">
              Contact Us
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg> */}
              {/* <svg className="w-5 h-5 ml-1" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='none' stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg> */}
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 ml-3 my-0 fill-gray-200' height="1em" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"/></svg>
            </a>
        </div>
        
    </div>
</section>

    </div>

  );  
}

export default InfoBits;
