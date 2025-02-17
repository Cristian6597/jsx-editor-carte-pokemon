import React, { useContext, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NameContext, TypeContext } from "@/context/TypeContext";

function Sidebar() {
  const { changeType } = useContext(TypeContext);
  const { updateName } = useContext(NameContext);
  return (
    <>
      <TypeContext.Provider>
        <div className="container h-screen w-full border-double border-4 border-gray-500">
          <div className="title flex flex-col">
            <h1 className="text-3xl font-bold">Create</h1>
            <p>Create your unique cards!</p>
          </div>
          <div className="name flex flex-col gap-1">
            <h1 className="text-xl font-bold">
              Name
            </h1>
            <Input
              placeholder="Insert a Name"
              onChange={(e) => updateName(e.target.value)} // Aggiorna il nome ogni volta che cambia
            />
          </div>
          <div className="type flex flex-col gap-1">
            <h1 className="text-xl font-bold">Type</h1>

            <Select onValueChange={changeType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Types</SelectLabel>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="fire">Fire</SelectItem>
                  <SelectItem value="lightning">Lighting</SelectItem>
                  <SelectItem value="grass">Grass</SelectItem>
                  <SelectItem value="psychic">Psychic</SelectItem>
                  <SelectItem value="water">Water</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="life-points flex flex-col gap-1">
            <h1 className="text-xl font-bold">Life Points</h1>
            <Input placeholder="Insert Life Points" />
          </div>
          <div className="url-img flex flex-col gap-1">
            <h1 className="text-xl font-bold">Url immagine</h1>
            <Input placeholder="Insert a Url" />
          </div>
          <div className="ability flex flex-col gap-1">
            <h1 className="text-xl font-bold">Ability</h1>
            <Input placeholder="Insert an Ability" />
          </div>
          <div className="atk flex flex-col gap-1">
            <h1 className="text-xl font-bold">Attacks</h1>
            <Input placeholder="Insert an Attack" />
          </div>
          <div className="weak flex flex-col gap-1">
            <h1 className="text-xl font-bold">Weaknesess</h1>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Weakness" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Weakness</SelectLabel>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="fire">Fire</SelectItem>
                  <SelectItem value="lighting">Lighting</SelectItem>
                  <SelectItem value="grass">Grass</SelectItem>
                  <SelectItem value="psychic">Psychic</SelectItem>
                  <SelectItem value="water">Water</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="btn-section flex flex-row mt-4 justify-evenly">
            <Button className="bg-white text-black w-25">Save to db</Button>
            <Button className="w-25">Download</Button>
          </div>
        </div>
      </TypeContext.Provider>
    </>
  );
}

export default Sidebar;
