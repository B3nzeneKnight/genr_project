import React,{useState} from 'react'
import axios from 'axios';

const changeLyrics = (generate) =>{
  document.getElementById("genImage").src = generate;
}


const genImage = (prompt,modelName) => {
  console.log(modelName)
  const generateImage = {
    method: 'POST',
    url: 'https://v1.genr.ai/api/circuit-element/generate-image',
    headers: {'Content-Type': 'application/json'},
    data: {
      prompt: `${prompt}`,
      height: 512,
      width: 512,
      model: `${modelName}`,
      n_images: 1
    }
  };
  axios.request(generateImage).then(function (response) {
    let generate = response.data.output;
    console.log(generate)
    changeLyrics(generate)
  }).catch(function (error) {
    console.error(error);
  });
}
const ImageGenerator = ({lyrics}) => {
  const [modelName,setModelName] = useState("state-diffusion")
  const [prompt1,setPrompt1] = useState("Image Caption will be displayed here")
  console.log(lyrics)

  let handleSubmitImage = async (e) => {
    e.preventDefault();
    const verse = lyrics.slice(lyrics.split("\n", 1).join("\n").length,lyrics.split("\n", 5).join("\n").length);
    console.log("hi",verse);
    
const generatePrompt = {
  method: 'POST',
  url: 'https://v1.genr.ai/api/circuit-element/generate-prompt',
  headers: {'Content-Type': 'application/json'},
  data: {
    text: `${verse}`,
    temperature: 0.5
  }
};

axios.request(generatePrompt).then(function (response) {
  console.log(response.data);
  setPrompt1(response.data.output)
  genImage(response.data.output,modelName);
}).catch(function (error) {
  console.error(error);
});





};
 
  return (
    <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-6 text-gray-900">Personal Information</h3>
              <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={handleSubmitImage}>
            <figure class="max-w-lg">
              <img id="genImage" class="h-auto max-w-full rounded-lg" src="https://flowbite.com/docs/images/examples/image-3@2x.jpg" alt="image description"/>
              <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">{prompt1}</figcaption>
            </figure>
            <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
                        Model Name
                      </label>
                      <input
                        type="text"
                        name="model"
                        id="model"
                        value={modelName}
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        onChange={(e) => setModelName(e.target.value)}
                      />
                    </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
            </form>
          </div>
        </div>
      </div>

  )
}

export default ImageGenerator