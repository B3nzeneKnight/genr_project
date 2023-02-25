import React,{useState} from 'react'
import axios from 'axios';

const changeLyrics = (generate) =>{
  document.getElementById("genImage").src = generate;
}


// const genImage = (prompt) => {
//   const generateImage = {
//     method: 'POST',
//     url: 'https://v1.genr.ai/api/circuit-element/generate-image',
//     headers: {'Content-Type': 'application/json'},
//     data: {
//       prompt: `${prompt}`,
//       height: 512,
//       width: 512,
//       model: `${modelName}`,
//       n_images: 1
//     }
//   };
//   axios.request(generateImage).then(function (response) {
//     let generate = response.data.output;
//     console.log(generate)
//     changeLyrics(generate)
//   }).catch(function (error) {
//     console.error(error);
//   });
// }

function render(id){
    console.log(id);
    const options = {
        method: 'GET',
        url: 'https://large-text-to-speech.p.rapidapi.com/tts',
        params: {id: `${id}`},
        headers: {
          'X-RapidAPI-Key': '9b4f7b9d8dmsh413c3871e0a31f7p1e5f5djsnd6cc8bf2ed9f',
          'X-RapidAPI-Host': 'large-text-to-speech.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
          

      }).catch(function (error) {
          console.error(error);
      });
    }



const AudioGenerator = () => {


  let handleSubmitAudio = async (e) => {
    e.preventDefault();
    const speech = {
        method: 'POST',
        url: 'https://large-text-to-speech.p.rapidapi.com/tts',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '9b4f7b9d8dmsh413c3871e0a31f7p1e5f5djsnd6cc8bf2ed9f',
          'X-RapidAPI-Host': 'large-text-to-speech.p.rapidapi.com'
        },
        data: '{"text":"Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away."}'
      };
      
      axios.request(speech).then(function (response) {
          console.log(response.data);
          const myTimeout = setTimeout(render,5000,response.data.id)
      }).catch(function (error) {
          console.error(error);
      });
};

  return (
    <div className="mt-40 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-6 text-gray-900">Personal Information</h3>
              <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={handleSubmitAudio}>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Generate
                  </button>
                </div>
            </form>
            
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <a href="" id="download"><button  
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Download
                  </button>
                  </a>
                </div>
          </div>
        </div>
      </div>

  )
}

export default AudioGenerator