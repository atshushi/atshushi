'use client';
import '../styles/globals.css';

export default () => {
  function openCategory(id) {
    switch (id) {
      case '.projects':
        document.querySelector(id).classList.remove('hidden');
        document.querySelector('.socials').classList.add('hidden');
        document.querySelector('.techs').classList.add('hidden');
        break;
      case '.socials':
        document.querySelector(id).classList.remove('hidden');
        document.querySelector('.projects').classList.add('hidden');
        document.querySelector('.techs').classList.add('hidden');
        break;
      case '.techs':
        document.querySelector(id).classList.remove('hidden');
        document.querySelector('.socials').classList.add('hidden');
        document.querySelector('.projects').classList.add('hidden');
        break;
    }
  }

  return (
    <>
      <div id="menu" className="absolute left-0 top-10 ml-10 min-[832px]:hidden">
        <div className="flex items-center gap-10">
          <a onClick={() => openCategory('.projects')}>Projects</a>
          <a onClick={() => openCategory('.socials')}>Socials</a>
          <a onClick={() => openCategory('.techs')}>Techs</a>
        </div>
      </div>

      <div className="grid min-[832px]:grid-cols-2 w-full p-5 pt-44 min-[576px]:p-20">
        <div className="w-full flex flex-col items-start justify-center">
          <p className="text-2xl font-semibold">Fullstack and Software Engineer.</p>
          <h1 className="text-8xl font-black max-[524px]:text-5xl">ATSHUSHI</h1>
          <p className="mt-2 max-w-lg font-medium opacity-75 text-lg">Hello! Welcome to my personal portfolio. I am a programmer that works mainly in the web and software area, with vast experience in html, css, javascript and uses elixir as a hobby.</p>

          <button onClick={() => openCategory('.socials')} className="bg-[#1473B6] font-bold mt-10 w-44 h-12 rounded-sm text-white">Contact Now</button>
        </div>

        <ul className="w-full flex flex-col items-end max-[832px]:hidden">
          <li className="text-xl cursor-pointer"><a onClick={() => openCategory('.projects')}>Projects</a></li>
          <li className="text-xl cursor-pointer"><a onClick={() => openCategory('.socials')}>Socials</a></li>
          <li className="text-xl cursor-pointer"><a onClick={() => openCategory('.techs')}>Techs</a></li>
        </ul>
      </div>

      <div className="min-[576px]:p-20 p-5">
        <div className="projects hidden mt-24">
          <p className="opacity-75 font-bold">PROJECTS</p>
          <div className="flex items-center flex-wrap gap-10 mt-3">
            <a href="https://www.animetv.com.br" target="_blank" className="w-96 h-72 p-3 bg-[#F8F8F9] rounded-xl">
              <img className="w-full rounded-lg" src="https://media.discordapp.net/attachments/1081707629266608269/1081762875200258138/image.png?width=1355&height=670" />
              <h1 className="mt-3 font-bold text-xl">Anime TV</h1>
              <p>A site to watch animes (Front-end, Web Design)</p>
            </a>
            <a href="https://randomcolor-ten.vercel.app" target="_blank" className="w-96 h-72 p-3 bg-[#F8F8F9] rounded-xl">
              <img className="w-full rounded-lg" src="https://media.discordapp.net/attachments/842491790833876992/1082040798507438204/image.png?width=1346&height=671" />
              <h1 className="mt-3 font-bold text-xl">Generate Color</h1>
              <p>A site to generate random colors (Fullstack, Web Design)</p>
            </a>
            <a href="https://prismbot.site" target="_blank" className="w-96 h-72 p-3 bg-[#F8F8F9] rounded-xl">
              <img className="w-full rounded-lg" src="https://media.discordapp.net/attachments/842491790833876992/1084899308807135403/image.png?width=1327&height=671" />
              <h1 className="mt-3 font-bold text-xl">PrismBot</h1>
              <p>A Discord Music Bot (Fullstack, Web Design)</p>
            </a>
          </div>
        </div>
        <div className="socials hidden mt-24">
          <p className="opacity-75 font-bold">SOCIALS</p>
          <div className="flex items-center flex-wrap gap-10 mt-3">
            <a href="https://github.com/atshushi" target="_blank" className="flex items-center w-36 h-14 pl-3 bg-[#F8F8F9] rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <p className="w-full flex justify-center">GITHUB</p>
            </a>
            <a href="https://discord.com/users/715682977295761451" target="_blank" className="flex items-center w-36 h-14 pl-3 bg-[#F8F8F9] rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
              </svg>
              <p className="w-full flex justify-center">DISCORD</p>
            </a>
            <a href="malito:atsushithesushi@gmail.com" target="_blank" className="flex items-center w-36 h-14 pl-3 bg-[#F8F8F9] rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <p className="w-full flex justify-center">EMAIL</p>
            </a>
          </div>
        </div>
        <div className="techs mt-24 w-full">
          <p className="opacity-75 font-bold">LANGUAGES</p>
          <div className="flex items-center flex-wrap gap-10 mt-3 w-full">
            <div className="flex items-center w-36 h-14 pl-3 bg-[#F8F8F9] rounded-lg">
              <svg width="38" height="38" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <defs>
                  <linearGradient id="a" x1="17.249" y1="-335.597" x2="14.973" y2="-309.994" gradientTransform="matrix(1, 0, 0, -1, 0, -306)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#fff" stopOpacity="0" />
                    <stop offset="0.01" stopColor="#f7f6f8" stopOpacity="0.04" />
                    <stop offset="0.09" stopColor="#aa9cb3" stopOpacity="0.39" />
                    <stop offset="0.2" stopColor="#6f567e" stopOpacity="0.66" />
                    <stop offset="0.32" stopColor="#452459" stopOpacity="0.86" />
                    <stop offset="0.5" stopColor="#2d0843" stopOpacity="0.97" />
                    <stop offset="1" stopColor="#26003d" />
                  </linearGradient>
                </defs>
                <path d="M17.8,8.591c2.079,4.584,7.64,6.5,7.141,12.474-.582,7.017-5.551,8.784-8.316,8.909a8.815,8.815,0,0,1-9.4-7.485C5.618,15.046,12.655,3.632,16.709,2A15.083,15.083,0,0,0,17.8,8.591Zm-.166,18.857a.423.423,0,0,0-.057-.327c-.593-1.1-5.81-1.645-6.907-1.752a8.272,8.272,0,0,0,1.635,1.3,7.766,7.766,0,0,0,2.814,1.041C15.922,27.831,17.467,27.933,17.635,27.447Z" />
                <g>
                  <path d="M18.248,10.618c4.47,4.823,6.445,4.979,6.237,10.478-.249,6.476-4.543,8.191-7.058,8.42-4.2.551-7.495-1.528-8.358-5.686C7.312,17.063,12.978,6.023,16.637,4.36A15.323,15.323,0,0,0,18.258,10.6Z" />
                </g>
                <g>
                  <path d="M17.385,9.921C20.369,14,24.319,13.7,25,19.641c.094,6.923-3.6,9.283-6.237,9.948-4.5,1.279-8.514-.645-10.094-5-3.035-7,2.651-18.514,6.31-20.915a15.083,15.083,0,0,0,2.37,6.237Z" />
                </g>
              </svg>
              <p className="w-full flex justify-center">ELIXIR</p>
            </div>
            <div className="flex items-center w-36 h-14 pl-3 bg-[#F8F8F9] rounded-lg">
              <svg width="38" height="38" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="m1 0 1.275 14.4L8 16l5.723-1.599L15 0H1zm11.235 4.709H5.524l.16 1.809h6.391l-.481 5.424L8 12.945l-.002.001-3.592-1.004-.252-2.837h1.76l.13 1.472 1.953.532.003-.002 1.955-.532.204-2.291H4.082l-.474-5.34h8.783l-.156 1.765z" />
              </svg>
              <p className="w-full flex justify-center">HTML5</p>
            </div>
            <div className="flex items-center w-36 h-14 pl-3 bg-[#F8F8F9] rounded-lg">
              <svg width="38" height="38" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M3.19467,2,4.79734,19.99433,11.98947,22l7.2119-2.01315L20.80533,2ZM17.476,6.12274l-.53371,5.99468.00193.03234-.00255.07415v-.00068l-.37922,4.19135-.04178.37236L12,18.03717v.00063l-.00366.00317L7.48367,16.78309l-.30574-3.46518h2.213l.15692,1.76226,2.45276.6644L12,15.74569l2.46141-.6743.26028-2.86933H9.57589L9.53173,11.717l-.10093-1.1364-.05224-.61022h5.53877l.20163-2.2317H6.68232L6.638,7.2542l-.10026-1.137L6.48482,5.507H17.52887Zm0,0" />
              </svg>
              <p className="w-full flex justify-center">CSS</p>
            </div>
            <div className="flex items-center w-44 h-14 pl-3 bg-[#F8F8F9] rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24">
                <path d="M0,12v12h24V0H0V12z M14.563,19.626c0.108-0.061,0.511-0.294,0.892-0.515l0.69-0.4l0.145,0.214c0.202,0.308,0.643,0.731,0.91,0.872c0.766,0.404,1.817,0.347,2.335-0.118c0.193-0.163,0.314-0.405,0.314-0.675c0-0.016,0-0.031-0.001-0.047v0.002c0-0.278-0.035-0.4-0.18-0.61c-0.186-0.266-0.567-0.49-1.649-0.96c-1.238-0.533-1.771-0.864-2.259-1.39c-0.294-0.334-0.521-0.736-0.653-1.178l-0.006-0.022c-0.091-0.339-0.114-1.189-0.042-1.531c0.255-1.197,1.158-2.03,2.461-2.278c0.423-0.08,1.406-0.05,1.821,0.053v0.001c0.61,0.152,1.074,0.423,1.501,0.865c0.221,0.236,0.549,0.666,0.575,0.77c0.008,0.03-1.036,0.73-1.668,1.123c-0.023,0.015-0.115-0.084-0.217-0.236c-0.31-0.45-0.633-0.644-1.128-0.678c-0.728-0.05-1.196,0.331-1.192,0.967c0,0.011-0.001,0.024-0.001,0.037c0,0.151,0.038,0.293,0.105,0.417l-0.002-0.005c0.16,0.331,0.458,0.53,1.39,0.933c1.719,0.74,2.454,1.227,2.911,1.92c0.51,0.773,0.625,2.008,0.278,2.926c-0.38,0.998-1.325,1.676-2.655,1.9c-0.411,0.073-1.386,0.062-1.828-0.018c-0.964-0.172-1.878-0.648-2.442-1.273c-0.221-0.243-0.652-0.88-0.625-0.925C14.354,19.751,14.453,19.69,14.563,19.626z M5.258,12.065c0-0.534,0.011-0.98,0.026-0.99c0.012-0.016,1.913-0.024,4.217-0.02l4.195,0.012l0.011,0.979l0.008,0.983H10.59v8.876H8.38v-8.876H5.258V12.065z" />
              </svg>
              <p className="w-full flex justify-center">TYPESCRIPT</p>
            </div>
            <div className="flex items-center w-44 h-14 pl-3 bg-[#F8F8F9] rounded-lg">
              <svg className="mt-3.5" xmlns="http://www.w3.org/2000/svg" width="60" height="60">
                <path d="M6.8 6.8v34.4h34.4V6.8Zm18.73 25.79c0 4.23-2.05 5.64-5.09 5.64a7.65 7.65 0 0 1-2.34-.37l.34-2.26a5.19 5.19 0 0 0 1.72.28c1.6 0 2.57-.72 2.57-3.38v-9.84h2.8Zm6.52 5.62a9 9 0 0 1-4.14-1l.62-2.32a7.76 7.76 0 0 0 3.7 1C34 35.9 35 35.06 35 33.81s-.76-1.81-2.7-2.54c-2.53-.9-4.14-2.26-4.14-4.45 0-2.51 2.09-4.4 5.42-4.4a8.06 8.06 0 0 1 3.67.76l-.67 2.25a6.63 6.63 0 0 0-3.06-.72c-1.78 0-2.53.94-2.53 1.84 0 1.18.89 1.73 2.93 2.51 2.66 1 3.94 2.35 3.94 4.55 0 2.47-1.86 4.6-5.81 4.6Z" />
              </svg>
              <p className="w-full flex justify-center">JAVASCRIPT</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
