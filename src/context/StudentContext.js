import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const StudentContext = createContext();

export const StudentContextProvider = (props) => {
  // eslint-disable-next-line
  const [students, setStudents] = useState([
    {
      _id: "6340f5d49773d34c817b2b4d",
      name: "Alberta Hubbard",
    },
    {
      _id: "6340f5d4e4b3aa8dc6ef3e1c",
      name: "Gilmore Smith",
    },
    {
      _id: "6340f5d42c0753fae960a0bc",
      name: "Henry Lynn",
    },
    {
      _id: "6340f5d460a623d9195a6867",
      name: "Eloise Vance",
    },
    {
      _id: "6340f5d48306964b5657d4f5",
      name: "Ferguson Briggs",
    },
    {
      _id: "6340f5d48e057d6aac722592",
      name: "Kristi Neal",
    },
    {
      _id: "6340f5d40eacc633292c4107",
      name: "Hamilton Whitney",
    },
    {
      _id: "6340f5d4c0784fbbe9df0b27",
      name: "Hahn Steele",
    },
    {
      _id: "6340f5d4eb7d27883b98f356",
      name: "Hines Alvarez",
    },
    {
      _id: "6340f5d40be50f401d78f5e8",
      name: "Meyer Ingram",
    },
    {
      _id: "6340f5d42fbcf5ca1ebcc69f",
      name: "Hess Cooper",
    },
    {
      _id: "6340f5d4e4fb289f348f468a",
      name: "Mendoza Clarke",
    },
    {
      _id: "6340f5d47111525e92797e4e",
      name: "Calhoun Stanley",
    },
    {
      _id: "6340f5d41c6072e8099569ab",
      name: "Hammond Abbott",
    },
    {
      _id: "6340f5d4df4c9ef458967845",
      name: "Robbins Sanchez",
    },
    {
      _id: "6340f5d499dd6b99a0e59a30",
      name: "Shaffer Moon",
    },
    {
      _id: "6340f5d4120ee086a96d6467",
      name: "Salinas Mosley",
    },
    {
      _id: "6340f5d4f34dbc78c146da26",
      name: "Marina Glass",
    },
    {
      _id: "6340f5d4ffe0fa51ac9444e8",
      name: "Rosanna Bush",
    },
    {
      _id: "6340f5d48fab181f44daea31",
      name: "Boyle Hoffman",
    },
    {
      _id: "6340f5d458ea026e24f8b31f",
      name: "Dale Bauer",
    },
    {
      _id: "6340f5d42e06b9cd3d180c14",
      name: "Aileen Walton",
    },
    {
      _id: "6340f5d44c48293b6d520fae",
      name: "Lorna Hurley",
    },
    {
      _id: "6340f5d4510bbbc5fdac8633",
      name: "Saundra Morris",
    },
    {
      _id: "6340f5d4f2de1fd5f55aa9dd",
      name: "Daniels Meyer",
    },
    {
      _id: "6340f5d48a8a10324128c449",
      name: "Gutierrez Lane",
    },
    {
      _id: "6340f5d4ad6f78fc32e63fd0",
      name: "Erika Rutledge",
    },
    {
      _id: "6340f5d45bbfd5b820911bb1",
      name: "Jewel Lambert",
    },
    {
      _id: "6340f5d4e236272823ac0caa",
      name: "Sylvia Richmond",
    },
    {
      _id: "6340f5d46dbda0af33378baf",
      name: "Garza Chang",
    },
    {
      _id: "6340f5d4a161a39ea1d65cbd",
      name: "Stewart Barton",
    },
    {
      _id: "6340f5d4c051ae12637e883a",
      name: "Roach Curry",
    },
    {
      _id: "6340f5d464829a0c9b6ce741",
      name: "Hughes Howe",
    },
    {
      _id: "6340f5d4c9e5c48745fa1035",
      name: "Dixie Gillespie",
    },
    {
      _id: "6340f5d4f2bf2331512fefbd",
      name: "Oconnor Velasquez",
    },
    {
      _id: "6340f5d4d2792a0f64caba26",
      name: "Hoffman Scott",
    },
    {
      _id: "6340f5d4ba40aeeaa9c54db3",
      name: "Clay Parker",
    },
    {
      _id: "6340f5d4dff259b88991ec12",
      name: "Carr Hinton",
    },
    {
      _id: "6340f5d41528c1cfbef20124",
      name: "Sophie Blevins",
    },
    {
      _id: "6340f5d4375940ccf614c75d",
      name: "Santiago Jarvis",
    },
    {
      _id: "6340f5d4ebcd3adfcda4b0cc",
      name: "Leann Spears",
    },
    {
      _id: "6340f5d46d6e32b5d66ca3c1",
      name: "Ava Wood",
    },
    {
      _id: "6340f5d4173bf45718054645",
      name: "Jimmie Goodwin",
    },
    {
      _id: "6340f5d4227f3ac8957a157b",
      name: "Coleman Wright",
    },
    {
      _id: "6340f5d4dabf98979cd74669",
      name: "Tamera Mcclain",
    },
    {
      _id: "6340f5d4091b88cb61afb350",
      name: "Mcguire Rivers",
    },
    {
      _id: "6340f5d40a5b13cce5b44494",
      name: "Schneider Bender",
    },
    {
      _id: "6340f5d4381264efcafd371d",
      name: "Yvonne Fitzgerald",
    },
    {
      _id: "6340f5d4e62a7b41e75e132f",
      name: "Eula Carter",
    },
    {
      _id: "6340f5d40171fd71d05be05f",
      name: "Paulette Pacheco",
    },
    {
      _id: "6340f5d42341056fe926d073",
      name: "Hewitt Mayer",
    },
    {
      _id: "6340f5d490b66af605aefcf0",
      name: "Joyce Page",
    },
    {
      _id: "6340f5d4cf031112d34b94c7",
      name: "Booker Blake",
    },
    {
      _id: "6340f5d413eb2b833969218b",
      name: "Pacheco Dennis",
    },
    {
      _id: "6340f5d4691bd91f1a6d4908",
      name: "Erin Morton",
    },
    {
      _id: "6340f5d4b5f88a3425f8baf6",
      name: "Tami Bradford",
    },
    {
      _id: "6340f5d47572379c083e623b",
      name: "Drake Emerson",
    },
    {
      _id: "6340f5d4147f36c422c0faaf",
      name: "Imelda Gallagher",
    },
    {
      _id: "6340f5d416f7e65165b07b62",
      name: "Juliette Burke",
    },
    {
      _id: "6340f5d47dcfe202afc9d5fb",
      name: "Gay Santos",
    },
    {
      _id: "6340f5d42423d8716ef4a2a4",
      name: "Kelly Gill",
    },
    {
      _id: "6340f5d4157c6ee7a1e10be1",
      name: "Michele Joyner",
    },
    {
      _id: "6340f5d4b81436bd532f9e96",
      name: "Rhea Ferrell",
    },
    {
      _id: "6340f5d487bae044ef7eb74a",
      name: "Price Hodge",
    },
    {
      _id: "6340f5d486bbe5ffaf79c80f",
      name: "Rena Berg",
    },
    {
      _id: "6340f5d48223cd02021af8fd",
      name: "Lara Hogan",
    },
    {
      _id: "6340f5d4a6cf9c432847fa5e",
      name: "Hilary Cain",
    },
    {
      _id: "6340f5d4cc9a4168b44fc371",
      name: "Buckner Bolton",
    },
  ]);

  return (
    <StudentContext.Provider value={[students, setStudents]}>
      {props.children}
    </StudentContext.Provider>
  );
};
