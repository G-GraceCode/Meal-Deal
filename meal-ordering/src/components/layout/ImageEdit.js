"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";

export default function ImageEdit({ link, setLink }) {
  // const [link ,setLink] = useState('')
  const handleFileChange = async (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      try {
        const data = new FormData();
        data.set("file", files[0]);

        const uploadingPromise = new Promise(async (resolve, reject) => {
          const res = await fetch("/api/upload", {
            method: "POST",
            body: data,
            headers: { "Content-Type": "multipart/form-data" },
          });
          if (res.ok) {
            res.json().then((data) => {
              setLink(data.link);
            });
            resolve();
          } else {
            reject();
          }
        });

        await toast.promise(uploadingPromise, {
          loading: "Uploading",
          success: "Profile Saved",
          error: "Profile Not Saved",
        });
      } catch (e) {
        toast.error(e.message);
      }
    }
  };

  return (
    <>
      {link && (
        <Image
          src={link}
          width={50}
          height={50}
          alt={"avater"}
          className="object-center w-full"
        />
      )}
      {!link && (
        <div className="text-center bg-gray-200 p-4 rounded-lg mb-1 text-gray-500">
          No Image
        </div>
      )}

      <label htmlFor="file" className="mt-2">
        <input
          type="file"
          id="file"
          className="hidden"
          onChange={handleFileChange}
        />
        <span
          id="file"
          className="border rounded-lg p-2 text-center border-gray-400 border-solid cursor-pointer"
        >
          Edit Avater
        </span>
      </label>
    </>
  );
}
