import Playlist from './Playlist';

const playlists = [
  {
    classes: '',
    title: "Hip Hop Mix",
    description: 'Dr. Dre, 2Pac, 50 Cent and more...',
    coverUrl: 'https://i.scdn.co/image/ab67706c0000da84081540c67c4d245422476785',
  },
  {
    classes: 'hidden sm:block',
    title: 'House Mix',
    description: 'BLOND:ISH, Rony Seikaly, dj poolboi and more...',
    coverUrl: 'https://seed-mix-image.spotifycdn.com/v6/img/desc/House/en/default',
  },
  {
    classes: 'hidden lg:block',
    title: 'JAY-Z Mix',
    description: 'Outkast, 50 Cent and The Notorious B.I.G',
    coverUrl: 'https://thisis-images.scdn.co/37i9dQZF1DZ06evO1XGbvi-default.jpg',
  },
  {
    classes: 'hidden xl:block',
    title: '2000s Mix',
    description: 'The Game, Xzibit, 50 Cent and more...',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b2736fb02b12fa4c68f84cd92142',
  },
  {
    classes: 'hidden 2xl:block',
    title: 'Chill Mix',
    description: 'Sound Quelle, Tuna, Peer Tase and more...',
    coverUrl: 'https://seed-mix-image.spotifycdn.com/v6/img/desc/Chill/en/default',
  },
  {
    classes: 'hidden 3xl:block',
    title: 'Dance/Electronic Mix',
    description: 'Matisse & Sadko, DubVision, The HIM and more...',
    coverUrl: 'https://i.scdn.co/image/ab67706c0000da840af2156448346f7e4d4d4a78',
  },
  {
    classes: 'hidden 4xl:block',
    title: '2010s Mix',
    description: 'Sound Quelle, Maya Jane Coles, Darwish and more...',
    coverUrl: 'https://i.scdn.co/image/ab67706f00000002b0fe40a6e1692822f5a9d8f1',
  },
  {
    classes: 'hidden 5xl:block',
    title: 'Pop Mix',
    description: 'Miley Cyrus, Nelly Furtado, OneRepublic and more...',
    coverUrl: 'https://seed-mix-image.spotifycdn.com/v6/img/desc/Pop/en/default',
  },
  {
    classes: 'hidden 6xl:block',
    title: 'This is Dennis Lloyd',
    description: 'This is Dennis Lloyd. The essential tracks, all in one playlist..',
    coverUrl: 'https://thisis-images.scdn.co/37i9dQZF1DZ06evO2804tq-default.jpg',
  },
];

function TheMain({ showToast, toggleScrolling }) {
  return (
    <main className="text-white relative">
      <div className="h-[275px] bg-gradient-to-b from-[#1f1f1f] to-[#121212] absolute w-full"></div>
      <div className="relative pt-[24px] pb-[48px] px-[32px] space-y-9 max-w-screen-5xl">
        <div>
          <div className="flex flex-wrap justify-between items-end gap-x-6 mb-[18px]">
            <div>
              <h2 className="text-2xl font-semibold hover:underline capitalize">
                <a href="/">Your top mixes
</a>
              </h2>
            </div>
            <a
              href="/"
              className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6"
            >
              See all
            </a>
          </div>
          <div className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
            {playlists.map((playlist) => (
              <Playlist
                key={playlist.title}
                showToast={showToast}
                toggleScrolling={toggleScrolling}
                {...playlist}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-between items-end gap-x-6 mb-[18px]">
            <div>
              <h2 className="text-2xl font-semibold hover:underline capitalize">
                <a href="/">Based on your recent listening</a>
              </h2>
              <p className="text-sm text-[#b3b3b3]">
              </p>
            </div>
            <a
              href="/"
              className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6"
            >
              See all
            </a>
          </div>
          <div className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
            <a
              href="/"
              className="relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group"
            >
              <div className="relative">
                <img
                  src="https://i.scdn.co/image/ab67706f0000000269f389d3d8ef64498d42798d"
                  className="rounded shadow-lg"
                  alt=""
                />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                G2 Esports
              </h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
              The official G2 Esports playlist. Currently curated by: G2 CSGO
              </p>
              <ul className="absolute top-9 left-9 bg-[#282828] text-[#eaeaea] text-sm divide-y divide-[#3e3e3e] p-1 rounded shadow-xl cursor-default whitespace-nowrap z-10 hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                    Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between items-center">
                    Share
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  <ul className="absolute top-0 left-full bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                        Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                        Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                    About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                    Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
            <a
              href="/"
              className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden sm:block"
            >
              <div className="relative">
                <img
                  src="https://i.scdn.co/image/ab67706f000000023f22beb2471ef8949bb95d97"
                  className="rounded shadow-lg"
                  alt=""
                />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                Run This Town
              </h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
              Run to the world of R&B and hip-hop.
              </p>
            </a>
            <a
              href="/"
              className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden lg:block"
            >
              <div className="relative">
                <img
                  src="https://i.scdn.co/image/ab67706f00000002f2fbd3e5c680c811a13deead"
                  className="rounded shadow-lg"
                  alt=""
                />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                Gold School
              </h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
              Taking it way back! Cover: Lauryn Hill
              </p>
            </a>
            <a
              href="/"
              className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden xl:block"
            >
              <div className="relative">
                <img
                  src="https://i.scdn.co/image/ab67706f00000002128b6654e84ef4cffba70489"
                  className="rounded shadow-lg"
                  alt=""
                />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                Party Hits 2000s
              </h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
              The biggest party hits of the 2000s. Cover: Shakira.
              </p>
            </a>
            <a
              href="/"
              className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 2xl:block"
            >
              <div className="relative">
                <img
                  src="https://i.scdn.co/image/ab67706f00000002c771198277ecd33007dd2de4"
                  className="rounded shadow-lg"
                  alt=""
                />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                Beast Mode
              </h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
              Get your beast mode on!
              </p>
            </a>
            <a
              href="/"
              className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 3xl:block"
            >
              <div className="relative">
                <img
                  src="https://i.scdn.co/image/ab67706f000000022e2610fd971eb82d1b5fbd14"
                  className="rounded shadow-lg"
                  alt=""
                />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                Throwback Thursday
              </h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
              Ju-ju-ju-just dance pop from the 2000s. Cover: Lady Gaga
              </p>
            </a>
            <a
              href="/"
              className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 4xl:block"
            >
              <div className="relative">
                <img
                  src="https://i.scdn.co/image/ab67706f00000002696803fc4064f73c84a7dd76"
                  className="rounded shadow-lg"
                  alt=""
                />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                I Love My '90s Hip-Hop
              </h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
              Real rap music from the golden era
              </p>
            </a>
            <a
              href="/"
              className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 5xl:block"
            >
              <div className="relative">
                <img
                  src="https://i.scdn.co/image/ab67706f000000022d73fc31df60c212ae5b0fd4"
                  className="rounded shadow-lg"
                  alt=""
                />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                Viral Dance
              </h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
              pov: u hand the internet the aux
              </p>
            </a>
            <a
              href="/"
              className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 6xl:block"
            >
              <div className="relative">
                <img
                  src="https://i.scdn.co/image/ab67706f00000002d2d1cbd94520146a3fecc8fd"
                  className="rounded shadow-lg"
                  alt=""
                />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                Beast Mode Hip-Hop
              </h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
              Energy tracks to get your beast mode on.
              </p>
            </a>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-between items-end gap-x-6 mb-[18px]">
            <div>
              <h2 className="text-2xl font-semibold hover:underline capitalize">
                <a href="/">Recently played</a>
              </h2>
              <p className="text-sm text-[#b3b3b3]"></p>
            </div>
            <a
              href="/"
              className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6"
            >
              See all
            </a>
          </div>
          <div className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
            <a
              href="/"
              className="relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group"
            >
              <div className="relative">
                <img
                  src="https://i.scdn.co/image/ab67616d00001e0285da901c4973950913b9343b"
                  className="rounded shadow-lg"
                  alt=""
                />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                Starting To Feel
              </h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Rising Dust
              </p>
              <ul className="absolute top-9 left-9 bg-[#282828] text-[#eaeaea] text-sm divide-y divide-[#3e3e3e] p-1 rounded shadow-xl cursor-default whitespace-nowrap z-10 hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                    Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between items-center">
                    Share
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  <ul className="absolute top-0 left-full bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                        Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                        Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                    About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                    Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
            <a
              href="/"
              className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden sm:block"
            >
              <div className="relative">
                <img
                  src="https://thisis-images.scdn.co/37i9dQZF1DZ06evO2804tq-default.jpg"
                  className="rounded shadow-lg"
                  alt=""
                />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                This Is Dennis Lloyd
              </h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
              This is Dennis Lloyd. The essential tracks, all in one playlist.
              </p>
            </a>
            <a
              href="/"
              className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden lg:block"
            >
              <div className="relative">
                <img
                  src="https://i.scdn.co/image/ab67616d0000b2736fb02b12fa4c68f84cd92142"
                  className="rounded shadow-lg"
                  alt=""
                />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                2000s Mix 
              </h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                D12, Kenya West, The Game and more...
              </p>
            </a>
            <a
              href="/"
              className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden xl:block"
            >
              <div className="relative">
                <img
                  src="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_il_default.jpg"
                  className="rounded shadow-lg"
                  alt=""
                />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                Top 50 - Israel
              </h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
              Your daily update of the most played tracks right now - Israel.
              </p>
            </a>
            <a
              href="/"
              className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 2xl:block"
            >
              <div className="relative">
                <img
                  src="https://i.scdn.co/image/ab67706f000000021888f73e300bd0ee976b0180"
                  className="rounded shadow-lg"
                  alt=""
                />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                Brain Food
              </h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Hypnotic electronic for studies and a relax.
              </p>
            </a>
            <a
              href="/"
              className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 3xl:block"
            >
              <div className="relative">
                <img
                  src="https://i.scdn.co/image/ab67706f00000002efe402d63f3d3d16ff24406d"
                  className="rounded shadow-lg"
                  alt=""
                />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                Running Rock Mix
              </h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
              Running Rock music picked just for you.
              </p>
            </a>
            <a
              href="/"
              className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 4xl:block"
            >
              <div className="relative">
                <img
                  src="https://i.scdn.co/image/ab67706c0000da8418435c59da95e34b6a977345"
                  className="rounded shadow-lg"
                  alt=""
                />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                Deep House Relax
              </h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
              Forget it and disappear with deep & melodic house.
              </p>
            </a>
            <a
              href="/"
              className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 5xl:block"
            >
              <div className="relative">
                <img
                  src="https://i.scdn.co/image/ab67706f00000002bd07bbcc00b0283f8130c46b"
                  className="rounded shadow-lg"
                  alt=""
                />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                Martin Garris DJ Mix: Sentio
              </h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
              Superstar DJ and producer, Martin Garrix readies us for the summer time with a mix featuring bangers from his new album, Sentio!
              </p>
            </a>
            <a
              href="/"
              className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 6xl:block"
            >
              <div className="relative">
                <img
                  src="https://i.scdn.co/image/ab67706c0000da841590a62eae7397f65ec23020"
                  className="rounded shadow-lg"
                  alt=""
                />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                Best Rap & Hip-Hop 90s/00s
              </h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
              Best of Rap and Hip Hop from 1990 and 2000.
              </p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TheMain;
