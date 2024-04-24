"use server"
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dmz24qiwu',
    api_key: '434172343744126',
    api_secret: 'thuiy96dGrS951cP5yEXa7aANpc',
    secure: true
});

export const uploadImageToCloudinary = async (file) => {
    try {
        const result = await cloudinary.uploader.upload(file, {
        folder: 'bruktglede_uploads',
        overwrite: true,
        use_filename: true,
        unique_filename: false,
    });
    // Return the secure URL of the uploaded image
    return result.secure_url; 

    } catch (error) {
        throw new Error('Error uploading image to Cloudinary');
    }
};






// import { v2 as cloudinary } from 'cloudinary';

// // Configuration 
// export const cloud = async (fileInput) => {
//     cloudinary.config({
//         cloud_name: 'dmz24qiwu',
//         api_key: '434172343744126',
//         api_secret: 'thuiy96dGrS951cP5yEXa7aANpc'
//     });
//     const { secure_url } = await cloud.uploader.upload(fileInput, {
//         folder: 'bruktglede_uploads' // Set your desired folder in Cloudinary
//     });
//     return secure_url
// }