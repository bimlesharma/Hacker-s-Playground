"use client";
import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import { motion } from "framer-motion";

const Swag: React.FC = () => {
  const [image, setImage] = useState<{
    src: string;
    width: number;
    height: number;
  } | null>(null);
  const [name, setName] = useState<string>("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const defaultAvatarRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    drawSwag();
  }, [name, image]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx && defaultAvatarRef.current) {
        const defaultAvatarImg = defaultAvatarRef.current;
        defaultAvatarImg.onload = () => {
          ctx.drawImage(defaultAvatarImg, 0, 0, canvas.width, canvas.height);
        };
      }
    }
  }, []);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result as string;
        img.onload = () => {
          setImage({
            src: reader.result as string,
            width: img.width, 
            height: img.height, 
          });
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadSwag = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const tempCanvas = document.createElement("canvas");
      const tempCtx = tempCanvas.getContext("2d");
      const scaleFactor = 2;

      tempCanvas.width = canvas.width * scaleFactor;
      tempCanvas.height = canvas.height * scaleFactor;

      if (tempCtx) {
        tempCtx.drawImage(
          canvas,
          0,
          0,
          canvas.width,
          canvas.height,
          0,
          0,
          tempCanvas.width,
          tempCanvas.height
        );

        const dataURL = tempCanvas.toDataURL("image/png", 1.0);

        const downloadLink = document.createElement("a");
        downloadLink.href = dataURL;
        downloadLink.download = "generated_swag.png";
        downloadLink.click();
      }
    }
  };

  const drawSwag = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      ctx?.clearRect(0, 0, canvas.width, canvas.height);

      if (image) {
        const uploadedImage = new Image();
        uploadedImage.onload = () => {
          let sx, sy, sWidth, sHeight;
          const aspectRatioCanvas = canvas.width / canvas.height;
          const aspectRatioImage = uploadedImage.width / uploadedImage.height;

          if (aspectRatioImage > aspectRatioCanvas) {
            sWidth = uploadedImage.height * aspectRatioCanvas;
            sHeight = uploadedImage.height;
            sx = (uploadedImage.width - sWidth) / 2;
            sy = 0;
          } else {
            sWidth = uploadedImage.width;
            sHeight = uploadedImage.width / aspectRatioCanvas;
            sx = 0;
            sy = (uploadedImage.height - sHeight) / 2;
          }

          ctx?.drawImage(
            uploadedImage,
            sx,
            sy,
            sWidth,
            sHeight,
            0,
            0,
            canvas.width,
            canvas.height
          );
        };
        uploadedImage.src = image.src;
      } else {
        const defaultAvatarImg = defaultAvatarRef.current;
        if (defaultAvatarImg && ctx) {
          ctx.drawImage(defaultAvatarImg, 0, 0, canvas.width, canvas.height);
        }
      }

      const templateImage = new Image();
      templateImage.onload = () => {
        if (ctx) {
          ctx.drawImage(templateImage, 0, 0, canvas.width, canvas.height);

          ctx.font = "bold 50px Arial";
          ctx.fillStyle = "black";
          ctx.textAlign = "center";
          ctx.fillText(
            name || "Hi, I'm a Hacker!",
            canvas.width / 2,
            canvas.height - 130
          );
        }
      };
      templateImage.src = "/frame.png";
    }
  };

  return (
    <div
      id="digitalswags"
      className="flex items-center py-12 pt-20 relative text-white min-h-screen"
    >
      <div className="container mx-auto px-4 md:px-0">
        <motion.div
          className="flex flex-row justify-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="grad-text text-4xl md:text-6xl font-squid-game uppercase font-bold py-5">
            Digital<span className="text-pink-600"> Swag</span>
          </h1>
          
        </motion.div>
        <motion.div
          className="flex flex-row justify-center text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="mb-1 block md:hidden">
                  To get a personalized Hackers' Playground Badge, just add your
                  name & upload your image. Download it and share it on socials
                  using{" "}
                  <span className=" hover:text-pink-300">
                    #HackersPlayground{" "}
                  </span>
                  <span className=" hover:text-pink-300">#TechNexus</span> and
                  tagging{" "}
                  <a href="https://www.instagram.com/tech_nexus_community/">
                    @Tech_Nexus_Community
                  </a>
                  !
                </p>
          
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center xl:mx-40">
          <div className="flex w-[90%] md:w-[80%] justify-center mb-5 md:mb-0 -10">
            <motion.div
              className="md:w-[80%]"
              whileHover={{ scale: 1.0 }}
              transition={{ duration: 0.3 }}
            >
              <canvas
                ref={canvasRef}
                width={900}
                height={1125}
                style={{
                  display: "block",
                  position: "relative",
                  width: "100%",
                }}
                className="rounded-none border-0 border-pink-600 bg-black"
              ></canvas>
            </motion.div>
            <img
              ref={defaultAvatarRef}
              className=" object-cover"
              src="/avtar.png"
              alt="Default Avatar"
              style={{ display: "none" }}
            />
          </div>

          <motion.div
            className="md:w-1/2 w-[90%] lg:w-2/3 flex flex-col justify-between md:ml-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="text-md lg:text-xl text-center md:text-left mb-2 lg:mb-5">
              <motion.div
                className="heading flex justify-center mb-0 md:mb-10 "
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="lg:text-4xl text-3xl font-bold -mb-16 md:-mb-8 hidden md:block">
                  Hackers&apos; Playground
                </h2>
                
              </motion.div>

              <p className="lg:mb-3 mb-1 hidden md:block">
                Ready for the ultimate coding challenge? Join us for
                Hackers&apos; Playground 2025—a 30-hour offline hackathon,
                filled with non-stop innovation and exciting games like Squid
                Game!
              </p>

              <p className="lg:mb-3 mb-1 hidden md:block">
                To get a personalized Hackers' Playground Badge, just add your
                name & upload your image. Download it and share it on socials
                using{" "}
                <span className=" hover:text-pink-300">
                  #HackersPlayground{" "}
                </span>
                <span className=" hover:text-pink-300">#TechNexus</span> and
                tagging{" "}
                <a href="https://www.instagram.com/tech_nexus_community/">
                  @Tech_Nexus_Community
                </a>
                !
              </p>
              <p className="text-sm lg:mb-3 mb-1 text-pink-700">
                <i>
                  * We respect your privacy and never store your pictures on our servers.
                </i>
              </p>
            </div>

            <div className="flex flex-col md:justify-between">
              <div className="flex gap-4">
                <motion.input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Your Name"
                  className="rounded-sm border-none w-full border-white bg-gray-800 px-4 py-2 text-white text-lg mb-3 md:mb-0 "
                  whileFocus={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="flex flex-col md:flex-row justify-end my-3 gap-5">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  ref={imageInputRef}
                  style={{ display: "none" }}
                />
                <motion.button
                  onClick={() => imageInputRef.current?.click()}
                  className="px-4 py-2 bg-pink-600 text-white rounded-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Upload your photo
                </motion.button>
                <motion.button
                  onClick={handleDownloadSwag}
                  className="px-4 py-2 bg-pink-600 text-white rounded-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Download
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Swag;
