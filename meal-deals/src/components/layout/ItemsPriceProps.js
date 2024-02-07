import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Close } from "@/components/icons";

export default function ItemPriceProps({ name, props, setProps, addLabel }) {
  const [isOpen, setIsOpen] = useState(false);

  const addProp = () => {
    setProps((oldProp) => {
      return [...oldProp, { name: "", price: 0 }];
    });
  };

  const editProp = (e, index, prop) => {
    const newValue = e.target.value;
    setProps((prevProp) => {
      const newProp = [...prevProp];
      newProp[index][prop] = newValue;
      return newProp;
    });
  };

  const removeProp = (index) => {
    return setProps((prevProp) => prevProp.filter((v, i) => i !== index));
  };

  return (
    <div className="bg-gray-200 p-2 rounded-md mb-2">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-left flex items-center gap-2"
      >
        {isOpen ? <ChevronUp /> : <ChevronDown />}

        <span>{name}</span>
        <span>{`(${props.length})`}</span>
      </div>
      <div className={isOpen ? "block" : "hidden"}>
        {props.length > 0 &&
          props.map((size, index) => (
            <div className="flex items-end gap-2" key={index}>
              <div>
                <label>Size name</label>
                <input
                  type="text"
                  placeholder="Size Name"
                  value={size.name}
                  onChange={(e) => editProp(e, index, "name")}
                />
              </div>

              <div>
                <label>Extra Price</label>
                <input
                  type="text"
                  placeholder="Extra price"
                  value={size.price}
                  onChange={(e) => editProp(e, index, "price")}
                />
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => removeProp(index)}
                  className="text-red-500 p-2 rounded-full"
                >
                  X
                </button>
              </div>
            </div>
          ))}

        <button type="button" onClick={addProp} className="bg-white">
          {addLabel}
        </button>
      </div>
    </div>
  );
}
