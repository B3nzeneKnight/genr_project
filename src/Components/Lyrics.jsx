import React,{useState} from 'react'
import axios from 'axios';

const LyricsGenerator = (props) => {
  const [genre, setGenre] = useState("");
  const [artist, setArtist] = useState("");
  const [keywords1, setKeyword1] = useState("");
  const [keywords2, setKeyword2] = useState("");
  const [keywords3, setKeyword3] = useState("");


  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(genre);
    console.log(artist);
    console.log(keywords1);
    console.log(keywords2);
    console.log(keywords3);
const options = {
  method: 'POST',
  url: 'https://v1.genr.ai/api/use-case/generate-lyrics',
  headers: {'Content-Type': 'application/json'},
  data: {
    genre: `${genre}`,
    artist:`${artist}`,
    modifier1: `${keywords1}`,
    modifier2: `${keywords2}`,
    modifier3:`${keywords3}`,
    chord_flag: false,
    complex_chord_flag: false,
    key: 'C',
    scale: 'Major',
    temperature: 0,
  }
};

axios.request(options).then(function (response) {
  console.log(response.data)
  props.setLyrics(response.data.output);
}).catch(function (error) {
  console.error(error);
});
  };



  return (
    <>
    <div className="mt-10 sm:mt-0">
    <h1 className="text-4xl text-center mb-40 font-bold tracking-tight text-gray-900 sm:text-6xl">
               Generate Music Video Lyrics
              </h1>
        {/* <div className="md:grid md:grid-cols-3 md:gap-6"> */}
          
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={handleSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
                        Genre
                      </label>
                      <input
                        type="text"
                        name="genre"
                        id="genre"
                        value={genre}
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        onChange={(e) => setGenre(e.target.value)}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="artist" className="block text-sm font-medium text-gray-700">
                        Artist
                      </label>
                      <input
                        type="text"
                        name="artist"
                        value={artist}
                        id="artist"
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        onChange={(e) => setArtist(e.target.value)}
                      />
                    </div>



                    <div className="col-span-6">
                      <label htmlFor="keywords1" className="block text-sm font-medium text-gray-700">
                        Keywords 1
                      </label>
                      <input
                        type="text"
                        name="keywords1"
                        id="keywords1"
                        value={keywords1}
                        autoComplete="keywords1"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                        onChange={(e) => setKeyword1(e.target.value)}
                     />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="keywords2" className="block text-sm font-medium text-gray-700">
                        Keywords 2
                      </label>
                      <input
                        type="text"
                        name="keywords2"
                        id="keywords2"
                        value={keywords2}
                        autoComplete="keywords2"
                        onChange={(e) => setKeyword2(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="keywords2" className="block text-sm font-medium text-gray-700">
                        Keywords 3
                      </label>
                      <input
                        type="text"
                        name="keywords2"
                        id="keywords2"
                        value={keywords3}
                        autoComplete="keywords2"
                        onChange={(e) => setKeyword3(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center items-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        {/* </div> */}
      </div>
      <div
  className="mt-40 mb-40 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl"
>

<h1 className="text-xl text-center font-bold tracking-tight text-gray-900 sm:text-3xl">
               Lyrics Output
              </h1>
  <a className="block rounded-xl bg-white p-4 sm:p-6 lg:p-8" href="">
    <div className="mt-16">
      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
        Lyrics
      </h3>

      <p className="mt-2 text-sm text-gray-500">
      {props.lyrics}
      </p>
    </div>
  </a>
</div>
</>
  )
}

export default LyricsGenerator