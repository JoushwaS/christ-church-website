const { async } = require("regenerator-runtime");
const cloudinary = require("./cloudinary");

module.exports = {
  cloudinaryUpload: async (path, type) => {
    // console.log("type", type);
    let secureURL = await cloudinary.uploader.upload(path, {
      resource_type: type ? type : "auto",
    });
    return secureURL.secure_url;
  },

  cloudinaryUploadAudio: async (path, type) => {
    let secureURL = await cloudinary.uploader
      .upload(path, {
        resource_type: type ? type : "auto",
        // public_id: "myfolder/mysubfolder/dog_closeup",
        // chunk_size: 6000000,
        // eager: [
        //   { width: 300, height: 300, crop: "pad", audio_codec: "none" },
        //   {
        //     width: 160,
        //     height: 100,
        //     crop: "crop",
        //     gravity: "south",
        //     audio_codec: "none",
        //   },
        // ],
        // eager_async: true,
        // eager_notification_url: "https://mysite.example.com/notify_endpoint",
      })
      .then((result) => console.log("cloudinary audio upload response", result))
      .catch((err) => {
        console.error(err);
      });
  },
};
