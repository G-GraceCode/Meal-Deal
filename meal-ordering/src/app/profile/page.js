"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import InfoBox from "@/components/layout/InfoBox";
import SuccessBox from "@/components/layout/SuccessBox";
import Usertabs from "@/components/layout/Usertabs";
import toast from "react-hot-toast";
import Link from "next/link";

export default function ProfilePage() {
  const [userName, setUserName] = useState("");
  const [image, setImage] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const session = useSession();
  const status = session.status;
  const userInfo = session.data?.user;
  const userImage = session.data?.user?.image;

  useEffect(() => {
    if (status === "authenticated") {
      // setthe user name
      setUserName(userInfo?.name);
      setImage(userImage);

      fetch("/api/profile").then((response) => {
        response.json().then((data) => {
          setIsAdmin(data.admin);
          setPhoneNum(data.phone);
          setCity(data.city);
          setCountry(data.country);
          setStreetAddress(data.streetAddress);
          setPostalCode(data.postalcode);
        });
      });
    }
  }, [session, status]);

  const UserData = {
    name: userName,
    image,
    streetAddress,
    postalCode,
    phoneNum,
    city,
    country,
    isAdmin,
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      const savingPromise = new Promise(async (resolve, reject) => {
        const res = await fetch("/api/profile", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(UserData),
        });
        if (res.ok) resolve();
        else reject();
      });

      await toast.promise(savingPromise, {
        loading: "Saving",
        success: "Profile Saved",
        error: "Profile Not Saved",
      });
    } catch (e) {
      toast.error(e.message);
    }
  };

  //handleFIleChange

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
          if (res.ok) resolve();
          else reject();
        });

        await toast.promise(uploadingPromise, {
          loading: "Uploading",
          success: "Profile Saved",
          error: "Profile Not Saved",
        });
      } catch (e) {
        alert(e.message);
      }
    }
  };

  if (status === "Loading") {
    return "Loading ...";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }
  return (
    <section className="mt-8">
      <Usertabs isAdmin={isAdmin} />

      <div className="max-w-xl mx-auto mt-4">
        <div className="md:flex gap-3">
          <div>
            <div className="p-2 relative text-center">
              {image && (
                <Image
                  src={image}
                  width={65}
                  height={65}
                  alt={"avater"}
                  className="rounded-full mb-2"
                />
              )}
              <label htmlFor="file">
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
            </div>
          </div>

          <form className="grow" onSubmit={handleProfileUpdate}>
            <label>First and Last Name</label>
            <input
              type="text"
              placeholder="First Name and Last Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label>email</label>

            <input
              type="email"
              placeholder="email"
              disabled={true}
              value={userInfo?.email}
            />
            <label>Phone number</label>

            <input
              type="text"
              placeholder="Enter Phone Number"
              value={phoneNum}
              onChange={(e) => setPhoneNum(e.target.value)}
            />
            <label>Street Address</label>

            <input
              type="text"
              placeholder="Enter street Address"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
            />
            <div className="flex gap-2">
              <div>
                <label>Postal Code</label>
                <input
                  type="text"
                  placeholder="Postal Code"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </div>

              <div>
                <label>City</label>
                <input
                  type="tel"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
            <label>Country</label>

            <input
              type="text"
              placeholder="Enter Phone Number"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
}
