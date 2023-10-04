import helloWorld from "./helloWorld.js";
import AmbilDataUser from "./AmbilDataUser.js";

async function messages(){
    const msg = await
    helloWorld()
    console.log(msg);
}
messages()
AmbilDataUser()