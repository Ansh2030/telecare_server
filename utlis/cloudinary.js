import {v2 as cloudinary} from "cloudinary"

import fs from "fs"


cloudinary.config({ 
  cloud_name: 'dkwwtwgch', 
  api_key: '542355927722287', 
  api_secret: 'VRVnDf-hp-QqCAupRSDFzYxD7gw' 
});

const uploadOnCloudianry = async (localFilePath) => {
    try {
       console.log(localFilePath)
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfull
        console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response.url;

    } catch (error) {
        console.log(error)
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}



export {uploadOnCloudianry}