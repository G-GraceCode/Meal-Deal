"use client";
import ImageEdit from "./ImageEdit";
import { useState, useEffect } from "react";

export default function UserForm({ userData, onSave }) {
  const [userName, setUserName] = useState(userData?.name || "");
  const [isEmail, setIsEmail] = useState(userData?.email || "");
  const [image, setImage] = useState(userData?.image || "");
  const [city, setCity] = useState(userData?.city || "");
  const [postalCode, setPostalCode] = useState(userData?.postalCode || "");
  const [country, setCountry] = useState(userData?.country || "");
  const [phoneNum, setPhoneNum] = useState(userData?.phone || "");
  const [streetAddress, setStreetAddress] = useState(
    userData?.streetAddress || "",
  );
  const [admin, setAdmin] = useState(userData?.admin || false);
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
          onSubmit={(e) =>
            onSave(e, {
              name: userName,
              image,
              streetAddress,
              postalCode,
              phone: phoneNum,
              city,
              country,
              admin,
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
          <div className="flex items-center mb-4 ml-2">
            <input
              type="checkbox"
              checked={admin}
              className="mr-3"
              onChange={(e) => setAdmin(e.target.checked)}
            />
            <label>Admin</label>
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}
