"use client";
import ImageEdit from "./ImageEdit";
import { useState, useEffect } from "react";

export default function UserForm({ user, onSave }) {
  const [userName, setUserName] = useState(user?.name || "");
  const [isEmail, setIsEmail] = useState(user?.email || "");
  const [image, setImage] = useState(user?.image || "");
  const [city, setCity] = useState(user?.city || "");
  const [postalCode, setPostalCode] = useState(user?.postalCode || "");
  const [country, setCountry] = useState(user?.country || "");
  const [phoneNum, setPhoneNum] = useState(user?.phone || "");
  const [streetAddress, setStreetAddress] = useState(user?.streetAddress || "");

  return (
    <div className="max-w-xl mx-auto mt-4">
      <div className="md:flex gap-3">
        <div>
          <div className="p-2 relative text-center">
            <div className="mx-auto overflow-hidden rounded-lg mb-2">
              <ImageEdit link={image} setLink={setImage} />
            </div>
          </div>
        </div>

        <form
          className="grow"
          onSubmit={() =>
            onSave(e, {
              name: userName,
              image,
              streetAddress,
              postalCode,
              phone: phoneNum,
              city,
              country,
            })
          }
        >
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
            value={isEmail}
            onChange={(e) => setIsEmail(e.target.value)}
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
          <div className="grid grid-column-2 gap-2">
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
  );
}
